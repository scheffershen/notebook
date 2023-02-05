psalm
=====

## installation

	$ composer require --dev vimeo/psalm

	// let's get Psalm to create a psalm.xml config file at level 8 and see what it has to offer us.
	$ php vendor/bin/psalm --init src/ 8

## Basic Usages

	$ vendor/bin/psalm 

	// if we plan on working up through the strictness its safe for us to ignore these INFO issues.
	$ vendor/bin/psalm --show-info=false

## Existing PHP code analysers

There are three popular PHP code analysers:

1. PHPStan
	$ vendor/bin/phpstan analyse ./src
2. Psalm
3. Phan

From the user’s perspective, all three analysers are the same