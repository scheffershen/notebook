Does PHP-CS-Fixer replace or complement PHPCS/PHPCBF?
=====================================================

https://github.com/FriendsOfPHP/PHP-CS-Fixer/issues/3459

Is it redundant for a project to use both PHPCS (and the corresponding fixer *phpcbf*) and *PHP-CS-Fixer*, or do the tools complement each other?

Fixing (assuming configuration files are present)

	$ vendor/bin/php-cs-fixer fix --verbose
	$ vendor/bin/phpcbf 

Linting (again, assuming configuration files are present):

	$ vendor/bin/php-cs-fixer fix --dry-run --verbose
	$ vendor/bin/phpcs

`PHP Coding Standards Fixer` since beginning was created with "fixer" approach in mind, only fixer. The "linting" feature is just a side-effect of using `dry-run`.

`PHP Code Sniffer` was created with "linting" approach, and after few years of having PHP CS Fixer in ecosystem, PHPCS started to fix as well.

`PHP CS Fixer` has almost 200 rules, `PHP CS Fixer`, we do believe that the single tool per language is better approach, resulting with great tools like `tslint`, `eslint` or `css lint`, style lint.

`PHPCS` has 2 "big" features that are not present in `PHP CS Fixer` by purpose - linting CSS and JS files. 

