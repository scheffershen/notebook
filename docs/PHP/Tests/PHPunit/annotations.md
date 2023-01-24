Annotations
===========

## @before: 

pour spécifier des méthodes devant être appelées avant chaque méthode de test

## @dataProvider

A test method can accept arbitrary arguments. These arguments are to be provided by a data provider method 

A data provider method must be public and either return an array of arrays or an object that implements the Iterator interface and yields an array for each iteration step.

For each array that is part of the collection the test method will be called with the contents of the array as its arguments.

```php
<?php
class DataTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @dataProvider provider
     */
    public function testAdd($a, $b, $c)
    {
        $this->assertEquals($c, $a + $b);
    }

    public function provider()
    {
        return array(
          array(0, 0, 0),
          array(0, 1, 1),
          array(1, 0, 1),
          array(1, 1, 3)
        );
    }
}
?>
```

## @codeCoverageIgnore: 

pour exclure des lignes de code de l’analyse de couverture

## @depends

express dependencies between test methods

```php
<?php
class StackTest extends \PHPUnit\Framework\TestCase
{
    public function testEmpty()
    {
        $stack = array();
        $this->assertEmpty($stack);

        return $stack;
    }

    /**
     * @depends testEmpty
     */
    public function testPush(array $stack)
    {
        array_push($stack, 'foo');
        $this->assertEquals('foo', $stack[count($stack)-1]);
        $this->assertNotEmpty($stack);

        return $stack;
    }

    /**
     * @depends testPush
     */
    public function testPop(array $stack)
    {
        $this->assertEquals('foo', array_pop($stack));
        $this->assertEmpty($stack);
    }
}
?>
```

In the example above, the first test, `testEmpty()`, creates a new array and asserts that it is empty. The test then returns the fixture as its result. The second test, `testPush()`, depends on `testEmpty()` and is passed the result of that depended-upon test as its argument. Finally, `testPop()` depends upon `testPush()`.

## @group:  

les groupes en utilisant les options --group et --exclude-group du lanceur de test en ligne de commandes

## @test

