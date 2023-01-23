Javascript Clean Code Best Practices
====================================

## Sommaire

- [1. Strong type checks](#1-Strong-type-checks)
- [2. Variables](#2-Variables)
- [3. Functions](#3-Functions)
- [4. Conditionals](#4-Conditionals)
- [5. ES Classes](#5-ES-Classes)
- [6. Avoid In General](#6-Avoid-In-General)

## 1. Strong type checks

Use === instead of ==

```js
// If not handled properly, it can dramatically affect the program logic. It's like, you expect to go left, but for some reason, you go right.
0 == false // true
0 === false // false
2 == "2" // true
2 === "2" // false

// example
const value = "500";
if (value === 500) {
  console.log(value);
  // it will not be reached
}

if (value === "500") {
  console.log(value);
  // it will be reached
}
```

## 2. Variables

Name your variables in a way that they reveal the intention behind it.

```js
const MAX_AGE = 30;
let daysSinceLastVisit = 10;
let currentYear = new Date().getFullYear();

const isUserOlderThanAllowed = user.age > MAX_AGE;
```

```js
let name;
let product;
```

```js
const users = ["John", "Marco", "Peter"];
users.forEach(user => {
  doSomething();
  doSomethingElse();
  register(user);
});
```

```js
const user = {
  name: "John",
  surname: "Doe",
  age: "28"
};

user.name;
```

## 3. Functions

Use long and descriptive names

```js
function notifyUser(emailAddress) {
  // implementation
}
```

```js
function getUsers({ fields, fromDate, toDate }) {
  // implementation
}

getUsers({
  fields: ['name', 'surname', 'email'],
  fromDate: '2019-01-01',
  toDate: '2019-01-18'
});
```

```js
function createShape(type = "cube") {
  // ...
}
```

```js
function notifyVerifiedUsers(users) {
  users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
  const userRecord = database.lookup(user);
  return userRecord.isVerified();
}
```

```js
const shapeConfig = {
  type: "cube",
  width: 200
  // Exclude the 'height' key
};

function createShape(config) {
  config = Object.assign(
    {
      type: "cube",
      width: 250,
      height: 250
    },
    config
  );

}

createShape(shapeConfig);
```

```js
function createFile(name) {
  fs.create(name);
}

function createPublicFile(name) {
  createFile(`./public/${name}`);
}
```

```js
class SuperArray extends Array {
  myFunc() {
    // implementation
  }
}
```

## 4. Conditionals

```js
function isUserBlocked(user) {
  // implementation
}

if (isUserBlocked(user)) {
  // implementation
}
```

```js
if (isValid) {
  // do something...
}

if (!isValid) {
  // do something...
}
```

```js
class Car {
  // ...
}

class Ford extends Car {
  // ...
  getMaximumSpeed() {
    return this.someFactor() + this.anotherFactor();
  }
}

class Mazda extends Car {
  // ...
  getMaximumSpeed() {
    return this.someFactor();
  }
}

class McLaren extends Car {
  // ...
  getMaximumSpeed() {
    return this.someFactor() - this.anotherFactor();
  }
}
```

## 5. ES Classes

Classes are the new syntactic sugar in JavaScript. Everything works just as it did before with prototype only it now looks different and you should prefer them over ES5 plain functions.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    /* ... */
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }

  printSchoolName() {
    /* ... */
  }
}
```

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  setSurname(surname) {
    this.surname = surname;
    // Return this for chaining
    return this;
  }

  setAge(age) {
    this.age = age;
    // Return this for chaining
    return this;
  }

  save() {
    console.log(this.name, this.surname, this.age);
    // Return this for chaining
    return this;
  }
}

const person = new Person("John")
    .setSurname("Doe")
    .setAge(29)
    .save();
```

## 6. Avoid In General

In general, you should do your best not to repeat yourself, meaning you shouldn't write duplicate code, and not to leave tails behind you such as unused functions and dead code.
