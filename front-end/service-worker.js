const urlsToCache = [
    '/',
    '/index.html',
    '/contato.html',
    '/styles.css',  // Exemplo de CSS
    '/app.js',      // Exemplo de JavaScript
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request).catch(() => {
                    // Retorne uma página de erro ou uma resposta padrão
                    return caches.match('/offline.html'); // Exemplo
                });
            })
    );
});

