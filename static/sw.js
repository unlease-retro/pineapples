'use strict';

/**
  * @desc Service Worker instructions
*/

var CACHE_NAME = 'unlease-cache-v1';
var CACHE_URLS = ['/', '/bundle.js'];

self.addEventListener('install', function (event) {

  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(CACHE_URLS);
  }).then(self.skipWaiting()));
});

self.addEventListener('activate', function (event) {

  var currentCaches = [CACHE_NAME];

  event.waitUntil(caches.keys().then(function (cacheNames) {
    return cacheNames.filter(function (cacheName) {
      return !currentCaches.includes(cacheName);
    });
  }).then(function (cachesToDelete) {
    return Promise.all(cachesToDelete.map(function (cacheToDelete) {
      return caches.delete(cacheToDelete);
    }));
  }).then(function () {
    return self.clients.claim();
  }));
});

self.addEventListener('fetch', function (event) {

  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});