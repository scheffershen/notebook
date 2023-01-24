<?php 

declare(strict_types=1);

namespace App\Fixtures;

use PHPUnit\Framework\TestCase;
use PDO;

/**
 * 
 * Example 4.3 Sharing fixture between the tests of a test suite
 * 
 * writing tests using stubs (see Test Doubles), than by creating dependencies between tests at runtime 
 * ./vendor/bin/phpunit Fixtures/DatabaseTest.php 
 */
final class DatabaseTest extends TestCase
{
    private static $dbh;

    public static function setUpBeforeClass(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        self::$dbh = new PDO('sqlite::memory:');
    }

    public static function tearDownAfterClass(): void
    {
        fwrite(STDOUT, __METHOD__ . "\n");
        self::$dbh = null;
    }
}

