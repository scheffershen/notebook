Attributes in PHP 8
===================

https://php.watch/articles/php-attributes

05/2020

## What are Attributes

Attributes are small meta-data elements added for PHP classes, functions, closures, class properties, class methods, constants, and even on anonymous classes.

PHP DocBlock comments are probably the most familiar example. These comments are somewhat structured with @param "annotations". 

```php
/**
 * @param string $message
 */
function foo(string $message) {}
```

Frameworks such as Drupal, Symfony, and Doctrine use annotations to provide auxiliary information for certain classes in an organized way.

```php
class AboutPage extends AbstractController {
    /**
     * @Route("/about")
     */
    public function page() {}
}
```

Attributes in PHP 8 goes steps ahead of this, which brings a structured and engine-validated approach to annotations.

```php
class AboutPage extends AbstractController {
    #[Route('/about')]
    public function page() {}
}
```

## Attributes in other languages

- Java is probably the most popular one, which has Annotations with a syntax similar to `@Route(name = "/about")`.
- Rust has Attributes with a syntax similar to `#[route(name = "/about")]`, that is exactly the same as PHP's implementation.
- Python annotations are called Decorators, and follow a similar syntax: `@route("/about")`.

## Attributes vs Annotations

Attributes and Annotations provide the same functionality. The word "Annotations" is already being used widely in PHP libraries and frameworks, so the name Attributes help to minimize the confusion with Annotations.

## Attributes Syntax and Features

The Attribute syntax is simply braces made with `#[` and `]`

## Design Goals

PHP 8 Attributes provide convenient access to the information.

## More than one attribute allowed

Each item that receives Attributes can have zero or many attributes,

```php
#[Attr]
#[FooAttr]
function foo(){}

#[Attr, FooAttr]
function bar(){}
```

## Attribute Examples

Functions

```php
#[Attr('foo')]
function example(){}
```

Classes

```php
#[Attr('foo')]
class Example {}
```

Function/Method Arguments

```php
function example(#[Attr('foo')] string $foo) {}
```

Class Properties

```php
class Foo {
    #[Attr('foo')]
    private string $foo;
}
```

Class Constants

```php
class Foo {
    #[Attr('foo')]
    private const FOO = 'foo';
}
```

Closures

```php
$fn = #[Attr('foo')] fn() => 1 > 2;

$fn = #[Attr('foo')] function() {
    return 1 > 2;
}
```

Anonymous Classes

```php
$instance = new #[Attr('foo')] class {};
```

With DocBlocks

```php
#[AttributeBefore('foo')]
#[AttributeBefore2('foo')]
#[AttrCommas('foo'), AttrCommas('foo')]
/**
 * Foo
 */
#[AttributeAfter('foo')]
function example() {}
```

## Complete Example

```php
#[FooAttribute]
function foo_func(#[FooParamAttrib('Foo1')] $foo) {}

#[FooAttribute('hello')]
#[BarClassAttrib(42)]
class Foo {
    #[ConstAttr]
    #[FooAttribute(null)]
    private const FOO_CONST = 28;
    private const BAR_CONST = 28;

    #[PropAttr(Foo::BAR_CONST, 'string')]
    private string $foo;

    #[SomeoneElse\FooMethodAttrib]
    public function getFoo(#[FooClassAttrib(28)] $a): string{}
}

// Declare Attributes

/*
 * Attributes are declared with `#[Attribute]`.
 */

#[Attribute]
class FooAttribute {
    public function __construct(?string $param1 = null) {}
}

#[Attribute]
class ClassAttrib {
    public function __construct(int $index) {}
}
```

## Declaring Attributes

The attribute itself may be declared as a class. 

A PHP attribute is a standard PHP class, declared with `#[Attribute]` attribute.

```php
#[Attribute]
class FooAttribute{

}
```

When declaring the attribute, it is possible to declare the targets the attribute must be used.

```php
#[Attribute(Attribute::TARGET_CLASS)]
class Foo {}
```

It accepts a bit-mask to allow the attribute in one or more targets.

```php
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class Foo {}
```

## Attribute class is declared final

The `Attribute` class is declared `final`, which prevents it from being extended.

## Complete Reflection Example

```php
#[exampleAttribute('Hello world', 42)]
class Foo {}

#[Attribute]
class ExampleAttribute {
    private string $message;
    private int $answer;
    public function __construct(string $message, int $answer) {
        $this->message = $message;
        $this->answer = $answer;
    }
}
```

## Migrating from Doctrine Annotations to Attributes

```php 
- /** @ORM\Entity */
+ #[ORM\Entity]
  class Book {
-   /** 
-    * @ORM\Id
-    * @ORM\Column(type="string")
-    * @ORM\GeneratedValue
-    */
+   #[ORM\Id]
+   #[ORM\Column("string")]
+   #[ORM\GeneratedValue]
    private string $isbn;
  }

```












