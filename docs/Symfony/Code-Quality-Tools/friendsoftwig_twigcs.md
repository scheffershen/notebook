friendsoftwig_twigcs
====================

https://github.com/friendsoftwig/twigcs

## How to install

	$ composer global require friendsoftwig/twigcs

## How to run

	$ ./vendor/bin/twigcs templates

By default, twigcs only tolerates notices, this can be changed at run time:

	$ ./vendor/bin/twigcs templates --severity error # Allows notices and warnings
	$ ./vendor/bin/twigcs templates --severity notice # Disallows notices
	$ ./vendor/bin/twigcs templates --severity ignore # Allows everything

You can also exclude relative subfolders of path like this:	

	$ ./vendor/bin/twigcs templates --exclude vendor

## Restricting output

By default TwigCS will output all lines that have violations regardless of whether they match the severity level specified or not. If you only want to see violations that are greater than or equal to the severity level you've specified you can use the `--display` option. For example.

	$ ./vendor/bin/twigcs templates --severity error --display blocking

## Continuous Integration

Twigcs can be used with your favorite CI server. The command itself will return a consistent exit code telling the CI job if it failed or succeeded. You can also have a nice xml report (checkstyle format):

	$ ./vendor/bin/twigcs templates --reporter checkstyle > /path/to/report.xml

## Using older twig versions

By default twigcs is using Twig 3. This means that features like `filter` tags or filtered loops using `if` are not supported anymore. You can use an older twig version using the `twig-version` option:

	$ ./vendor/bin/twigcs templates --twig-version 2

## Custom coding standard

At the moment the only available standard is the [official one from twig](https://twig.symfony.com/doc/3.x/coding_standards.html).

You can create a class implementing `RulesetInterface` and supply it as a `--ruleset` option to the CLI script:

	$ ./vendor/bin/twigcs templates --ruleset \MyApp\TwigCsRuleset

## File-based configuration

Using configuration, you can easily store per-project settings:

```php
// ~/.twig_cs.dist
<?php

return \FriendsOfTwig\Twigcs\Config\Config::create()
    ->setName('my-config')
    ->setSeverity('warning')
    ->setReporter('json')
    ->setRuleSet(FriendsOfTwig\Twigcs\Ruleset\Official::class)
    ->setSpecificRuleSets([ // Every file matching the pattern will use a different ruleset.
        '*/template.html.twig' => Acme\Project\CustomRuleset::class,
    ])
;
```

prettier-plugin-twig-melody
===========================

This Plugin enables `Prettier` to format `.twig` files, as well as `.html.twig` and `.melody.twig`. `Melody` is a component based UI framework that uses Twig as its template language.

https://github.com/trivago/prettier-plugin-twig-melody

## install

	$ yarn add --dev prettier-plugin-twig-melody
	$ npm init -y
	$ npm install --dev prettier-plugin-twig-melody

## Use

	$ prettier --write "**/*.twig"

.prettierrc.json

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "plugins": ["./node_modules/prettier-plugin-twig-melody"]
}
```