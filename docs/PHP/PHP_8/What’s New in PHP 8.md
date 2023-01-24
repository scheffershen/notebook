What’s New in PHP 8
===

https://kinsta.com/blog/php-8/

## PHP 8 New Features

### Constructor Property Promotion

This RFC proposes to merge the constructor and the parameter definition. So, as of PHP 8, we have a more usable way of declaring parameters.

```php
class Point {
    public function __construct(
        public int $x = 0,
        public int $y = 0,
        public int $z = 0,
    ) {}
}
```

1. Inheritance

We don’t have any limitations in using inheritance in conjunction with promoted parameters.

```php
class Test {
    public function __construct(
        public int $x = 0
    ) {}
}

class Child extends Test {
    public function __construct(
        $x, 
        public int $y = 0,
        public int $z = 0,
    ) {
        parent::__construct($x);
    }
}
```

2. Abstract Constructors

Promoted properties are not allowed in abstract classes and interfaces:

```php
abstract class Test {
    // Error: Abstract constructor.
    abstract public function __construct(private $x);
}
 
interface Test {
    // Error: Abstract constructor.
    public function __construct(private $x);
}
```

3. Nullability

```php
class Test {
    // Error: Using null default on non-nullable property
    public function __construct(public Type $prop = null) {}

    // Correct: Make the type explicitly nullable instead
    public function __construct(public ?Type $prop = null) {}
}
```

4. Callable Type

we are not allowed to use the callable type in promoted properties:

```php
class Test {
    // Error: Callable type not supported for properties.
    public function __construct(public callable $callback) {}
}
```

5. The var Keyword Is Not Allowed

```php
class Test {
    // Error: "var" keyword is not supported.
    public function __construct(var $prop) {}
}
```

## Union Types 2.0

`Union types` accept values that can be of different types

```php
class Number {
    private int|float $number;

    public function setNumber(int|float $number): void {
        $this->number = $number;
    }

    public function getNumber(): int|float {
        return $this->number;
    }
}
```

## throw Expression

```php
$callable = fn() => throw new Exception();

// $value is non-nullable.
$value = $nullableValue ?? throw new InvalidArgumentException();
 
// $value is truthy.
$value = $falsableValue ?: throw new InvalidArgumentException();
```

## Nullsafe Operator

    $foo = $a?->b();

If `$a` is null, method `b()` isn’t called and `$foo` is set to `null`.

## New PHP Functions

- `str_contains`
- `str_starts_with()` and `str_ends_with()`
- `get_debug_type`