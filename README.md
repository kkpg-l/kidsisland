# KidsIsland · 熊猫学堂

**Gamified Mandarin Learning PWA for kids aged 5-10**

[![PWA](https://img.shields.io/badge/PWA-Yes-blue)](https://developers.google.com/web/fundamentals/web-app-manifest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18-green)](https://nodejs.org/)

## 🎯 What is KidsIsland?

KidsIsland is a mobile-first Progressive Web App that makes learning Mandarin Chinese fun and engaging for children. Through AI-powered voice conversations, interactive flashcards, and gamified quizzes, kids can practice speaking, listening, and vocabulary in a playful island adventure theme.

**Key Features:**
- 🐼 **AI Panda Teacher** — Real-time voice conversation with pronunciation feedback
- 📚 **600+ Flashcards** — Interactive cards with pinyin, native audio, category filters
- ⚡ **3 Quiz Modes** — Meaning recognition, listening comprehension, pinyin spelling
- 🏆 **Progress Tracking** — Streak counters, achievement badges, daily check-ins
- 🌍 **Bilingual UI** — English & Spanish support with one-tap switching
- 📱 **Offline Support** — Service Worker caching works anywhere
- 🎁 **Daily Rewards** — Check-in system with gold star accumulation

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- Supabase account (free tier available)

### Installation

```bash
# Clone the repository
git clone https://github.com/kkpg-l/kidsisland.git
cd kidsisland

# Install dependencies (none required - vanilla JS app)

# Run locally
open index.html
```

### Deployment

See [deploy-kids.sh](deploy-kids.sh) for automated deployment script.

**Manual Deployment:**
```bash
# Build static files
npm run build

# Or use provided deployment script
./deploy-kids.sh
```

**Live URL:** https://kids.yuzikong.love/

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Animations | GSAP 3.15 + ScrollTrigger |
| Backend | Supabase (Auth, Realtime, Functions) |
| Voice AI | MiMo API (proxied via Edge Functions) |
| Audio | Web Audio API, ASR, TTS |
| PWA | Manifest V3, Service Worker |
| Hosting | Cloudflare Pages / Custom Server |

## 📁 Project Structure

```
kidsisland/
├── index.html          # Main application
├── styles.css          # Styling & animations
├── app-v7.js           # Core application logic
├── voice-agent-v7.js   # AI voice chat module
├── supabaseClient.js   # Supabase integration
├── sw.js               # Service Worker
├── manifest.json       # PWA configuration
├── config.local.js     # Local configuration (ignored by git)
├── assets/             # Images & icons
├── supabase/           # Backend functions
│   └── functions/
│       └── mimo-proxy/ # Voice AI proxy
└── deploy-kids.sh      # Deployment script
```

## 🎮 How It Works

### 1. Home Dashboard
- Daily check-in with rewards
- Progress overview (streak, mastered words)
- Quick actions for main features

### 2. Vocabulary Cards
- Flip card animation with pinyin
- Native speaker audio playback
- Category filtering (food, animals, numbers...)
- Mastery tracking

### 3. Quiz Modes
- **Meaning Recognition** — Match word to image
- **Listening Comprehension** — Hear word, select meaning
- **Pinyin Spelling** — Type pinyin for given meaning

### 4. Voice Chat (Talk Tab)
- Press & hold microphone button
- Release to send speech
- AI Panda Teacher responds in Chinese with pinyin
- Pronunciation correction in real-time

## 🔐 Security

- API keys stored server-side only
- No client-side secret exposure
- Supabase Edge Function proxy pattern
- Anonymous authentication supported

## 🌍 Language Support

| Language | Status |
|----------|--------|
| English | ✅ Full |
| Español | ✅ Full |
| 中文 | ⚪ Partial (UI labels) |

## 📊 Performance

- Lightweight: < 500KB bundle size
- Fast load: CDN-hosted assets
- Offline capable: 90% functionality without internet
- Smooth animations: 60fps on mid-range devices

## 🤝 Contributing

Contributions welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting PRs.

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [MiMo API](https://token-plan-cn.xiaomimimo.com) — Voice AI platform
- [Supabase](https://supabase.com) — Backend infrastructure
- [GSAP](https://greensock.com/gsap) — Animation library

---

<p align="center">
  Made with ❤️ by KidsIsland Team
</p>
