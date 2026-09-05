const CACHE_NAME = "zenith-site-v2";
const CORE_ASSETS = ["/", "/manifest.webmanifest", "/assets/zenith-logo.webp"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("zenith-site-") && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin || event.request.mode !== "navigate") return;
  // Fresh HTML prevents old cached pages from keeping obsolete platform links.
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok && url.pathname === "/") {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put("/", copy)));
    }
    return response;
  }).catch(async () => (await caches.match("/")) || Response.error()));
});

