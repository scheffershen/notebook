Replacing jQuery With Vue.js: No Build Step Necessary
===

https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/
february 13, 2018
Sarah Drasner

```html
<main>
  <div class="thing">
     <p>Some content here</p>
  </div>
</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
  //some jquery code here
</script>

```

you don’t have to use webpack,

```html
<main>
  <div class="thing">
     <p>Some content here</p>
  </div>
</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.3/vue.min.js"></script>
<script>
  //some vue code here
</script>
```

## Capturing User Inputs

jQuery 

```html
<div id="app">
  <label for="thing">Name:</label>
  <input id="thing" type="text" />
  <p class="formname"></p>
</div>

<script>
// this is an alias to $(document).ready(function() {
$(function() {
  //keypress wouldn't include delete key, keyup does. We also query the div id app and find the other elements so that we can reduce lookups
  $('#app').keyup(function(e) {
    var formname = $(this).find('.formname');
    //store in a variable to reduce repetition
    var n_input = $(this).find('#thing').val();
    formname.empty();
    formname.append(n_input);
  });
});
</script>
```

Vue

```html
<div id="app">
  <label for="name">Name:</label>
  <input id="name" type="text" v-model="name" /> <!--v-model is doing the magic here-->
  <p>{{ name }}</p>
</div>

<script>
//this is a vue instance
new Vue({
  //this targets the div id app
  el: '#app',
  data: {
    name: '' //this stores data values for ‘name’
  }
})
</script>
```

## Storing User Input On A Single Event

jQuery

```html
<div id="app">
  <label for="thing">Name:</label>
  <input id="thing" type="text" />
  <p class="formname"></p>
</div>

<script>
// this is an alias to $(document).ready(function() {
$(function() {
  //We query the div id app and find the other elements so that we can reduce lookups
  $('#app').change(function(e) {
    var n_input = $(this).find('#thing').val();
    $(this).find('.formname').append(n_input);
  });
});
</script>
```

Vue

```html
<div id="app">
  <label for="name">Name:</label>
  <input id="name" type="text" v-model.lazy="name" />
  <p>{{ name }}</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    name: ''
  }
});
</script>
```

- *v-model.lazy*. Vue now knows not to start storing this until after a change event occurs

## Toggling Classes

jQuery

```html
<div id="app">
  <button aria-pressed="false">Toggle me</button>
  <p class="toggle">Sometimes I need to be styled differently</p>
</div>

<script>
$(function() {
  $('button').click(function(e) {
    $('.toggle').toggleClass('red');
    $(this).attr('aria-pressed', ($(this).attr('aria-pressed') == "false" ? true : false));
  });
});
</script>
```

Vue

```html
<div id="app">
  <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'">Toggle me</button>
  <p :class="{ red: active }">Sometimes I need to be styled differently</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    active: false
  }
})
</script>

```

## Hiding And Showing

jQuery

```html
<div id="app">
  <button type="button" id="toggle" aria-expanded="false">
    Toggle Panel
  </button>
  <p class="hello">hello</p>
</div>

<script>
$(function() {
  $('#toggle').on('click', function() {
    $('.hello').toggle();
    $(this).attr('aria-expanded', ($(this).attr('aria-expanded') == "false" ? true : false));
  });
});
</script>
```

Vue

```html
<div id="app">
  <button @click="show = !show" :aria-expanded="show ? 'true' : 'false'">
    Toggle Panel
  </button>
  <p v-if="show">hello</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    show: true
  }
})
</script>
```

## Submitting A Form

Vue

```html
<div id="app">
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label><br>
      <input id="name" type="text" v-model="name" required/>
    </div>
    <div>
      <label for="email">Email:</label><br>
      <input id="email" type="email" v-model="email" required/>
    </div>
    <div>
      <label for="caps">HOW DO I TURN OFF CAPS LOCK:</label><br>
      <textarea id="caps" v-model="caps" required></textarea>
    </div>
    <button :class="[name ? activeClass : '']" type="submit">Submit</button>
    <div>
      <h3>Response from server:</h3>
      <pre>{{ response }}</pre>
    </div>
  </form>
</div>

new Vue({
  el: '#app',
  data() {
    return {
      name: '',
      email: '',
      caps: '',
      response: '',
      activeClass: 'active'
    }
  },
  methods: {
    submitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        caps: this.caps
      }).then(response => {
        this.response = JSON.stringify(response, null, 2)
      })
    }
  }
})
```