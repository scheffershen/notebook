PHP 8 Roadmap
=============

- Autoload
  - [Autoload avec composer](./)
- Composer
  - [Composer cli](./)
- Exception
  - [try & catch](./)
- Installation
  - [Downgrade from 7.4 to 7.2](./)
  - [How to Install Multiple PHP Versions on Ubuntu 22.04](./)
  - [How to migrate to PHP 8.0 on Ubuntu](./)
- Performance
  - [PHP Performance: Additional CPU cores vs Faster CPU cores](./)
- PHP 7
  - [Packt-Mastering-PHP-7.1](./)
- PHP 8
	+ data types
		* Union types
		* mixed type
	+ operators
		* variadics operator
		* nullsafe operator
			+ `$name = $_POST['name'] ?? null`
			+ `$foo?->bar?->baz;`
		* concatenation operator
		* nested ternaty operators
	+ functions
		* named arguments
		* match expressions
			+ `$class = match ($status) {
				    'completed' => 'success',
				    'in_progress' => 'warning',
				    'failed' => 'danger',
			  };`
		* arrow functions
- OOP
	+ constructor
	+ typed properties == Using Property Promotion
		+ `class Customer
		  {
			    public function __construct(
			        private string $name,
			        private string $address,
			        private string $phone
			    ) {}
		  }`
	+ magic methods
	+ serialization
- Error handing
	+ RunTimeException
	+ InvalidArgumentException
	+ [try & catch](./)
- SPL (Standard PHP Library)
	+ SplSubject;
	+ SplObjectStorage;
		* attach()
		* detach()
	+ SplObserver;
- Code Quality(pupunit, php-cs-fixer, psalm)
- PHP tests
	+ [PHPUnit Framework TestCase](./)
	+ PantherTest
	+ Prophecy
		* prophesize()
	+ Symfony\Bundle\FrameworkBundle\Test\WebTestCase
	+ [Behat](./)
	+ [Codeception](./)
- FAQs
	+ [What is the difference between echo, print, and print_r in PHP](./)
- Resource
	+ Joseph Edmonds - The Art of Modern PHP 8 - 2021
	+ Bierer D. PHP 8 Programming Tips, Tricks and Best Practices 2021
	+ Zandstra M. - PHP 8 Objects, Patterns, and Practice - 2021
	+ https://omaralbahra.medium.com/5-things-to-do-to-write-better-php-93d6090a34b8
	+ https://php.watch/versions/8.0/null-safe-operator
	+ https://www.geeksforgeeks.org/