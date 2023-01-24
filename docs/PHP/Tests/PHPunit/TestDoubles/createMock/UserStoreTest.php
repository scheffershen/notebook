<?php

declare(strict_types=1);

namespace App\TestDoubles\createMock;

use PHPUnit\Framework\TestCase;

/*
 * ./vendor/bin/phpunit TestDoubles/createMock/UserStoreTest.php 
 */
class UserStoreTest extends TestCase
{
    private UserStore $store;

    protected function setUp(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $this->store = new UserStore();
    }

    public function testAddUserShortPass2(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        try {
            $this->store->addUser("bob williams", "bob@example.com", "ff");
            $this->assertEquals("bob williams", $this->store->getUser()['name']);
        } catch (\Exception $e) {
            $this->assertEquals("Password must have 5 or more letters", $e->getMessage());
            return;
        }

        $this->fail("Short password exception expected");
    }

    public function testAddUserShortPass(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $this->expectException('\\Exception');
        $this->store->addUser("bob williams", "a@b.com", "ff");
        $this->fail("Short password exception expected");
    }

    public function testAddUserDuplicate(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        try {
            $ret = $this->store->addUser("bob williams", "a@b.com", "123456");
            $ret = $this->store->addUser("bob stevens", "a@b.com", "123456");
            self::fail("Exception should have been thrown");
        } catch (\Exception $e) {
            $const = $this->logicalAnd(
                //$this->logicalNot( $this->contains("bob stevens")),
                $this->isType('object')
            );
            self::AssertThat($this->store->getUser("a@b.com"), $const);
        }
    }

    public function testGetUser(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        $this->store->addUser("bob williams", "a@b.com", "12345");
        $user = $this->store->getUser("a@b.com");
        $this->assertEquals($user->getMail(), "a@b.com");
    }

}
