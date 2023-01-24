---
title: What is the difference between echo print and print_r in PHP
slug: What-is-the-difference-between-echo-print-and-print_r-in-PHP
---

What is the difference between echo, print, and print_r, var_dump, printf, sprinf in PHP?
===============================================================

## echo, print, and print_r

- The echo has a void return type, 
- print has a return value of 1 so it can be used in expressions=(). 
- print_r is used to display human-readable information about a variable.

```php
<?php
   $arr = array( "John", "Jacob", "Tom", "Tim");
   echo "Array...\n";
   foreach( $arr as $value ) {
      echo "Value = $value \n";
   }
   echo "\nDisplaying Array Values using print...\n";
   foreach( $arr as $value ) {
      print( "Value = $value \n");
   }
   echo "\nDisplaying Array Values using print_r...\n";
   print_r($arr);
?>
```

Output

```
Array...
Value = John
Value = Jacob
Value = Tom
Value = Tim

Displaying Array Values using print...
Value = John
Value = Jacob
Value = Tom
Value = Tim

Displaying Array Values using print_r...
Array (
   [0] => John
   [1] => Jacob
   [2] => Tom
   [3] => Tim
)
```

## php var_dump() vs print_r()

The `var_dump()` function displays structured information about variables/expressions including its type and value.
The `print_r()` displays information about a variable in a way that's readable by humans

Example: 

	$obj = (object) array('qualitypoint', 'technologies', 'India');

`var_dump($obj)` will display below output in the screen.

	object(stdClass)#1 (3) {
	 	[0]=> string(12) "qualitypoint"
	 	[1]=> string(12) "technologies"
	 	[2]=> string(5) "India"
	}

And, `print_r($obj)` will display below output in the screen.

	stdClass Object ( 
	 	[0] => qualitypoint
	 	[1] => technologies
	 	[2] => India
	)

## printf vs sprintf

- `printf()` will output a formatted string using placeholders
- `sprintf()` will return the formatted string

```php
$name = 'Jeff';

// The `%s` tells PHP to expect a string
//            ↓  `%s` is replaced by  ↓
printf("Hello %s, How's it going?", $name);
#> Hello Jeff, How's it going?

// Instead of outputting it directly, place it into a variable ($greeting)
$greeting = sprintf("Hello %s, How's it going?", $name);
echo $greeting;
#> Hello Jeff, How's it going?
```