// Service worker minimal - juste pour permettre l'installation PWA
// Pas de cache offline pour l'instant (à ajouter plus tard si besoin)

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Passe simplement les requêtes au réseau, pas de cache pour l'instant
  event.respondWith(fetch(event.request));
});
