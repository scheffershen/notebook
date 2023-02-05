Introducing Object Calisthenics Rules for PHPStan
===

https://tomasvotruba.com/blog/2020/09/07/introducing-object-calisthenics-rules-for-phpstan/

Rule 1: Only X Level of Indentation per Method
Rule 2: No else And elseif
Rule 5: No Chain Method Call
Rule 6: No Names Shorter than 3 Chars
Rule 7: Keep Your Classes Small
Rule 9: No Setter Methods

## Introducing PHPStan Rules

    composer require symplify/coding-standard --dev

And update phpstan.neon:

    # phsptan.neon
    includes:
        - vendor/symplify/coding-standard/packages/object-calisthenics/config/object-calisthenics-rules.neon

## Rule 5: No Chain Method Call

    # phpstan.neon
    services:
        -
            class: Symplify\CodingStandard\ObjectCalisthenics\Rules\NoChainMethodCallRule
            tags: [phpstan.rules.rule]

## Rule 6: No Names Shorter than 3 Chars

    # phpstan.neon
    services:
        -
            class: Symplify\CodingStandard\ObjectCalisthenics\Rules\NoShortNameRule
            tags: [phpstan.rules.rule]
            arguments:
                minNameLenght: 3
                allowedShortNames: ['id', 'to', 'up']

## How to Switch from PHP_CodeSniffer to PHPStan rules?

    $ vendor/bin/phpstan analyse