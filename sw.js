const CACHE_NAME = 'buradayim-v1';
const assets = [
  '/',
  '/index.html',
  'https://i.ibb.co/q36qzY8S/anasayfa.jpg',
  'https://i.ibb.co/FLqNgT9P/kirikkalp1.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});