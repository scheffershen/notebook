window.onload vs $(document).ready()
====================================

https://stackoverflow.com/questions/3698200/window-onload-vs-document-ready

` The `ready` event occurs after the HTML document has been loaded, 
- while the `onload` event occurs later, when all content (e.g. images) also has been loaded.

- The `onload` event is a standard event in the DOM, 
- while the `ready` event is specific to jQuery. 

The purpose of the `ready` event is that it should occur as early as possible after the document has loaded, so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.

```js
    // Scroll event
    $(window).scroll(function() {
        sticky_header();
    });

    // Resize events
    $(window).resize(function () {
        footerToBottom();
        composerRTL();
        menu_animated_line();
        stm_stretch_column();
    }); 

    $(window).scrollTop();

    $(window).off('resize.owl.carousel');

    $(window).trigger('hashchange.owl.navigation');

     $(window).on('hashchange.owl.navigation', $.proxy(function () {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
            if (!hash) {
                return false;
            }
            this._core.to(position, false, true);
        }, this));

        window.Zepto
        window.jQuery
```