Flexbox properties overview
============================

Flexbox is the third major step in creating web layout, after tables and floats.

## container

- flex-direction: row | row-reverse | column | column-reverse
- flex-wrap: nowrap | wrap | wrap-reverse
- justify-content: flex-start | flex-end | center | space-between |  space-around | space-evenly
- align-items: stretch | flex-start | flex-end | center | baseline
- align-content: stretch | flex-start | flex-end | center | space-between | space-around 

## item

- align-self: auto | stretch | flex-start | flex-end | center | baseline
- order: 0 | `integer`
- flex-grow: 0 | `integer`
- flex-shrink: 1 | `integer`
- flex-basis: auto | `integer`


The Ultimate Guide to Flexbox Centering
=======================================

## Resources

- https://onextrapixel.com/flexbox-centering-guide/

June 27, 2019

Flexbox is a popular CSS layout module that helps you position HTML elements on the screen.

## Row vs. Column-Based Flexbox Layouts

Flexbox is a one-dimensional layout module which means that your layouts are based on either rows or columns.

It can take four values: 

- row, 
- row-reverse, 
- column, and 
- column-reverse.

### Row-based flex layout (default):

```html
<!-- HTML -->
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>       
</div>
```

```css
/* CSS */
.container {
    display: flex;
    flex-direction: row;
}
```

### Reversed row-based flex layout:

```css
/* CSS */
.container {
    display: flex;
    flex-direction: row-reverse;
}
```

### Column-based flex layout:

```css
/* CSS */
.container {
    display: flex;
    flex-direction: column;
}
```

### Reversed column-based flex-layout:

```css
/* CSS */
.container {
    display: flex;
    flex-direction: column-reverse;
}
```

## How Does Flexbox Centering Work?

In fact, flexbox doesn’t use the concepts of “horizontal” and “vertical” centering. Instead, it works with main and cross axes, which on the screen, do look like horizontal and vertical centering.

### Centering along the Main Axis

You need to use the *justify-content* property to center flex items along the main axis. 

```css
/* CSS */
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
```

And, in the case of column-based layouts, the same justify-content property aligns the items vertically (as here, the main axis runs vertically):

```css
/* CSS */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

## Centering along the Cross Axis

As flexbox is a one-dimensional layout, the cross axis has a secondary role

There are three CSS properties you can use for centering along the cross axis:

1. *align-items* for single-line centering of all the flex items,
2. *align-self* for single-line centering of an individual flex item,
3. *align-content* for multi-line centering of all the flex items (this property only works when flex items wrap into multiple lines).

1. Single-line Cross Axis Centering

This is how centering items along the cross axis looks like in row-based layouts:

```css
/* CSS */
.container {    
    display: flex;
    flex-direction: row;
    align-items: center;
}
```

When working with column-based layouts, you can use the align-items property to center flex items horizontally

```css
/* CSS */
.container {    
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

2. Single-item Cross Axis Centering

You can’t only center flex items in bulk along the cross axis, but also opt for centering just one single item by using the align-self CSS property that overrides align-items.

```html
<!-- HTML -->
<div class="container">
        <div class="item"></div>
        <div class="item center"></div>
        <div class="item"></div>
</div>
```

```css
/* CSS */
.container {
    display: flex;
    flex-direction: row;
}
.center {
    align-self: center;
    background: magenta;
}
```


°°°more