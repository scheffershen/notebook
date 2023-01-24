---
slug: try-catch
title: Try & catch
---

try & catch
===========


## What are exceptions?

Like in many other languages, exceptions in PHP are errors that can be caught and gracefully handled instead of crashing your app.

## When to use exceptions?

Use exceptions when you need to gracefully handle an unexpected event instead of just crashing like a fatal error.

## Throw exceptions

An exception can be thrown using the throw keyword on an instance of the Exception class. The first parameter is a string describing your error.

## Try catch example

In this example, we catch the exception thrown first and display it above our form.

```php
try {
    if (empty($_POST['age'])) {
        throw new Exception('We need to know how old you are.');
    }
 
    if ($_POST['age'] < 18) {
        throw new Exception('You are too young.');
    }
} catch (Exception $exception) {
    $error = $exception->getMessage();
}
```

## Try catch custom exceptions

Imagine we have a custom exception for each type of error.

```php
// Defining custom exceptions is as simple as that.
class NotFoundException extends Exception {}
 
class ValidationException extends Exception {}

try {
    if (empty($_SERVER['REQUEST_URI']) || $_SERVER['REQUEST_URI'] !== '/form') {
        throw new NotFoundException();
    }
 
    if (empty($_POST['age'])) {
        throw new ValidationException('We need to know how old you are.');
    }
 
    if ($_POST['age'] < 18) {
        throw new ValidationException('You are too young.');
    }
 
    header('Location: /secret-location');
 
    exit;
} catch (NotFoundException $exception) {
    http_response_code(404);
 
    exit('Page not found.');
} catch (ValidationException $exception) {
    $validationError = $exception->getMessage();
}
```