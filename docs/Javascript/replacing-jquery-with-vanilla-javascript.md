replacing-jquery-with-vanilla-javascript
========================================

- https://dev.to/rfornal/-replacing-jquery-with-vanilla-javascript-1k2g
- https://github.com/HubSpot/YouMightNotNeedjQuery


jQuery is still a useful library. With broad browser support of ES6, now is probably a good time to move away from jQuery.

## Sommaire

- Document Ready
- Selecting Elements
- Working with Classes
- Working with Events
- Network Requests
- Updating the DOM

```js
// vanilla-javascript utiles functions
document.createElement()
document.dispatchEvent()
document.attachEvent()
document.addEventListener()

document.querySelectorAll()
document.querySelector()
document.querySelector().appendChild()
document.querySelector().dispatchEvent()
document.querySelector().classList
document.querySelector().style
```

## Document Ready

```js
// With jQuery
$(document).ready(function() { 
  /* Do things after DOM has fully loaded */
});

// Without jQuery
const onReady = (callback) =>{
  if (document.readyState!='loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else document.attachEvent('onreadystatechange', function() {
    if (document.readyState=='complete') callback();
  });
};

ready(() => { 
  /* Do things after DOM has fully loaded */ 
});
```

## Selecting Elements

```js
// jQuery, select all instances of .item
$('.item');

// Instead, select the first instance of .item
document.querySelector('.item');

// ... or, select all instances of .item  
document.querySelectorAll('.item');
```

## Acting on All Elements in a Selection

```js
// With jQuery
$('.item').hide();

// Without jQuery
document.querySelectorAll('.item').forEach(item => {
  item.style.display = 'none';
});
```

## Finding an Element within Another

```js
// With jQuery
const container = $('.wrapper');
container.find('.item');

// Without jQuery
const container = document.querySelector('.wrapper');
container.querySelector('.item');
```

## Traversing the DOM Tree

```js
// With jQuery
$('.item').next();
$('.item').prev();
$('.item').parent();

// Without jQuery
const item = document.querySelector('.item');
item.nextElementSibling;
item.previousElementSibling;
item.parentElement;
```

## Styling Elements

```js
// With jQuery
$('.item').css('color', '#000');

// Without jQuery
document.querySelector('item').style.color = '#000';

// === secondary example ===

// With jQuery
$('.item').css({
  'color': '#000',
  'background-color': 'red'
});

// Without jQuery
const item = document.querySelector('.item');
item.style.color = '#000';
item.style.backgroundColor = 'red';

// Set all styles at once (and override any existing styles)
item.style.cssText = 'color: #000; background-color: red';
```

## Creating Elements

```js
// Create a div and span
$('<div/>');
$('<span/>');

// Create a div and a span
document.createElement('div');
document.createElement('span');

// === secondary example ===
const element = document.createElement('div');
element.textContent = 'Text';

const text = document.createTextNode('Text');
element.appendChild(text);

```

## Working with Classes

```js
// With jQuery
$('.item').addClass('focus');
$('.item').removeClass('focus');
$('.item').toggleClass('focus');

// Without jQuery
const item = document.querySelector('.item');
item.classList.add('focus');
item.classList.remove('focus');
item.classList.toggle('focus');

// Add focus and highlighted classes, then remove
const item = document.querySelector('.item');
item.classList.add('focus', 'highlighted');
item.classList.remove('focus', 'highlighted');

// Remove the focus class and add blurred
document.querySelector('.item').classList.replace('focus', 'blurred');
```

## Checking if an Element has a Class

```js
// With jQuery
if ($('.item').hasClass('focus')) {
  // Do something...
}

// Without jQuery
if (document.querySelector('.item').classList.contains('focus')) {
  // Do something...
}
```

## Working with Events

```js
// With jQuery
$('.button').click(function(e) {
  /* handle click event */
});
$('.button').mouseenter(function(e) {
  /* handle click event */
});
$(document).keyup(function(e) {
  /* handle key up event */
});

// Without jQuery
document.querySelector('.button').addEventListener('click', (e) => {
  /* ... */
});
document.querySelector('.button').addEventListener('mouseenter', (e) => {
  /* ... */
});
document.addEventListener('keyup', (e) => {
  /* ... */
});

// Attach event to dynamic elements in javascript
document.addEventListener('click',function(e){
	if(e.target && e.target.id== 'brnPrepend'){
	      //do something
	 }
});
```

## Listening for Dynamically Added Elements

```js
// With jQuery
$('.search-container').on('click', '.search-result', handleClick);

// Without jQuery
const searchElement = document.createElement('div');
document.querySelector('.search-container').appendChild(searchElement);
searchElement.addEventListener('click', handleClick);
```

## Triggering and Creating Events

```js
// With jQuery
$(document).trigger('myEvent');
$('.item').trigger('myEvent');

// Without jQuery
document.dispatchEvent(new Event('myEvent'));
document.querySelector('.item').dispatchEvent(new Event('myEvent'));

// === secondary example ===

// With jQuery
$('.item').hide();
$('.item').show();

// Without jQuery
document.querySelector('.item').style.display = 'none';
document.querySelector('.item').style.display = 'block';
```

## Network Requests

```js
// With jQuery
$.ajax({
    url: 'data.json'
  }).done(function(data) {
    // ...
  }).fail(function() {
    // Handle error
  });

// Without jQuery
fetch('data.json')
  .then(data => {
    // Handle data
  }).catch(error => {
    // Handle error
  });
```

## Updating the DOM

```js
// With jQuery
$('.button').text('New text');
$('.button').text(); // Returns 'New text'

// Without jQuery
document.querySelector('.button').textContent = 'New text';
document.querySelector('.button').textContent; // Returns 'New text'

// === secondary example ===

// Create div element and append it to .container
$('.container').append($('<div/>'));

// Create a div and append it to .container
const element = document.createElement('div');
document.querySelector('.container').appendChild(element);

// === third example ===

const element = document.createElement('div');
element.classList.add('item');
element.textContent = 'Text inside item.';
document.querySelector('.container').appendChild(element);
```

## Resources

- https://youmightnotneedjquery.com/
- https://github.com/HubSpot/YouMightNotNeedjQuery