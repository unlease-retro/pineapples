/**
  * @desc Service Worker instructions
*/

const CACHE_NAME = 'unlease-cache-v1'
const CACHE_URLS = [ '/', '/bundle.js' ]

self.addEventListener('install', event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then( cache => cache.addAll(CACHE_URLS) )
      .then( self.skipWaiting() )
  )

})

self.addEventListener('activate', event => {

  const currentCaches = [ CACHE_NAME ]

  event.waitUntil(
    caches.keys()
      .then( cacheNames => cacheNames.filter( cacheName => !currentCaches.includes(cacheName) ) )
      .then( cachesToDelete => Promise.all( cachesToDelete.map( cacheToDelete => caches.delete(cacheToDelete) ) ) )
      .then( () => self.clients.claim() )
  )

})

self.addEventListener('fetch', event => {

  event.respondWith(
    caches.match(event.request)
      .then( response => response || fetch(event.request) )
  )

})
