"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36215],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={},s="The power of ECMAScript 6",l={unversionedId:"Javascript/The-Power-Of-ECMAScript-6",id:"Javascript/The-Power-Of-ECMAScript-6",title:"The power of ECMAScript 6",description:"Sommaire",source:"@site/docs/Javascript/The-Power-Of-ECMAScript-6.md",sourceDirName:"Javascript",slug:"/Javascript/The-Power-Of-ECMAScript-6",permalink:"/notebook/docs/Javascript/The-Power-Of-ECMAScript-6",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Javascript/The-Power-Of-ECMAScript-6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The JavaScript You Need to Know",permalink:"/notebook/docs/Javascript/The-JavaScript-You-Need-to-Know"},next:{title:"window.onload vs $(document).ready()",permalink:"/notebook/docs/Javascript/Window Onload vs Document Ready"}},i={},u=[{value:"Sommaire",id:"sommaire",level:2},{value:"Let",id:"let",level:2},{value:"Const",id:"const",level:2},{value:"Arrow functions",id:"arrow-functions",level:2},{value:"String templates",id:"string-templates",level:2},{value:"Destructuring assignments",id:"destructuring-assignments",level:2},{value:"Object literals",id:"object-literals",level:2},{value:"Default args",id:"default-args",level:2},{value:"Spread operator",id:"spread-operator",level:2},{value:"Classes",id:"classes",level:2},{value:"Iterators ???",id:"iterators-",level:2},{value:"Generators",id:"generators",level:2},{value:"Modules",id:"modules",level:2},{value:"Promises",id:"promises",level:2},{value:"Map, Set, WeakMap, WeakSet",id:"map-set-weakmap-weakset",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-power-of-ecmascript-6"},"The power of ECMAScript 6"),(0,r.kt)("h2",{id:"sommaire"},"Sommaire"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#let"},"Let")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#const"},"Const")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#arrow-functions"},"Arrow functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#string-templates"},"String templates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#destructuring-assignments"},"Destructuring assignments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#object-literals"},"Object literals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-args"},"Default args")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#spread-operator"},"Spread operator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#classes"},"Classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iterators"},"Iterators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generators"},"Generators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modules"},"Modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#promises"},"Promises")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#map-set-weakmap-weakset"},"Map, Set, WeakMap, WeakSet"))),(0,r.kt)("h2",{id:"let"},"Let"),(0,r.kt)("p",null,"JavaScript finally introduces a third scope, block scope\nNo more hoisting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    let x = 31;\n    if (true) {\n        let x = 71; // different variable\n    }\n    console.log(x); // 31\n")),(0,r.kt)("h2",{id:"const"},"Const"),(0,r.kt)("p",null,"Read only, named variables\nBlock scoped"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    const apiBase = "https://mysite.com/api/v1/";\n    const clientId = "Adxk38dn3c9u1ndk";\n    //block scoped\n    if (true) {\n        const apiBase = "https://othersite.com/api/v2/";\n        console.log(apiBase + clientId);\n        //https://othersite.com/api/v2\n    }\n    apiBase = "https://somewhereelse";\n    //Syntax error - apiBase is read-only\n    console.log(apiBase+clientId);\n    //https://mysite.com/api/v1/Adxk38dn3c9u1ndk\n')),(0,r.kt)("h2",{id:"arrow-functions"},"Arrow functions"),(0,r.kt)("p",null,'A function shorthand or Lambda using the fat-arrow " => " syntax.\nNo constructor!\nNot just syntax sugar. Arrow functions automatically bind "this" from the containing scope.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    // array\n    const items = [1, 2, 3, 4];\n    // expression bodies or lambda\n    let byTwo = items.map(i => i * 2);\n    //with a block\n    let byFour = items.map(i => {\n        return i * 4;\n    });\n    //lexical this\n    function Person() {\n        this.name = "Charles";\n        this.nickNames = ["Charlie", "Chuck", "Chuckles"];\n        this.print = () => {\n            return this.nickNames.map((n) => {\n                return this.name + " is nicknamed " + n;\n            });\n        };\n    }\n    console.log(new Person().print());\n    //["Charles is nicknamed Charlie","Charles is nicknamed Chuck",\n    //"Charles is nicknamed Chuckles"]\n')),(0,r.kt)("h2",{id:"string-templates"},"String templates"),(0,r.kt)("p",null,"Allows for string literals with embedded expression interpolation.\nMulti-line strings!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    //define some classes\n    const style = {\n        width: "25px",\n        height: "50px",\n        display: "inline-block"\n    }\n    //arbitrary padding function\n    function getPadding() {\n        return 44;\n    }\n    //interpolate a literal string\n    let tmpl = `\n    <div style="display:${style.display};padding:${getPadding()};">\n        <span style="width:${style.width};height:${style.height}">\n            Hi it\'s ${new Date()}\n        </span>\n     </div >\n    `;\n    //log our string literal\n    console.log(tmpl);\n')),(0,r.kt)("h2",{id:"destructuring-assignments"},"Destructuring assignments"),(0,r.kt)("p",null,"Destructure: To dismantle/destroy the structure of something\nObject and Array destructuring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    //works on arrays, or objects\n    function getName(args) {\n        if ( Array.isArray(args) ) {\n            //assign the first and second element of the array\n            let [firstName,lastName] = args;\n            return `${firstName} ${lastName}`;\n        } else {\n            //assign the firstName key and lastName key\n            let {firstName,lastName} = args;\n            return `${firstName} ${lastName}`;\n        }\n    }\n    console.log(getName(["Charlie", "King"]));\n    //you can skip elements\n    let items = [ 1,2,3,4,5 ];\n    //new hotness\n    let [,second, third, fourth] = items;\n    console.log([second,third,fourth]);\n    //useful for selecting keys inside an expression\n    let books = [\n        { name:"Javascript: The Good Parts", ISBN:1224283},\n        { name: "Effective Javascript", ISBN:128263},\n        { name: "The Principles of Object-Oriented JavaScript", ISBN:122663}\n    ];\n    //old way\n    let bookISBNS = books.map(function(b){\n        return b.ISBN;\n    });\n    //new hotness\n    let bookNames = books.map( ({name}) => name);\n    console.log(bookISBNS);\n    console.log(bookNames);\n')),(0,r.kt)("h2",{id:"object-literals"},"Object literals"),(0,r.kt)("p",null,"New property value shortand syntax    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    let name = "Charlie",\n        age = 29;\n    const me = {\n        name,\n        age,\n        //old way\n        weight: function(){\n            return 86.1826;\n        },\n        //new hotness\n        height() {\n            return 180;\n        }\n    }\n    //view the results\n    console.log(me.name);\n    console.log(me.age);\n    console.log(me.weight());\n    console.log(me.height());\n')),(0,r.kt)("h2",{id:"default-args"},"Default args"),(0,r.kt)("p",null,"Define default parameters for functions\nEncloses the outer scope"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    //OMG default params\n    function getApiUrl (resource, base = "http://b.com/api") {\n        return `${base}/${resource}`;\n    }\n    let staticBase = "http://b.com/content";\n    //you can utilize outer scope\n    function getStaticUrl (resource, base = staticBase) {\n        return `${base}/${resource}`;\n    }\n    ////OMGWTF expressions in params!!\n    function getThumb(resource, width, dpi = width/10 ) {\n        return `${staticBase}/${resource}?width=${width}&dpi=${dpi}`;\n    }\n    console.log(getApiUrl("image"));\n    console.log(getStaticUrl("doc.pdf"));\n    console.log(getThumb("image.jpg",200));\n')),(0,r.kt)("h2",{id:"spread-operator"},"Spread operator"),(0,r.kt)("p",null,"Expands expressions where multiple args are expected\nA better fn.apply()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    function getFullName (firstName,lastName) {\n        return `${firstName} ${lastName}`;\n    }\n    let names = ["Charles","King","James","King","Maggie","King"];\n\n    //spread array as args\n    let fullName = getFullName(...names);\n    console.log(fullName);\n\n    //combine with destruturing\n    let [ cFirst, cLast, ...rest ] = names;\n    console.log([cFirst,cLast,rest]);\n\n    //or array literal concatenation\n    let who = ["Spongebob","Squarepants"]\n    let where = [...who, "lives in", "a", "pineapple","under","the","sea"];\n    console.log(where);\n\n    //use for push and unshift: La m\xe9thode unshift() ajoute un ou plusieurs \xe9l\xe9ments au d\xe9but d\'un tableau et renvoie la nouvelle longueur du tableau.\n    let start = [1,2,3];\n    let end = [4,5,6];\n    let more = [7,8,9];\n\n    end.unshift(...start);\n    end.push(...more);\n    // result: 1,2,3,4,5,6,7,8,9\n    console.log(end);\n')),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"A formal inheritance syntax comes to JavaScript"),(0,r.kt)("p",null,"Really just syntactical sugar over JS prototypical inheritance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    class Polygon {\n        constructor(height, width) { //class constructor\n            this.name = 'Polygon';\n            this.height = height;\n            this.width = width;\n        }\n\n        sayName() { //class method\n            console.log('Hi, I am a', this.name + '.');\n        }\n    }\n\n    class Square extends Polygon {\n        constructor(length) {\n            super(length, length); //call the parent method with super\n            this.name = 'Square';\n        }\n\n        get area() { //calculated attribute getter\n            return this.height * this.width;\n        }\n    }\n\n    let s = new Square(5);\n\n    s.sayName();\n    console.log(s.area);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"output \nHi, I am a Square.\n25   \n")),(0,r.kt)("h2",{id:"iterators-"},"Iterators ???"),(0,r.kt)("p",null,'"Iterable" protocol allows object to define their own iteration behavior'),(0,r.kt)("p",null,"\"Iterable\" objects can be iterated over using 'for...of' loops"),(0,r.kt)("p",null,'"Iterators" are objects that implement a next() method that returns {value,done:bool}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1, 2, 3, 4, 5];\nlet sum = 0;\n\nfor (let v of arr) {\n    sum += v;\n}\n\nconsole.log('1 + 2 + 3 + 4 + 5 =', sum); // 1 + 2 + 3 + 4 + 5 = 15\n")),(0,r.kt)("h2",{id:"generators"},"Generators"),(0,r.kt)("p",null,'Introduces functions that "yield" control flow'),(0,r.kt)("p",null,"Seen in other languages like C#, Python"),(0,r.kt)("p",null,"Looks like a function, however it returns an iterator object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    function* range(start, end, step) {\n        while (start < end) {\n            yield start;\n            start += step;\n        }\n    }\n\n    for (let i of range(0, 10, 2)) {\n        console.log(i); // 0 2 4 6 8\n    }\n\n")),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Standardized method for modularizing your JS code"),(0,r.kt)("p",null,"Borrows concepts from Asynchronous Module Definition (AMD) and CommonJS Modules"),(0,r.kt)("p",null,"Compact like CommonJS, async like AMD"),(0,r.kt)("p",null,"Statically analyzed, so you can have circular deps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modules")),(0,r.kt)("p",null,"No more UMD!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    (function(root, factory) {\n        if (typeof define === 'function' && define.amd) {\n\n            define(['b'], function(b) {\n                        return (root.returnExportsGlobal = factory(b));\n             });\n\n        } else if (typeof exports === 'object') {\n\n            module.exports = factory(require('b'));\n\n        } else {\n\n             root.returnExportsGlobal = factory(root.b);\n\n        }\n    (this, function(b) {\n\n        //finally do actual work\n        return {};\n    }));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    //------------------------task.js-------------\n    export var falsy = 0;\n    export let truthy = 1;\n    export const read_only = \"String\";\n    export function spawn(){};\n    export function* enqueue(){};\n    export class Task {};\n    export default function () {};\n\n    //------------------------foo.js-------------\n    //named default and others\n    import taskjs, { spawn, \n        enqueue, \n        truthy, \n        falsy, \n        read_only, \n        Task \n    } from 'task';\n\n    //grab just the default export\n    import taskjs from 'task';\n    //just named\n    import { spawn, enqueue } from 'task';\n\n    //import and rename\n    import { spawn as s, enqueue } from 'task';\n\n    //entire module as an object\n    import * as task from 'task';\n\n    //load the module, don\u2019t import anything\n    import 'task';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    //import config\n    System.import('task')\n    .then(task => {\n        //do stuff with task\n    })\n    .catch(error => {\n\n    });\n")),(0,r.kt)("h2",{id:"promises"},"Promises"),(0,r.kt)("p",null,"Promises are objects that represent an eventual result."),(0,r.kt)("p",null,"Lets asynchronous methods return values like synchronous methods         "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    var longFn = function() {\n        return new Promise(function(res, rej) {\n            setTimeout(res, 1000);\n        });\n    };\n\n    var coolFn = function() {\n        console.log('cool');\n    };\n\n    // logs cool after 1 second\n    longFn().then(coolFn);\n")),(0,r.kt)("h2",{id:"map-set-weakmap-weakset"},"Map, Set, WeakMap, WeakSet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Map")),(0,r.kt)("p",null,"Just a simple Key-Value pair"),(0,r.kt)("p",null,"Except the key can be any value, not just primitives"),(0,r.kt)("p",null,'Key equality is based on the "same-value" algorithm: NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator. -MDN'),(0,r.kt)("p",null,'var m = new Map(); m.set("hello", 42); //create an obj const Person = { name: "Charlie" } //add the complex key m.set(Person, "present"); //get the value m.get(Person) === "present"; //iterable for (var v of m.values()) { console.log("value:" +v); } for (var k of m.keys()) { console.log("key:" + JSON.stringify(k)); } //supports size, not length; console.log(m.size);\nSet\nIterable object of unqiue values'),(0,r.kt)("p",null,"Iterable in insertion order"),(0,r.kt)("p",null,'No "set", just "add"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    var m = new Map();\n    m.set("hello", 42);\n                    \n    //create an obj\n    const Person = {\n        name: "Charlie"\n    }\n    //add the complex key\n    m.set(Person, "present");\n\n    //get the value\n    m.get(Person) === "present";\n\n    //iterable\n    for (var v of m.values()) {\n        console.log("value:" +v);\n    }\n\n    for (var k of m.keys()) {\n        console.log("key:" + JSON.stringify(k));\n    }\n\n    //supports size, not length;\n    console.log(m.size);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set")),(0,r.kt)("p",null,"Iterable object of unqiue values"),(0,r.kt)("p",null,"Iterable in insertion order"),(0,r.kt)("p",null,'No "set", just "add"    '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    var s = new Set();\n    s.add("hello");\n\n    //create an obj\n    const Person = {\n        name: "Charlie"\n    }\n\n    //add the complex value\n    s.add(Person);\n\n    //get the value\n    s.has(Person) === true;\n\n    // try re-add the same value, ignored\n    s.add(Person);\n\n    //iterable\n    for (var item of s) {\n        console.log(item);\n    }\n\n    //supports size;\n    console.log(s.size);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WeakMap")),(0,r.kt)("p",null,"Like a Map, but not iterable"),(0,r.kt)("p",null,'Keys cannot be primitive types. Keys are objects and are "weakly" held'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    //Weak, ya super weak.\n    var wm = new WeakMap();\n\n    //create an obj\n    const Person = {\n        name: "Charlie"\n    }\n\n    wm.set(Person, "present");\n\n    //get the value\n    console.log(wm.has(Person) === true);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WeakSet")),(0,r.kt)("p",null,"Like a Set, but not iterable"),(0,r.kt)("p",null,'Values cannot be primitive types. Values are objects and are "weakly" held'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    //weak set, bro                \n    var ws = new WeakSet();\n\n    //create an obj\n    const Person = {\n        name: "Charlie"\n    }\n\n    ws.add(Person);\n\n    //get the value\n    console.log(ws.has(Person) === true);\n')))}c.isMDXComponent=!0}}]);