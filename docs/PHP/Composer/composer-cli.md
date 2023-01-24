---
slug: Composer-cli
---

composer-cli (==npm==yarn==apt==pip)
====================================

Composer est un gestionnaire de dépendances pour php. 
Composer is an application-level dependency manager for PHP.

## Composer list

to see the complete list of commands,

	$ composer ou $ composer list

## Global Options

The following options are available with every command:

`--verbose` (`-v`): Increase verbosity of messages.
`--help` (`-h`): Display help information.
`--quiet` (`-q`): Do not output any message.
`--no-interaction` (`-n`): Do not ask any interactive question.
`--no-plugins`: Disables plugins.
`--no-scripts`: Skips execution of scripts defined in composer.json.
`--no-cache`: Disables the use of the cache directory. Same as setting the COMPOSER_CACHE_DIR env var to /dev/null (or NUL on Windows).
`--profile`: Display timing and memory usage information
`--ansi`: Force ANSI output.
`--no-ansi`: Disable ANSI output.
`--version` (`-V`): Display this application version.

## composer init (== npm init)

to create a composer.json

	$ composer init

### composer install

reads the composer.json, and installs them into vendor.

	$ APP_ENV=dev && composer install --prefer-dist --no-plugins --no-progress
	$ APP_ENV=dev && composer install --prefer-dist --no-progress --no-suggest --no-interaction
	
	$ composer install --prefer-dist --no-autoloader --no-scripts --no-progress --no-suggest; 

	$ composer install --prefer-dist --ansi --no-progress --no-suggest

    $ APP_ENV=prod && composer install --prefer-dist --no-plugins --no-progress --no-dev --optimize-autoloader --classmap-authoritative
    $ APP_ENV=prod && composer install --no-ansi --no-dev --no-interaction --no-progress --optimize-autoloader
    $ APP_ENV=prod && composer install --no-dev --no-scripts --prefer-dist --optimize-autoloader

    $ composer recipes:install phpunit/phpunit --force -v

`--prefer-install`: There are two ways of downloading a package: source and dist. Composer uses dist by default. If you pass --prefer-install=source (or --prefer-source) Composer will install from source if there is one. This is useful if you want to make a bugfix to a project and get a local git clone of the dependency directly. To get the legacy behavior where Composer use source automatically for dev versions of packages, use --prefer-install=auto. See also config.preferred-install. Passing this flag will override the config value.
`--dry-run`: If you want to run through an installation without actually installing a package, you can use --dry-run. This will simulate the installation and show you what would happen.
`--dev`: Install packages listed in require-dev (this is the default behavior).
`--no-dev`: Skip installing packages listed in require-dev. The autoloader generation skips the autoload-dev rules.
`--no-autoloader`: Skips autoloader generation.
`--no-progress`: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.
`--no-audit`: Does not run the audit step after installation is complete.
`--audit-format`: Audit output format. Must be "table", "plain", or "summary" (default).
`--optimize-autoloader` (`-o`): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run so it is currently not done by default.
`--classmap-authoritative` (`-a`): Autoload classes from the classmap only. Implicitly enables --optimize-autoloader.


### composer update

In order to get the latest versions of the dependencies and to update the composer.lock file,

	$ composer update

If you want to downgrade a package to a specific version without changing your composer.json you can use --with and provide a custom version constraint:

	$ composer update --with vendor/package:2.0.1

### composer require

adds new packages to the composer.json

	$ composer require behat/behat friends-of-behat/symfony-extension:^2.1 --dev 

`--dev`: Add packages to require-dev.
`--dry-run`: Simulate the command without actually doing anything.
`--no-progress`: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.

## composer remove

removes packages from the composer.json file

	$ composer remove vendor/package

`--dev`: Add packages to require-dev.
`--dry-run`: Simulate the command without actually doing anything.
`--no-progress`: Removes the progress display that can mess with some terminals or scripts which don't handle backspace characters.

## composer global

The global command allows you to run other commands like `install`, `remove`, `require` or update as if you were running them from the `COMPOSER_HOME` directory.

	$ composer global require "andres-montanez/magallanes"

## composer search

The search command allows you to search through the current project's package repositories.

	$ composer search monolog

`--only-name` (-N): Search only in package names.
`--only-vendor` (-O): Search only for vendor / organization names, returns only "vendor" as a result.
`--type` (-t): Search for a specific package type.
`--format` (-f): Lets you pick between text (default) or json output format. Note that in the json, only the name and description keys are guaranteed to be present. The rest (url, repository, downloads and favers) are available for Packagist.org search results and other repositories may return more or less data.

## composer show

