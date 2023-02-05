friendsofphp/php-cs-fixer
=========================

The PHP Coding Standards Fixer (PHP CS Fixer) tool fixes your code to follow standards; whether you want to follow PHP coding standards as defined in the PSR-1, PSR-2, etc., or other community driven ones like the `Symfony` one. You can also define your (team's) style through configuration.

## Installation

	$ composer require friendsofphp/php-cs-fixer 

## Usages

	$ ./vendor/bin/php-cs-fixer fix src

--format option for the output format. Supported formats are txt (default one), json, xml, checkstyle, junit and gitlab.
--quiet Do not output any message.
-v: verbose
-vv: very verbose
-vvv: debug
-rules option limits the rules to apply to the project

    $ ./vendor/bin/php-cs-fixer fix src --rules=@PSR12
    $ ./vendor/bin/php-cs-fixer fix src --rules=line_ending,full_opening_tag,indentation_type
    $ ./vendor/bin/php-cs-fixer fix src --rules=-full_opening_tag,-indentation_type
    $ ./vendor/bin/php-cs-fixer fix src --rules=@Symfony,-@PSR1,-blank_line_before_statement,strict_comparison
    $ ./vendor/bin/php-cs-fixer fix src --rules='{"concat_space": {"spacing": "none"}}'

--dry-run flag will run the fixer without making changes to your files.
-config option can be used, like in the fix command, to tell from which path a config file should be loaded.

## Resources

- https://github.com/FriendsOfPHP/PHP-CS-Fixer
- https://cs.symfony.com/doc/usage.html
