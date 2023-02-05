Intersection Observer API
=========================

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

API that can be used to understand the visibility and position of DOM elements relative to a containing element or to the top-level viewport. The position is delivered asynchronously and is useful for understanding the visibility of elements and implementing pre-loading and deferred loading of DOM content.

  <img src="https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png" data-src="https://i.ibb.co/dgd1ntX/lukas-zischke-9-Ui-Lva-Ib-G3g-unsplash.jpg" class="lazy-loaded-image lazy"/>
  
```js
'use strict';

let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
        }
    });
});

$( () => {

  // Tell our observer to observe all img elements with a "lazy" class
  var lazyImages = document.querySelectorAll('img.lazy');
  lazyImages.forEach(img => {
    lazyImageObserver.observe(img);
  });

});
```