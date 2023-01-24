---
slug: Autoload-avec-composer
---

php Autoload avec composer
==========================

## Sommaire

- [Composer](##composer)
- 1 - Initier le projet avec composer :
- [psr-4 vs classmap](##psr-1-vs-classmap)
- [Resources](##resources)
- [autoload comparaison entre php, javascript, python]

## What is autoloading?

Autoloading means the automatic loading of the files required for your project/application.

## Composer == npm, yarn, pip, apt

Composer est un gestionnaire de dépendances pour php. (Composer is an application-level dependency manager for PHP. )

Composer permet notamment :
- de déclarer les librairies ou packages dont le projet dépend,
- de gérer les installation et les mises à jour de ces libraires,
- de mettre en place facilement un "autoloader" afin que nous, développeurs php, n'ayons plus à nous soucier d'importer des fichiers via des "include" ou des "require".

## 1 - Initier le projet avec composer :

	$ composer init

## 2 - Autoload PSR-4 = 3 - Création du fichier vendor/autoload.php

Regenerate the autoloader file (Pour mettre à jour l'auto-chargement de Composer :)

	$ composer dump-autoload

Cela va créer le fichier autoload.php dans le répertoire vendor.

## Autoload examples

Sous la clé psr-4, on définit un "mappage" des espaces de noms aux chemins, par rapport à la racine du package

Lors du chargement automatique d'une classe comme Foo\\Bar\\Baz, un préfixe d'espace de noms Foo\\ pointant vers un répertoire src/ signifie que le chargeur automatique recherchera un fichier nommé src/Bar/Baz.php et l'inclura s'il est présent. 

Les préfixes d'espace de noms doivent se terminer par \\ pour éviter les conflits entre préfixes similaires.

```
	"autoload": {
	    "psr-4": {
	        "App\\": "src/",
	        "App\\Services\\": "app/services"
	    }
	},
    "autoload-dev": {
        "psr-4": {
            "App\\Tests\\": "tests/"
        }
    },
```

## Chargement de l'autooad (index.php)

Dans le fichier principal de votre projet, index.php par convention, ajouter la ligne suivante :

index.php

	require 'vendor/autoload.php';

## Types of autoloading

1. Classmap
2. PSR-0
3. PSR-4
4. Files

### 1. Classmap 

Classmap as its name implies creates a mapping of all the classes inside the specified directories into a single key => value array, which can be found in the generated file `vendor/composer/autoload_classmap.php`

```
    "autoload": {
        "classmap": ["src/", "lib/", "Something.php"]
    }
    // ou
    "autoload": {
        "classmap": ["Behavioral", "Creational", "Structural", "More"]
    }
```

### 2. PSR-0

This is the PSR standard for autoloading files before PSR-4 and it is now Deprecated.

```
{
    "autoload": {
        "psr-0": {
            "Acme\\Foo\\": "src/",
            "Vendor\\Namespace\\": "src/",
            "Vendor_Namespace_": "src/"
        }
    }
}
```

All PSR-0 references are combined into a single key => value array, which can be found in the generated file `vendor/composer/autoload_namespaces.php`.

For example, `Acme\Foo\Bar` would resolve to `src/Acme/Foo/Bar.php`. and `Acme_Foo_Bar` would also be resolved to `src/Acme/Foo/Bar.php`.

### 3. PSR-4

PSR-4 is currently the recommended way of autoloading since it offers greater ease of use.

```
{
    "autoload": {
        "psr-4": {
            "Acme\\Foo\\": "src/",
            "Vendor\\Namespace\\": ""
        }
    }
}
```

Unlike PSR-0 underscores will not be converted to `DIRECTORY_SEPARATOR` and the namespace prefix is not present in the path.

For example, `Acme\Foo\Bar` would resolve to `src/Bar.php`.

All the PSR-4 references are combined, during install/update into a single key => value array, which can be found at `vendor/composer/autoload_psr4.php`.

### 4. Files

Classmap, `PSR-0`, and `PSR-4` deal with classes only. If you want to autoload functions, you can use `files` autoloading. 

```
{
    "autoload": {
        "files": ["src/helpers.php"]
    }
}
```

### Note on Classmap and PSR-4

Classmap autoloading is the fastest among autoloaders since it loads classes from the prebuilt array. But the problem with classmap is that you need to regenerate the classmap array every time you create a new class file. So in the development environment PSR-4 autoloading will be the most suited one.

## chamilo-lms composer.json example

url: https://github.com/chamilo/chamilo-lms.git

```
    "autoload": {
        "psr-4": {
            "Chamilo\\": "src/"
        },
        "files": [
            "public/legacy.php"
        ],
        "classmap": [
            "public/main/auth",
            "public/main/admin",
            "public/main/course_description",
            "public/main/dropbox",
            "public/main/exercise",
            "public/main/gradebook/lib",
            "public/main/lp",
            "public/main/inc/lib",
            "public/plugin",
            "public/main/install",
            "public/main/survey"
        ]
    },
    "autoload-dev": {
        "psr-4": {
            "Chamilo\\Tests\\": "tests/"
        }
    },
```

## claroline-lms composer.json example

url: https://github.com/claroline/Distribution.git

```
    "autoload": {
        "psr-4": {
            "Claroline\\CoreBundle\\": "main/core",
            "Claroline\\AppBundle\\": "main/app",
            "Claroline\\AuthenticationBundle\\": "main/authentication",
            "Claroline\\BundleRecorder\\": "main/recorder",
            "Claroline\\InstallationBundle\\": "main/installation",
            "Claroline\\MigrationBundle\\": "main/migration",
            "Claroline\\KernelBundle\\": "main/kernel",
            "Claroline\\ThemeBundle\\": "main/theme",
            "Claroline\\AgendaBundle\\": "plugin/agenda",
            "Claroline\\AnalyticsBundle\\": "plugin/analytics",
            "Claroline\\AnnouncementBundle\\": "plugin/announcement",
            "Claroline\\ForumBundle\\": "plugin/forum",
            "Claroline\\HistoryBundle\\": "plugin/history",
            "Claroline\\HomeBundle\\": "plugin/home",
            "Claroline\\ImagePlayerBundle\\": "plugin/image-player",
            "Claroline\\MessageBundle\\": "plugin/message",
            "Icap\\NotificationBundle\\": "plugin/notification",
            "Claroline\\PdfPlayerBundle\\": "plugin/pdf-player",
            "Claroline\\RssBundle\\": "plugin/rss",
            "Claroline\\ScormBundle\\": "plugin/scorm",
            "Claroline\\TagBundle\\": "plugin/tag",
            "Claroline\\TeamBundle\\": "plugin/team",
            "Claroline\\TextPlayerBundle\\": "plugin/text-player",
            "Claroline\\VideoPlayerBundle\\": "plugin/video-player",
            "Claroline\\WebResourceBundle\\": "plugin/web-resource",
            "HeVinci\\FavouriteBundle\\": "plugin/favourite",
            "HeVinci\\CompetencyBundle\\": "plugin/competency",
            "HeVinci\\UrlBundle\\": "plugin/url",
            "Icap\\BlogBundle\\": "plugin/blog",
            "Icap\\SocialmediaBundle\\": "plugin/social-media",
            "Icap\\WikiBundle\\": "plugin/wiki",
            "Icap\\FormulaPluginBundle\\": "plugin/formula",
            "Innova\\PathBundle\\": "plugin/path",
            "Claroline\\DevBundle\\": "main/dev",
            "UJM\\ExoBundle\\": "plugin/exo",
            "Icap\\LessonBundle\\": "plugin/lesson",
            "Claroline\\ClacoFormBundle\\": "plugin/claco-form",
            "UJM\\LtiBundle\\": "plugin/lti",
            "Icap\\BibliographyBundle\\": "plugin/bibliography",
            "Claroline\\DropZoneBundle\\": "plugin/drop-zone",
            "Claroline\\PlannedNotificationBundle\\": "plugin/planned-notification",
            "Claroline\\LinkBundle\\": "plugin/link",
            "Claroline\\OpenBadgeBundle\\": "plugin/open-badge",
            "Claroline\\SamlBundle\\": "plugin/saml",
            "Claroline\\SlideshowBundle\\": "plugin/slideshow",
            "Claroline\\AudioPlayerBundle\\": "plugin/audio-player",
            "Claroline\\CursusBundle\\": "plugin/cursus",
            "Claroline\\BookingBundle\\": "plugin/booking",
            "Claroline\\BigBlueButtonBundle\\": "integration/big-blue-button"
        }
    },
```
       
## Resources

- https://jinoantony.com/blog/how-composer-autoloads-php-files