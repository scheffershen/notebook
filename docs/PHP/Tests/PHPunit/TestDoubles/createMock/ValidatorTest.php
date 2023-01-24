<?php

declare(strict_types=1);

namespace App\TestDoubles\createMock;

use PHPUnit\Framework\TestCase;

/*
 * ./vendor/bin/phpunit TestDoubles/createMock/ValidatorTest.php 
 */
class ValidatorTest extends TestCase
{
    private Validator $validator;

    protected function setUp(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $store = new UserStore();
        $store->addUser("bob williams", "bob@example.com", "12345");
        $this->validator = new Validator($store);
    }

    protected function tearDown(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
    }

    public function testValidateCorrectPass(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $this->assertTrue(
            $this->validator->validateUser("bob@example.com", "12345"),
            "Expecting successful validation"
        );
    }

    public function testValidateFalsePassFirst(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $store = $this->createMock(UserStore::class);

        $user = $this->createMock(User::class);
        $user->expects($this->any())
            ->method("getMail")
            ->will($this->returnValue("bob@example.com"));
        $user->expects($this->any())
            ->method("getPass")
            ->will($this->returnValue("right"));


        $this->validator = new Validator($store);

        $store->expects($this->once())
            ->method('notifyPasswordFailure')
            ->with($this->equalTo('bob@example.com'));

        $store->expects($this->any())
            ->method("getUser")
            ->will($this->returnValue($user));

        fwrite(STDOUT, $this->validator->validateUser("bob@example.com", "wrong") . "\n");
        //$this->validator->validateUser("bob@example.com", "wrong");
        // $this->assertFalse($this->validator->validateUser("bob@example.com", "wrong"));
        //$this->fail("pass exception expected");
    }

    public function testValidateFalsePass(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $store = $this->createMock(UserStore::class);
        $user = $this->createMock(User::class);
        $user->expects($this->any())
            ->method("getMail")
            ->will($this->returnValue("bob@example.com"));
        $user->expects($this->any())
            ->method("getPass")
            ->will($this->returnValue("right"));

        $this->validator = new Validator($store);

        $store->expects($this->once())
            ->method('notifyPasswordFailure')
            ->with($this->equalTo('bob@example.com'));

        $store->expects($this->any())
            ->method("getUser")
            ->will($this->returnValue($user));

        fwrite(STDOUT, $this->validator->validateUser("bob@example.com", "wrong") . "\n");;
        //$this->validator->validateUser("bob@example.com", "wrong");
        //$this->assertFalse($this->validator->validateUser("bob@example.com", "wrong"));
        //$this->fail("pass exception expected");
    }
}
