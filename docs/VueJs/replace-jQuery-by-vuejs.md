replace-jQuery-by-vuejs
===

https://blog.kaliop.com/blog/2018/12/19/utiliser-vuejs-a-la-place-de-jquery/
https://github.com/Erilan/replace-jQuery-by-vuejs

Voyons premièrement un dropdown très simple :

```html
<h3>Dropdown - jQuery</h3>
<div>
  <div class="Dropdown-Title js-dropdown">Dropdown me !</div>
  <div class="Dropdown-ItemList Dropdown-ItemList--closed">
    <a class="Dropdown-Item">First link</a>
    <a class="Dropdown-Item">Second link</a>
    <a class="Dropdown-Item">Third link</a>
  </div>
</div>

<h3>Dropdown - Vuejs</h3>
<div id="Vue">
  <div class="Dropdown-Title" @click="toggleDropdown">Dropdown me !</div>
  <div v-if="display" class="Dropdown-ItemList">
    <a class="Dropdown-Item">First link</a>
    <a class="Dropdown-Item">Second link</a>
    <a class="Dropdown-Item">Third link</a>
  </div>
</div>
```

```js
// Dropdown with jquery
$('.js-dropdown').on('click', function(element) {
  var next = $(this).next()
  if (next.hasClass('Dropdown-ItemList--closed')) {
    next.removeClass('Dropdown-ItemList--closed')
  } else {
    next.addClass('Dropdown-ItemList--closed')
  }
})

// Dropdown with VueJs
new Vue({
  el: '#Vue',
  data() {
    return {
      display: false
    }
  },
  methods: {
    toggleDropdown() {
      this.display = !this.display
    }
  }
})
```

Passons à un autre exemple simple, des panels basiques :

```html
<h3>Panels - jQuery</h3>
<div>
  <div class="Panel-TitleList">
    <button class="Panel-Title js-panel" data-targetPanel="#panel1">First Panel</button>
    <button class="Panel-Title js-panel" data-targetPanel="#panel2">Second Panel</button>
    <button class="Panel-Title js-panel" data-targetPanel="#panel3">Third Panel</button>
  </div>
  <div class="Panel-ContentList">
    <div id="panel1" class="Panel-Content js-contentPanel">Content of the first panel</div>
    <div id="panel2" class="Panel-Content js-contentPanel Panel-Content--hidden">I am the second panel's content</div>
    <div id="panel3" class="Panel-Content js-contentPanel Panel-Content--hidden">The third panel is the best</div>
  </div>
</div>

        
<h3>Panels - Vuejs</h3>
<div id="Vue">
  <div class="Panel-TitleList">
    <button class="Panel-Title" @click="activatePanel(1)">First Panel</button>
    <button class="Panel-Title" @click="activatePanel(2)">Second Panel</button>
    <button class="Panel-Title" @click="activatePanel(3)">Third Panel</button>
  </div>
  <div class="Panel-ContentList">
    <div v-if="activePanel === 1" class="Panel-Content">Content of the first panel</div>
    <div v-if="activePanel === 2" class="Panel-Content">I am the second panel's content</div>
    <div v-if="activePanel === 3" class="Panel-Content">The third panel is the best</div>
  </div>
</div>
```

```js
// Panels with jquery
$('.js-panel').on('click', function(element) {
  var targetId = element.currentTarget.dataset.targetpanel
  $('.js-contentPanel').addClass('Panel-Content--hidden')
  $(targetId).removeClass('Panel-Content--hidden')
})

// Panels with vuejs
new Vue({
  el: '#Vue',
  data() {
    return {
      activePanel: 1
    }
  },
  methods: {
    activatePanel(panelIndex) {
      this.activePanel = panelIndex
    }
  }
})

```

Venons en à un exemple plus complexe, un calculateur de portion pour une recette de cuisine :

```html
<h3>Recipe - jQuery</h3>
<div>
  <label for="serving">Portions :</label>
  <input type="number" id="servingInput" value="1">
  <button class="js-decreaseService">-</button>
  <button class="js-increaseService">+</button>

  <div class="Recipe-IngredientList">
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="100">Farine : <span></span>g</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="2">Oeuf : <span></span></div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="150">Lait : <span></span>mL</div>
    <div class="Recipe-Ingredient js-recipeIngredient" data-baseValue="50">Lardon : <span></span>g</div>
  </div>
</div>

<h3>Recipe - Vuejs</h3>
<div id="Vue">
  <label for="serving">Portions :</label>
  <input type="number" v-model="serving">
  <button @click="decreaseServing">-</button>
  <button @click="increaseServing">+</button>

  <div class="Recipe-IngredientList">
    <div class="Recipe-Ingredient">Farine : <span>{{ serving * 100 }}</span>g</div>
    <div class="Recipe-Ingredient">Oeuf : <span>{{ serving * 2 }}</span></div>
    <div class="Recipe-Ingredient">Lait : <span>{{ serving * 150 }}</span>mL</div>
    <div class="Recipe-Ingredient">Lardon : <span>{{ serving * 50 }}</span>g</div>
  </div>
</div>
```

```js
// Recipe calculator with jquery
var computeServing = function(serving) {
  $('.js-recipeIngredient').each(function(index, item) {
    $(item).children('span').html($(item)[0].dataset.basevalue * serving)
  })
}
$('#servingInput').on('change', function() {
  computeServing($(this).val())
})
$('.js-decreaseService').on('click', function() {
  var currentServing = $('#servingInput').val()
  $('#servingInput').val(currentServing - 1)
  computeServing(currentServing - 1)
})
$('.js-increaseService').on('click', function() {
  var currentServing = $('#servingInput').val()
  $('#servingInput').val(parseInt(currentServing) + 1)
  computeServing(parseInt(currentServing) + 1)
})
computeServing(1)

// Recipe calculator with vuejs
new Vue({
  el: '#Vue',
  data() {
    return {
      serving: 1
    }
  },
  methods: {
    decreaseServing() {
      this.serving = this.serving - 1
    },
    increaseServing() {
      this.serving = this.serving + 1
    }
  }
})
```

Il suffit de l’installer, avec quelques packages requis par VueJs :

    $ composer require symfony/webpack-encore-pack
    $ npm install - save node-sass sass-loader vue vue-loader vue-template-compiler

Dans le fichier généré *webpack.config.js*, il nous suffit d’activer le VueLoader :

```js
Encore
  // enables VueJs support
  .enableVueLoader()
```