To list all of the available packages

	$ composer show
	$ composer show monolog/*
	$ composer show monolog/monolog
	$ composer show monolog/monolog 1.0.2

`--all`: List all packages available in all your repositories.
`--installed` (-i): List the packages that are installed (this is enabled by default, and deprecated).
`--locked`: List the locked packages from composer.lock.
`--platform` (-p): List only platform packages (php & extensions).
`--available` (-a): List available packages only.
`--self` (-s): List the root package info.
`--name-only` (-N): List package names only.
`--path` (-P): List package paths.
`--tree` (-t): List your dependencies as a tree. If you pass a package name it will show the dependency tree for that package.
`--latest` (-l): List all installed packages including their latest version.
`--outdated` (-o): Implies --latest, but this lists only packages that have a newer version available.
`--ignore`: Ignore specified package(s). Use it with the --outdated option if you don't want to be informed about new versions of some packages
`--no-dev`: Filters dev dependencies from the package list.
`--major-only` (-M): Use with --latest or --outdated. Only shows packages that have major SemVer-compatible updates.
`--minor-only` (-m): Use with --latest or --outdated. Only shows packages that have minor SemVer-compatible updates.
`--patch-only` (-p): Use with --latest or --outdated. Only shows packages that have patch-level SemVer-compatible updates.
`--direct` (-D): Restricts the list of packages to your direct dependencies.
`--strict`: Return a non-zero exit code when there are outdated packages.
`--format` (-f): Lets you pick between text (default) or json output format.

## composer outdated

The outdated command shows a list of installed packages that have updates available, including their current and latest versions.

	$ composer outdated

### composer validate

It will check if your composer.json is valid.

	$ composer validate --strict

`--no-check-all`: Do not emit a warning if requirements in composer.json use unbound or overly strict version constraints.
`--no-check-lock`: Do not emit an error if composer.lock exists and is not up to date.
`--no-check-publish`: Do not emit an error if composer.json is unsuitable for publishing as a package on Packagist but is otherwise valid.
`--with-dependencies`: Also validate the composer.json of all installed dependencies.
`--strict`: Return a non-zero exit code for warnings as well as errors.

## composer status

If you often need to modify the code of your dependencies and they are installed from source, the status command allows you to check if you have local changes in any of them.

	$ composer status -v

## composer self-update 

To update Composer itself to the latest version,

	$ composer self-update --2

`--rollback` (-r): Rollback to the last version you had installed.
`--clean-backups`: Delete old backups during an update. This makes the current version of Composer the only backup available after the update.
`--no-progress`: Do not output download progress.
`--update-keys`: Prompt user for a key update.
`--stable`: Force an update to the stable channel.
`--preview`: Force an update to the preview channel.
`--snapshot`: Force an update to the snapshot channel.
`--1`: Force an update to the stable channel, but only use 1.x versions
`--2`: Force an update to the stable channel, but only use 2.x versions
`--set-channel-only`: Only store the channel as the default one and then exit

## composer config

The config command allows you to edit Composer config settings.

	$ composer config --list

## composer create-project

You can use Composer to create new projects from an existing package.

	$ composer create-project symfony/skeleton:"6.1.*" my_project_directory
	$ cd my_project_directory
	$ composer require webapp

	$ composer create-project symfony/website-skeleton

## composer dump-autoload

If you need to update the autoloader because of new classes in a classmap package for example

	$ composer dump-autoload --classmap-authoritative;

`--optimize` (-o): Convert PSR-0/4 autoloading to classmap to get a faster autoloader. This is recommended especially for production, but can take a bit of time to run, so it is currently not done by default.
`--classmap-authoritative` (-a): Autoload classes from the classmap only. Implicitly enables --optimize.

## composer diagnose

If you think you found a bug, or something is behaving strangely, you might want to run the diagnose command to perform automated checks for many common problems.

	$ composer diagnose

## composer archive

This command is used to generate a zip/tar archive for a given package in a given version. 

	$ composer archive vendor/package 2.0.21 --format=zip

`--format` (-f): Format of the resulting archive: tar, tar.gz, tar.bz2 or zip (default: "tar").
`--dir`: Write the archive to this directory (default: ".")
`--file`: Write the archive with the given file name.

## composer audit

This command is used to audit the packages you have installed for possible security issues.

	$ composer audit

`--no-dev`: Disables auditing of require-dev packages.
`--format` (-f): Audit output format. Must be "table" (default), "plain", or "summary".
`--locked`: Audit packages from the lock file, regardless of what is currently in vendor dir.

## composer help

To get more information about a certain command, 

	$ composer help install

## composer clear-cache

Deletes all content from Composer's cache directories.

	$ composer clear-cache
	$ composer clearcache

`--gc`: Only run garbage collection, not a full cache clear

## composer --version

	$ composer --version

`--version` (-V): Display this application version.

## FAQs

- How to install old version of composer ?
	+ $ composer self-update 1.4.1

## Resources

- https://getcomposer.org/doc/03-cli.md