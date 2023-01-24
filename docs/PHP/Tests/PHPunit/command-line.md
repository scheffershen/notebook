command line
============

## examples

	// phpunit <php test file path> --<option> <name of function>
	$ php vendor/bin/phpunit tests/CartTest.php --colors --filter the_cart_tax

## options

--exclude-group
--group
--colors: output with the color
--filter: filtered by the name of test function
	- Ex: phpunit tests/testA.php --filter testBla 