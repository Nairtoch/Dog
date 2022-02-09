let CACHE_NAME = 'my-site-cache';

let urlsToCache = [
    './',
    './assets/css/dog.css',
    './assets/icon/android/android-launchericon-512-512.png',
    './assets/images/dog.jpg',
    './index.html', 
    './info.html'
];

// All elements to create the app, has to be cached.

self.addEventListener('install', function(event){
    // Perform install stops.
    event.waitUntil(
        caches.open(CACHE_NAME)

        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(e){
    console.log('intercept req: '+e.request.url);

    // Caching strategies goes here.
})