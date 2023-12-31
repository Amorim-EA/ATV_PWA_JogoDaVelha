let cacheName="Jogo da Velha";
let filesToCache = ["/", "/index.html","/css/estilo.css", "/js/main.js", "/js/script.js"];

self.addEventListener("install", (e) => { 
    e.waitUntil(
       caches.open(cacheName).then(function (cache) {
         return cache.addAll(filesToCache);
       })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
          return response || fetch(e.request); 
        })
    );
});
