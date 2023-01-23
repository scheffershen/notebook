JavaScript Modules: A Beginner’s Guide
======================================

## Sommaires 

- [Why use modules](#why-use-modules)
- [Module pattern](#module-pattern)
- [Anonymous closure (IIFE)](#anonymous-closure-IIFE)
- [Global import](#global-import)
- [Object interface](#object-interface)
- [Revealing module pattern](#revealing-module-pattern)
- [CommonJS module pattern](#CommonJS-module-pattern)
- [AMD(Asynchronous Module Definition) module pattern](#AMD-module-patten)
- [-MD(Universal Module Definition) module pattern](#UMD-module-pattern)
- [ECMAScript 6 (ES6) module pattern](#ES6-module-pattern)

## Why use modules?

- 1) Maintainability
- 2) Namespacing
- 3) Reusability

## Module pattern

`The Module pattern is used to mimic the concept of classes` (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object — similar to how classes are used in other programming languages like Java or Python.

That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

### Example 1: Anonymous closure (IIFE)

This lets us hide variables from the parent (global) namespace.

```js
(function () {
  // We keep these variables private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
      return 'Your average grade is ' + total / myGrades.length + '.';
  }
  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
    return 'You failed ' + failingGrades.length + ' times.';
  }
  console.log(failing());
}());

// ‘You failed 2 times.’
```

this approach is that is that you can use local variables inside this function without accidentally overwriting existing global variables, yet still access the global variables

```js
var global = 'Hello, I am a global variable :)';
(function () {
  // We keep these variables private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
      return 'Your average grade is ' + total / myGrades.length + '.';
  }
  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
    return 'You failed ' + failingGrades.length + ' times.';
  }
  console.log(failing());
  console.log(global);
}());
// 'You failed 2 times.'
// 'Hello, I am a global variable :)'
```

### Example 2: Global import

Another popular approach used by libraries like jQuery is `global import`. It’s similar to the anonymous closure we just saw, except now we pass in globals as parameters:

`globalVariable` is the only variable that’s global. The benefit of this approach over anonymous closures is that you declare the global variables upfront

```js
(function (globalVariable) {
  // Keep this variables private inside this closure scope
  var privateFunction = function() {
    console.log('Shhhh, this is private!');
  }
  // Expose the below methods via the globalVariable interface while
  // hiding the implementation of the method within the 
  // function() block
  globalVariable.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };
  globalVariable.filter = function(collection, test) {
    var filtered = [];
    globalVariable.each(collection, function(item) {
      if (test(item)) {
        filtered.push(item);
      }
    });
    return filtered;
  };
  globalVariable.map = function(collection, iterator) {
    var mapped = [];
    globalUtils.each(collection, function(value, key, collection) {
      mapped.push(iterator(value));
    });
    return mapped;
  };
  globalVariable.reduce = function(collection, iterator, accumulator) {
    var startingValueMissing = accumulator === undefined;
    globalVariable.each(collection, function(item) {
      if(startingValueMissing) {
        accumulator = item;
        startingValueMissing = false;
      } else {
        accumulator = iterator(accumulator, item);
      }
    });
    return accumulator;
  };
 }(globalVariable));
```

### Example 3: Object interface

another approach is to create modules using a self-contained object interface

this approach lets us decide what variables/methods we want to keep private (e.g. myGrades) and what variables/methods we want to expose by putting them in the return statement (e.g. average & failing).

```js
var myGradesCalculate = (function () {
  // Keep this variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  return {
    average: function() {
      var total = myGrades.reduce(function(accumulator, item) {
        return accumulator + item;
        }, 0);
      return'Your average grade is ' + total / myGrades.length + '.';
    },
    failing: function() {
      var failingGrades = myGrades.filter(function(item) {
          return item < 70;
        });
      return 'You failed ' + failingGrades.length + ' times.';
    }
  }
})();
myGradesCalculate.failing(); // 'You failed 2 times.' 
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'
```

### Example 4: Revealing module pattern

it ensures all methods and variables are kept private until explicitly exposed:

```js
var myGradesCalculate = (function () {
  // Keep this variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item;
      }, 0);
    return'Your average grade is ' + total / myGrades.length + '.';
  };
  var failing = function() {
    var failingGrades = myGrades.filter(function(item) {
        return item < 70;
      });
    return 'You failed ' + failingGrades.length + ' times.';
  };
  // Explicitly reveal public pointers to the private functions 
  // that we want to reveal publicly
  return {
    average: average,
    failing: failing
  }
})();
myGradesCalculate.failing(); // 'You failed 2 times.' 
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'
```

## CommonJS module pattern

CommonJS is a volunteer working group that designs and implements JavaScript APIs for declaring modules.

With CommonJS, `each JavaScript file stores modules` in its own unique module context (just like wrapping it in a closure). In this scope, we use the module.exports object to expose modules, and require to import them.

```js
function myModule() {
  this.hello = function() {
    return 'hello!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

module.exports = myModule;
```

when someone wants to use myModule, they can require it in their file, like so:

```js
var myModule = require('myModule');

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'
```

## AMD(Asynchronous Module Definition) module pattern

Loading modules using AMD looks something like this

```js
define(['myModule', 'myOtherModule'], function(myModule, myOtherModule) {
  console.log(myModule.hello());
});

define([], function() {
  return {
    hello: function() {
      console.log('hello');
    },
    goodbye: function() {
      console.log('goodbye');
    }
  };
});
```

the `define` function takes as its first argument an array of each of the module’s dependencies.

## UMD(Universal Module Definition) module pattern

```js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
    define(['myModule', 'myOtherModule'], factory);
  } else if (typeof exports === 'object') {
      // CommonJS
    module.exports = factory(require('myModule'), require('myOtherModule'));
  } else {
    // Browser globals (Note: root is window)
    root.returnExports = factory(root.myModule, root.myOtherModule);
  }
}(this, function (myModule, myOtherModule) {
  // Methods
  function notHelloOrGoodbye(){}; // A private method
  function hello(){}; // A public method because it's returned (see below)
  function goodbye(){}; // A public method because it's returned (see below)
  // Exposed public methods
  return {
      hello: hello,
      goodbye: goodbye
  }
}));
```

## ECMAScript 6 (ES6) module pattern

```js
// lib/counter.js
var counter = 1;
function increment() {
  counter++;
}
function decrement() {
  counter--;
}
module.exports = {
  counter: counter,
  increment: increment,
  decrement: decrement
};

// src/main.js
var counter = require('../../lib/counter');
counter.increment();
console.log(counter.counter); // 1
```

```js
// lib/counter.js
export let counter = 1;
export function increment() {
  counter++;
}
export function decrement() {
  counter--;
}

// src/main.js
import * as counter from '../../counter';
console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
```

## Resources

https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/

JANUARY 22, 2016, by Preethi Kasireddy