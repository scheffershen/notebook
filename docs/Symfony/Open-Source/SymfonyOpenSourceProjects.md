Symfony5 open source projects
=============================

https://github.com/topics/symfony5
https://github.com/topics/symfony-application
https://symfony.com/projects

## 2fa

https://github.com/scheb/two-factor-bundle

This bundle provides **[two-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) for your [Symfony](https://symfony.com/) application**.

Core features provided by `scheb/2fa-bundle`:

- Interface for custom two-factor authentication methods
- Trusted IPs
- Multi-factor authentication (more than 2 steps)
- CSRF protection
- Whitelisted routes (accessible during two-factor authentication)

Additional features:

- Trusted devices (once passed, no more two-factor authentication on that device) (`scheb/2fa-trusted-device`)
- Single-use backup codes for when you don't have access to the second factor device (`scheb/2fa-backup-code`)
- QR codes to scan with your mobile device (`scheb/2fa-qr-code`)

Two-factor authentication methods:

- [TOTP authentication](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm) (`scheb/2fa-totp`)
- [Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator)  (`scheb/2fa-google-authenticator`)
- Authentication code via email (`scheb/2fa-email`)

- esi: { enabled: true }
- test complet

## a2lix-demo


## ah-symfony (rien de spécial, nothing special)

https://github.com/Alpha-Hydro/ah-symfony

- PHP 7.2
- Symfony4.4
- package.json
   "devDependencies": {
        "@symfony/webpack-encore": "^0.19.0",
        "axios": "^0.18.0",
        "bootstrap": "^4.0.0",
        "feather-icons": "^4.7.3",
        "imports-loader": "^0.8.0",
        "jquery": "^3.3.1",
        "node-sass": "^4.8.3",
        "popper.js": "^1.14.1",
        "sass-loader": "^6.0.7"
    "dependencies": {
        "datatables.net": "^1.10.19",
        "datatables.net-bs4": "^1.10.19"        
- composer.json
        "php": "^7.1.3",
        "ext-iconv": "*",
        "ext-json": "*",
        "cocur/slugify": "^3.1",
        "sensio/framework-extra-bundle": "^5.1",
        "symfony/framework-bundle": "^4.0",
        "vladmeh/tcpdf-bundle": "^3.0"
- assets
  - require("bootstrap");
  - module.exports = imageEdit;
  - (function () {})();
  - $(function () {});
  - import * as feather from "feather-icons";
  - import * as selectCategory from "./modalSelectCategory";

## aimeos-symfony (rien de spécial, nothing special)

https://github.com/aimeos/aimeos-symfony.git

- composer.json
    "php": "~7.1",
    "aimeos/aimeos-core": "dev-master",
    "aimeos/ai-gettext": "dev-master",
    "aimeos/ai-monolog": "dev-master",
    "aimeos/ai-symfony": "dev-master",
    "aimeos/ai-swiftmailer": "dev-master",
    "aimeos/ai-admin-jqadm": "dev-master",
    "aimeos/ai-admin-jsonadm": "dev-master",
    "aimeos/ai-controller-jobs": "dev-master",
    "aimeos/ai-controller-frontend": "dev-master",
    "aimeos/ai-client-jsonapi": "dev-master",
    "aimeos/ai-client-html": "dev-master",
    "aimeos/ai-fosuser": "dev-master",
    "aimeos/ai-twig": "dev-master",
    "symfony/asset": "~3.4||~4.0||~5.0",
    "symfony/monolog-bundle": "~3.0",
    "symfony/framework-bundle": "~3.4||~4.0||~5.0",
    "symfony/security-bundle": "~3.4||~4.0||~5.0",
    "symfony/swiftmailer-bundle": "~3.0",
    "symfony/twig-bundle": "~3.4||~4.0||~5.0",
    "symfony/psr-http-message-bridge": "~1.0",
    "sensio/framework-extra-bundle": "~3.4||~4.0||~5.0",
    "friendsofsymfony/user-bundle": "~2.1",
    "nyholm/psr7": "~1.0"
- Command
- Composer
- Controller
- Entity
- Service
- Tests

## authentication-bundle (rien de spécial, nothing special)

https://github.com/crowdvalley/authentication-bundle
on 26 Aug 2016

composer.json:
  - "symfony/framework-bundle": "2.*",
  - class Encrypt: encrypt($string, $key); decrypt($string, $key)
  - GenericEvent && EventSubscriber
  - MailService
 
## BeelabUserBundle (rien de spécial, nothing special)

https://github.com/Bee-Lab/BeelabUserPasswordBundle.git

- php7.1
- symfony3,4,5
- Command
- Contoller
- Entity
- Event
- Listener
  + LastLoginListener
    * SecurityEvents::INTERACTIVE_LOGIN => 'onSecurityInteractiveLogin',
- services
  + kernel.event_subscriber
  + beelab_user.manager
    * Beelab\UserBundle\Manager\UserManager
- Manager
  + UserManager
- Repository
- Tests
- Twig
- User
- interface
  + use Beelab\UserBundle\User\UserInterface

## bolt (rien de spécial, nothing special)

https://github.com/bolt/bolt.git

php7.1.3, symfony2.8

les codes js à étudier

- package.json
  + blueimp-file-upload
  + bootbox
  + bootstrap-sass~3.4.1
  + dropzone5.5.1
  + font-awesome~4.7.0
  + jquery~2.2.4
  + jquery-formatdatetime~1.1.6
  + jquery.cookie~1.4.1
  + modernizr~3.8.0
  + moment~2.24.0
  + select2~4.0.12
- composer.json
  + EventListener
    * AccessControlListener
      - StorageEvents::POST_SAVE => 'onStorageEventPostSave',
      - StorageEvents::PRE_DELETE => 'onStorageEventPreDelete',
    * ConfigListener
  + services
    * 
  + Events
    * use Symfony\Component\EventDispatcher\Event;
    * class AccessControlEvent extends Event
      - LOGIN_SUCCESS = 'login.success';
      - LOGIN_FAILURE = 'login.failure';
      - LOGOUT_SUCCESS = 'logout.success';
      - RESET_REQUEST = 'reset.request';
      - RESET_SUCCESS = 'reset.success';
      - RESET_FAILURE = 'reset.failure';
      - ACCESS_CHECK_REQUEST = 'access.check.request';
      - ACCESS_CHECK_SUCCESS = 'access.check.success';
      - ACCESS_CHECK_FAILURE = 'access.check.failure';
+ Dispatcher
  * use Symfony\Component\EventDispatcher\EventDispatcherInterface
    - EventDispatcherInterface $dispatcher,
    - $this->dispatcher->dispatch(AccessControlEvents::LOGIN_FAILURE, $event->setReason(AccessControlEvents::FAILURE_INVALID)); //sf3

## bootstrap-simple-admin-template (rien de spécial, nothing special)

https://github.com/alexis-luna/bootstrap-simple-admin-template.git 

- airdatepicker
- bootstrap4 ou 5
- chartsjs
- DataTables
- flagiconcss3
- fontawesome5
- fullcalendar
- jQuery3
- mdtimepicker
- summernote


## captum-backend (sf 3)

https://github.com/jesustotos/captum-backend.git

    "require": {
        "php": ">=7.1",
        "ext-curl": "*",
        "ext-fileinfo": "*",
        "ext-imagick": "*",
        "ext-json": "*",
        "aporat/store-receipt-validator": "^3.2",
        "aws/aws-sdk-php-symfony": "~2.0",
        "beberlei/doctrineextensions": "^1.2",
        "braintree/braintree_php": "^3.39",
        "doctrine/doctrine-bundle": "^1.6",
        "doctrine/doctrine-migrations-bundle": "^1.0",
        "doctrine/orm": "^2.5",
        "friendsofsymfony/rest-bundle": "^2.5",
        "guzzlehttp/psr7": "^1.5",
        "incenteev/composer-parameter-handler": "^2.0",
        "jms/job-queue-bundle": "^2.0",
        "jms/serializer-bundle": "^2.4",
        "mailgun/mailgun-php": "^2.6",
        "mixpanel/mixpanel-php": "2.*",
        "nelmio/api-doc-bundle": "^3.3",
        "pagerfanta/pagerfanta": "^2.0",
        "php-http/guzzle6-adapter": "1.1.1",
        "php-http/message": "^1.7",
        "pulse00/ffmpeg-bundle": "^0.6",
        "ramsey/uuid-doctrine": "^1.5",
        "sensio/distribution-bundle": "^5.0.19",
        "sensio/framework-extra-bundle": "^5.0.0",
        "stof/doctrine-extensions-bundle": "^1.3",
        "symfony/expression-language": "^3.4",
        "symfony/monolog-bundle": "^3.1.0",
        "symfony/polyfill-apcu": "^1.0",
        "symfony/swiftmailer-bundle": "^2.6.4",
        "symfony/symfony": "3.4.*",
        "tbbc/money-bundle": "^3.1",
        "twig/twig": "^1.0||^2.0"


## cart (rien de spécial, nothing special)

https://github.com/krybc/cart.git

php7.1, symfony 4.3

- package.json
  - @fortawesome/fontawesome-free": "^5.3.1
  - ajv": "^6.5.3
  - bootstrap": "^4.1.3
  - jquery": "^3.3.1
  - popper.js": "^1.14.4
- assets
  + app.js
    * import "../../node_modules/jquery/dist/jquery.min";
    * import "../../node_modules/bootstrap/dist/js/bootstrap.min";
    * $(function () {
          $('[data-toggle="popover"]').popover();
          $('[data-toggle="tooltip"]').tooltip();
      });
  + app.scss
    * @import "./variables";
      @import '~bootstrap/scss/bootstrap';
      @import "~@fortawesome/fontawesome-free/scss/fontawesome";
      @import "~@fortawesome/fontawesome-free/scss/solid";
- composer.json
  + ramsey/uuid
- services
  + App\Event\TimestampableModel:
    * { name: doctrine.event_listener, event: prePersist }
    * { name: doctrine.event_listener, event: preUpdate }
  + App\Event\DumpChanges:
    * {name: doctrine.event_listener, event: onFlush }
- Event
  + TimestampableModel
  + DumpChanges
  + OrderIdSaveInSessionSubscriber
    * Events::ORDER_CREATED => 'onOrderCreated',
  + OrderRecalculateSubscriber
    * Events::ORDER_CREATED => 'recalculate',
- Symfony\Component\EventDispatcher\GenericEvent
  - "*GenericEvent* adds some more methods in addition to the base class *Event*"
- interface
- abstractController::__construct([sevices])
- AbstractType::\__construct([sevices])

## community-skeleton (rien de spécial, nothing special)

https://github.com/uvdesk/community-skeleton.git

- php": "^7.2
- symfony": "4.3.*"
- Symfony\Component\EventDispatcher\EventSubscriberInterface
  + KernelEvents::EXCEPTION => [['onKernelException', 10]]
- il y a rien!
- EventListener::onKernelException

## coopcycle-web (to run)

https://github.com/coopcycle/coopcycle-web.git 

use react js

+ sf 5.3, php 7.4
+ composer.json
    * league/csv
    * beberlei/doctrineextensions
    * stripe/stripe-php
    * liip/imagine-bundle
    * vich/uploader-bundle
    * "guzzlehttp/guzzle": "~6.0",
        - Guzzle is a PHP HTTP client that makes it easy to send HTTP requests
    * friends-of-behat/symfony-extension 
+ package.json
    * "whatwg-fetch": "^2.0.1",
        - File upload
            + var input = document.querySelector('input[type="file"]')
                var data = new FormData()
                data.append('file', input.files[0])
                data.append('user', 'hubot')
                 
                fetch('/avatars', {
                  method: 'POST',
                  body: data
                })
    * "antd": "^3.0.3", (一个 UI 库)
        - https://ant.design/docs/react/getting-started-cn
    * redux-thunk
+ behat
    * features
        - Given the database is empty
        - And the user is loaded:
        - When I add "Accept" header equal to "application/ld+json"
        - And I send a "POST" request to "/api/login_check" with parameters:
    * class FeatureContext implements Context, SnippetAcceptingContext, KernelAwareContext
+ react 16
    * document.querySelector
+ docker
    * docker-compose.yml
+ tests
    * AppBundle
    * Behat

## elasticsearch-admin

https://github.com/stephanediondev/elasticsearch-admin

Web administration for Elasticsearch (2.x to 8.x): cluster, nodes, indices, shards, index templates, repositories, snapshots

- Symfony 6.1.0
- Bootstrap v5.2.0
- "jquery": "^3.6.0",


## davis (rien de spécial, nothing special)

https://github.com/tchapi/davis.git 

- php": "^7.3.0
- symfony": "^5.0
- Security
  + Symfony\Component\Security\Core\User\UserProviderInterface
  + Symfony\Component\Security\Core\User\UserInterface
  + Symfony\Component\Security\Guard\Authenticator\AbstractFormLoginAuthenticator
- timezone, date_default_timezone_get

## DoctrineAuditBundle (to run)

https://github.com/DamienHarper/DoctrineAuditBundle.git

This bundle creates audit logs for all Doctrine ORM database related changes:

"symfony/lock": "^3.4|^4.0|^5.0",

- inserts and updates including their diffs and relation field diffs.
- many to many relation changes, association and dissociation actions.
- if there is an user in token storage, it is used to identify the user who made the changes.
- audit entries are inserted within the same transaction during **flush** event 
so that even if something fails the global state remains clean.

- "friendsofphp/php-cs-fixer": "^2.15
- Symfony\Contracts\EventDispatcher\Event
- Symfony\Component\EventDispatcher\EventSubscriberInterface
- Tests (complet)
- services:
  + DH\DoctrineAuditBundle\Event\AuditSubscriber
    * arguments: ["@dh_doctrine_audit.manager"]
    * { name: kernel.event_subscriber }
  + DH\DoctrineAuditBundle\Event\DoctrineSubscriber
    * arguments: ["@dh_doctrine_audit.manager"]
    * { name: doctrine.event_subscriber, priority: 1000000 }
  + DH\DoctrineAuditBundle\Event\CreateSchemaListener
    * arguments: ["@dh_doctrine_audit.manager", "@dh_doctrine_audit.reader"]
    * { name: doctrine.event_subscriber }
  + DH\DoctrineAuditBundle\Command\CleanAuditLogsCommand
    * { name: 'console.command', command: 'audit:clean' }
- Event
  + AuditSubscriber implements EventSubscriberInterface
    * LifecycleEvent::class => 'onAuditEvent',
  + DoctrineSubscriber implements EventSubscriber
    * [Events::onFlush];
  + CreateSchemaListener implements EventSubscriber
    * ToolEvents::postGenerateSchemaTable,

## EasyAdminBundle

- tests (beacoup controller view tests)
  + Controler
    * assertContains()
    * assertSame()
    * assertCount()
    * assertStringStartsWith()
    * assertArraySubset()
    * static::$client->getResponse()->headers->get('location')
    * static::$client->getContainer()->get('easyadmin.config.manager')->getBackendConfig()
    * $crawler = static::$client->click($link);
    * $crawler->filter('.sidebar-menu li.active.submenu-active a')->text()
    * $crawler->selectButton('Save changes')->form();
    * $crawler->filter('td.actions a:contains("Edit")')->eq(0)->link();
    * $crawler->filter('.form-actions a:contains("Return to listing")')->attr('href');
    * // test validation groups
    * // test 'novalidate' attribute


## documentManager (videoManager, ticketManager, projectManager, rien de spécial, nothing special)

https://github.com/matthieuleorat/documentManager.git

+ php": "^7.1.3
+ composer.json
    * "api-platform/api-pack": "^1.0",
      "javiereguiluz/easyadmin-bundle": "^1.17",
      "lexik/jwt-authentication-bundle": "^2.4",
      "nelmio/cors-bundle": "^1.5",
      "easycorp/easyadmin-bundle": "^1.17
      "symfony/flex": "^1.0
      "symfony/framework-bundle": "^4.0",
      "thiagoalessio/tesseract_ocr": "^2.2
      "ext-imagick" : "*
+ config
  * services
    - App\Listener\Doctrine\DoctrineDocumentSubscriber:
      + { name: doctrine.event_subscriber }
      + { name: monolog.logger, channel: document}
    - App\Listener\ExceptionSubscriber:
      + { name: kernel.event_subscriber }
      + { name: monolog.logger, channel: exception}
    - App\Listener\Doctrine\DoctrineTagSubscriber:
      + { name: doctrine.event_subscriber }
      + { name: monolog.logger, channel: tag}
    - App\Listener\DocumentSubscriber:
      + { name: monolog.logger, channel: document}
    - App\Listener\Security\LoginFailedListener:
      + { name: kernel.event_listener, event: security.authentication.failure, method: onAuthenticationFailure }
      + { name: monolog.logger, channel: security}
+ src
    * Listener:
      - App\Listener\Doctrine\DoctrineDocumentSubscriber implements Doctrine\Common\EventSubscriber
        + getSubscribedEvents
          * 'postLoad','prePersist','postPersist','preUpdate','postUpdate','preRemove','postRemove',
      - App\Listener\ExceptionSubscriber implements EventSubscriberInterface
        + getSubscribedEvents()
          * KernelEvents::EXCEPTION => [array('processException', 10), array('logException', 0),array('notifyException', -10)]
      - App\Listener\Doctrine\DoctrineTagSubscriber implements EventSubscriber
        + getSubscribedEvents
          * 'postLoad','prePersist','postPersist','preUpdate','postUpdate','preRemove','postRemove', 
      - App\Listener\DocumentSubscriber: implements EventSubscriberInterface
        + getSubscribedEvents()
          * DocumentEvents::DOCUMENT_DOWNLOAD => 'onDocumentDownload'
      - App\Listener\Security\LoginFailedListener:
        + onAuthenticationFailure(AuthenticationFailureEvent $event)
          * $event->getAuthenticationException()->getMessage()
          * $event->getAuthenticationToken()->getUsername()
    * App/Twig/AppExtension.php | colorize, colorizeFilter
    * class Mailer
      - sendResetPasswordEmail(User $user)  
      - Symfony\Component\Routing\Generator\UrlGeneratorInterface
      - Symfony\Component\Routing\RouterInterface
    * Symfony\Component\Process\Process
      -   $cmd = 'convert -density 300 '.$file->getPathname().' -depth 8 -strip -background white -alpha off '.$outputTiffFile;
        $process = new Process($cmd);
        $process->run();

        // executes after the command finishes
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
    * ExtractTextFromImg; thiagoalessio\TesseractOCR\TesseractOCR
    * Doctrine\Common\EventSubscriber
    * Tag implements UserableInterface; ManyToMany
+ docker
    * cd docker | docker-compose up -d
+ php bin/console debug:router
    * php bin/console app:user:create
    * php bin/console assets:install --symlink
- http://localhost/admin/login
- jwt, Generate the SSH keys :
    +   $ mkdir -p var/jwt # For Symfony3+, no need of the -p option
        $ openssl genrsa -out config/jwt/private.pem -aes256 4096
        $ openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem

## docker-symfony-elk-filebeats-stack

https://github.com/a24710/docker-symfony-elk-filebeats-stack.git

php8, symfony5.2, 

- CVS Import export
- Serializer
- Validators
  $this->checkCompany($value);
  $this->checkPosition($value);
  $this->checkEmail($value);
  $this->checkDates($value);
- tests
  cvs testing
  api testing


## e-commerce

https://github.com/mcoudurier/e-commerce.git

FormType:
  ProductType
    'entry_type' => ImageType::class,
- assets
  + const $ = require('jquery');
    require('bootstrap');
    require('@fortawesome/fontawesome-free/js/all.js');
    global.$ = global.jQuery = $;
public/js:
  + productEditor.js
  + productSlider.js

## EasyAdminBunlde (rien de spécial, nothing special)

- package.json
  + @fortawesome/fontawesome-free": "^5.8.1
  + bootstrap": "^4.1.0
  + codemirror": "^5.47.0 (代码编辑器)
  + featherlight": "^1.7.13
  + jquery": "^3.3.1
  + jquery-highlight": "^3.4.0
  + jquery.are-you-sure": "^1.9.0
  + popper.js": "^1.14.5
  + select2": "4.0.10
  + select2-bootstrap-theme": "^0.1.0-beta.10
  + trix": "^1.1.1 (A rich text editor)
- assets
  + app.scss
    * @import "~bootstrap/scss/bootstrap";
      @import "~@fortawesome/fontawesome-free/css/all.css";
      @import "~@fortawesome/fontawesome-free/css/v4-shims.css";
      @import "~featherlight/src/featherlight.css";
      @import "~select2/dist/css/select2.css";
      @import "~select2-bootstrap-theme/dist/select2-bootstrap.css";
  + app.js
    * global.$ = global.jQuery = require('jquery');
      import 'bootstrap';
      import './adminlte.js';
      import 'jquery.are-you-sure';
      import 'featherlight';
      import 'jquery-highlight';
      import 'select2';
      createAutoCompleteFields()
          - checkbox.is(':checked')
          - $(this).prop('disabled', formFieldIsDisabled);
          - $(this).closest('.datetime-widget').slideUp({ duration: 200 })
          - $('.nullable-control :checkbox').bind('change', fnNullDates).each(fnNullDates)
          - $this.data('easyadmin-autocomplete-url')
          - select2; ajax (https://select2.org/data-sources/ajax); 
          - I would strongly recommend using Select2 than chosen
      createContentResizer()
      createCodeEditorFields();
      createTextEditorFields();
      createFileUploadFields();
          - easyadmin-fileupload 
- Event
- EventListener
  + ControllerListener
  + ExceptionListener
  + RequestPostInitializeListener
- Form
  + FormEvents::PRE_SET_DATA => 'preSetData' ## we use, expace-mediflixs
  + FormEvents::PRE_SUBMIT => 'preSubmit  ## lms-europharma use
  + FormEvents::POST_SUBMIT => ['handleViolations', -1], ## we use, expace-mediflixs

## en-marche.fr(to run)

https://github.com/EnMarche/en-marche.fr

+ sf 4.4, behat, react component, selenium
+ composer.json
  -         "a2lix/translation-form-bundle": "^2.1",
        "algolia/search-bundle": "^4.1",
        "api-platform/core": "2.2.10",
        "beberlei/doctrineextensions": "^1.2",
        "cakephp/chronos": "^2.1",
        "cocur/slugify": "^4.0",
        "creof/doctrine2-spatial": "^1.2",
        "csa/guzzle-bundle": "^3.1",
        "danhunsaker/flysystem-redis": "^1.0",
        "doctrine/dbal": "^2.13.0",
        "doctrine/doctrine-bundle": "^2.2",
        "doctrine/doctrine-migrations-bundle": "^3.0",
        "egulias/email-validator": "^3.0",
        "endroid/qr-code-bundle": "^3.4.2",
        "enmarche/majority-judgment": "^0.0.3",
        "exercise/htmlpurifier-bundle": "^1.0",
        "facebook/graph-sdk": "^5.4",
        "geocoder-php/google-maps-provider": "^4.5",
        "geoip2/geoip2": "^2.4",
        "google/cloud-storage": "^1.23",
        "google/cloud-vision": "^1.2",
        "h4cc/wkhtmltoimage-amd64": "^0.12.4",
        "h4cc/wkhtmltopdf-amd64": "^0.12.4",
        "imagine/imagine": "^0.6.3",
        "jms/serializer-bundle": "^2.1",
        "knplabs/doctrine-behaviors": "^1.0",
        "knplabs/knp-snappy-bundle": "^1.5",
        "knplabs/knp-time-bundle": "^1.7",
        "kreait/firebase-bundle": "^2.3",
        "league/commonmark": "1.6.6",
        "league/csv": "^9.2",
        "league/flysystem": "^1.0",
        "league/flysystem-cached-adapter": "^1.0",
        "league/glide-symfony": "^1.0",
        "league/oauth2-server": "^8.2",
        "lexik/jwt-authentication-bundle": "^2.6",
        "lexik/paybox-bundle": "^2.1",
        "myclabs/php-enum": "^1.5",
        "nelmio/cors-bundle": "^1.5",
        "ninsuo/symfony-collection": "^2.1",
        "nyholm/psr7": "^1.4",
        "odolbeau/phone-number-bundle": "^3.3",
        "php-amqplib/rabbitmq-bundle": "^1.12",
        "phpoffice/phpspreadsheet": "^1.16",
        "pixassociates/sortable-behavior-bundle": "^1.5",
        "predis/predis": "^1.1.0",
        "ramsey/uuid": "^4.1",
        "ramsey/uuid-doctrine": "^1.6",
        "sabre/dav": "^4.1",
        "scheb/two-factor-bundle": "^4.11",
        "scienta/doctrine-json-functions": "^4.3",
        "sensio/framework-extra-bundle": "^4.0",
        "sentry/sentry": "^1.6",
        "snc/redis-bundle": "^3.2",
        "sonata-project/admin-bundle": "^3.49",
        "sonata-project/doctrine-orm-admin-bundle": "^3.0",
        "sonata-project/exporter": "^2.7",
        "stof/doctrine-extensions-bundle": "^1.2",
        "suin/php-rss-writer": "^1.5",
        "superbalist/flysystem-google-storage": "^7.2",
        "symfony/asset": "^4.4",
        "symfony/flex": "^1.11",
        "tackk/cartographer": "dev-welcome-php7",
        "tetranz/select2entity-bundle": "^3.1",
        "twig/extensions": "^1.5",
        "twig/twig": "^2.13",
        "webmozart/assert": "^1.3",
        "willdurand/geocoder-bundle": "^5.12",
        "zendframework/zend-diactoros": "^2.2"
+ behat 
    * "behat/mink": "^1.7",
      "behat/mink-browserkit-driver": "^1.3",
      "behat/mink-extension": "^2.2",
      "behat/mink-selenium2-driver": "^1.3",
      "behat/symfony2-extension": "^2.1",
      "behatch/contexts": "^2.7", (Behat extension with most custom helper steps)
    * behat.yml
        - FeatureContext (use Behat\MinkExtension\Context\RawMinkContext;)
        - EmailContext
        - FixtureContext
            + @BeforeScenario
            + @Given the following fixtures are loaded:
+ Makefile
+ à tester , c'est interesant de voir comment il a fait
+ phpunit test, behat test magnifique 

## Fake SMTP Server

The Fake SMTP Server is a simple SMTP server which is designed for development purposes. The server collects all received emails, stores the emails in an in-memory database and provides access to the emails via a web interface

https://github.com/gessnerfl/fake-smtp-server

    docker pull gessnerfl/fake-smtp-server

```
#The SMTP Server Port used by the Fake SMTP Server
fakesmtp.port=5025

#The binding address of the Fake SMTP Server; Bound to all interfaces by default / no value
fakesmtp.bindAddress

#The maximum number of emails which should be stored in the database; Defualts to 100
fakesmtp.persistence.maxNumberEmails=100  

#A comma separated list of regex expressions to filter out unwanted emails by email address
fakesmtp.filteredEmailRegexList=john@doe\\.com,.*@google\\.com ; empty by default

#When set to true emails will be forwarded to a configured target email system. Therefore
#the spring boot mail system needs to be configured. See also 
https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-email
fakesmtp.forwardEmails=false

#Username of the client to be authenticated
fakesmtp.authentication.username

#Password of the client to be authenticated
fakesmtp.authentication.password   

#Port of the web interface
server.port=5080     

#Port of the http management api
management.port=5081 
```

https://github.com/kurzdigital/fake-smtp-server

Environment variables

    SERVER-PORT         Port for the Web-UI, Default: 5080
    APP_USER            Username for the Web-UI, Default: admin
    APP_PASSWORD        Password for the Web-UI, Default: admin
    MYSQL_USER          Username for the h2 user, Default: admin
    MYSQL_PASSWORD      Password for the h2 user, Default: Test1234
    SMTP_PORT           Port for the SMTP-Server, Default: 5025
    SMTP_USER           Username for the SMTP-Server, Default: admin (optional)
    SMTP_PASSWORD       Password for the SMTP-Server, Default: admin (optional)
    MAX_NUMBER_EMAILS   Max. amount of emails stored in the h2, Default: 1000

## glynn-admin-symfony4 (revoir !!! friendsofsymfony)

+ "php": "^7.2.5"
+ "symfony/asset": "^4.4",
+ composer.json
    * "friendsofsymfony/user-bundle": "dev-master",
    * "vue": "^2.6.10",
+ event-dispatch
+ templates
    * bundles\FOSUserBundle
    * bundles\TwigBundle
+  \__construct

## h5p (mon projet préféré, my favorite project)

## h5p-bundle (mon projet préféré, my favorite project)

https://github.com/jorisdugue/h5p-bundle

A bundle to integrate h5p into your Symfony project. H5P.org

## Incipio

https://github.com/n7consulting/Incipio

ERP / CRM for Junior-Entreprises.

## joliquiz

https://github.com/LaurentBouquet/joliquiz.git

FormType:
  - QuestionType: codes for sub entities embed form
    + 'entry_type' => AnswerType::class,
  - UserType:  plainPassword',RepeatedType::class,
    + $builder->add('plainPassword',RepeatedType::class,
        [
            'type' => PasswordType::class,
            'first_options'  => array('label' => $this->translator->trans('Password')),
            'second_options' => array('label' => $this->translator->trans('Repeat Password')),
            ]
        );

## kimai2 (huge!!!)

- assets, js, scss, fullcalendar, chart.js, jquery-slimscroll, moment, email.css, swal2-popup 
- event, eventlistener, dispatch
- Timezone
- Ldap
- Invoice
- export, csv, html, pdf, 
- huge!!!

https://github.com/kevinpapst/kimai2

Kimai v2 is web based Timetracker: multi-user application for time-tracking using Symfony 4 and the AdminLTE theme. Can be used by Freelancers, Agencies and Companies to track employee working-times and generate invoices. 

+ composer.json
  * beberlei/doctrineextensions
  * gedmo/doctrine-extensions
  * league/csv
  * mpdf/mpdf
  * symfony: 4.4
+ package.json
  * fortawesome/fontawesome-free
  * admin-lte
  * bootstrap-sass: 3.4
  * chart.js
  * core-js
  * daterangepicker
  * fullcalendar
  * icheck
  * jquery < 3.6
  * jquery-slimscroll
  * jquery-ui 1.12
  * moment
  * select2
  * select2-bootstrap-theme
  * sortablejs (better than jQuery-UI Sortable and Dragula)
  * sweetalert2

## laradock (code base)

## LearnPHPSymfony4Hands-OnCreatingRealWorldApplication (rien de spécial, nothing special)

- package.json
  + "bootstrap": "4.0.0",
  + "holderjs": "^2.9.4", // Holder renders image placeholders 
  + "jquery": "3.3.1",
  + "popper.js": "1.12.9"
- composer.json
  + "php": "^7.1.3"
  + "symfony/asset": "^4.0"
- services.yaml
  + App\Twig\AppExtension:
    * arguments: $locale: '%locale%'
  + App\Mailer\Mailer
  + App\Service\Greeting
  + App\EventListener\LikeNotificationSubscriber
  + App\Event\UserSubscriber
    * arguments: $defaultLocale: '%kernel.default_locale%'
  + App\Event\LocaleSubscriber
- Event
  + LocaleSubscriber implements EventSubscriberInterface
    * KernelEvents::REQUEST
  + UserLocaleSubscriber implements EventSubscriberInterface
    * SecurityEvents::INTERACTIVE_LOGIN
  + UserRegisterEvent extends Event
    * NAME = 'user.register'
  + UserSubscriber implements EventSubscriberInterface
    * UserRegisterEvent::NAME
    * $this->mailer->sendConfirmationEmail($event->getRegisteredUser());
- EventListener
  + LikeNotificationSubscriber implements EventSubscriber
    * Events::onFlush
    * use Doctrine\Common\EventSubscriber;
    * use Doctrine\ORM\Events;
- Mailer
- controller
  + RegisterController
    * $userRegisterEvent = new UserRegisterEvent($user);
            $eventDispatcher->dispatch(
                UserRegisterEvent::NAME,
                $userRegisterEvent
            ); //sf3
    * use Symfony\Component\EventDispatcher\EventDispatcherInterface;
  + SecurityController
    * @Route("/confirm/{token}"
- Twig
  + AppExtension extends AbstractExtension implements GlobalsInterface
    * use Twig\Extension\AbstractExtension;
      use Twig\Extension\GlobalsInterface;
      use Twig\TwigFilter;
    * 

## maildev

https://github.com/maildev/maildev

SMTP Server + Web Interface for viewing and testing emails during development.

Install & Run

     docker run -p 1080:1080 -p 1025:1025 maildev/maildev

Configure your project

    smtp_settings = {
          address: "localhost",
          port: 1025,
          enable_starttls_auto: false
      }

Docker Compose

    maildev:
      image: maildev/maildev
      ports:
        - "1080:80"

    const transporter = nodemailer.createTransport({
      host: 'maildev',
      port: 25,
      // We add this setting to tell nodemailer the host isn't secure during dev:
      ignoreTLS: true
    });

## mkdocs (to run)

MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation. 

## NucleosUserBundle (Good example for userBundle, mon projet préféré, my favorite project)

UserEvents assaz complete!

- composer.json
  + "php": "^7.3"
  + "egulias/email-validator": "^2.1.10"
  + "symfony/config": "^4.4 || ^5.0"
  + phpunit
  + php-cs-fixer
  + phpstan
- NucleosUserEvents
  + CHANGE_PASSWORD_COMPLETED = 'nucleos_user.change_password.edit.completed'
  + USER_CREATED = 'nucleos_user.user.created';
  + USER_PASSWORD_CHANGED = 'nucleos_user.user.password_changed';
  + USER_ACTIVATED = 'nucleos_user.user.activated';
  + USER_DEACTIVATED = 'nucleos_user.user.deactivated';
  + USER_PROMOTED = 'nucleos_user.user.promoted';
  + USER_DEMOTED = 'nucleos_user.user.demoted';
  + USER_LOCALE_CHANGED = 'nucleos_user.user.locale_changed';
  + USER_TIMEZONE_CHANGED = 'nucleos_user.user.timezone_changed';
  + CHANGE_PASSWORD_SUCCESS = 'nucleos_user.change_password.edit.success';
  + CHANGE_PASSWORD_INITIALIZE = 'nucleos_user.change_password.edit.initialize';
  + RESETTING_RESET_REQUEST = 'nucleos_user.resetting.reset.request';
  + RESETTING_RESET_INITIALIZE = 'nucleos_user.resetting.reset.initialize';
  + RESETTING_RESET_SUCCESS = 'nucleos_user.resetting.reset.success';
  + RESETTING_RESET_COMPLETED = 'nucleos_user.resetting.reset.completed';
  + SECURITY_LOGIN_INITIALIZE = 'nucleos_user.security.login.initialize';
  + SECURITY_LOGIN_COMPLETED = 'nucleos_user.security.login.completed';
  + SECURITY_IMPLICIT_LOGIN = 'nucleos_user.security.implicit_login';
  + RESETTING_SEND_EMAIL_INITIALIZE = 'nucleos_user.resetting.send_email.initialize';
  + RESETTING_SEND_EMAIL_CONFIRM = 'nucleos_user.resetting.send_email.confirm';
  + RESETTING_SEND_EMAIL_COMPLETED = 'nucleos_user.resetting.send_email.completed';
- use Symfony\Contracts\EventDispatcher\Event
  + UserEvent extends Event
- EventListener
  + AuthenticationListener implements EventSubscriberInterface
    * NucleosUserEvents::RESETTING_RESET_COMPLETED
    * <service id="Nucleos\UserBundle\EventListener\LocaleEventListener">
        <tag name="kernel.event_subscriber"/>
        <argument type="service" id="translator"/>
        <argument type="service" id="twig"/>
      </service>
  + FlashListener implements EventSubscriberInterface
    * NucleosUserEvents::CHANGE_PASSWORD_COMPLETED
    * NucleosUserEvents::RESETTING_RESET_COMPLETED
    * <service id="Nucleos\UserBundle\EventListener\FlashListener">
        <tag name="kernel.event_subscriber"/>
        <argument type="service" id="session.flash_bag"/>
        <argument type="service" id="translator"/>
      </service>
  + LastLoginListener implements EventSubscriberInterface
    * NucleosUserEvents::SECURITY_IMPLICIT_LOGIN
    * SecurityEvents::INTERACTIVE_LOGIN
    * use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;
    * use Symfony\Component\Security\Http\SecurityEvents;
    * <service id="Nucleos\UserBundle\EventListener\LastLoginListener">
        <tag name="kernel.event_subscriber"/>
        <argument type="service" id="nucleos_user.user_manager"/>
      </service>
  + LocaleEventListener implements EventSubscriberInterface
    * <service id="Nucleos\UserBundle\EventListener\LocaleEventListener">
        <tag name="kernel.event_subscriber"/>
        <argument type="service" id="translator"/>
        <argument type="service" id="twig"/>
      </service>
    * NucleosUserEvents::SECURITY_IMPLICIT_LOGIN => 'onImplicitLogin',
      SecurityEvents::INTERACTIVE_LOGIN          => 'onSecurityInteractiveLogin',
      KernelEvents::REQUEST                      => [['onKernelRequest', 20]],
      NucleosUserEvents::USER_LOCALE_CHANGED     => 'onLocaleChanged',
      NucleosUserEvents::USER_TIMEZONE_CHANGED   => 'onTimezoneChanged',
  + ResettingListener implements EventSubscriberInterface
    * <service id="Nucleos\UserBundle\EventListener\ResettingListener">
        <tag name="kernel.event_subscriber"/>
        <argument type="service" id="router"/>
        <argument>%nucleos_user.resetting.token_ttl%</argument>
      </service>
    *  NucleosUserEvents::RESETTING_RESET_INITIALIZE => 'onResettingResetInitialize',
      NucleosUserEvents::RESETTING_RESET_SUCCESS    => 'onResettingResetSuccess',
      NucleosUserEvents::RESETTING_RESET_REQUEST    => 'onResettingResetRequest',
- Contoller
  + Nucleos\UserBundle\Util\UserManipulator
  + use Nucleos\UserBundle\Event\UserEvent
  + $event = new UserEvent($user, $this->getRequest());
    $this->dispatcher->dispatch($event, NucleosUserEvents::USER_CREATED); // sf5
- Symfony\Component\Mailer\MailerInterface as SymfonyMailer;
  + Mailer implements MailerInterface
  + use Symfony\Bridge\Twig\Mime\TemplatedEmail;
  + ResettingMail extends TemplatedEmail
- tests (complete !)
- timezone

## NucleosAntiSpamBundle

https://github.com/nucleos/NucleosAntiSpamBundle

This bundle provides some basic features to reduce spam in symfony forms.

## numberninecms

https://github.com/numberninecms/cms.git
Core code of NumberNine CMS
- typeScriptJs (another level)
- vueJs
- phpro/grumphp: code qualite controller
- friendsoftwig/twigcs: twig style checker
- symfony/ux-turbo
- php7.4|8 && mysql8 (--default-authentication-plugin=mysql_native_password)

## omed (ne marche pas encore)

https://github.com/kilip/omed-old

+ composer.json
    * "friendsofsymfony/user-bundle": "~2.0@dev",
    * "api-platform/api-pack": "^1.0",
    * "friendsofsymfony/jsrouting-bundle": "^2.1",
    * "lexik/jwt-authentication-bundle": "^2.4",
    * "nelmio/cors-bundle": "^1.5",
    * "stof/doctrine-extensions-bundle": "^1.3",
+ package.json
    * "axios": "^0.18.0",
    * "bootstrap": "^4.0.0",
    * "font-awesome": "^4.7.0",
    * "jsonld": "^0.5.21",
    * "jwt-decode": "^2.2.0",
    * "prop-types": "^15.6.0",
    * "react": "^16.2.0",
+ src
    * this use bundle structure
+ docker
    * docker-compose.yml
        - postgres
    * docker-coompose exec php sh
        - composer install
        - yarn install
        - yarn build
+ frontend
    * $ yarn init
    * C:\Users\yishen\sandbox\react-redux\Udemy-the-complete-react-and-redux-course-build-modern-apps\omed
    * yarn add babel-jest babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react @coreui/react @symfony/webpack-encore webpack-livereload-plugin axios bootstrap dotenv dotenv-expand dotenv-webpack font-awesome jsonld jwt-decode node-sass prop-types react react-dom react-redux react-router-dom react-router-redux react-transition-group reactstrap redux redux-auth-wrapper redux-form redux-thunk sass-loader
        - problem avec yarn add jsonld
            + npm install -g node-gyp
            + install visual studio
    * php bin/console assets:install
    * yarn build
+ backend
    - php bin/console debug:router
    - omed_core_homepage_index  
    - 
- http://127.0.0.1/react/

## OroPlatform (too much bundles, to run it)

OroPlatform is a PHP Business Application Platform (BAP) 
https://github.com/oroinc/platform

- many third part bundles
- composer.json
  + "php": "~7.3.13 || ~7.4.2",
  + "symfony/symfony": "4.4.2",
  + "ass/xmlsecurity": "1.1.1", // for working with XML Encryption and Signatures
  + "liip/imagine-bundle": "2.0.0",
  + "gos/web-socket-bundle": "1.8.12", // Socket Bundle
  + "guzzle/guzzle": "3.7.*", // HTTP client library
  + "lexik/maintenance-bundle": "2.1.5", // to place your website in maintenance mode
  + "akeneo/batch-bundle": "0.4.11",
  + "nesbot/carbon": "1.29.*", // extension for DateTime, '2 minutes ago' in twig
  + "ocramius/proxy-manager": "2.1.1", // build a lazy loadable object with ProxyManager
  + "knplabs/knp-gaufrette-bundle": "0.5.2", //  provides a filesystem abstraction layer 
  + "tinymce/tinymce": "4.6.*", // WYSIWYG editor control.
  + "ezyang/htmlpurifier": "4.12.*", //  HTML filter, $clean_html = $purifier->purify($dirty_html);
  + "xemlock/htmlpurifier-html5": "0.1.10", //HTML5 support for HTML Purifier
  + "hwi/oauth-bundle": "0.6.*", // OAuth1.0a and OAuth2 
  + "kriswallsmith/buzz": "1.0.*", // Lightweight HTTP client
  + "box/spout": "2.7.*", //  to read and write spreadsheet files (CSV, XLSX and ODS)
  + "jms/cg": "1.2.*", // Toolset for generating PHP code
  + "brick/math": "0.8.*", // Arbitrary-precision arithmetic library
  + "phpdocumentor/reflection-docblock": "4.3.*", //  for annotations via DocBlocks
  + "php-http/httplug-bundle": "1.15.2", // for HTTPlug
  + "salsify/json-streaming-parser": "8.0.1", // A streaming parser for JSON
  + "myclabs/deep-copy": "1.8." // Create deep clones of your objects

## pagekit (ot run, if you have time)

https://github.com/pagekit/pagekit
Pagekit is a modular and lightweight CMS built with Symfony components and Vue.js.

- composer.json
  + "php": ">=5.5.9",
  + "symfony/debug": "3.0.0",


## pd-admin (mon projet préféré, my favorite project)

Symfony Powerful Dashboard & Admin. Developed with **Symfony 5**, **Vue 3**, **Bootstrap 5** framework.

version jQuery: git clone -b symfony_5 https://github.com/appaydin/pd-admin.git 

https://github.com/appaydin/pd-admin

- package.json
  + "@symfony/webpack-encore": "^0.32.0",
  + "@vue/compiler-sfc": "^3.0.4",
  + "vue-loader": "^16",
  + "vue-template-compiler": "^2.6.12",
  + "@vueform/multiselect": "^1.4.0",
  + "axios": "^0.21.1",
  + "bootstrap": "^5.0.0",
  + "dragula": "^3.7.3",
  + "vue": "^3.0.5",
  + "vue-slicksort": "^2.0.0-alpha.5",
  + "vue3-datepicker": "^0.2.4"
- composer.json
  + "php": ">=8.0.0"
  + "beberlei/doctrineextensions": "1.*",
  + "intervention/image": "^2.5" //image handling and manipulation library
  + "knplabs/knp-paginator-bundle": "^4.0"
  + "symfony/asset": "5.*"
- services.yaml
  + # Switch User Listener
    security.authentication.switchuser_listener:
        class: App\Listener\SwitchUserListener
        public: false
        abstract: true
        arguments: [ "@security.token_storage",
                     "",
                     "@security.user_checker",
                     "",
                     "@security.access.decision_manager",
                     "@?logger",
                     "_switch_user",
                     "ROLE_ALLOWED_TO_SWITCH",
                     "@?event_dispatcher",
                     "ROLE_SWITCHABLE" ]
        tags:
            - { name: monolog.logger, channel: security 
- Listener
  + SwitchUserListener
    * public function invoke(RequestEvent $event)
    * use Symfony\Component\HttpKernel\Event\RequestEvent;
        $roles = $user->getRoles();
        $roles[] = new SwitchUserRole('ROLE_PREVIOUS_ADMIN', $this->tokenStorage->getToken(), false);

        $token = new SwitchUserToken($user, $user->getPassword(), $this->providerKey, $roles, $token);

        if (null !== $this->dispatcher) {
            $switchEvent = new SwitchUserEvent($request, $token->getUser(), $token);
            $this->dispatcher->dispatch($switchEvent, SecurityEvents::SWITCH_USER); // sf 5
            // use the token from the event in case any listeners have replaced it.
            $token = $switchEvent->getToken();
        }
- Events 
  + \Swift_Events_SendEvent::RESULT_SUCCESS
  + \Swift_Events_SendEvent::RESULT_FAILED
  + \Swift_Events_SendEvent::RESULT_SPOOLED
  + \Swift_Events_SendEvent::RESULT_PENDING
  + \Swift_Events_SendEvent::RESULT_TENTATIVE
- assets, SumoSelect, html5sortable, html5sortable
- bin/console user:create, user:changepassword, user:role

## pd-user (mon projet préféré, my favorite project)

- Symfony\Component\EventDispatcher\EventSubscriberInterface;
  + LoginListener implements EventSubscriberInterface
    * __construct(EntityManagerInterface $entityManager)
    * SecurityEvents::INTERACTIVE_LOGIN => 'onLogin',
- Symfony\Contracts\EventDispatcher\Event
  + REGISTER = 'user.register'
  + REGISTER_CONFIRM = 'user.register_confirm'
  + RESETTING = 'user.resetting'
  + RESETTING_COMPLETE = 'user.resetting_complete'
- Symfony\Contracts\EventDispatcher\EventDispatcherInterface
  + SecurityController extends AbstractController
    * // Dispatch Register Event  sf4-5
      if ($response = $dispatcher->dispatch(new UserEvent($user), UserEvent::REGISTER_BEFORE)->getResponse()) {
            return $response;
      }
- Commander
  + ChangePasswordCommand extends Command
  + CreateUserCommand extends Command
  + RoleUserCommand extends Command

## PdAdminUserBundle (mon projet préféré, my favorite project)

- codes
  - ->setParameter('filter', "%{$request->get('filter')}%");
  - $request->query->getInt('limit', $this->getParameter('list_count'))
  - $request->query->getInt('page', 1),
  - UserPasswordEncoderInterface $encoder
  - ChangePasswordType::class
  - $password = $encoder->encodePassword($user, $form->get('plainPassword')->getData());
  - $this->addFlash('success', 'changes_saved');
  - sprintf('%s - %s', $user->getProfile()->getFullName(), $user->getEmail()),
  - dump(array_intersect($security->getACL(), $user->getRolesUser()));
  - $roles = $form->get('roles')->getData();
  - $roles = array_merge($roles, [$form->get('acl')->getData()]);
- Form
  + ContactForm.php
    * options
  + UserForm.php

## pehapkaris.cz (pas grand chose)

https://github.com/pehapkari/pehapkari.cz.git

- php 7.4 && symfony 5
  "require": {
        "php": "^7.4",
        "ext-iconv": "*",
        "ext-intl": "*",
        "ext-json": "*",
        "ext-pdo": "*",
        "ext-pdo_pgsql": "*",
        "alterphp/easyadmin-extension-bundle": "^3.0",
        "chumper/zipper": "^1.0",
        "composer/ca-bundle": "^1.2",
        "dfridrich/ares": "^1.2",
        "doctrine/annotations": "^1.10",
        "doctrine/cache": "^1.10",
        "doctrine/doctrine-bundle": "^2.0",
        "doctrine/orm": "^2.7",
        "easycorp/easyadmin-bundle": "^2.3.3",
        "egulias/email-validator": "^2.1",
        "erusev/parsedown-extra": "^0.8.1",
        "fakturoid/fakturoid-php": "^1.0",
        "guzzlehttp/guzzle": "^6.5",
        "j7mbo/twitter-api-php": "^1.0",
        "knplabs/doctrine-behaviors": "^2.0",
        "latte/latte": "^2.7",
        "sentry/sentry": "^2.3",
        "sentry/sentry-symfony": "^3.4.4",
        "sensio/framework-extra-bundle": "^5.5",
        "setasign/fpdf": "^1.8",
        "setasign/fpdi": "^2.3",
        "spatie/calendar-links": "^1.2",
        "symfony/asset": "^5.0",
        "symfony/console": "^5.0",
        "symfony/debug-bundle": "^5.0",
        "symfony/dependency-injection": "^5.0",
        "symfony/dotenv": "^5.0",
        "symfony/event-dispatcher": "^5.0",
        "symfony/expression-language": "^5.0",
        "symfony/flex": "^1.6",
        "symfony/form": "^5.0",
        "symfony/framework-bundle": "^5.0",
        "symfony/http-client": "^5.0",
        "symfony/http-kernel": "^5.0",
        "symfony/intl": "^5.0",
        "symfony/mailer": "^5.0",
        "symfony/mailgun-mailer": "^5.0",
        "symfony/maker-bundle": "^1.15",
        "symfony/mime": "^5.0",
        "symfony/orm-pack": "^1.0.7",
        "symfony/security-bundle": "^5.0",
        "symfony/templating": "^5.0",
        "symfony/translation": "^5.0",
        "symfony/twig-bridge": "^5.0",
        "symfony/twig-bundle": "^5.0",
        "symfony/validator": "^5.0",
        "symfony/web-profiler-bundle": "^5.0",
        "symfony/webpack-encore-bundle": "^1.7",
        "symfony/yaml": "^5.0",
        "symplify/auto-bind-parameter": "^7.3",
        "symplify/autodiscovery": "^7.3",
        "symplify/autowire-array-parameter": "^7.3",
        "symplify/flex-loader": "^7.3",
        "symplify/package-builder": "^7.3",
        "symplify/easy-hydrator": "^7.3",
        "vich/uploader-bundle": "^1.13",
        "migrify/symfony-route-usage": "^0.1.9"
    },
    "require-dev": {
        "dama/doctrine-test-bundle": "^6.3",
        "doctrine/migrations": "^2.2",
        "nette/application": "^3.0",
        "nette/bootstrap": "^3.0",
        "nette/forms": "^3.0",
        "phpstan/phpstan": "^0.12.18",
        "phpstan/phpstan-doctrine": "^0.12",
        "phpunit/phpunit": "^9.0",
        "rector/rector": "^0.7.11",
        "symfony/browser-kit": "^5.0",
        "symfony/var-dumper": "^5.0",
        "symplify/coding-standard": "^7.3",
        "symplify/easy-coding-standard": "^7.3",
        "symplify/phpstan-extensions": "^7.3"
    },
    "autoload": {
        "psr-4": {
            "Pehapkari\\": "src",
            "Pehapkari\\Provision\\": "packages/provision/src",
            "Pehapkari\\Blog\\": "packages/blog/src",
            "Pehapkari\\Meetup\\": "packages/meetup/src",
            "Pehapkari\\Registration\\": "packages/registration/src",
            "Pehapkari\\Github\\": "packages/github/src",
            "Pehapkari\\Training\\": "packages/training/src",
            "Pehapkari\\Marketing\\": "packages/marketing/src",
            "Pehapkari\\BetterEasyAdmin\\": "packages/better-easy-admin/src",
            "Pehapkari\\User\\": "packages/user/src",
            "Pehapkari\\Wiki\\": "packages/wiki/src",
            "Pehapkari\\Youtube\\": "packages/youtube/src",
            "Pehapkari\\Fakturoid\\": "packages/fakturoid/src"
        }
    },
    "autoload-dev":{
        "psr-4": {
            "Pehapkari\\Blog\\Tests\\": "packages/blog/tests",
            "Pehapkari\\Utils\\PHPStan\\": "utils/phpstan/src"
        }
    },
- Mailer
  + use Symfony\Bridge\Twig\Mime\TemplatedEmail;
    use Symfony\Component\Mailer\MailerInterface;
    use Symfony\Component\Mime\Address;
- Twig
  + "symfony/twig-bridge": "^5.0",
  + "symfony/twig-bundle": "^5.0",
  - new TwigFilter('google_calendar_link'
  - new TwigFunction('word_by_count', 
    + {{ word_by_count(training.participantCount(), ['prošel %d účastník', 'prošli %d účastníci', 'prošlo více než %d účastníků']) }}
- Validation
  + EmailValidation
- Zip
  + function saveZipFileWithFiles(string $filename, array $filePaths): string

## personal-management-system (mon projet préféré, my favorite project)

Your web application for managing personal data.  codes structure sont bizare

https://github.com/Volmarg/personal-management-system

- composer.json
  + "php": "^7.2.0",
    "ext-iconv": "*",
    "beberlei/DoctrineExtensions": "^1.2",
    "cweagans/composer-patches": "^1.6",
    "friendsofsymfony/user-bundle": "dev-master",
    "google/apiclient": "^2.0",
    "ramsey/uuid": "^3.8",
    "sensio/framework-extra-bundle": "^5.1",
    "sensiolabs/security-checker": "^6.0",
    "specshaper/encrypt-bundle": "^1.1",
    "symfony/asset": "^4.0",
    "symfony/console": "^4.0",
    "symfony/debug-pack": "^1.0",
    "symfony/dotenv": "^4.0",
    "symfony/flex": "^1.0",
    "symfony/framework-bundle": "^4.0",
    "symfony/http-foundation": "v4.4.7",
    "symfony/lts": "^4@dev",
    "symfony/orm-pack": "^1.0",
    "symfony/routing": "^4.0",
    "symfony/serializer": "^4.0",
    "symfony/swiftmailer-bundle": "^3.3",
    "symfony/templating": "^4.0",
    "symfony/twig-bundle": "^4.0",
    "symfony/web-server-bundle": "^4.0",
    "symfony/webpack-encore-bundle": "^1.4",
    "symfony/webpack-encore-pack": "^1.0",
    "symfony/yaml": "^4.0",
    "tinymce/tinymce": "^5.0",
    "twig/extensions": "^1.5"
- package.json
  + "@danielfarrell/bootstrap-combobox": "^1.1.8",
    "@furcan/iconpicker": "^1.0.0",
    "apexcharts": "^3.15.6",
    "autocomplete-js": "^2.7.1",
    "babel-polyfill": "^6.26.0",
    "bootbox": "^5.1.3",
    "bootstrap": "4.0.0-beta.2",
    "bootstrap-datepicker": "^1.7.1",
    "bootstrap-toggle": "^2.2.2",
    "chart.js": "^2.7.1",
    "datatables": "^1.10.13",
    "datatables.net-select": "^1.3.1",
    "depcheck": "^0.9.1",
    "easy-pie-chart": "^2.1.7",
    "element-ready": "^4.1.1",
    "flatpickr": "^4.6.3",
    "fontawesome-iconpicker": "^3.2.0",
    "fullcalendar": "^3.6.2",
    "imagesloaded": "^4.1.4",
    "izimodal": "^1.5.1",
    "jquery": "3.3.1",
    "jquery-autocompleter": "^0.3.0",
    "jquery-migrate": "^3.0.1",
    "jquery-sparkline": "^2.4.0",
    "jquery-ui": "^1.12.1",
    "js-base64": "^2.5.1",
    "jvectormap": "^2.0.4",
    "lg-autoplay": "^1.0.4",
    "lg-fullscreen": "^1.1.0",
    "lg-hash": "^1.0.4",
    "lg-pager": "^1.0.2",
    "lg-share": "^1.1.0",
    "lg-thumbnail": "^1.1.0",
    "lg-video": "^1.2.2",
    "lg-zoom": "^1.1.0",
    "lightgallery": "^1.6.12",
    "load-google-maps-api": "^1.0.0",
    "lodash": "^4.17.4",
    "masonry-layout": "^4.2.2",
    "mdbootstrap": "^4.8.1",
    "moment": "^2.19.1",
    "npm": "^6.9.0",
    "perfect-scrollbar": "^1.1.0",
    "popper.js": "^1.13.0",
    "prismjs": "^1.19.0",
    "selectize": "^0.12.6",
    "shufflejs": "^5.2.3",
    "skycons": "^1.0.0",
    "tinymce": "^5.0.5",
    "trumbowyg": "^2.16.2",
    "twig": "^1.13.2"

## php-censor (mon projet préféré, my favorite project)

PHP Censor is an open source self-hosted continuous integration server for PHP projects.
https://github.com/php-censor/php-censor

- package.json
  + "@fortawesome/fontawesome-free": "^5.9.0",
    "@fortawesome/free-brands-svg-icons": "^5.9.0",
    "@fortawesome/free-regular-svg-icons": "^5.9.0",
    "@fortawesome/free-solid-svg-icons": "^5.9.0",
    "bootstrap-sass": "^3.4.1",
    "bootswatch": "^3.4.1",
    "imports-loader": "^0.8.0",
    "lato-font": "^3.0.0",
- assets
  + scss
    * @import "~bootstrap/scss/bootstrap";
      @import "~@fortawesome/fontawesome-free/css/all.css";
      @import "abstracts/bootstrap";
      @import "abstracts/variables";
      @import "base/typography";
      @import "base/page";
      @import "components/buttons";
      @import "components/cards";
      @import "layout/header";
      @import "layout/footer";
      @import "pages/meetups";
      @import "pages/homepage";
  + js
- composer.json
  + "php": "^7.3"
  + "chumper/zipper": "^1.0", //ZipArchive methods with some handy functions
  + "egulias/email-validator": "^2.1",
  + "sentry/sentry": "^2.2", //error monitoring
  + "sentry/sentry-symfony": "dev-master#e30be17"
  + "setasign/fpdf": "^1.8", // generate PDF files
  + "setasign/fpdi": "^2.2",  // read pages from existing PDF documents
  + "spatie/calendar-links": "^1.2", // calendar links for Google, iCal
  + symfony/asset": "^5.0"
  + "vich/uploader-bundle": "^1.12"
  + "latte/latte": "^2.5", //template engine
  + "phpstan/phpstan": "^0.12.4", // PHP Static Analysis Tool
  + "symplify/phpstan-extensions": "^7.2"
  + "rector/rector": "^0.6.9" // upgrade and refactoring of your PHP code
  + "symplify/coding-standard": "^7.2", // PHP_CodeSniffer and PHP CS Fixer.
  + "symplify/easy-coding-standard": "^7.2"
- Mailer
  + use Symfony\Component\Mailer\MailerInterface
  + symfony/mailgun-mailer
    * sendRegistrationConfirmation()
- Symfony\Component\EventDispatcher\EventSubscriberInterface
  + UserEventSubscriber implements EventSubscriberInterface
  + yield EasyAdminEvents::PRE_UPDATE => ['hashUserPassword'];
  + GenericEvent $genericEvent
    * $genericEvent->getArgument('entity')->getPassword()
    * $genericEvent['entity'] = $entity

## phpquiz

https://github.com/strangebuzz/phpquiz
This is the public repository of the phpquiz.xyz project.

- tests:

## pim-community-dev (to run)

https://github.com/akeneo/pim-community-dev

Akeneo PIM is an intuitive platform that radically simplifies product information management

- package.json
  + "babel-polyfill": "6.26.0",
    "backbone": "0.9.10",
    "css-loader": "^3.3.0", // sinterprets @import
    "dep-diff": "1.0.1", // Get a list of differences between package dependencies
    "dropzone": "4.0.1", // drag and drop 
    "formik": "^2.0.6", // Forms in React
    "jquery": "3.4.0",
    "less": "^3.9.0",
    "lodash": "^4.17.0", //  utilities.
    "react": "^16.8.0",
    "react-dom": "^16.8.0",
    "react-hook-form": "^5.2.0",
    "react-router-dom": "^5.1.0",
    "reakit": "^1.0.0-rc.0",
    "style-loader": "^1.0.1",
    "styled-components": "^4.3.2",
    "summernote": "0.6.16",
    "underscore": "1.8.3", //helper library.
    "victory": "^33.1.6" // Data viz for React
- public/bundles/pimui/js/index.js
- composer.json
  + "php": "7.3.*",
  + "ass/xmlsecurity": "1.1.1",
  + "dompdf/dompdf" : "0.8.3",
  + "elasticsearch/elasticsearch": "7.5.0",
  + "league/flysystem": "^1.0",
  + "league/flysystem-ziparchive": "1.0.3",
  + "liip/imagine-bundle": "2.2.0",
  + "imagine/imagine": "0.7.1",
  + "ocramius/proxy-manager": "2.2.3",
  + "oneup/flysystem-bundle": "3.1.0",
  + "box/spout": "2.7.2",
  + "webmozart/assert": "1.5"
  + "symfony/asset": "4.4.7",
  + "justinrainbow/json-schema": "^5.2"
  + "behat/behat": "3.5.0",
  + "phpspec/phpspec": "~6.0.0",
  + "liuggio/fastest": "1.6.*",
  + "phpstan/phpstan": "^0.11.1",


## ResidenceCMS [Good, sf5, Mordern, mon projet préféré, my favorite project]

https://github.com/Coderberg/ResidenceCMS

- Good for a new project
- no fosuserbundle
- composer.json
  + "symfony/framework-bundle": "5.3.*",
- package.json
  + "devDependencies"
    * "@symfony/webpack-encore": "^1.0.0",
      "core-js": "^3.6.5",
      "node-sass": "^5.0.0",
      "sass-loader": "^10.1.0",
      "webpack-notifier": "^1.6.0"
  + "@fortawesome/fontawesome-free": "^5.6.1",
      "bootstrap": "^4.6.0",
      "dropzone": "^5.9.2",
      "ekko-lightbox": "^5.3.0",
      "jquery": "^3.6.0",
      "jquery-ui-dist": "^1.12.1",
      "jquery-ui-touch-punch": "^0.2.3",
      "js-cookie": "^2.2.1",
      "lazysizes": "^5.3.2",
      "popper.js": "^1.16.1",
      "select2": "^4.1.0-rc.0"
- assets
  + scss
    * // Variables
      @import "variables";
      // Bootstrap
      @import '~bootstrap/scss/bootstrap';
      // Font Awesome
      $fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
      @import '~@fortawesome/fontawesome-free/scss/fontawesome';
      @import '~@fortawesome/fontawesome-free/scss/regular';
      @import '~@fortawesome/fontawesome-free/scss/solid';
      @import "~ekko-lightbox/dist/ekko-lightbox";
      @import '~dropzone/dist/dropzone.css';
      @import '~select2/dist/css/select2.css';
  + js
    * import Cookies from 'js-cookie/src/js.cookie';
    * import 'ekko-lightbox/dist/ekko-lightbox';
    * import $ from 'jquery';
      window.jQuery = $;
      window.$ = $;
      import 'popper.js';
      import 'bootstrap';
      import 'lazysizes';
    * city.js
      - use symfony form event
    * menu-sorting.js
    *  $emailContainer.slideDown();
    *  $emailField.prop('required', true);
    *  $checkbox.is(':checked');
    *  $form.dropzone({
    *  $(".reorder-ul").sortable({tolerance: 'pointer'});
    *  if (currentUrl.indexOf('unpublished') !== -1) {
- Mailer
  + Symfony\Component\Mailer\MailerInterface;
  + Symfony\Component\Mime\Email;
  + Symfony\Component\Mailer\Exception\TransportExceptionInterface;
- __invoke
  + 
- services.yaml
  + App\Service\FileUploader:
      arguments:
        $targetDirectory: '%images_directory%'
- Message (=event)
  + DeletePhotos
  + SendFeedback
  + SendResetPasswordLink
- MessageHandler (=eventDsipatcher)
  + DeletePhotosHandler
  + SendFeedbackHandler
    * Symfony\Component\Messenger\Handler\MessageHandlerInterface;
  + SendResetPasswordLinkHandler
- Controller
  + $feedback = new FeedbackDto();
  + App\Message\SendFeedback;
  + $messageBus->dispatch(new SendFeedback($feedback));
- Utils
  + Slugger::slugify('About Us'));
- Form
  + FormEvents::POST_SET_DATA
  + FormEvents::POST_SUBMIT
- Form (espace.medflixs.com)
  + FormEvents::PRE_SET_DATA
  + FormEvents::POST_SUBMIT

## ResidenceCMSUserBundle (rien de spécial, nothing special)

- Serivce
  + UserService
  + ResettingService
    * public function sendResetPasswordLink(Request $request): void
      - $this->messageBus->dispatch(new SendResetPasswordLink($user));
- MessageHandler
  + SendResetPasswordLinkHandler
- Controller
  + $service->sendResetPasswordLink($request);
- Message
  + SendResetPasswordLink;

## sekoliko (rien de spécial, nothing special)

School Management Web Application OPENSOURCE

- package.json
  + "bootstrap-datepicker": "^1.7.1",
    "bootstrap4-datetimepicker": "^5.2.3",
    "brand-colors": "^2.0.1",
    "chart.js": "^2.7.1",
    "datatables": "^1.10.13",
    "easy-pie-chart": "^2.1.7",
    "file-loader": "^1.1.5",
    "fullcalendar": "^3.6.2",
    "jquery": "^3.4.1",
    "jquery-sparkline": "^2.4.0",
    "jvectormap": "^2.0.4",
    "load-google-maps-api": "^1.0.0",
    "lodash": "^4.17.4",
    "masonry-layout": "^4.2.0",
    "moment": "^2.19.1",
    "perfect-scrollbar": "^1.1.0",
    "popper.js": "^1.12.6",
    "scriptjs": "^2.5.9",
    "skycons": "^1.0.0"
  + app.scss
    * @import "../theme/styles/index";
      @import "./module/datetimepicker";
      @import "./module/main.scss";
      @import "./module/sidebar";
  + app.js
    * jQuery.classList  //get you an array of class names.
    * $('.datetimepicker').datetimepicker({
        format:'YYYY-MM-DD HH:MM',
        icons: {
            time: 'ti-time',
            date: 'ti-calendar',
            up: 'ti-angle-up',
            down: 'ti-angle-down',
            previous: 'ti-angle-left',
            next: 'ti-angle-right',
            today: 'ti-calendar',
            clear: 'ti-trash',
            close: 'ti-close'
        },
    });
- composer.json
  + "php": "^7.1.3"
  + "dompdf/dompdf": "^0.8.3",
  + "squizlabs/php_codesniffer": "^3.5"
- datetimepicker
- Command
  + SekolikoCreateSuperAdminCommand
- No dispatch
- No MessageBus

## Sylius

Open Source eCommerce Platform on Symfony

https://github.com/Sylius/Sylius

- composer.json
  + php 7.4
  + symfony 5.2
  + friends-of-behat
- tests
  + behat (à voir!!!)

## symbnb

SymBNB - AirBNB clone with Symfony 5
https://github.com/Anteste/symbnb

- Form: 
   + CollectionType

## Symfonator (rien de spécial, nothing special)

Bootstrap 4 admin template!

- package.json
  + "babel-polyfill": "^6.26.0",
    "bootstrap": "4.0.0-beta.2",
    "bootstrap-datepicker": "^1.7.1",
    "chart.js": "^2.7.1",
    "datatables": "^1.10.13",
    "easy-pie-chart": "^2.1.7",
    "fullcalendar": "^3.6.2",
    "jquery": "3.3.1",
    "jquery-sparkline": "^2.4.0",
    "jvectormap": "^2.0.4",
    "load-google-maps-api": "^1.0.0",
    "lodash": "^4.17.4",
    "masonry-layout": "^4.2.0",
    "moment": "^2.19.1",
    "perfect-scrollbar": "^1.1.0",
    "popper.js": "1.13.0",
    "skycons": "^1.0.0"
- composer.json
  + "php": "^7.2.0"
  + "friendsofsymfony/user-bundle": "dev-master",
  + "symfony/asset": "^4.0"
- friendsofsymfony/user-bundle
- encore, 
- jquery, 
- Bootstrap 4 admin template

## symfony-3-rest-api-example (rien de spécial, nothing special)

- composer.json
    "php": ">=5.5.9",
    "symfony/symfony": "3.0.*",
    "doctrine/orm": "^2.5",
    "doctrine/doctrine-bundle": "^1.6",
    "doctrine/doctrine-cache-bundle": "^1.2",
    "symfony/swiftmailer-bundle": "^2.3",
    "symfony/monolog-bundle": "^2.8",
    "sensio/distribution-bundle": "^5.0",
    "sensio/framework-extra-bundle": "^3.0.2",
    "incenteev/composer-parameter-handler": "^2.0",
    "nelmio/cors-bundle": "^1.4",
    "nelmio/api-doc-bundle": "^2.11",
    "friendsofsymfony/rest-bundle": "^1.7",
    "csa/guzzle-bundle": "^1.3",
    "jms/serializer-bundle": "^1.1",
    "oneup/flysystem-bundle": "^1.2",
    "friendsofsymfony/user-bundle": "dev-master",
    "lexik/jwt-authentication-bundle": "dev-master"
- Controller
  + AccountsController extends FOSRestController implements ClassResourceInterface
- Entity
- Event
- Exception
- Form
- Factory
- Features
- Handle
- Model
- Repository
- Security
- Util

## symfony-admin (rien de spécial, nothing special)

Symfony 5 Admin Application is a skeleton

- package.json
  + "@coreui/coreui": "^3.0.0-rc.3",
    "@fortawesome/fontawesome-free": "^5.12.1",
    "@popperjs/core": "^2.0.6",
    "perfect-scrollbar": "1.5.0"
- composer.json
  + "php": "^7.4",
  + "symfony/asset": "5.0.*"
- Commande
  + CreateCommand
  + RoleCommand

## symfony-demo ( à voir)

https://github.com/symfony/demo.git

- package.json
  + "@fortawesome/fontawesome-free": "^5.8.1",
    "@symfony/webpack-encore": "^0.28.0",
    "bloodhound-js": "^1.2.3",
    "bootstrap-sass": "^3.3.7",
    "bootstrap-tagsinput": "^0.7.1",
    "bootswatch": "^3.3.7",
    "core-js": "^3.0.0",
    "eonasdan-bootstrap-datetimepicker": "^4.17.47",
    "highlight.js": "^9.12.0",
    "imports-loader": "^0.8.0",
    "jquery": "^3.5.1",
    "lato-font": "^3.0.0",
    "node-sass": "^4.9.3",
    "sass-loader": "^7.1.0",
    "typeahead.js": "^0.11.1"
- composer.json
  + "php": "^7.2.9",
    "ext-pdo_sqlite": "*",
    "doctrine/doctrine-bundle": "^1.12|^2.0",
    "doctrine/doctrine-migrations-bundle": "^1.3|^2.0",
    "doctrine/orm": "^2.5.11",
    "erusev/parsedown": "^1.6",
    "sensio/framework-extra-bundle": "^5.1",
    "symfony/apache-pack": "^1.0",
    "symfony/asset": "5.1.*",
    "symfony/console": "5.1.*",
    "symfony/dotenv": "5.1.*",
    "symfony/expression-language": "5.1.*",
    "symfony/flex": "^1.1",
    "symfony/form": "5.1.*",
    "symfony/framework-bundle": "5.1.*",
    "symfony/intl": "5.1.*",
    "symfony/mailer": "5.1.*",
    "symfony/monolog-bundle": "^3.1",
    "symfony/polyfill-intl-messageformatter": "^1.12",
    "symfony/security-bundle": "5.1.*",
    "symfony/string": "5.1.*",
    "symfony/translation": "5.1.*",
    "symfony/twig-pack": "^1.0",
    "symfony/validator": "5.1.*",
    "symfony/webpack-encore-bundle": "^1.4",
    "symfony/yaml": "5.1.*",
    "tgalopin/html-sanitizer-bundle": "^1.2",
    "twig/intl-extra": "^3.0",
    "twig/markdown-extra": "^3.0"

- Entity
  - Post
    - private $tags;
    - @ORM\ManyToMany(targetEntity="App\Entity\Tag", cascade={"persist"})
- Events
  - CommentCreatedEvent
- EventSubscriber
  - CheckRequirementsSubscriber
  - CommentNotificationSubscriber
    - CommentCreatedEvent::class => 'onCommentCreated',
  - ControllerSubscriber
    - KernelEvents::CONTROLLER => 'registerCurrentController',
  - RedirectToPreferredLocaleSubscriber
    - KernelEvents::REQUEST => 'onKernelRequest',
- Mailer
  - use Symfony\Component\Mailer\MailerInterface;
- Slugger
  - use Symfony\Component\String\Slugger\SluggerInterface;
- Form
  - addEventListener(FormEvents::SUBMIT,
  - $post->setSlug($this->slugger->slug($postTitle)->lower());
- Pagination
  - Paginator
  - (new Paginator($qb))->paginate($page);
- Security
  - It grants or denies permissions for actions related to blog posts (such as showing, editing and deleting posts).
  - Voter
  - // check for "view" access: calls all voters
    $this->denyAccessUnlessGranted('view', $post);
  - $this->denyAccessUnlessGranted(PostVoter::SHOW, $post, 'Posts can only be shown to their authors.');
- Twig
  + new TwigFunction('locales', [$this, 'getLocales']),
  + new TwigFunction('show_source_code', [$this, 'showSourceCode'], ['is_safe' => ['html'], 'needs_environment' => true])
- Utils
  + Validator
    - $username = $this->validator->validateUsername($input->getArgument('username'));

## symfony-realworld-example-app (code standard à voir)

Symfony codebase containing real world examples (CRUD, auth, advanced patterns, etc)

- composer.json
  + "php": "^7.4"
  + "symfony/cache": "4.4.*"
  + phpcs
  + phpmd
  + phpstan
  + phpunit
  + psalm
  + rector
- Serializer
  + Symfony\Component\Serializer\Normalizer
- Security
  + Voter
- EventListener
  + JWTAuthenticationSubscriber implements EventSubscriberInterface
    * JWTEvents::AUTHENTICATION_SUCCESS => 'onAuthenticationSuccess',
- No Dispatch, No MessageBus 

## symfony 4 (documentation, to run)

symfony 4 course on KnpUniversity

- compoaser.json
  + "php": "^7.1.3"
  + "symfony/framework-bundle": "^4.0",
- composer install
- php -S 127.0.0.1:8000 -t public


## symfony4-demo ( à voir)

https://github.com/kshataer/symfony4_demo.git

- package.json
  + "bloodhound-js": "^1.2.1",
    "bootstrap-sass": "^3.3.7",
    "bootstrap-tagsinput": "^0.7.1",
    "bootswatch": "^3.3.7",
    "eonasdan-bootstrap-datetimepicker": "^4.17.47",
    "font-awesome": "^4.7.0",
    "highlight.js": "^9.12.0",
    "imports-loader": "^0.7.1",
    "jquery": "^3.2.1",
    "lato-font": "^3.0.0",
    "typeahead.js": "^0.11.1"
- composer.json
  + "php": "^7.1.3",
  + "erusev/parsedown": "^1.6",
  + "ezyang/htmlpurifier": "^4.9",
  + "symfony/asset": "^4.0",
  + "white-october/pagerfanta-bundle": "^1.1"
- Command
  + AddUserCommand
  + DeleteUserCommand
  + ListUsersCommand
- Controler
  + BlogController
    * $event = new GenericEvent($comment);
    * eventDispatcher->dispatch(Events::COMMENT_CREATED, $event);
- Events
  + COMMENT_CREATED = 'comment.created';
- EventSubscriber
  + CheckRequirementsSubscriber
  + CommentNotificationSubscriber
    * __construct(\Swift_Mailer $mailer, UrlGeneratorInterface $urlGenerator, TranslatorInterface $translator, $sender)
    * Events::COMMENT_CREATED => 'onCommentCreated',
  + ControllerSubscriber
  + RedirectToPreferredLocaleSubscriber
- service.yaml
  + app.notifications.email_sender: anonymous@example.com
  + App\EventSubscriber\CommentNotificationSubscriber:
    $sender: '%app.notifications.email_sender%' // use containe, ex: $this->container->getParameter('security.role_hierarchy.roles') or  $this->container->getParameter('api_braincert')

## symfonycon-lisbon

https://github.com/dunglas/symfonycon-lisbon

Des apps Symfony sous stéroïdes grâce à Vue.js, Mercure et Panther ! (Kévin Dunglas)

## Symfony 5: The Fast Track

https://github.com/the-fast-track/book-5.0-3

## symfony4-user (*google/recaptcha*, *service*, interesting, et my selected tool)

skeleton for projects that require user registration and authentication with Symfony 4

- package.json
  + "bootstrap": "^4.0.0",
    "font-awesome-sass": "^4.7.0",
    "jquery": "^3.2.1",
    "popper.js": "^1.12.9",
- Assets
  + app.scss
    * @import "variables";
      @import "../../node_modules/bootstrap/scss/bootstrap";
      @import "../../node_modules/font-awesome-sass/assets/stylesheets/font-awesome";
  + app.js
    * require('../css/app.scss');
    var $ = require('jquery');
    window.$ = $;
    window.jQuery = $;
    window.Popper = require('popper.js');
    require('bootstrap');
- composer.json
  + "php": "^7.1.3"
  + "google/recaptcha": "^1.1",
  + "symfony/console": "^4.0"
- Form 
  + Security
    * LoginType
  + User
    * EditType
    * RegistrationType
    * RequestResetPasswordType
    * ResetPassword
- Service
  + CaptchaValidator
  + Mailer
    * sendActivationEmailMessage
    * sendResetPasswordEmailMessage
    * sendMessage
  + TokenGenerator

## Symfony4APIBoilerplateJWTBook (gestion user with events completed, et my selected tool)

Simple Example Api Rest Book with Symfony 4.4 LTS and Json Web Token

- composer.json
  + "php": "^7.1.3"
  + "friendsofsymfony/rest-bundle": "dev-master",
    "jms/serializer-bundle": "^2.0@dev",
    "lexik/jwt-authentication-bundle"
  + "symfony/console": "4.4.*"
- Controller
  + ChangePasswordController
    * $event = new EmailChangePasswordEvent($userRepository);
      $dispatcher = $this->get('event_dispatcher');
      $dispatcher->dispatch(EmailChangePasswordEvent::NAME, $event);
  + ForgotPasswordController
    * $event = new EmailForgotPasswordEvent($userRepository);
      $dispatcher = $this->get('event_dispatcher');
      $dispatcher->dispatch(EmailForgotPasswordEvent::NAME, $event);
  + LoginController
  + RegistrationController
    * $event = new EmailRegistrationUserEvent($user);
      $dispatcher = $this->get('event_dispatcher');
      $dispatcher->dispatch(EmailRegistrationUserEvent::NAME, $event);
- Event
  + EmailChangePasswordEvent
  + EmailForgotPasswordEvent
  + EmailRegistrationUserEvent
- EventListener
  + MailChangePasswordListener
  + MailForgotPasswordListener
  + MailRegistrationUserListener
- Security
  + JwtAuthenticator
- Utils
  + PasswordGenerator
- tests

## symfonycasts-messenger (nothing special to run)

course on SymfonyCasts

- package.json
  + "axios": "^0.18.0",
    "bootstrap": "^4.3.1",
    "core-js": "^3.0.0",
    "jquery": "^3.4.1",
    "moment": "^2.24.0",
    "popper.js": "^1.15.0",
    "vue": "^2.6.10",
    "vue-loader": "^15.0.11",
    "vue-template-compiler": "^2.6.10",
    "vue2-dropzone": "^3.5.9",
- assets
  + app.js
    * import Vue from 'vue';
      import ImageApp from './components/ImageApp';
      import 'bootstrap/dist/css/bootstrap.css';
      import 'bootstrap';
      Vue.component('image-app', ImageApp);
      const app = new Vue({
          el: '#images-app'
      });
  + components
    * ImageApp.vue
    * ImageItem.vue
    * ImageList.vue
    * ImageUploader.vue

## SymForum (quelque chose à revoir, et à suivir, et for forum in my application, et my selected tool)

https://github.com/duboiss/SymForum

- docker, caddy, php8, mysql8
- .php-cs-fixer.dist.php
- Makefile
- Composer
  + "php": "^8.0.0",
  + "symfony/framework-bundle": "5.2.*",
  + "fakerphp/faker": "^1.13",
- Code Quality
  + [PHPLint](https://github.com/php-parallel-lint/PHP-Parallel-Lint)
  + [TwigCs](https://github.com/friendsoftwig/twigcs)
  + [ESLint](https://eslint.org/)
  + [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)
  + [PHPStan](https://github.com/phpstan/phpstan) (level 8)
  + [SymfonyInsight](https://insight.symfony.com/)
- package.json (no node-sass)
    "@ckeditor/ckeditor5-build-classic": "^28.0.0",
    "@fortawesome/fontawesome-free": "^5.15.2",
    "@symfony/stimulus-bridge": "^2.0.2",
    "@symfony/webpack-encore": "^1.0.0",
    "bootstrap": "^4.3.1",
    "core-js": "^3.0.0",
    "eslint": "^7.25.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-plugin-import": "^2.22.1",
    "jquery": "^3.6.0",
    "popper.js": "^1.16.0",
    "regenerator-runtime": "^0.13.2",
    "stimulus": "^2.0.0",
    "webpack-notifier": "^1.6.0"
- assets (no sass)
  + js
    * app.js (import css)
      - import '../css/app.css';
        import '@fortawesome/fontawesome-free/css/all.min.css';
        import 'bootstrap';
        import './components/deleteBtn'; (js)
        import './components/submitBtn';
        import './components/toast';
- Contoller (like us)
  + use Knp\Component\Pager\PaginatorInterface;
  + ReportPanelController
    * $pagination = $paginator->paginate( // Knp\Component\Pager\PaginatorInterface VS use Pagerfanta\Pagerfanta;
    * public function findAllReportsQb(): QueryBuilder
- DataFixtures
- EventSubscriber
  + ActivitySubscriber implements EventSubscriberInterface
    * KernelEvents::CONTROLLER => [['onTerminate', 20]],
    * $this->optionService->set('max_online_users', (string) $nbOnlineUsers);
- Service (controller logic layer)
  + AntispamService
  + ForumService
  + MessageService
  + UserService
- Twig (interesant)
  + TwigFilter('breadcrumb', [$this, 'getBreadcrumbParts']), // VS TwigFilter('json_decode', [$this, 'json_decode']),
  + TwigFunction('get_active_label', [$this, 'getActiveLabel']),

## thelia

https://github.com/thelia/thelia

Thelia is an open source tool for creating e-business websites and managing online content. Repo containing the new major version (v2)

"php": ">=7.3 <8.1",
"symfony/config": "5.3",

## uh.cx

https://github.com/jeboehm/uh.cx

+ tests ( à voir)
    * vendor/bin/phpunit --coverage-clover=build/logs/clover.xml
    * vendor/bin/phpunit
    * vendor/bin/php-cs-fixer fix --allow-risky yes
    * vendor/bin/coveralls -v
+ docker ( à voir)


## uvdesk (community-skeleton, all code des sourecs are in its bundle, to run)

https://github.com/uvdesk/community-skeleton

to build and customize your own helpdesk solutions

- Features
  + * Translation Support (Multilingual)
  - Unlimited Agents, Group, Team, Customers, Tickets etc
  - Agent Privileges
  - No limit on the number of Mailbox/Email integration
  - Saved Replies for common queries
  - Filter based on ticket status, Id, agent, customer, etc
  - Block Spam
  - Standard automated workflows
  - Notes for agents
  - Custom branding
  - Change logo & favicon
  - Broadcasting message
  - Ticket Forwarding
  - Prepared Response
  - Email Notification
  - Effective search
  - User Friendly Web Installer
  - Add multiple attachments
  - Powerful Knowledgebase/Faq (article, category & folder)
  - Ticket types, Multiple Tags
  - Email Templates
  - [API][16] ([Doc][25])
  - Edit/delete/pinned ticket and thread
  - Add a collaborator and much more.
- composer.json
  + "php": "^7.2",
  + "knplabs/knp-paginator-bundle": "^4.0",
  + "symfony/framework-bundle": "4.3.*",
  + "uvdesk/composer-plugin": "^1.0",
    "uvdesk/core-framework": "^1.0",
    "uvdesk/extension-framework": "^1.0",
    "uvdesk/automation-bundle": "^1.0",
    "uvdesk/support-center-bundle": "^1.0",
    "uvdesk/mailbox-component": "^1.0"

## victoire (to run, too much bundles)

https://github.com/Victoire/victoire.git
Victoire is a **Symfony** overlay integrating a Dynamic-CMS that use the core business datas in a dynamic and automated way.

- composer.json
  + "php": ">=7.1",
    "a2lix/translation-form-bundle": "2.4.0",
    "doctrine/doctrine-bundle": "^1.6",
    "doctrine/doctrine-migrations-bundle": "^1.2",
    "doctrine/orm": "^2.5,<2.7",
    "friendsofsymfony/jsrouting-bundle": "^1.0|^2.0",
    "friendsofsymfony/user-bundle": "~2.0",
    "incenteev/composer-parameter-handler": "^2.0",
    "jms/serializer-bundle": "^1.0",
    "knplabs/gaufrette": "^0.1",
    "knplabs/doctrine-behaviors": "1.4.0",
    "knplabs/knp-menu-bundle": "^2.1",
    "liip/imagine-bundle": "^1.4",
    "predis/predis": "^1.1",
    "sensio/distribution-bundle": "^5.0",
    "sensio/framework-extra-bundle": "^3.1 | ^4.0 | ^5.0",
    "snc/redis-bundle": "~2.0",
    "stof/doctrine-extensions-bundle": "~1.2",
    "symfony/assetic-bundle": "~2.3",
    "symfony/monolog-bundle": "^3.1.0",
    "symfony/polyfill-apcu": "^1.0",
    "symfony/symfony": "^3.4,<3.4.5",
    "symfony/swiftmailer-bundle": "^2.6.4|^3.0",
    "symfony/twig-bundle": "~3.0",
    "troopers/alertify-bundle": "^3.0",
    "troopers/assetic-injector-bundle": "^1.1",
    "twig/extensions": "~1.0",
    "twig/twig": "~2.0",
    "willdurand/js-translation-bundle": "^2.5"

## wallabag (to run, sf 3.4s, rien de spécial, nothing special)

wallabag is a self-hostable PHP application allowing you to not miss any content anymore.

- package.json
  +  "annotator": "git://github.com/wallabag/annotator.git#0f076c7d371ed25eb0793346f46982d90f2c4c85", //  to easily add annotation functionality to any webpage [showcase](https://annotatorjs.org/showcase.html)
    "clipboard": "^2.0.4", // Copying text to the clipboard
    "hammerjs": "^2.0.8", // Add touch gestures
    "highlight.js": "^9.12.0", // a syntax highlighter
    "icomoon-free-npm": "^0.0.0", //  a free vector icon 
    "jquery": "^2.1.4",
    "jquery.cookie": "^1.4.1", //for reading, writing and deleting cookies
    "jr-qrcode": "^1.0.7", // 二维码js生成库
    "material-design-icons-iconfont": "^5.0.1",
    "materialize-css": "^0.98.1",
    "mathjax": "^3.0.0", //  for LaTeX, MathML, and AsciiMath notation
    "mousetrap": "^1.6.0", //  for handling keyboard shortcuts
    "ptsans-npm-webfont": "^0.0.4", // PTsans webfont package
    "roboto-fontface": "^0.7.0", //  Roboto fontface
    "waypoints": "^4.0.1" // to execute a function whenever you scroll to an element.
- app/Resources/static/themes/material/index.js (if you have, read these js)
- app/Resources/static/themes/baggy/index.js
- app/Resources/static/themes/_global/share.js
- composer.json
  + "php": ">=7.1.3",
  + "symfony/symfony": "3.4.*",
  + "friendsofphp/php-cs-fixer": "~2.13",
  + "phpstan/phpstan": "^0.11.0",
- tests


## symfony-certification-preparation-list

https://github.com/ThomasBerends/symfony-certification-preparation-list

## acmepodcast(noting special, 404)

https://github.com/rossboswell/acmepodcast.git (404)

+ composer.json
    * "friendsofsymfony/user-bundle": "dev-master"
    * "javiereguiluz/easyadmin-bundle": "^1.17",
    * "vich/uploader-bundle": "^1.8"
    * propre api && phpunit tests
    * "fzaninotto/faker": "^1.7",
    * "debril/feed-io": "^4.0"
    * "guzzlehttp/guzzle": "^6.3",
+ Repository
    * Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
    * Symfony\Bridge\Doctrine\RegistryInterface;
    * class EpisodeRepository extends ServiceEntityRepository
    * $podcast = $this->_em->getReference('App\Entity\Podcast', 1);
    * $entity = $this->_em->merge($entity);
    * $this->_em->createQueryBuilder()
+ controller
    * use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    * use Symfony\Component\HttpFoundation\JsonResponse;
+ DataFixture
    * use Doctrine\Bundle\FixturesBundle\Fixture;
    * use Doctrine\Common\Persistence\ObjectManager;
        - $manager->persist($episode);
        - public function load(ObjectManager $manager)
    * use Faker\Factory;
+ src
    * use FeedIo\Adapter\Guzzle\Client as ClientAdapter;
        use FeedIo\Feed;
        use FeedIo\Feed\Item\Media;
        use FeedIo\FeedIo;
        use GuzzleHttp\Client;
        use Psr\Log\NullLogger;
+ tests
    * use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
    * ControllerTest extends WebTestCase
    * php bin/phpunit
+ a faire
  * fos (import all routes, and templates) 
  * fake (fos, podcast, setting)
  * jwt

## banner-rotator (404)

+ config
    * not use "Symfony\Component\Routing\Annotation\Route" (config/routes) 
+ composer.json
    * "exsyst/swagger": "v0.3.2",
      "nelmio/api-doc-bundle": "dev-master",
      "jms/serializer-bundle": "^2.3",
+ src/
    * function () use ($object) {
    * App/ActionHandle
    * App/Event/Listener == App/EventSubscriber
    * App/Manager
        - use Doctrine\ORM\EntityManagerInterface;
+ events:
    * App\Event\Listener\CorsListener:
            class: App\Event\Listener\CorsListener
            arguments:
                $allowOrigin: '%env(HEADER_ALLOW_ORIGIN)%'
                $allowCredentials: '%env(HEADER_ALLOW_CREDENTIALS)%'
                $maxAge: '%env(HEADER_MAX_AGE)%'
                $allowMethods: '%env(HEADER_ALLOW_METHODS)%'
                $allowHeaders: '%env(HEADER_ALLOW_HEADERS)%'
            tags:
                * kernel.event_subscriber
    * class CorsListener implements use Symfony\Component\EventDispatcher\EventSubscriberInterface
        -     public static function getSubscribedEvents()
                {
                    return [
                        'kernel.request' => 'onKernelRequest',
                        'kernel.response' => 'onKernelResponse'
                    ];
                }
+ tests
+ Exception
+ Repo

## firma (404, revoir !!! routes, et src structure interessant)

+ package.json
    * "admin-lte": "^2.4.2",
+ config
    * routes.yaml 
        - sans notation
    * services.yaml
        - this use another codes source structure, it is better model for me
+ src
    * Action == Controller
    * it use many __invoke()
+ test
    * docker-compose up -d
    * php composer.phar install
    * php bin/console doctrine:schema:update --froce
    * $ yarn install
    * $ yarn run dev
    * http://127.0.0.1
    *   app_dashboard              /
        app_contractor_list        /contractors/
        app_contractor_add         /contractors/add
        app_contractor_get         /contractors/{contractorId}
        app_contractor_delete      /contractors/delete/{contractorId}
        app_product_list           /products/
        app_product_add            /products/add
        app_product_get            /products/{productId}
        app_product_delete         /products/delete/{productId}
        app_invoice_list           /invoices/
        app_invoice_add            /invoices/add
        ajax_contractor_list       /ajax/contractor/list
    * __invoke
    * use Symfony\Component\Form\Test\TypeTestCase;
    * services.yml  
        App\:
            resource: '../src/*'
        App\Contractor\Domain\Repository\ContractorRepository:
            class: Doctrine\ORM\EntityRepository
            factory: ["@doctrine.orm.entity_manager", getRepository]
            arguments:
                * App\Contractor\Domain\Entity\Contractor

        App\Product\Domain\Repository\ProductRepository:
            class: Doctrine\ORM\EntityRepository
            factory: ["@doctrine.orm.entity_manager", getRepository]
            arguments:
                * App\Product\Domain\Entity\Product
                * 
    * noBundle structure

## php-pack

A series of questions to prepare for the Zend PHP5.5 certification

## pim-community-dev

- Behat
- symfony 3.4
- docker
- elasticsearch
- Dependencies
  + php -d memory_limit=3G ../composer.phar install --optimize-autoloader --prefer-dist
  + yarn install
- Frontend
  + php bin/console cache:clear --no-warmup --env=prod
  + php bin/console pim:installer:assets --symlink --clean --env=prod
- Installation 
  + bin/console pim:install --force --symlink --clean --env=prod
  + yarn run webpack

./web/bundles/pimenrich/js/index.js

## Services

- symfony 3.2, 
  + "symfony/symfony": "3.2.*",
  + "api-platform/core": "^2.0",
  + "nelmio/cors-bundle": "^1.4",
  + "lexik/jwt-authentication-bundle",
- jwt
- behat
  + "behat/behat": "^3.1",
        "behat/symfony2-extension": "^2.1",
        "behat/mink": "^1.7",
        "behat/mink-extension": "^2.2",
        "behat/mink-browserkit-driver": "^1.3.1",
        "behatch/contexts": "^2.5",
        "doctrine/doctrine-fixtures-bundle": "^2.3"
- docker
    * docker-compose.yml

## stock-forecast (autoload, )

+ composer.json
    *   "autoload": {
            "psr-4": {
                "App\\": "src/App",
                "Obokaman\\StockForecast\\": "src/StockForecast"
            }
        },
        "autoload-dev": {
            "psr-4": {
                "Obokaman\\StocksForecast\\": "tests/StockForecast"
            }
        },

## symfony-form (react example)

+ package.json
    * "react": "^16.2.0"

## symfony-react-sandbox

- composer.json
  + "lexik/jwt-authentication-bundle": "^2.4",
  + "limenius/react-bundle": "^2.1",
- image upload 
- react
    +  import jwtDecode from 'jwt-decode'
    +  import { Helmet } from "react-helmet";
    +  import { renderToString } from "react-dom/server";
    +  import ReactOnRails from "react-on-rails";
    +  import Liform, { processSubmitErrors } from 'liform-react'
    +  ReactOnRails.
- entity
    + ImageUploadListener
- autre
    + $form = $this->createForm(RecipeType::Class, $recipe,
            array('csrf_protection' => false)
          );
    + server-side rendering  (Limenius\ReactBundle, PhpExecJs) 

## whois (archived)

https://github.com/famoser/whois.git

+ Composer.json
    * "fzaninotto/faker": "^1.7",
    * "javiereguiluz/easyadmin-bundle": "^1.17",
    * "php-coveralls/php-coveralls": "^2.0",
    * "ramsey/uuid": "^3",
    * "friendsofphp/php-cs-fixer": "^2.7",
        - .php_cs.dist
    * "codacy/coverage": "^1.4",
    * "symfony/phpunit-bridge": "^4.0",
+ package.json
    * jQuery
+ src
    * Trait
    * CallBack
    * Base, extends
    * use Faker\Factory;
    * extends Fixture
    * trait
    * Symfony\Component\Security\Core\User
        - AdvancedUserInterface (interface AdvancedUserInterface implements UserInterface)
        - ChainUserProvider
        - EquatableInterface
        - InMemoryUserProvider
        - User
        - UserChecker
        - UserCheckInterface
        - UserInterface
        - UserProviderInteface
    * use Twig_Extension;
    * extends EntityRepository
        - $this->createQueryBuilder
        - $em = $this->getEntityManager();
    * abstract class BaseUserProvider implements UserProviderInterface
    * use Symfony\Bridge\Doctrine\RegistryInterface
        - Symfony\Bridge\Doctrine
            + ManagerRegistry
            + RegistryInterface
            + ContainerAwareEventManager
    * services.yaml: 
        * App\Service\EmailService:
            arguments: ["@mailer", "@doctrine", "@logger","@twig","%env(MAILER_SENDER)%"]
        * public function __construct(\Swift_Mailer $mailer, RegistryInterface $registry, LoggerInterface $logger, Environment $twig, string $contactEmail)
        * $this->doctrine = $registry;
        * $manager = $this->doctrine->getManager();
    * Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

