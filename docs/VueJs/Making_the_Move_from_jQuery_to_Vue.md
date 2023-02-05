Making the Move from jQuery to Vue
===

https://css-tricks.com/making-the-move-from-jquery-to-vue/

09/05/2019

let's consider some high level things we might turn to jQuery for:

- Finding something in the DOM (with the idea of doing something with it later)
- Changing something in the DOM (e.g. the text of a paragraph or the class of a button)
- Reading and setting form values
- Form validation (which is really just a combination of the items above
- Ajax calls and handling the results
- Event handling (e.g. on button click, do something
- Measuring or changing the styles of an element

## Defining where Vue "works"

let’s consider a simple prototype web page:

```html
<body>
  <header>
    Fancy header stuff here
  </header>
  <div id="sidebar">
    Some sidebar doohicky here
  </div>
  <main>
    <p>
      Main site content here, super important stuff...
    </p>
    <div id="loginForm">
      A login form of course
    </div>
  </main>
</body>
```

In a typical jQuery application, 

```js
$(document).ready(function() {
  $('header') // something...
  $('#sidebar') // something...
  $('#loginForm') // something... 
});
```

In a Vue application

```js
new Vue({
  el: '#loginForm',
  // Code here...
});
new Vue({
  el:'#sideBar',
  // Code here...
});
```

## Finding Stuff in the DOM

We have a button, and when it’s clicked, we make something happen

```html
<button id="myButton">Click Me!</button>
<!-- More stuff... -->
<script>
$(document).ready(function() {

  $('#myButton').click(function() {
    alert(1);
  });

});
</script>
```

Now let's compare that to how it can be done with Vue:

```html
<div id="app">
  <button v-on:click="doSomething">Click Me!</button>
</div>

<script>
const app = new Vue({
  el:'#app',
  methods: {
    doSomething: function() {
      alert(1);
    }
  }
});
</script>
```

Let's consider another example: finding and changing text in the DOM.

```html
<button id="myButton">Click Me!</button>
<span id="result"></span>

<script>
$(document).ready(function() {

  $('#myButton').click(function() {
    $('#result').text('You clicked me, thanks!');
  });

});
</script>
```

Now consider the Vue version:

```html
<div id="app">
  <button v-on:click="doSomething">Click Me!</button>
  <!-- On click, change text in this span -->
  <span>{{resultText}}</span>
</div>

<script>
const app = new Vue({
  el: '#app',
  data: {
    resultText: ''
  },
  methods: {
    doSomething: function() {
      this.resultText = 'You clicked me, thanks!';
    }
  }
});
</script
```

## Reading and writing form variables

Let's consider a simple jQuery example of reading a few form fields and setting another:

```html
<form>
  <input type="number" id="first"> + 
  <input type="number" id="second"> =
  <input type="number" id="sum"> 
  <button id="sumButton">Sum</button>
</form>

<script>
$(document).ready(function() {
  let $first = $('#first');
  let $second = $('#second');
  let $sum = $('#sum');
  let $button = $('#sumButton');
  
  $button.on('click', function(e) {
    e.preventDefault();
    let total = parseInt($first.val(),10) + parseInt($second.val(),10);
    $sum.val(total);
  });
});
</script>
```

Now consider the Vue version

```html
<form id="myForm">
  <input type="number" v-model.number="first"> + 
  <input type="number" v-model.number="second"> =
  <input type="number" v-model="sum"> 
  <button @click.prevent="doSum">Sum</button>
</form>

<script>
// new Vue({
  el: '#myForm',
  data: {
    first: 0,
    second: 0,
    sum: 0
  },
  //computed: {
  //  sum: function() {
  //    return this.first + this.second;
  //  }
  //}
  methods: {
    doSum: function() {
      this.sum = this.first + this.second;
    }
  }
})
</script>
```

-  *v-model* is how Vue creates *two way data binding* between values in the DOM and in JavaScript
-  *@click* defines a click handler for the button
-  *.prevent* portion blocks the browser’s default behavior of submitting the form (the equivalent of event.preventDefault()).
-  v-on:click  == @click

## Working with Ajax

The first one to consider is Axios, 

```js
//  Axios, this is a Promise-based library 
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

//  Fetch has very good support at roughly 90% of browsers, Fetch is Promise-based and has a friendly API:
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });  
```

Here's a simple jQuery demo

```html
<h1>Star Wars Films</h1>
<ul id="films"></ul>

<script>
$(document).ready(function() {
  $.get('https://swapi.com/api/films', function(res) {
    let list = '';
    res.results.forEach(function(r) {
      list += `<li>${r.title}</li>`;
    });
    $('#films').html(list);
  });
});
</script>
```

Now, let's consider an example of this using Vue:

```html
<div id="app">
  <h1>Star Wars Films</h1>
  <ul>
    <li v-for="film in films">{{film.title}}</li>
  </ul>  
</div>

<script>
const app = new Vue({
  el: '#app',
  data: {
    films: []
  }, 
  created() { 
    fetch('https://swapi.com/api/films')
    .then(res => res.json())
    .then(res => {
      this.films = res.results;  
    });
  }
})
</script>
```

- *v-for* template.

## A full (if somewhat trivial) example

- Support filtering by name and product category
- Form validation such that we must supply a search term or a category
- While the API is being hit, show a message to the user and disable the submit button
- When done, handle reporting that no products were shown or list the matches

Let's begin with the jQuery version.

```html
<form>
  <p>
    <label for="search">Search</label>
    <input type="search" id="search">
  </p>
  <p>
    <label for="category">Category</label>
    <select id="category">
      <option></option>
      <option>Food</option>
      <option>Games</option>
    </select>
  </p> 
  <button id="searchBtn">Search</button>
</form>

<div id="status"></div>
<div id="results"></div>

<script>
const productAPI = 'https://wt-c2bde7d7dfc8623f121b0eb5a7102930-0.sandbox.auth0-extend.com/productSearch';

$(document).ready(() => {
  let $search = $('#search');
  let $category = $('#category');
  let $searchBtn = $('#searchBtn');
  let $status = $('#status');
  let $results = $('#results');

  $searchBtn.on('click', e => {
    e.preventDefault();

    // First clear previous stuff
    $status.html('');
    $results.html('');

     // OK, now validate form
    let term = $search.val();
    let category = $category.val();
    if(term === '' && category === '') {
      $status.html('You must enter a term or select a category.');
      return false;
    }

    $searchBtn.attr('disabled','disabled');
    $status.html('Searching - please stand by...');

    $.post(productAPI, { name:term, category:category }, body => {
      $searchBtn.removeAttr('disabled');
      $status.html('');

      if(body.results.length === 0) {
        $results.html('<p>Sorry, no results!</p>');
        return;
      }
      
      let result = '<ul>';
      body.results.forEach(r => {
        result += `<li>${r.name}</li>`
      });
      result += '</ul>';
      $results.html(result);
    });

  });    
});

</script>
```

Now let's consider the Vue version

```html
<div id="app">
  <form>
    <p>
      <label for="search">Search</label>
      <input type="search" v-model="search">
    </p>
    <p>
      <label for="category">Category</label>
      <select v-model="category">
        <option></option>
        <option>Food</option>
        <option>Games</option>
      </select>
    </p>
    <button @click.prevent="searchProducts" :disabled="searchBtnDisabled">Search</button>
  </form>

  <div v-html="status"></div>
    <ul v-if="results">
      <li v-for="result in results">{{result.name}}</li>
    </ul>
</div>

<script>
const productAPI = 'https://wt-c2bde7d7dfc8623f121b0eb5a7102930-0.sandbox.auth0-extend.com/productSearch';

const app = new Vue({
  el: '#app',
  data: {
    search: '',
    category: '',
    status: '',
    results: null,
    searchBtnDisabled: false
  },
  methods: {
    searchProducts:function() {
      this.results = null;
      this.status = '';
      
      if(this.search === '' && this.category === '') {
        this.status = 'You must enter a term or select a category.';
        return;
      }
    
    this.searchBtnDisabled = true;
    this.status = 'Searching - please stand by...';
      
    fetch(productAPI, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({name:this.search,category:this.category})
      }).then(res => res.json())
      .then(res => {
        this.status = '';
        this.searchBtnDisabled = false;
        this.results = res.results;
        if(this.results.length === 0) this.status = '<p>Sorry, no results!</p>';
      });
    }
  }
);
</script>
```

- *v-model* to work with the data.
- *@click.prevent* to handle doing the main search operation.
- *:disabled* disabled to a value in the Vue application
- *v-html* assigning HTML to a value 
- *v-if* to conditionally render
- *v-for* to handle the iteration.