<?php 

declare(strict_types=1);

namespace App\Fixtures;

use PHPUnit\Framework\TestCase;

/*
 * ./vendor/bin/phpunit Fixtures/StackTest.php 
 */
final class StackTest extends TestCase
{
    private $stack;

    protected function setUp(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $this->stack = [];
    }

    public function testEmpty(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $this->assertTrue(empty($this->stack));
    }

    public function testPush(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        array_push($this->stack, 'foo');

        $this->assertSame('foo', $this->stack[count($this->stack)-1]);
        $this->assertFalse(empty($this->stack));
    }

    public function testPop(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        array_push($this->stack, 'foo');

        $this->assertSame('foo', array_pop($this->stack));
        $this->assertTrue(empty($this->stack));
    }
}