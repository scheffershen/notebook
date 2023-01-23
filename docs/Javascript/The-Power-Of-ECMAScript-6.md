The power of ECMAScript 6
=========================

## Sommaire

- [Let](#let)
- [Const](#const)
- [Arrow functions](#arrow-functions)
- [String templates](#string-templates)
- [Destructuring assignments](#destructuring-assignments)
- [Object literals](#object-literals)
- [Default args](#default-args)
- [Spread operator](#spread-operator)
- [Classes](#classes)
- [Iterators](#iterators)
- [Generators](#generators)
- [Modules](#modules)
- [Promises](#promises)
- [Map, Set, WeakMap, WeakSet](#map-set-weakmap-weakset)

## Let

JavaScript finally introduces a third scope, block scope
No more hoisting

```js
    let x = 31;
    if (true) {
        let x = 71; // different variable
    }
    console.log(x); // 31
```

## Const

Read only, named variables
Block scoped

```js
    const apiBase = "https://mysite.com/api/v1/";
    const clientId = "Adxk38dn3c9u1ndk";
    //block scoped
    if (true) {
        const apiBase = "https://othersite.com/api/v2/";
        console.log(apiBase + clientId);
        //https://othersite.com/api/v2
    }
    apiBase = "https://somewhereelse";
    //Syntax error - apiBase is read-only
    console.log(apiBase+clientId);
    //https://mysite.com/api/v1/Adxk38dn3c9u1ndk
```

## Arrow functions

A function shorthand or Lambda using the fat-arrow " => " syntax.
No constructor!
Not just syntax sugar. Arrow functions automatically bind "this" from the containing scope.

```js
    // array
    const items = [1, 2, 3, 4];
    // expression bodies or lambda
    let byTwo = items.map(i => i * 2);
    //with a block
    let byFour = items.map(i => {
        return i * 4;
    });
    //lexical this
    function Person() {
        this.name = "Charles";
        this.nickNames = ["Charlie", "Chuck", "Chuckles"];
        this.print = () => {
            return this.nickNames.map((n) => {
                return this.name + " is nicknamed " + n;
            });
        };
    }
    console.log(new Person().print());
    //["Charles is nicknamed Charlie","Charles is nicknamed Chuck",
    //"Charles is nicknamed Chuckles"]
```

## String templates

Allows for string literals with embedded expression interpolation.
Multi-line strings!

```js
    //define some classes
    const style = {
        width: "25px",
        height: "50px",
        display: "inline-block"
    }
    //arbitrary padding function
    function getPadding() {
        return 44;
    }
    //interpolate a literal string
    let tmpl = `
    <div style="display:${style.display};padding:${getPadding()};">
        <span style="width:${style.width};height:${style.height}">
            Hi it's ${new Date()}
        </span>
     </div >
    `;
    //log our string literal
    console.log(tmpl);
```

## Destructuring assignments

Destructure: To dismantle/destroy the structure of something
Object and Array destructuring

```js
    //works on arrays, or objects
    function getName(args) {
        if ( Array.isArray(args) ) {
            //assign the first and second element of the array
            let [firstName,lastName] = args;
            return `${firstName} ${lastName}`;
        } else {
            //assign the firstName key and lastName key
            let {firstName,lastName} = args;
            return `${firstName} ${lastName}`;
        }
    }
    console.log(getName(["Charlie", "King"]));
    //you can skip elements
    let items = [ 1,2,3,4,5 ];
    //new hotness
    let [,second, third, fourth] = items;
    console.log([second,third,fourth]);
    //useful for selecting keys inside an expression
    let books = [
        { name:"Javascript: The Good Parts", ISBN:1224283},
        { name: "Effective Javascript", ISBN:128263},
        { name: "The Principles of Object-Oriented JavaScript", ISBN:122663}
    ];
    //old way
    let bookISBNS = books.map(function(b){
        return b.ISBN;
    });
    //new hotness
    let bookNames = books.map( ({name}) => name);
    console.log(bookISBNS);
    console.log(bookNames);
```

## Object literals

New property value shortand syntax    

```js
    let name = "Charlie",
        age = 29;
    const me = {
        name,
        age,
        //old way
        weight: function(){
            return 86.1826;
        },
        //new hotness
        height() {
            return 180;
        }
    }
    //view the results
    console.log(me.name);
    console.log(me.age);
    console.log(me.weight());
    console.log(me.height());
```

## Default args

Define default parameters for functions
Encloses the outer scope

```js
    //OMG default params
    function getApiUrl (resource, base = "http://b.com/api") {
        return `${base}/${resource}`;
    }
    let staticBase = "http://b.com/content";
    //you can utilize outer scope
    function getStaticUrl (resource, base = staticBase) {
        return `${base}/${resource}`;
    }
    ////OMGWTF expressions in params!!
    function getThumb(resource, width, dpi = width/10 ) {
        return `${staticBase}/${resource}?width=${width}&dpi=${dpi}`;
    }
    console.log(getApiUrl("image"));
    console.log(getStaticUrl("doc.pdf"));
    console.log(getThumb("image.jpg",200));
```

## Spread operator

Expands expressions where multiple args are expected
A better fn.apply()

```js
    function getFullName (firstName,lastName) {
        return `${firstName} ${lastName}`;
    }
    let names = ["Charles","King","James","King","Maggie","King"];

    //spread array as args
    let fullName = getFullName(...names);
    console.log(fullName);

    //combine with destruturing
    let [ cFirst, cLast, ...rest ] = names;
    console.log([cFirst,cLast,rest]);

    //or array literal concatenation
    let who = ["Spongebob","Squarepants"]
    let where = [...who, "lives in", "a", "pineapple","under","the","sea"];
    console.log(where);

    //use for push and unshift: La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.
    let start = [1,2,3];
    let end = [4,5,6];
    let more = [7,8,9];

    end.unshift(...start);
    end.push(...more);
    // result: 1,2,3,4,5,6,7,8,9
    console.log(end);
```

## Classes

A formal inheritance syntax comes to JavaScript

Really just syntactical sugar over JS prototypical inheritance

```js
    class Polygon {
        constructor(height, width) { //class constructor
            this.name = 'Polygon';
            this.height = height;
            this.width = width;
        }

        sayName() { //class method
            console.log('Hi, I am a', this.name + '.');
        }
    }

    class Square extends Polygon {
        constructor(length) {
            super(length, length); //call the parent method with super
            this.name = 'Square';
        }

        get area() { //calculated attribute getter
            return this.height * this.width;
        }
    }

    let s = new Square(5);

    s.sayName();
    console.log(s.area);
```

    output 
    Hi, I am a Square.
    25   


## Iterators ???

"Iterable" protocol allows object to define their own iteration behavior

"Iterable" objects can be iterated over using 'for...of' loops

"Iterators" are objects that implement a next() method that returns {value,done:bool}

```js
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let v of arr) {
    sum += v;
}

console.log('1 + 2 + 3 + 4 + 5 =', sum); // 1 + 2 + 3 + 4 + 5 = 15
```

## Generators

Introduces functions that "yield" control flow

Seen in other languages like C#, Python

Looks like a function, however it returns an iterator object

```js
    function* range(start, end, step) {
        while (start < end) {
            yield start;
            start += step;
        }
    }

    for (let i of range(0, 10, 2)) {
        console.log(i); // 0 2 4 6 8
    }

```

## Modules

Standardized method for modularizing your JS code

Borrows concepts from Asynchronous Module Definition (AMD) and CommonJS Modules

Compact like CommonJS, async like AMD

Statically analyzed, so you can have circular deps

**Modules**

No more UMD!

```js
    (function(root, factory) {
        if (typeof define === 'function' && define.amd) {

            define(['b'], function(b) {
                        return (root.returnExportsGlobal = factory(b));
             });

        } else if (typeof exports === 'object') {

            module.exports = factory(require('b'));

        } else {

             root.returnExportsGlobal = factory(root.b);

        }
    (this, function(b) {

        //finally do actual work
        return {};
    }));
```

```js
    //------------------------task.js-------------
    export var falsy = 0;
    export let truthy = 1;
    export const read_only = "String";
    export function spawn(){};
    export function* enqueue(){};
    export class Task {};
    export default function () {};

    //------------------------foo.js-------------
    //named default and others
    import taskjs, { spawn, 
        enqueue, 
        truthy, 
        falsy, 
        read_only, 
        Task 
    } from 'task';

    //grab just the default export
    import taskjs from 'task';
    //just named
    import { spawn, enqueue } from 'task';

    //import and rename
    import { spawn as s, enqueue } from 'task';

    //entire module as an object
    import * as task from 'task';

    //load the module, don’t import anything
    import 'task';
```

```js
    //import config
    System.import('task')
    .then(task => {
        //do stuff with task
    })
    .catch(error => {

    });
```

## Promises

Promises are objects that represent an eventual result.

Lets asynchronous methods return values like synchronous methods         

```js
    var longFn = function() {
        return new Promise(function(res, rej) {
            setTimeout(res, 1000);
        });
    };

    var coolFn = function() {
        console.log('cool');
    };

    // logs cool after 1 second
    longFn().then(coolFn);
```

## Map, Set, WeakMap, WeakSet

**Map**

Just a simple Key-Value pair

Except the key can be any value, not just primitives

Key equality is based on the "same-value" algorithm: NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator. -MDN

var m = new Map(); m.set("hello", 42); //create an obj const Person = { name: "Charlie" } //add the complex key m.set(Person, "present"); //get the value m.get(Person) === "present"; //iterable for (var v of m.values()) { console.log("value:" +v); } for (var k of m.keys()) { console.log("key:" + JSON.stringify(k)); } //supports size, not length; console.log(m.size);
Set
Iterable object of unqiue values

Iterable in insertion order

No "set", just "add"

```js
    var m = new Map();
    m.set("hello", 42);
                    
    //create an obj
    const Person = {
        name: "Charlie"
    }
    //add the complex key
    m.set(Person, "present");

    //get the value
    m.get(Person) === "present";

    //iterable
    for (var v of m.values()) {
        console.log("value:" +v);
    }

    for (var k of m.keys()) {
        console.log("key:" + JSON.stringify(k));
    }

    //supports size, not length;
    console.log(m.size);
```

**Set**

Iterable object of unqiue values

Iterable in insertion order

No "set", just "add"    

```js
    var s = new Set();
    s.add("hello");

    //create an obj
    const Person = {
        name: "Charlie"
    }

    //add the complex value
    s.add(Person);

    //get the value
    s.has(Person) === true;

    // try re-add the same value, ignored
    s.add(Person);

    //iterable
    for (var item of s) {
        console.log(item);
    }

    //supports size;
    console.log(s.size);
```

**WeakMap**

Like a Map, but not iterable

Keys cannot be primitive types. Keys are objects and are "weakly" held

```js
    //Weak, ya super weak.
    var wm = new WeakMap();

    //create an obj
    const Person = {
        name: "Charlie"
    }

    wm.set(Person, "present");

    //get the value
    console.log(wm.has(Person) === true);
```

**WeakSet**

Like a Set, but not iterable

Values cannot be primitive types. Values are objects and are "weakly" held

```js
    //weak set, bro                
    var ws = new WeakSet();

    //create an obj
    const Person = {
        name: "Charlie"
    }

    ws.add(Person);

    //get the value
    console.log(ws.has(Person) === true);
```