---
title: Packt Mastering PHP 7.1
slug: Packt-Mastering-PHP-7.1
---

Packt.Mastering.PHP.7.1
=======================

2017 Packt Publishing
http://www.packtpub.com

## Sommaire

1. The All New PHP 
    - Scalar type hints 
    - Return type hints 
    - Anonymous classes 
    - Generator delegation 
    - Generator return  expressions 
    - The null coalesce operator 
    - The spaceship operator 
    - Constant arrays 
    - Uniform variable syntax 
    - Throwables 
    - Group use declarations 
    - Catching multiple exceptions types 
    - Class constant visibility modifiers 
    - Iterable pseudo-type 
    - Nullable types 
    - Void return types
    - Summary
2. Embracing Standards 
    - PSR-1 - basic coding standard 
    - PSR-2 - coding style guide 
    - PSR-3 - logger interface 
    - PSR-4 - autoloading standard 
    - PSR-6 - caching interface 
    - PSR-7 - HTTP message interface 
    - PSR-13 - hypermedia links 
    - Summary 
3. Error Handling and Logging 
    - Error handling
        + Error
            * ArithmeticError
            * DivisionByZeroError
            * AssertionError
            * ParseError
            * TypeError
            * Uncaught error handler
            * Triggering errors
        + Execption
            * Creating a custom exception handler
            * Rethrowing exceptions
            * Uncaught Exception handler
    - Logging
        + Native logging
        + Logging with Monolog
    - Summary
4.  Magic Behind Magic Methods 
    - Using __construct() 
    - Using __destruct() 
    - Using __call() 
    - Using __callStatic() 
    - Using __set() 
    - Using __get() 
    - Using __isset() 
    - Using __unset() 
    - Using __sleep() 
    - Using __wakeup() 
    - Using __toString() 
    - Using __invoke() 
    - Using __set_state() 
    - Using __clone() 
    - Using __debugInfo() 
    - Usage statistics across popular platforms 
    - Summary
5. The Realm of CLI
    - Understanding PHP CLI 
    - The Console component 
        + Setting up the Console component 
        + Creating a console command 
        + Dealing with inputs 
        + Using Console component helpers 
    - Input/output streams 
    - Process control 
        + Ticks 
        + Signals 
        + Alarms 
        + Multiprocessing 
    - Summary 
6. Prominent OOP Features
    - Object inheritance
    - Objects and references 
    - Object iteration 
    - Object comparison 
    - Traits 
    - Reflection 
    - Summary
7. Optimizing for High Performance 
    - Max execution time 
    - Memory management 
    - File uploads 
    - Session handling 
    - Output buffering 
    - Disabling debug messages 
    - Zend OPcache 
    - Concurrency 
    - Summary
8. Going Serverless 
    - Using the serverless framework 
    - Using Iron.io IronWorker 
    - Summary
9. Reactive Programming 
    - Similarities with event-driven programming 
    - Using RxPHP 
        + Installing RxPHP 
        + Observable and observer 
        + Subject 
        + Operator 
        + Writing custom operators 
        + Non-blocking IO 
        + Using React 
            * Installing React 
            * React event loop 
            * Observables and event loop    
        - Summary 
10. Common Design Patterns 
    - Base patterns 
        + The registry pattern 
        + Creational patterns 
            * The singleton pattern 
            * The prototype pattern 
            * The abstract factory pattern 
            * The builder pattern 
            * The object pool pattern 
        + Behavioral patterns 
            * The strategy pattern 
            * The observer pattern
            * The lazy initialization pattern 
            * The chain of responsibility pattern 
        + Structural patterns 
            * The decorator pattern 
    - Summary
11. Building Services 
    - Understanding the client-server relationship 
    - Working with SOAP 
        + XML extensions 
        + Creating server 
        + Creating WSDL file 
        + Creating client 
    - Working with REST 
        + JSON extensions 
        + Creating server 
        + Creating client 
    - Working with Apache Thrift (RPC) 
        + Installing Apache Thrift 
        + Defining service 
        + Creating server 
        + Creating client 
    - Understanding microservices 
    - Summary    
