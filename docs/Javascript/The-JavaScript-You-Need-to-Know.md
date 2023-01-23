The JavaScript You Need to Know
===============================

## Sommaire

- [Callback Functions in Javascript](#Callback-Functions-in-Javascript)
- [Promises in Javacript](#promises-in-javascript)
- [Map() in Javascript](#map-in-javascript)
- [Filter() and Find() in JavaScript](#filter-and-find-in-javascript)
- [Destructuring Arrays and Objects in JavaScript](#destructuring-arrays-and-objects-in-javaScript)
- [Object destructuring in JavaScript](#object-destrucuring)
- [Rest and Spread Operators in JavaScript](#rest-and-spread-operators)
- [Spread operator in JavaScript](#spread-operator)
- [Unique Value - set() in Javascript](#unique-value-set-in-javascript)
- [Dynamic Object keys in JavaScript](#dynamic-object-keys-in-javaScript)
- [Reduce() in JavaScript](#reduce-in-javascript)
- [Optional Chaining in Javascript](#optional-chaining-in-javascript)
- [Fetch API & Errors in Javascript](#fetch-api-and-errors-in-javascript)
- [How to Handle Errors in the Fetch API](#how-to-handle-errors-in-the-fetch-API)
- [Async/Await in JavaScript](#async-await-in-javascript)

## Callback Functions in JavaScript

A callback function is a function that is performed after another function has completed its execution. It is typically supplied as an input into another function.

Callbacks are critical to understand since they are used in array methods (such as `map()`, `filter()`), `setTimeout()`, event listeners (such as click, scroll)

```js
//HTML
<button class="btn">Click Me</button>

//JavaScript
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let name = 'John doe';
  console.log(name.toUpperCase())
})
```

A callback function can be either an ordinary function or an arrow function.

## Promises in JavaScrip

Callback hell is a big issue caused by coding with complex nested callbacks.

The primary reason for using promises is to prevent callback hell. With Promises, we may write `asynchronous code` in a `synchronous manner`.

JavaScript promise syntax:

```js
const myPromise = new Promise((resolve, reject) => {  
    // condition
});
```

A practical use for promises would be in HTTP requests, where you submit a request and do not receive a response right away because it's an asynchronous activity. You only receive the answer (data or error) when the server responds.

Promises have two parameters, one for success (resolve) and one for failure (reject). Each has a condition that must be satisfied in order for the Promise to be resolved – otherwise, it will be rejected:

```js
const promise = new Promise((resolve, reject) => {  
    let condition;
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});
```

There are 3 states of the Promise object:

- Pending: by default, this is the Initial State, before the Promise succeeds or fails.
- Resolved: Completed Promise
- Rejected: Failed Promise

Finally, let's try to re-implement the callback hell as a promise:

```js
function addName (time, name){
  return new Promise ((resolve, reject) => {
    if(name){
      setTimeout(()=>{
        console.log(name)
        resolve();
      },time)
    }else{
      reject('No such name');
    }
  })
}

addName(2000, 'Joel')
  .then(()=>addName(2000, 'Victoria'))
  .then(()=>addName(2000, 'John'))
  .then(()=>addName(2000, 'Doe'))
  .then(()=>addName(2000, 'Sarah'))
  .catch((err)=>console.log(err))
```

## Map() in JavaScript

One of the most often used methods is Array.map(), which allows you to iterate over an array and modify its elements using a callback function.

Assume we have an array of users that contains their information.

```js
let users = [
  { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
  { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
  { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" }
];

let singleUser = users.map((user)=>{
  //let's add the firstname and lastname together
  let fullName = user.firstName + ' ' + user.lastName;
  return `
    <h3 class='name'>${fullName}</h3>
    <p class="age">${user.age}</p>
  `
});
```

You should note that:

- map() always returns a new array, even if it’s an empty array.
- It doesn’t change the size of the original array compared to the filter method
- It always makes use of the values from your original array when making a new one.

The map method works almost like every other JavaScript iterator such as forEach() but it’s proper to always use the map method whenever you are going to return a value.

## Filter() and Find() in JavaScript

filter() provides a new array depending on certain criteria. Unlike map(), it can alter the size of the new array,

whereas find() returns just a single instance (this might be an object or item). If several matches exist, it returns the first match – otherwise, it returns undefined.

```js
let users = [
  { firstName: "Susan", age: 14 },
  { firstName: "Daniel", age: 16 },
  { firstName: "Bruno", age: 56 },
  { firstName: "Jacob", age: 15 },
  { firstName: "Sam", age: 64 },
  { firstName: "Dave", age: 56 },
  { firstName: "Neils", age: 65 }
];

// for young people
const youngPeople = users.filter((person) => {
  return person.age <= 15;
});

//for senior people
const seniorPeople = users.filter((person) => person.age >= 50);

console.log(seniorPeople);
console.log(youngPeople); 
```

```js
const Bruno = users.find((person) => person.firstName === "Bruno");

console.log(Bruno);
```

## Destructuring Arrays and Objects in JavaScript

Destructuring is a JavaScript feature introduced in ES6 that allows for faster and simpler access to and unpacking of variables from arrays and objects.

```js
let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];

let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3); //"Mango" "Pineapple" "Orange"
```

You might be wondering how you could skip data if you just want to print the first and final fruits, or the second and fourth fruits. You would use commas as follows:

```js
const [fruit1 ,,,, fruit5] = fruits;
const [,fruit2 ,, fruit4,] = fruits;
```

## Object destructuring

Let’s now see how we could destructure an object

```js
const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing"
  }
};

const {firstName, age, hobbies:{hobby1}} = Susan;

console.log(firstName, age, hobby1); //"Susan" 14 "singing"
```

We can also do this within a function:

```js
function individualData({firstName, age, hobbies:{hobby1}}){
  console.log(firstName, age, hobby1); //"Susan" 14 "singing"
}

individualData(Susan);
```

## Rest and Spread Operators in JavaScript

JavaScript spread and rest operators use three dots `...`

The rest operator gathers or collects items – it puts the “rest” of some specific user-supplied values into a JavaScript array/object.

```js
let fruits= ["Mango", "Pineapple" , "Orange", "Lemon", "Apple"];

const [firstFruit, secondFruit, ...rest] = fruits

console.log(firstFruit, secondFruit, rest); //"Mango" "Pineapple" ["Orange","Lemon","Apple"]

const chosenFruit = rest.find((fruit) => fruit === "Apple");
console.log(`This is an ${chosenFruit}`); //"This is an Apple"
```

We've just worked with arrays – now let's deal with objects, which are absolutely the same.

```js
const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing"
  }
};

const {age, ...rest} = Susan;
console.log(age, rest);
```

## Spread operator

The spread operator, as the name implies, is used to spread out array items. It gives us the ability to get a list of parameters from an array.

```js
let pets= ["cat", "dog" , "rabbits"];

let carnivorous = ["lion", "wolf", "leopard", "tiger"];

// combine these two arrays into just one animal array.
let animals = [pets, carnivorous];
console.log(animals); //[["cat", "dog" , "rabbits"], ["lion", "wolf", "leopard", "tiger"]]

// And we can achieve this using the spread operator:
let animals = [...pets, ...carnivorous];
console.log(animals); //["cat", "dog" , "rabbits", "lion", "wolf", "leopard", "tiger"]
```

This also works with objects

```js
let name = {firstName:"John", lastName:"Doe"};
let hobbies = { hobby1: "singing", hobby2: "dancing" }

// using the spread operator:
let myInfo = {...name, ...hobbies};

console.log(myInfo); //{firstName:"John", lastName:"Doe", hobby1: "singing", hobby2: "dancing"}
```

## Unique Value - Set() in JavaScript

fetch the categories value from an array.

```js
let animals = [
  {
    name:'Lion',
    category: 'carnivore'
  },
  {
    name:'dog',
    category:'pet'
  },
  {
    name:'cat',
    category:'pet'
  },
  {
    name:'wolf',
    category:'carnivore'
  }
]

// loop through the array, but I got repeated values
let category = animals.map((animal)=>animal.category);
console.log(category); //["carnivore" , "pet" , "pet" , "carnivore"]

// A set is a collection of items which are unique, that is no element can be repeated.

//wrap your iteration in the set method like this
let category = [...new Set(animals.map((animal)=>animal.category))];

console.log(category); ////["carnivore" , "pet"]
```

This meant that I needed to set up a condition to avoid repetition. It was a little bit tricky until I came across the set() constructor/object provided by ES6 :).

## Dynamic Object keys in JavaScript

This enables us to add object keys using square bracket notation [].

These are keys that might not follow the standard naming convention of properties/keys in a object.

For example, suppose we name our key with a dash in between words, for example (lion-baby):

```js
let lion = {
  'lion-baby' : "cub"
};

// dot notation
console.log(lion.lion-baby); // error: ReferenceError: baby is not defined
// bracket notation
console.log(lion['lion-baby']); // "cub"
```

You can see the difference between the dot notation and the bracket notation. Let's see other examples:

```js
let category = 'carnivore';
let lion = {
  'lion-baby' : "cub",
  [category] : true,
};

console.log(lion); // { lion-baby: "cub" , carnivore: true }
```

You can also perform more complex operations by using conditions within the square bracket, like this:

```js
const number = 5;
const gavebirth = true;

let animal = {
  name: 'lion',
  age: 6,
  [gavebirth && 'babies']: number
};

console.log(animal); // { name: "lion" , age: 6 , babies: 5 }
```

## reduce() in JavaScript

It can replace the filter() and find() methods and is also quite handy when doing map() and filter() methods on large amounts of data.

reduce() allows you to filter and map in a single pass.

the main distinction is that it reduces our array to a single value, which may be a number, array, or object.

reduce() method is that we are passing in two arguments

The first argument is the sum/total of all computations, and the second is the current iteration value

```js
let staffs = [
  { name: "Susan", age: 14, salary: 100 },
  { name: "Daniel", age: 16, salary: 120 },
  { name: "Bruno", age: 56, salary: 400 },
  { name: "Jacob", age: 15, salary: 110 },
  { name: "Sam", age: 64, salary: 500 },
  { name: "Dave", age: 56, salary: 380 },
  { name: "Neils", age: 65, salary: 540 }
];

const totalSalary = staffs.reduce(
	(total, staff) => {
	  total += staff.salary;
	  return total;
},0)

console.log(totalSalary); // 2150

//Let’s now calculate the 10% tithe for all staff and get the total
const salaryInfo = staffs.reduce(
  (total, staff) => {
    let staffTithe = staff.salary * 0.1;
    total.totalTithe += staffTithe;
    total['totalSalary'] += staff.salary;
    return total;
  },
  { totalSalary: 0, totalTithe: 0 }
);

console.log(salaryInfo); // { totalSalary: 2150 , totalTithe: 215 }

```

## Optional chaining in JavaScript

Optional chaining is a safe way to access nested object properties in JavaScript 

```js
let users = [
{
    name: "Sam",
    age: 64,
    hobby: "cooking",
    hobbies: {
      hobb1: "cooking",
      hobby2: "sleeping"
    }
  },
  { name: "Bruno", age: 56 },
  { name: "Dave", age: 56, hobby: "Football" },
  {
    name: "Jacob",
    age: 65,
    hobbies: {
      hobb1: "driving",
      hobby2: "sleeping"
    }
  }
];

users.forEach((user) => {
  console.log(user.hobbies.hobby2);
});
//"sleeping"
//error: Uncaught TypeError: user.hobbies is undefined

// Conditional rendering method:
users.forEach((user) => {
  console.log(user.hobbies && user.hobbies.hobby2);
});

// Optional chaining:
users.forEach((user) => {
  console.log(user ?.hobbies ?.hobby2);
});

```

## Fetch API & Errors in JavaScript

The fetch API delivers a promise by default

```js
fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Line 1: we got the data from the API, which returned a promise
Line 2: We then got the .json() format of the data which is also a promise
Line 3: We got our data which now returns JSON
Line 4: We got the errors in case there are any

## How to Handle Errors in the Fetch API

fetch provides a simple response.ok flag that indicates whether the request failed or an HTTP response’s status code is in the successful range.

```js
fetch("https://type.fit/api/quotes")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Async/Await in JavaScript

Async/Await allows us to write asynchronous code in a synchronous fashion.

An async function always returns a promise.

```js
const fetchData = async () =>{
  try {
    const quotes = await fetch("https://type.fit/api/quotes");
    const response = await quotes.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
```

## Resources

https://www.freecodecamp.org/news/top-javascript-concepts-to-know-before-learning-react/