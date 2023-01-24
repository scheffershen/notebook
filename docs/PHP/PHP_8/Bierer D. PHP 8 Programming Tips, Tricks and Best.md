Bierer D. PHP 8 Programming Tips, Tricks and Best Practices 2021
================================================================

## 1. Introducing New PHP 8 OOP Features

1.1 Using constructor property promotion
	
this new feature combines property declarations and argument lists in the construct() method signature, as well as assigning defaults.

1.2 Working with attributes

Simply put, attributes are replacements for traditional PHP comment blocks that follow a prescribed syntax. 

1.3 Incorporating `match()` expressions into your program code 

`match()` expressions are a more accurate shorthand syntax that can potentially replace the tired old `switch` statement

```php
$result = match($num) {
	0, 1 => 'Foo',
	2 => 'Bar'
}
```

1.4 Understanding named arguments

Named arguments represent a way to avoid confusion when calling functions or methods with a large number of arguments

1.5 Exploring new data types

union types and mixed types

1.6 Improving code using typed properties

a typed property is a class property with a data type preassigned. 

## 2. Learning about PHP 8's Functional Additions

2.1 Working with new PHP 8 operators

- Variadics operator

The variadics operator consists of three leading dots (...) preceding a normal PHP 
variable (or object property).

- Nullsafe operator

The nullsafe operator is used in a chain of object property references. If one of the 
properties in the chain does not exist (in other words, it is considered NULL), the operator 
returns a value of NULL safely, without issuing a warning.

	$xml?->dept?->$type?->$item
	$config?->display($config->$ext($fn));

- Concatenate operator

- Ternary operator

2.2 Using arrow functions

2.3 Understanding uniform variable syntax

2.4 Learning new array- and string-handling techniques

- str_starts_with($url, "https")
- str_ends_with($url, "login")
- str_contains() // preg_match()

2.5 Securing SQLite databases with the authorize

## 3 Taking Advantage of Error-Handling Enhancements

- Understanding PHP 8 error handling
- Dealing with warnings that are now errors
- Understanding notices promoted to warnings
- Handling the @ error control operator