// KidsIsland · 熊猫学堂 Service Worker (PWA Caching & Offline Support)
const CACHE_NAME = 'kidsisland-secure-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app-v7.js',
  './voice-agent-v7.js',
  './supabaseClient.js',
  './config.local.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/hero-island-panda.jpg'
];

// Install Event: Cache essential static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching static assets');
      // Use addAll but tolerate individual failures (some assets may not exist yet)
      return Promise.allSettled(
        STATIC_ASSETS.map((url) => cache.add(url))
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network first with cache fallback strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin API calls (like Supabase, MiMo API, etc.)
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(async (networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request);
        return cachedResponse || new Response('Offline content is unavailable.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })
  );
});
