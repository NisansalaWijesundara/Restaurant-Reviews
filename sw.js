let cacheName = 'restaurant-cache-v1';
let urlsToCache = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg'
];

self.addEventListener('install', function(e) {
    
    e.waitUntil(
    		caches.open(cacheName).then(function(cache) {
    			return cache.addAll(urlsToCache);
            })
        );
      });
/*self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');
});
self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);
});*/
