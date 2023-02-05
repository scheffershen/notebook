Using Vue.js template delimiters in twig
===

https://blog.liplex.de/using-vue-js-template-delimiters-in-twig/

When using Vue.js and rendering templates in twig you're running into the issue that both use the same delimiter.

Luckily you can define the symbols which are used as delimiters:

```js
new Vue({
    el: '#your-app',
    data: {},
    delimiters: ['[[',']]']
});
```

Or in a global config:

    Vue.options.delimiters = ['[[', ']]']