12. Working with Databases 
    - Working with MySQL 
        + Installing MySQL 
        + Setting up sample data 
        + Querying via the MySQLi driver extension 
            * Connecting 
            * Error handling 
            * Selecting  
            * Inserting 
            * Updating   
            * Deleting 
            * Transactions 
        + Querying via the PHP Data Objects driver extension 
            * Connecting 
            * Error handling 
            * Selecting  
            * Inserting 
            * Updating  
            * Deleting 
            * Transactions 
    - Working with MongoDB 
        + Installing MongoDB 
        + Setting up sample data
        + Querying via the MongoDB driver extension 
            * Connecting 
            * Error handling 
            * Selecting  
            * Inserting 
            * Updating  
            * Deleting 
            * Transactions 
    - Working with Redis 
        + Installing Redis 
        + Setting up sample data 
        + Querying via the phpredis driver extension 
            * Connecting 
            * Error handling 
            * Selecting  
            * Inserting 
            * Updating  
            * Deleting 
            * Transactions 
    - Summary 
13. Resolving Dependencies 
    - Mitigating the common problem 
    - Understanding dependency injection 
    - Understanding dependency injection container 
    - Summary 
14. Working with Packages 
    - Understanding Composer 
    - Understanding Packagist 
    - Using third-party packages 
    - Creating your own package 
    - Distributing your package 
    - Summary 
15. Testing the Important Bits 
    - PHPUnit 
        + Setting up the PHPUnit 
        + Setting up a sample application 
        + Writing test 
        + Executing tests 
        + Code coverage 
    - Behat 
        + Setting up Behat 
        + Setting up a sample application 
        + Writing test 
        + Executing tests 
    - phpspec 
        + Setting up phpspec
        + Writing test 
        + Executing  tests
    - jMeter
        + Writing test 
        + Executing tests
    - Summary 
16. Debugging, Tracing, and Profiling 
    - Xdebug 
        + Installation 
        + Debugging 
        + Tracing 
        + Profiling 
    - Zend Z-Ray 
        + Installing Zend Server 
        + Setting up the virtual host 
        + Using Z-Ray 
    - Summary 
17. Hosting, Provisioning, and Deployment 
    - Choosing the right hosting plan 
        + Shared server 
        + Virtual private server 
        + Dedicated server 
        + PaaS 
    - Automating provisioning 
        + Setting up the workstation machine 
        + Setting up the server machine 
        + Configuring Ansible 
        + Provisioning a web server 
    - Automating the deployment 
        + Installing Deployer 
        + Using Deployer 
    - Continuous integration 
        + Jenkins 
    - Summary

##Preface

The latest  PHP 7.1 release brings  forth   enormous    amount  of  improvements,   both    from    the language    syntax and  overall performance perspective.    There   has never   been    a   better  time    to  dig into    a   PHP than    now

##1. The All New PHP 

In this chapter, we will take a detailed look into some of the new features    introduced in PHP 7 and 7.1 releases:

- Scalar type hints 
- Return type hints 
- Anonymous classes 
- Generator delegation 
- Generator return expressions 
- The null coalesce operator 
- The spaceship operator 
- Constant arrays 
- Uniform variable syntax 
- Throwables 
- Group use declarations 
- Class constant visibility modifiers 
- Catching multiple exceptions types
- Iterable pseudo-type 
- Nullable types 
- Void return types

**Scalar type hints**

By adding the *declare(strict_types=1);* directive as the first statement in a PHP file, we can enforce the strict type checking behavior. It is worth noting that this directive only affects the specific file it is used in, and does    not affect other included files.  

**Generator delegation**

Generators allow us to write code that uses foreach to iterate over a set of  data without needing to build an array

**The null coalesce operator**

    $name   =   $_GET['name']   ??  'N/A';

