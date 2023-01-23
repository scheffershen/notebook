you might not need jquery
==========================

https://youmightnotneedjquery.com/

## JSON

```js
$.getJSON('/my/url', function (data) {});

// Without jQuery
const response = await fetch('/my/url');
const data = await response.json();
```

## Load

```js
$('#some.selector').load('/path/to/template.html');

// Without jQuery
const response = await fetch('/path/to/template.html');
const body = await response.text();

document.querySelector('#some.selector').innerHTML = body;
```

## Post

```js
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});

// Without jQuery
await fetch('/my/url', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
```

## Request

```js
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function (resp) {},
  error: function () {}
});

// Without jQuery
const response = await fetch('/my/url');

if (!response.ok) {
}

const body = await response.text();
```

## Fade In

```js
$(el).fadeIn();

// Without jQuery
el.classList.replace('show', 'hide');
/* 
.show {
  transition: opacity 400ms;
}
.hide {
  opacity: 0;
}
*/
```

## Fade Out

```js
$(el).fadeOut();

// Without jQuery
el.classList.replace('hide', 'show');
/* 
.show {
  opacity: 1;
}
.hide {
  opacity: 0;
  transition: opacity 400ms;
}
*/
```

## Hide

```js
$(el).hide();

// Without jQuery
el.style.display = 'none';
```

## Show

```js
$(el).show();

// Without jQuery
el.style.display = '';
```

## TO do late !!!

i am tied today