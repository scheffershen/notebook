Difference between this and self in JavaScript
==============================================

## Sommaire

- [`self` vs `window`](#self-vs-window)
- [Context in Javascript: Self vs This](#context-in-javascript-self-vs-this)
- [The Javascript call() Method](#the-javascript-call-method)

## `self` vs `window`

Unless set elsewhere, the value of `self` is `window`

If you're using a function that is executed in the global scope and is not in strict mode, `this` defaults to `window`

```javascript
window.self === window; // true
```

```javascript
function foo() {
    console.log(
        window.self === window, // is self window?
        window.self === this,   // is self this?
        this === window         // is this window?
    );
}
foo(); // true true true
```

If you're using a function in a different context, `this` will refer to that context, but `self` will still be `window`.


```javascript
// invoke foo with context {}
foo.call({}); // true false false
```

## Context in Javascript: Self vs. This

`this` is a keyword. It is used to refer to an object in which a method is called. 


```javascript
let obj = { 
    myMethod: function() {console.log(this.x)},
    x: 10
}

obj.myMethod() // 10 
```

However `this` can lose its scope easily. 

```javascript
let obj = { 
    myMethod: function() {console.log(this.x)},
    x: 10
}
let m = obj.myMethod

m() // undefined
```

This is because `this` default is window. a global object

Another use for `this` is in an object constructor. In one, `this` refers to an object being made, or myPoint in the example below.

```javascript
function Point() {
    this.x = 1
    this.y = 3
}

let myPoint = new Point()

myPoint // Point { x: 1, y: 3 }
```

`self` is an identifier, It has no special syntactic meaning. Browsers define `window.self` as window. Self can be redefined within an enclosing scope.


```javascript
function foo() {
    console.log(
        window.self === window, // is self window?
        window.self === this,   // is self this?
        this === window         // is this window?
    );
}
foo(); // true true true

// invoke foo with context {}
foo.call({}); // true false false
```

When calling a function in the global scope, both `self` and `this` defaults to window. However, when not in the global scope, `this` will refer to that context but `self` will still refer to window.

## The JavaScript call() Method

The `call()` method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).


```javascript
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1);  // Will return "John Doe"
```

## Resources 

https://stackoverflow.com/questions/16875767/difference-between-this-and-self-in-javascript/38549303
https://jacksongrowson.medium.com/context-in-javascript-self-vs-this-f375826c9a95
