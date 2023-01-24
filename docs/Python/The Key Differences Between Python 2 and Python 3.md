The Key Differences Between Python 2 and Python 3
=================================================

## Why Are There Different Versions of Python?

Python 3 was introduced in 2008 with the aim of making Python easier to use and change the way it handles strings to match the demands placed on the language today

## Key Differences Between Python 2 and Python 3

- Print: 
	+ In Python 2, “print” is treated as a statement rather than a function. 
	+ Python 3 explicitly treats “print” as a function, 
- Integer Division: 
	+ 3 / 2 in Python 2 code, the result of the evaluation will be 1, not 1.5. 
	+ Python 3 evaluates 3 / 2 as 1.5 by default,
- List Comprehension Loop Variables: 
	+ In previous versions of Python, giving the variable that is iterated over in a list comprehension the same name as a global variable could lead to the value of the global variable being changed
	+ in Python 3, so you can use a variable name you already used for the control variable in your list comprehension without worrying about it leaking out
- Unicode Strings: 
	+ Python 2 requires you to mark a string with a “u” if you want to store it as Unicode
	+ Python 3 stores strings as Unicode by default,
- Raising Exceptions:
	+ in Python 2: `raise IOError, “your error message”`
	+ Python 3 requires different syntax for raising exceptions: `raise IOError(“your error message”)`