?? = isset($_GET['name'] && !empty($_GET['name'], it uses both, the isset   and empty functions. 

**The spaceship operator**

With the release of PHP 7, a new spaceship <=> operator has been    introduced, with a syntax as follows:

    (expr)  <=> (expr)

The spaceship <=> operator offers combined comparison. After comparison, it  follows these conditions:

- It returns 0 if both operands are equal 
- It returns 1 if the left operand is greater 
- It returns -1 if the right operand is greater

The usefulness of the new operator is especially apparent with ordering    functions.  

    $users = ['branko', 'ivana', 'luka', 'ivano'];
    usort($users, function ($a, $b) {
        return $a <=> $b; 
    });

**Uniform variable syntax**

The new variable syntax is probably one of the most impacting features of the PHP 7 release.    

The newly   introduced  uniform variable    syntax  addresses   these   inconsistencies as  per the following example:

```php
/***    expression  syntax  ***/ 
$$foo['bar']['baz']

//  PHP 5.x meaning 
${$foo['bar']['baz']}

//  PHP 7.x meaning 
($$foo)['bar']['baz']

/***    expression  syntax  ***/ 
$foo->$bar['baz']

//  PHP 5.x meaning 
$foo->{$bar['baz']}

//  PHP 7.x meaning 
($foo->$bar)['baz']

/***    expression  syntax  ***/ 
$foo->$bar['baz']()

//  PHP 5.x meaning 
$foo->{$bar['baz']}()

//  PHP 7.x meaning 
($foo->$bar)['baz']()

/***    expression  syntax  ***/ 
Foo::$bar['baz']()

//  PHP 5.x meaning 
Foo::{$bar['baz']}()

//  PHP 7.x meaning 
(Foo::$bar)['baz']()

```

Other than addressing the preceding inconsistencies, several new syntax  combinations have been added that make the following expressions now valid:

```php
$foo()['bar'](); 
[$obj1, $obj2][0]->prop; 
getStr(){0} 
$foo['bar']::$baz; 
$foo::$bar::$baz; 
$foo->bar()::baz() 
// Assuming extension that implements actual toLower behavior
"PHP"->toLower(); 
[$obj, 'method'](); 
'Foo'::$bar
```

The PHP 7 release improved the overall error handling system by introducing the Throwable interface, and moving the errors and exceptions under its umbrella. It is now the base interface for any object that can be thrown via a throw statement. While we cannot extend it directly, we can extend the \Exception and \Error classes. While \Exception is the base class for all PHP and user exceptions, \Error is the base class for all internal PHP errors.

We could now easily rewrite our preceding try...catch...finally block into  one of the following:

```php
<?php

// Case 1 
try {               
    $mailer = new Mailer($transport); 
} catch (\Throwable $e) { // for catching both \Error and \Exception in a   single catch statement.
    echo 'Caught!'; 
} finally {   
    echo 'Cleanup!'; 
}

// Case 2 
try {
    $mailer = new Mailer($transport); 
} catch (\Error $e) { 
    echo    'Caught!'; 
} finally {
    echo    'Cleanup!'; 
}
```

**Class constant visibility modifiers**

The PHP 7.1 introduce the public, private, and protected class constant visibility modifiers

```php
class Visibility      
{       
    // Constants without defined visibility
    const THE_DEFAULT_PUBLIC_CONST = 'PHP';

    // Constants with defined visibility
    private const THE_PRIVATE_CONST = 'PHP';   
    protected const THE_PROTECTED_CONST = 'PHP';
    public const THE_PUBLIC_CONST = 'PHP';  
}
```

**Nullable types**

PHP 7.1 add a leading question mark symbol (?) to indicate that a type can be  null

```php
function welcome(?string $name)  {
   echo $name; 
}
welcome();  // invalid, throws an \Error, 
welcome(null);  // valid
```

The following is an example of a nullable type with an optional parameter value, optional in the sense that it has been assigned a default value of null already

```php
function goodbye(?string $name = null)   
{
    if (is_null($name)) {
        echo 'Goodbye!';
    } else { 
        echo "Goodbye    $name!";
    }   
} 

goodbye();  // valid 
goodbye(null); // valid 
goodbye('John');  // valid
```

The nullable types work both with scalar types (Boolean, Integer, Float, String) and compound types (Array, Object, Callable).

**Void return types**

Let's take a look at the following example

```php
function A(): void {
    // valid 
}
function B(): void { 
    return; // valid 
}
function C(): void {
    return null;  // invalid 
}
function D(): void {
    return 1;  // invalid 
}
```

##2. Embracing Standards 

##3. Error Handling and Logging

**Error handling**

Having errors and exceptions as two different error handling system introduces acertain level of confusion among developers. 

The Throwable interface is now the base interface for Error, Exception, and any other object that can be thrown via a throw statement.

**Creating a custom exception handler**

By extending the built-in Exception class, PHP lets us throw any object as if it were an exception.

```php

class UsernameException extends Exception {}

class PasswordException extends Exception {}

$username = 'john';
$password = '';

try {                       
    if (empty($username)) {
       throw new UsernameException();
    } 
    if (empty($password)) { 
        throw new PasswordException();  
    } 
    throw new Exception();
}
catch (UsernameException $e) {
    echo 'Caught UsernameException.';
} 
catch (PasswordException $e) {
    echo 'Caught PasswordException.';
} 
catch (Exception $e) {
    echo 'Caught Exception.';
}
finally {                       echo    'Finally.';             }
```

**Summary**

PHP 7 made quite a cleanup of its error handling model by wrapping most of  it under the Throwable interface. This makes it possible to catch core errors via try...catch blocks that were, prior to PHP 7, reserved for Exception only.

