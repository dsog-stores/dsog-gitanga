const CACHE_NAME = 'dsog-stores-v1.0';
const urlsToCache = [
  '/',
  '/customer-app.html',
  // Add other critical pages if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
