10 Ways to Hide Elements in CSS
================================

https://www.sitepoint.com/hide-elements-in-css/

1. opacity and filter: opacity()

The *opacity: N* and *filter: opacity(N)* properties can be passed a number between 0 and 1, or a percentage between 0% and 100% denoting fully transparent and fully opaque accordingly.

```html
<ol class="hide" tabindex="0">
  <li>one</li>
  <li class="hide-item">two</li>
  <li>three</li>
</ol>

<p>Hover or focus on any box to hide item two using <code>opacity: 0;</code></p>
```

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  opacity: 0;
/*
  alternatively:
  opacity: 0%;
  filter: opacity(0%);
*/
}

/* other styles */
body {
  font-family: sans-serif;
  font-size: 100%;
  color: #222;
  background-color: #fff;
}

p {
  text-align: center;
}

.hide {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.hide > * {
  flex: 0 0 25%;
  font-size: 2em;
  text-align: center;
  padding: 1em 0;
  margin: 0.2em;
  background-color: #ccc;
  border-radius: 0.5em;
  user-select: none;
}

.hide-item {
  background-color: #f66;
  cursor: pointer;
}
```

```js
document.querySelector('.hide-item').addEventListener('click', () => alert('hidden item still triggers events'));
```

2. *color* Alpha Transparency

```
*opacity* affects the whole element, but it’s also possible to set the *color*, *background-color*, and *border-color* properties separately. Applying a zero alpha channel using *rgba(0,0,0,0)** or similar renders an item fully transparent:
```

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
}
```

- *transparent*: fully transparent (in-between animations are not possible)
- *rgba(r, g, b, a)*: red, green, blue, and alpha
- *hsla(h, s, l, a)*: hue, saturation, lightness, and alpha
- *#RRGGBBAA* and *#RGBA*

3. transform

The *transform* property can be used to translate (move), scale, rotate, or skew an element. A *scale(0)* or *translate(-999px, 0px)* off-screen will hide the element:

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  transform: scale(0);
/*
  alternatively:
  transform: translate(-999px, 0);
*/
}
```

4. clip-path

The *clip-path* property creates a clipping(coupure) region that determines which parts of an element are visible. Using a value such as *clip-path: circle(0)*; will completely hide the element.

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  clip-path: circle(0);
}
```

*clip-path* offers scope for interesting animations, although it should only be relied on in modern browsers.

5. visibility

The *visibility* property can be set to *visible* or *hidden* to show and hide an element:

```
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  visibility: hidden;
}
```

6. display

*display* is probably the most-used element-hiding method. A value of *none* effectively removes the element as if it never existed in the DOM.

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  display: none;
}
```

7. HTML hidden attribute

The HTML *hidden* attribute can be added to any element:

```html
<p hidden>
  Hidden content
</p>
```

to apply the browser’s default style:

```css
[hidden] {
  display: none;
}
```

8. Absolute position

The *position* property allows an element to be moved from its default *static* position within the page layout using *top*, *bottom*, *left*, and *right*. An absolute-positioned element can therefore be moved off-screen with *left: -999px* or similar:

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  position: absolute;
  left: -999px;
}
```

9. Overlay Another Element

An element can be visually hidden by positioning another over the top which has the same color as the background. In this example, an *::after* pseudo-element is overlaid, although any child element could be used:

```css
/* hide element */
.hide-item {
  position: relative;
}

.hide-item::after {
  position: absolute;
  content: '';
  top: 0;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
}

.hide:hover .hide-item::after,
.hide:focus .hide-item::after {
  bottom: 0;
}
```

10. Reduce Dimensions

An element can be hidden by minimizing its dimensions using *width*, *height*, *padding*, *border-width* and/or *font-size*. It may also be necessary to apply *overflow: hidden*; to ensure content doesn’t spill out.

```css
/* hide element */
.hide:hover .hide-item,
.hide:focus .hide-item {
  height: 0;
  padding: 0;
  overflow: hidden;
}
```

## Hidden Choices

*display: none* has been the favorite solution to hide elements for many years, but it’s been superseded by more flexible, animatable options. It’s still valid, but perhaps only when you want to permanently hide content from all users. *transform* or *opacity* are better choices when considering performance.
