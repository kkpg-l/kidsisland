/**
 * VoiceAgent v8 — Proxy Edition
 *
 * Calls MiMo API securely through a Supabase Edge Function proxy.
 * The MiMo API key is stored server-side and NEVER exposed to the client.
 *
 *   [Hold to Record] → ASR → LLM → TTS (all proxied through Edge Function)
 *
 * Interaction model: Press & hold the mic button to record. Release to send.
 */

var VoiceAgent = (function () {
  "use strict";

  // ═══════════════════════════════════════════════════════════
  //  CONSTANTS
  // ═══════════════════════════════════════════════════════════

  /** Supabase Edge Function proxy — loaded from deployment config */
  var SUPABASE_CONFIG = (typeof window !== "undefined" && window.KIDSISLAND_CONFIG) || {};
  var SUPABASE_URL = SUPABASE_CONFIG.SUPABASE_URL || "";
  var SUPABASE_ANON_KEY = SUPABASE_CONFIG.SUPABASE_ANON_KEY || "";
  var PROXY_URL = SUPABASE_URL ? SUPABASE_URL.replace(/\/$/, "") + "/functions/v1/mimo-proxy" : "";

  /** Audio sample rates (Hz) */
  var INPUT_SAMPLE_RATE = 16000; // MiMo ASR optimal rate
  var OUTPUT_SAMPLE_RATE = 24000; // MiMo TTS PCM16 output rate
  var PROCESSOR_BUFFER = 2048;
  var MAX_RECORDING_MS = 60 * 1000;
  var MAX_PERSISTED_MESSAGES = 20;
  var CONVERSATION_TTL_MS = 24 * 60 * 60 * 1000;

  /** TTS voice — 冰糖 (female, warm, gentle) */
  var TTS_VOICE = "\u51B0\u7CD6";

  /** Short greeting — played via TTS on session start */
  var GREETING = "Hi! I'm Panda Teacher! \u4F60\u597D\u5440!";

  /** System prompt for the LLM — bilingual Chinese teacher */
  var SYSTEM_PROMPT = [
    "You are \u718A\u732B\u8001\u5E08 (Panda Teacher), a friendly bilingual language teacher.",
    "Your goal is to help English/Spanish speakers learn Mandarin Chinese.",
    "",
    "Guidelines:",
    "- Respond primarily in Chinese with pinyin, then briefly explain in English if helpful.",
    "- Keep replies SHORT (1-3 sentences) since this is spoken conversation.",
    "- Be encouraging and use simple vocabulary for beginners.",
    "- If the user makes a grammar or tone mistake, gently correct it.",
    "- You may sprinkle in fun cultural facts or idioms occasionally.",
    "- If the user speaks in Chinese, respond in Chinese and praise their effort.",
    "- If the user speaks in English, respond in Chinese with pinyin and brief English translation.",
    "- Never use markdown formatting. Speak naturally.",
    "- Stay in character as a cute, friendly panda teacher.",
  ].join("\n");

  // ═══════════════════════════════════════════════════════════
  //  STATE
  // ═══════════════════════════════════════════════════════════

  var isActive = false;
  var isConnecting = false;
  var isProcessing = false;
  var isRecording = false;
  var isAgentSpeaking = false;

  // Audio contexts & nodes
  var playbackContext = null; // For TTS playback
  var recordingContext = null; // For mic capture
  var mediaStream = null;
  var sourceNode = null;
  var scriptProcessor = null;

  // Recording buffer
  var recordedChunks = [];
  var recordingTimeout = null;

  // Conversation history (messages array for LLM)
  var conversationHistory = [];

  // Text-only mode: skip TTS, show text directly in chat
  var textOnlyMode = false;

  // Session timer
  var sessionStartTime = null;
  var timerInterval = null;

  // Audio playback queue
  var nextPlayTime = 0;
  var activeSources = [];

  // DOM refs
  var els = {};
  var isTouchDevice = false;
  var _eventsBound = false;

  // ═══════════════════════════════════════════════════════════
  //  PUBLIC API
  // ═══════════════════════════════════════════════════════════

  return {
    init: init,
    toggleSession: toggleSession,
    startSession: startSession,
    endSession: endSession,
  };

  // ═══════════════════════════════════════════════════════════
  //  INITIALIZATION
  // ═══════════════════════════════════════════════════════════

  function init() {
    _cacheElements();
    _setupButtonEvents();
    _setStatus("idle");
    _restoreHoldHintVisibility();

    // Restore textOnlyMode from localStorage
    try {
      var savedTextOnly = localStorage.getItem("kidsVoiceTextOnly");
      if (savedTextOnly === "1") {
        textOnlyMode = true;
      }
    } catch (err) {}

    _debug("VoiceAgent v8 (Proxy) initialized — endpoint: " + PROXY_URL + ", textOnlyMode: " + textOnlyMode);
  }

  // Hold-to-talk coach hint: hidden for good after the first successful recording
  function _hideHoldHint() {
    if (els.holdHint && !els.holdHint.classList.contains("hide")) {
      els.holdHint.classList.add("hide");
      try { localStorage.setItem("kidsHoldHintSeen", "1"); } catch (err) {}
    }
  }

  function _restoreHoldHintVisibility() {
    var seen = false;
    try { seen = localStorage.getItem("kidsHoldHintSeen") === "1"; } catch (err) {}
    if (seen && els.holdHint) els.holdHint.classList.add("hide");
  }

  function _cacheElements() {
    els = {
      conversation: document.getElementById("voiceConversation"),
      emptyState: document.getElementById("voiceEmptyState"),
      micBtn: document.getElementById("voiceMicBtn"),
      micIcon: document.getElementById("micIcon"),
      micPulse: document.getElementById("micPulse"),
      waveform: document.getElementById("voiceWaveform"),
      timer: document.getElementById("voiceTimer"),
      hangupBtn: document.getElementById("voiceHangupBtn"),
      subtitle: document.getElementById("voiceSubtitle"),
      holdHint: document.getElementById("holdHint"),
      statusDot: document.getElementById("voiceStatusDot"),
      avatar: document.getElementById("voiceAvatar"),
      controls: document.getElementById("voiceControls"),
      voiceSettingsBtn: document.getElementById("voiceSettingsBtn"),
    };
  }

  function _setupButtonEvents() {
    if (!els.micBtn || _eventsBound) return;
    _eventsBound = true;

    // ── Touch events (mobile-first) ──
    els.micBtn.addEventListener("touchstart", function (e) {
      isTouchDevice = true;
      e.preventDefault();
      _onMicPressStart();
    }, { passive: false });

    els.micBtn.addEventListener("touchend", function (e) {
      e.preventDefault();
      _onMicPressEnd();
    }, { passive: false });

    els.micBtn.addEventListener("touchcancel", function (e) {
      e.preventDefault();
      _onMicPressEnd();
    }, { passive: false });

    // ── Mouse events (desktop) ──
    els.micBtn.addEventListener("mousedown", function () {
      if (isTouchDevice) return;
      _onMicPressStart();
    });

    els.micBtn.addEventListener("mouseup", function () {
      if (isTouchDevice) return;
      _onMicPressEnd();
    });

    els.micBtn.addEventListener("mouseleave", function () {
      if (isTouchDevice) return;
      _onMicPressEnd();
    });

    // ── Settings button ──
    if (els.voiceSettingsBtn) {
      els.voiceSettingsBtn.addEventListener("click", function () {
        _openVoiceSettings();
      });
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  BUTTON PRESS LOGIC
  // ═══════════════════════════════════════════════════════════

  function _onMicPressStart() {
    _debug("Mic press start — isActive:" + isActive + " isProcessing:" + isProcessing + " isAgentSpeaking:" + isAgentSpeaking);

    if (!isActive && !isConnecting) {
      // First press — start the session
      startSession();
    } else if (isActive && !isRecording && !isProcessing && !isAgentSpeaking) {
      // Session active and idle — start recording
      _startRecording();
    }
    // If recording, processing, or speaking — ignore
  }

  function _onMicPressEnd() {
    if (isRecording) {
      _stopRecordingAndProcess();
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  SESSION MANAGEMENT
  // ═══════════════════════════════════════════════════════════

  function toggleSession() {
    if (isActive || isConnecting) {
      endSession();
    } else {
      startSession();
    }
  }

  async function startSession() {
    if (isActive || isConnecting) return;
    if (!PROXY_URL || !SUPABASE_ANON_KEY) {
      _setStatus("error");
      if (typeof showToast === "function") {
        showToast("Voice practice is not configured on this deployment.");
      }
      return;
    }
    if (!await _hasAuthenticatedSession()) {
      _setStatus("error");
      if (typeof showToast === "function") {
        showToast("Please sign in before starting voice practice.");
      }
      return;
    }
    isConnecting = true;
    _setStatus("connecting");

    // Reset state for fresh session
    conversationHistory = [{ role: "system", content: SYSTEM_PROMPT }];
    _lastSavedIndex = 0;
    recordedChunks = [];
    activeSources = [];
    nextPlayTime = 0;

    // Clear conversation UI
    if (els.conversation) {
      els.conversation.innerHTML = "";
    }
    _hideEmptyState();

    try {
      // 1. Create playback AudioContext
      playbackContext = await _createPlaybackContext();
      if (!playbackContext) throw new Error("AudioContext not supported in this browser");

      // 2. Request microphone permission
      await _setupMic();

      // 3. Mark session active
      isActive = true;
      isConnecting = false;
      sessionStartTime = Date.now();
      _startTimer();
      _setStatus("connecting");

      // 4. Restore a recent conversation or play a greeting.
      var saved = _loadConversation();
      if (saved.length > 0) {
        conversationHistory = saved;
        _lastSavedIndex = saved.length;
        _restoreOldConversation(saved);
      } else {
        await _speakText(GREETING, true);
        _markConversationSaved();
      }

      // 5. Ready for user input
      if (isActive) {
        _setStatus("listening");
      }
    } catch (err) {
      console.error("[VoiceAgent] startSession error:", err);
      isConnecting = false;
      _setStatus("error");
      _showError(err.message || "Connection failed. Please try again.");
      _cleanup();
    }
  }

  async function _hasAuthenticatedSession() {
    if (typeof getSupabase !== "function") return false;
    var client = getSupabase();
    if (!client) return false;
    try {
      var result = await client.auth.getSession();
      return !result.error && !!(result.data && result.data.session && result.data.session.access_token);
    } catch (err) {
      return false;
    }
  }

  function endSession() {
    if (!isActive && !isConnecting) return;
    _setStatus("disconnecting");
    _stopPlayback();
    _cleanup();
    _setStatus("idle");
    if (els.conversation) {
      var emptyDiv = document.getElementById("voiceEmptyState");
      if (emptyDiv) emptyDiv.style.display = "";
    }
    if (typeof showToast === "function") {
      showToast("\uD83D\uDC4B Voice session ended");
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  MICROPHONE SETUP
  // ═══════════════════════════════════════════════════════════

  async function _setupMic() {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    var AC = window.AudioContext || window.webkitAudioContext;
    recordingContext = new AC();
    sourceNode = recordingContext.createMediaStreamSource(mediaStream);

    if (recordingContext.state === "suspended") {
      await recordingContext.resume();
    }

    _debug("Mic setup complete — sample rate: " + recordingContext.sampleRate);
  }

  // ═══════════════════════════════════════════════════════════
  //  RECORDING (PRESS-TO-TALK)
  // ═══════════════════════════════════════════════════════════

  function _startRecording() {
    _hideHoldHint();
    recordedChunks = [];
    if (recordingTimeout) clearTimeout(recordingTimeout);
    var actualRate = recordingContext.sampleRate;
    var needsResample = actualRate !== INPUT_SAMPLE_RATE;

    scriptProcessor = recordingContext.createScriptProcessor(PROCESSOR_BUFFER, 1, 1);

    scriptProcessor.onaudioprocess = function (e) {
      if (!isRecording) return;
      var inputData = e.inputBuffer.getChannelData(0);
      var samples = needsResample ? _resample(inputData, actualRate, INPUT_SAMPLE_RATE) : inputData;
      var pcm16 = _float32ToInt16(samples);
      if (pcm16.length > 0) {
        recordedChunks.push(pcm16.buffer);
      }
    };

    sourceNode.connect(scriptProcessor);
    // ScriptProcessor requires connecting to destination to fire onaudioprocess
    // But we use zeroGain to avoid echo
    var zeroGain = recordingContext.createGain();
    zeroGain.gain.value = 0;
    scriptProcessor.connect(zeroGain);
    zeroGain.connect(recordingContext.destination);

    isRecording = true;
    recordingTimeout = setTimeout(function () {
      if (!isRecording) return;
      _setSubtitle("Maximum recording length reached. Sending your audio now.");
      _stopRecordingAndProcess();
    }, MAX_RECORDING_MS);
    _setStatus("recording");
    _animateWaveform(true);
    _debug("Recording started");
  }

  async function _stopRecordingAndProcess() {
    if (!isRecording) return;
    isRecording = false;
    if (recordingTimeout) {
      clearTimeout(recordingTimeout);
      recordingTimeout = null;
    }
    _animateWaveform(false);

    // Disconnect processor
    if (scriptProcessor) {
      try { scriptProcessor.disconnect(); } catch (e) {}
      scriptProcessor.onaudioprocess = null;
      scriptProcessor = null;
    }
    _debug("Recording stopped — chunks: " + recordedChunks.length);

    // Check if recording is too short (< 100ms ≈ 3200 bytes at 16kHz 16-bit)
    var totalBytes = recordedChunks.reduce(function (sum, c) { return sum + c.byteLength; }, 0);
    if (totalBytes < 3200) {
      _debug("Recording too short (" + totalBytes + " bytes), skipping");
      recordedChunks = [];
      _setStatus("listening");
      _setSubtitle("Too short — hold longer!");
      setTimeout(function () { if (isActive && !isProcessing) _setSubtitle("Hold the button to talk!"); }, 1500);
      return;
    }

    // Combine all recorded PCM16 chunks
    var combined = new Uint8Array(totalBytes);
    var offset = 0;
    for (var i = 0; i < recordedChunks.length; i++) {
      combined.set(new Uint8Array(recordedChunks[i]), offset);
      offset += recordedChunks[i].byteLength;
    }
    recordedChunks = [];

    // Run the conversation pipeline
    isProcessing = true;
    _setStatus("processing");

    try {
      // ─── STEP 1: ASR (Speech-to-Text) ───
      _setSubtitle("\uD83D\uDCAC Listening...");

      var wavBuffer = _encodeWav(combined.buffer, INPUT_SAMPLE_RATE);
      var wavBase64 = _arrayBufferToBase64(wavBuffer);

      var asrResult = await _callASR(wavBase64);
      var userText = (asrResult.text || "").trim();

      _debug("ASR result: \"" + userText + "\"");

      if (!userText) {
        _debug("ASR returned empty text");
        isProcessing = false;
        _setStatus("listening");
        _setSubtitle("Didn't catch that — try again!");
        setTimeout(function () { if (isActive && !isProcessing) _setSubtitle("Hold the button to talk!"); }, 2000);
        return;
      }

      // Show user message in chat
      _createMessage("user", userText);

      // Add to conversation history and persist the completed user turn.
      conversationHistory.push({ role: "user", content: userText });
      _markConversationSaved();

      // ─── STEP 2: LLM (Chat Completion, streaming) ───
      _setSubtitle("\uD83D\uDC7D \u718A\u732B\u8001\u5E08 is thinking...");

      // Always include system prompt, then last 19 messages
      var systemMsg = conversationHistory[0];
      var recentMessages = [systemMsg].concat(conversationHistory.slice(1).slice(-19));
      var fullResponse = "";
      var agentMsgEl = null;
      var agentTextEl = null;

      await _callLLM(recentMessages, function (token) {
        if (!agentMsgEl) {
          agentMsgEl = _createMessage("agent", token);
          agentTextEl = agentMsgEl.querySelector(".voice-msg-text");
        } else if (agentTextEl) {
          agentTextEl.textContent += token;
          _scrollToBottom();
        }
        fullResponse += token;
      });

      _debug("LLM response: \"" + fullResponse + "\"");

      // Add to conversation history and persist the completed assistant turn.
      if (fullResponse) {
        conversationHistory.push({ role: "assistant", content: fullResponse });
        _markConversationSaved();
      }

      // ─── STEP 3: TTS (Text-to-Speech, streaming PCM16) ───
      if (fullResponse) {
        _setSpeaking(!textOnlyMode);
        _setStatus(textOnlyMode ? "listening" : "speaking");
        _setSubtitle(textOnlyMode
          ? "💬 Listening..."
          : "🔊 熊猫老师 is speaking...");

        if (!textOnlyMode) {
          nextPlayTime = 0;
          await _callTTS(fullResponse, TTS_VOICE, function (base64Chunk) {
            _playBase64PCM16(base64Chunk);
          });
          await _waitForPlayback(fullResponse);
        } else {
          _setSubtitle("Text mode active — no audio");
        }
        _setSpeaking(false);
      }

    } catch (err) {
      console.error("[VoiceAgent] Pipeline error:", err);
      _showError(err.message || "\u5904\u7406\u51FA\u9519\uFF0C\u8BF7\u91CD\u8BD5");
      if (typeof window !== 'undefined') {
        console.error("[VoiceAgent] Full Error:", JSON.stringify(err));
      }
    } finally {
      isProcessing = false;
      if (isActive) {
        _setStatus("listening");
        _setSubtitle("Hold the button to talk! \u6309\u4F4F\u8BF4\u8BDD!");
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  SPEAKING STATE & PLAYBACK WAIT
  // ═══════════════════════════════════════════════════════════

  function _setSpeaking(on) {
    isAgentSpeaking = on;
    els.avatar && (on ? els.avatar.classList.add("speaking") : els.avatar.classList.remove("speaking"));
    els.statusDot && (on ? els.statusDot.classList.add("speaking") : els.statusDot.classList.remove("speaking"));
    _animateWaveform(on);
    if (!on) nextPlayTime = 0;
  }

  async function _waitForPlayback(text) {
    var charCount = text.replace(/[\s\p{P}]/gu, "").length;
    var estimatedMs = Math.max(800, Math.ceil(charCount / 3) * 1000 + 500);
    _debug("Waiting ~" + estimatedMs + "ms for playback");
    await _sleep(estimatedMs);
  }

  // ═══════════════════════════════════════════════════════════
  //  GREETING / SPEAK TEXT
  // ═══════════════════════════════════════════════════════════

  async function _speakText(text, addToHistory) {
    _setSpeaking(true);
    _setStatus("speaking");
    _setSubtitle("\uD83D\uDD0A \u718A\u732B\u8001\u5E08 is speaking...");

    _createMessage("agent", text);
    if (addToHistory) conversationHistory.push({ role: "assistant", content: text });

    try {
      nextPlayTime = 0;
      await _callTTS(text, TTS_VOICE, function (base64Chunk) {
        _playBase64PCM16(base64Chunk);
      });
      await _waitForPlayback(text);
    } catch (err) {
      console.error("[VoiceAgent] TTS error:", err);
      _debug("TTS failed: " + err.message);
    }

    _setSpeaking(false);
  }

  // ═══════════════════════════════════════════════════════════
  //  API CALLS — via Supabase Edge Function proxy (API key is server-side)
  // ═══════════════════════════════════════════════════════════

  async function _getProxyHeaders() {
    if (typeof getSupabase !== "function") {
      throw new Error("Voice practice requires a signed-in session.");
    }
    var client = getSupabase();
    if (!client) throw new Error("Voice practice is not configured.");
    var result = await client.auth.getSession();
    var session = result.data && result.data.session;
    if (result.error || !session || !session.access_token) {
      throw new Error("Your session has expired. Please sign in again.");
    }
    return {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + session.access_token,
    };
  }

  /**
   * ASR: Send base64 WAV audio, get transcribed text back
   */
  async function _callASR(wavBase64) {
    _debug("Calling ASR...");
    var resp = await fetch(PROXY_URL + "?type=asr", {
      method: "POST",
      headers: await _getProxyHeaders(),
      body: JSON.stringify({
        audio: "data:audio/wav;base64," + wavBase64,
        language: "auto",
      }),
    });

    if (!resp.ok) {
      var errText = await resp.text();
      throw new Error("ASR failed (" + resp.status + "): " + errText);
    }

    var data = await resp.json();
    return { text: data.text || "" };
  }

  /**
   * LLM: Stream chat completions via SSE, call onToken for each text chunk
   */
  async function _callLLM(messages, onToken) {
    _debug("Calling LLM with " + messages.length + " messages...");
    var resp = await fetch(PROXY_URL + "?type=llm", {
      method: "POST",
      headers: await _getProxyHeaders(),
      body: JSON.stringify({
        messages: messages,
        maxTokens: 512,
      }),
    });

    if (!resp.ok) {
      var errText = await resp.text();
      throw new Error("LLM failed (" + resp.status + "): " + errText);
    }

    // Parse SSE stream
    var reader = resp.body.getReader();
    var decoder = new TextDecoder();
    var buffer = "";
    var tokenCount = 0;

    while (true) {
      var result = await reader.read();
      if (result.done) break;

      buffer += decoder.decode(result.value, { stream: true });
      var lines = buffer.split("\n");
      buffer = lines.pop(); // Keep incomplete line in buffer

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line.startsWith("data: ")) continue;

        var dataStr = line.slice(6);
        if (dataStr === "[DONE]") {
          _debug("LLM stream done — " + tokenCount + " tokens received");
          return;
        }

        try {
          var json = JSON.parse(dataStr);
          var delta = json.choices && json.choices[0] && json.choices[0].delta;
          if (delta && delta.content) {
            onToken(delta.content);
            tokenCount++;
          }
        } catch (e) {
          // Ignore JSON parse errors for partial chunks
        }
      }
    }
  }

  /**
   * TTS: Stream PCM16 audio via SSE, call onAudioChunk for each base64 chunk
   */
  async function _callTTS(text, voice, onAudioChunk) {
    _debug("Calling TTS for " + text.length + " chars, voice: " + voice);
    var resp = await fetch(PROXY_URL + "?type=tts", {
      method: "POST",
      headers: await _getProxyHeaders(),
      body: JSON.stringify({
        text: text,
        voice: voice,
      }),
    });

    if (!resp.ok) {
      var errText = await resp.text();
      throw new Error("TTS failed (" + resp.status + "): " + errText);
    }

    // Parse SSE stream for audio chunks
    var reader = resp.body.getReader();
    var decoder = new TextDecoder();
    var buffer = "";
    var chunkCount = 0;

    while (true) {
      var result = await reader.read();
      if (result.done) break;

      buffer += decoder.decode(result.value, { stream: true });
      var lines = buffer.split("\n");
      buffer = lines.pop();

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line.startsWith("data: ")) continue;

        var dataStr = line.slice(6);
        if (dataStr === "[DONE]") {
          _debug("TTS stream done — " + chunkCount + " audio chunks received");
          return;
        }

        try {
          var json = JSON.parse(dataStr);
          var delta = json.choices && json.choices[0] && json.choices[0].delta;
          if (delta && delta.audio && delta.audio.data) {
            onAudioChunk(delta.audio.data);
            chunkCount++;
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  AUDIO UTILITIES
  // ═══════════════════════════════════════════════════════════

  /**
   * Encode raw PCM16 ArrayBuffer into a WAV container
   */
  function _encodeWav(pcm16Buffer, sampleRate) {
    var dataSize = pcm16Buffer.byteLength;
    var buffer = new ArrayBuffer(44 + dataSize);
    var view = new DataView(buffer);

    function writeString(offset, str) {
      for (var i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    }

    // RIFF header
    writeString(0, "RIFF");
    view.setUint32(4, 36 + dataSize, true);
    writeString(8, "WAVE");

    // fmt chunk
    writeString(12, "fmt ");
    view.setUint32(16, 16, true);      // chunk size
    view.setUint16(20, 1, true);       // audio format (PCM)
    view.setUint16(22, 1, true);       // mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); // byte rate
    view.setUint16(32, 2, true);       // block align
    view.setUint16(34, 16, true);      // bits per sample

    // data chunk
    writeString(36, "data");
    view.setUint32(40, dataSize, true);
    new Uint8Array(buffer, 44, dataSize).set(new Uint8Array(pcm16Buffer));

    return buffer;
  }

  /**
   * Convert ArrayBuffer to base64 string (chunked to avoid stack overflow)
   */
  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var chunkSize = 0x8000; // 32KB
    for (var i = 0; i < bytes.length; i += chunkSize) {
      var chunk = bytes.subarray(i, Math.min(i + chunkSize, bytes.length));
      binary += String.fromCharCode.apply(null, chunk);
    }
    return btoa(binary);
  }

  /**
   * Play a base64-encoded PCM16 chunk through the playback AudioContext
   */
  function _playBase64PCM16(base64Data) {
    if (!playbackContext) {
      _debug("No playback context — skipping audio");
      return;
    }

    try {
      // Decode base64 to bytes
      var binaryString = atob(base64Data);
      var len = binaryString.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Convert PCM16 to Float32
      var int16 = new Int16Array(bytes.buffer);
      var contextRate = playbackContext.sampleRate;
      var float32 = _int16ToFloat32(int16, OUTPUT_SAMPLE_RATE, contextRate);

      if (float32.length === 0) return;

      var audioBuffer = playbackContext.createBuffer(1, float32.length, contextRate);
      audioBuffer.getChannelData(0).set(float32);

      var source = playbackContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(playbackContext.destination);

      var now = playbackContext.currentTime;
      if (nextPlayTime < now) nextPlayTime = now + 0.01;
      source.start(nextPlayTime);
      nextPlayTime += audioBuffer.duration;

      activeSources.push(source);
      source.onended = function () {
        var idx = activeSources.indexOf(source);
        if (idx >= 0) activeSources.splice(idx, 1);
      };
    } catch (err) {
      _debug("Playback error: " + err.message);
    }
  }

  function _stopPlayback() {
    nextPlayTime = 0;
    for (var i = 0; i < activeSources.length; i++) {
      try { activeSources[i].stop(); } catch (e) {}
      try { activeSources[i].disconnect(); } catch (e) {}
    }
    activeSources = [];
  }

  function _float32ToInt16(float32) {
    var int16 = new Int16Array(float32.length);
    for (var i = 0; i < float32.length; i++) {
      var s = Math.max(-1, Math.min(1, float32[i]));
      int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }
    return int16;
  }

  function _int16ToFloat32(int16, fromRate, toRate) {
    if (fromRate === toRate) {
      var out = new Float32Array(int16.length);
      for (var i = 0; i < int16.length; i++) {
        out[i] = int16[i] / 32768;
      }
      return out;
    }
    // Linear interpolation resampling
    var ratio = fromRate / toRate;
    var newLen = Math.floor(int16.length / ratio);
    var resampled = new Float32Array(newLen);
    for (var j = 0; j < newLen; j++) {
      var srcIdx = j * ratio;
      var low = Math.floor(srcIdx);
      var high = Math.min(low + 1, int16.length - 1);
      var frac = srcIdx - low;
      var v = int16[low] * (1 - frac) + int16[high] * frac;
      resampled[j] = v / 32768;
    }
    return resampled;
  }

  function _resample(data, inRate, outRate) {
    if (inRate === outRate) return data;
    var ratio = inRate / outRate;
    var newLen = Math.round(data.length / ratio);
    var result = new Float32Array(newLen);
    for (var i = 0; i < newLen; i++) {
      var srcIdx = i * ratio;
      var low = Math.floor(srcIdx);
      var high = Math.min(low + 1, data.length - 1);
      var frac = srcIdx - low;
      result[i] = data[low] * (1 - frac) + data[high] * frac;
    }
    return result;
  }

  async function _createPlaybackContext() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    var ctx;
    try {
      ctx = new AC({ sampleRate: OUTPUT_SAMPLE_RATE });
    } catch (e) {
      ctx = new AC();
    }
    if (ctx.state === "suspended") {
      await ctx.resume();
    }
    return ctx;
  }

  function _sleep(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  // ═══════════════════════════════════════════════════════════
  //  UI HELPERS
  // ═══════════════════════════════════════════════════════════

  function _setStatus(status) {
    var labels = {
      idle: "Press & hold \uD83C\uDF99\uFE0F to talk",
      connecting: "Connecting to \u718A\u732B\u8001\u5E08...",
      listening: "Hold the button to talk! \u6309\u4F4F\u8BF4\u8BDD",
      recording: "\uD83C\uDF99\uFE0F Recording — release to send",
      processing: "\u718A\u732B\u8001\u5E08 is thinking...",
      speaking: "\u718A\u732B\u8001\u5E08 is speaking...",
      error: "Something went wrong. Tap to retry.",
      disconnecting: "Ending session...",
    };

    _setSubtitle(labels[status] || "");

    // Mic button appearance
    var micBtn = els.micBtn;
    if (!micBtn) return;

    micBtn.classList.remove("recording", "processing", "speaking", "idle", "connecting", "error");

    var showHangup = false;
    var icon = "\uD83C\uDF99\uFE0F";

    switch (status) {
      case "idle":
        micBtn.classList.add("idle");
        icon = "\uD83C\uDF99\uFE0F";
        showHangup = false;
        break;
      case "connecting":
        micBtn.classList.add("connecting");
        icon = "\u23F3";
        showHangup = true;
        break;
      case "listening":
        micBtn.classList.add("idle");
        icon = "\uD83C\uDF99\uFE0F";
        showHangup = true;
        break;
      case "recording":
        micBtn.classList.add("recording");
        icon = "\u26D4";
        showHangup = true;
        break;
      case "processing":
        micBtn.classList.add("processing");
        icon = "\u23F3";
        showHangup = true;
        break;
      case "speaking":
        micBtn.classList.add("speaking");
        icon = "\uD83D\uDC3C";
        showHangup = true;
        break;
      case "error":
        micBtn.classList.add("error");
        icon = "\u26A0\uFE0F";
        showHangup = false;
        break;
      case "disconnecting":
        micBtn.classList.add("connecting");
        icon = "\u23F3";
        showHangup = false;
        break;
    }

    if (els.micIcon) els.micIcon.textContent = icon;
    if (els.hangupBtn) els.hangupBtn.style.display = showHangup ? "" : "none";

    // Avatar state
    if (els.avatar) {
      if (status === "speaking") els.avatar.classList.add("speaking");
      else els.avatar.classList.remove("speaking");
    }
  }

  function _setSubtitle(text) {
    if (els.subtitle) {
      els.subtitle.textContent = text || "";
    }
  }

  function _createMessage(role, text) {
    if (!els.conversation) return null;

    _hideEmptyState();

    var msg = document.createElement("div");
    msg.className = "voice-msg " + (role === "user" ? "voice-msg-user" : "voice-msg-agent");

    var avatar = document.createElement("div");
    avatar.className = "voice-msg-avatar";
    avatar.textContent = role === "user" ? "\uD83D\uDC4B" : "\uD83D\uDC3C";

    var bubble = document.createElement("div");
    bubble.className = "voice-msg-bubble";

    var textEl = document.createElement("div");
    textEl.className = "voice-msg-text";
    textEl.textContent = text;

    bubble.appendChild(textEl);
    msg.appendChild(avatar);
    msg.appendChild(bubble);
    els.conversation.appendChild(msg);

    _scrollToBottom();
    return msg;
  }

  function _showError(message) {
    if (!els.conversation) return;
    var msg = document.createElement("div");
    msg.className = "voice-msg voice-msg-error";
    var bubble = document.createElement("div");
    bubble.className = "voice-msg-bubble";
    var textEl = document.createElement("div");
    textEl.className = "voice-msg-text";
    textEl.textContent = "\u26A0\uFE0F " + message;
    bubble.appendChild(textEl);
    msg.appendChild(bubble);
    els.conversation.appendChild(msg);
    _scrollToBottom();
  }

  function _hideEmptyState() {
    if (els.emptyState) {
      els.emptyState.style.display = "none";
    }
  }

  function _scrollToBottom() {
    if (els.conversation) {
      els.conversation.scrollTop = els.conversation.scrollHeight;
    }
  }

  // ── Conversation persistence (localStorage) ──────────────────────
  function _saveConversation() {
    try {
      var systemMessage = conversationHistory[0] && conversationHistory[0].role === "system"
        ? [conversationHistory[0]]
        : [];
      var recentMessages = conversationHistory.slice(systemMessage.length).slice(-(MAX_PERSISTED_MESSAGES - systemMessage.length));
      localStorage.setItem("kidsVoiceHistory", JSON.stringify({
        messages: systemMessage.concat(recentMessages),
        expiresAt: Date.now() + CONVERSATION_TTL_MS,
      }));
    } catch (err) {
      _debug("Could not save conversation history");
    }
  }

  function _loadConversation() {
    try {
      var raw = localStorage.getItem("kidsVoiceHistory");
      if (!raw) return [];
      var data = JSON.parse(raw);
      if (!data || !Array.isArray(data.messages) || !data.expiresAt || data.expiresAt < Date.now()) {
        _clearConversation();
        return [];
      }
      var messages = data.messages.filter(function (message) {
        return message && ["system", "user", "assistant"].indexOf(message.role) >= 0
          && typeof message.content === "string" && message.content.length <= 4000;
      });
      return messages[0] && messages[0].role === "system" ? messages.slice(0, MAX_PERSISTED_MESSAGES) : [];
    } catch (err) {
      _clearConversation();
      return [];
    }
  }

  function _clearConversation() {
    try { localStorage.removeItem("kidsVoiceHistory"); } catch (err) {}
  }

  // Call _saveConversation after every user+assistant turn
  var _lastSavedIndex = 0;
  function _markConversationSaved() {
    if (conversationHistory.length > _lastSavedIndex) {
      _saveConversation();
      _lastSavedIndex = conversationHistory.length;
    }
  }

  // Restore previous conversation at session start
  function _restoreOldConversation() {
    var oldMsgs = _loadConversation();
    if (!oldMsgs || oldMsgs.length < 2) return; // Need at least system + user
    // Remove current empty state, prepend old messages
    if (els.conversation) {
      els.conversation.innerHTML = "";
    }
    for (var i = 0; i < oldMsgs.length; i++) {
      if (oldMsgs[i].role === "system") continue; // Don't render system prompt in UI
      _createMessage(oldMsgs[i].role, oldMsgs[i].content);
    }
    _scrollToBottom();
    _debug("Restored " + oldMsgs.length + " messages from localStorage");
  }

  function _animateWaveform(active) {
    if (!els.waveform) return;
    if (active) {
      els.waveform.classList.add("active");
    } else {
      els.waveform.classList.remove("active");
    }
  }

  // ── Voice Settings Panel Functions (exposed globally) ───────
  function _openVoiceSettings() {
    var overlay = document.getElementById("voiceSettingsOverlay");
    if (overlay) {
      overlay.style.display = "flex";
      overlay.setAttribute("aria-hidden", "false");
      // Sync checkbox with current state
      var cb = document.getElementById("voiceTextOnlyMode");
      if (cb) cb.checked = textOnlyMode;
    }
  }

  window.closeVoiceSettings = function() {
    var overlay = document.getElementById("voiceSettingsOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  };

  window.resetVoiceSettings = function() {
    try {
      localStorage.setItem("kidsVoiceTextOnly", "0");
      localStorage.removeItem("kidsVoiceSpeed");
    } catch (err) {}
    textOnlyMode = false;
    location.reload();
  };

  window.updateTextOnlyMode = function(enabled) {
    textOnlyMode = enabled;
    try {
      localStorage.setItem("kidsVoiceTextOnly", enabled ? "1" : "0");
    } catch (err) {}
    _debug("Text-only mode: " + textOnlyMode);
  };

  function _startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    sessionStartTime = Date.now();
    timerInterval = setInterval(function () {
      if (!sessionStartTime || !els.timer) return;
      var elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
      var m = String(Math.floor(elapsed / 60)).padStart(2, "0");
      var s = String(elapsed % 60).padStart(2, "0");
      els.timer.textContent = m + ":" + s;
    }, 1000);
  }

  function _stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (els.timer) els.timer.textContent = "00:00";
  }

  // ═══════════════════════════════════════════════════════════
  //  CLEANUP
  // ═══════════════════════════════════════════════════════════

  function _cleanup() {
    isActive = false;
    isConnecting = false;
    isProcessing = false;
    isRecording = false;
    isAgentSpeaking = false;

    _stopTimer();
    sessionStartTime = null;

    // Stop recording
    if (recordingTimeout) {
      clearTimeout(recordingTimeout);
      recordingTimeout = null;
    }
    if (scriptProcessor) {
      try { scriptProcessor.disconnect(); } catch (e) {}
      scriptProcessor.onaudioprocess = null;
      scriptProcessor = null;
    }
    if (sourceNode) {
      try { sourceNode.disconnect(); } catch (e) {}
      sourceNode = null;
    }

    // Stop playback
    _stopPlayback();

    // Close audio contexts
    if (recordingContext) {
      try { recordingContext.close(); } catch (e) {}
      recordingContext = null;
    }
    if (playbackContext) {
      try { playbackContext.close(); } catch (e) {}
      playbackContext = null;
    }

    // Stop mic tracks
    if (mediaStream) {
      mediaStream.getTracks().forEach(function (t) { t.stop(); });
      mediaStream = null;
    }

    _animateWaveform(false);
    recordedChunks = [];
    activeSources = [];
    nextPlayTime = 0;
  }

  // ═══════════════════════════════════════════════════════════
  //  DEBUG
  // ═══════════════════════════════════════════════════════════

  function _debug(msg) {
    console.log("[VoiceAgent]", msg);
  }
})();
