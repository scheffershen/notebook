# Testing

- [en-marche.fr](./testing_en-marche.md)
- [Kimai2](./testing_kimai2.md)
- [ResidenceCMS](./testing_residenceCMS.md)
- [SymForum](./testing_symForum.md)
- [lms](./testing_lms.md)
- [Wallabag](./testing_wallabag.md)

use syForum tests Structure, et plus en-marche.fr et kimai2 codes

    composer require --dev phpunit/phpunit symfony/test-pack
    php ./vendor/bin/phpunit

## ResidenceCMS vs SymForum vs europharma vs en-marche.fr vs Kimai2

The wninner are Kimai2, en-marche.fr, symForum

## [WebTestCase API](https://symfony.com/doc/current/testing.html)

`PHPUnit` is configured by the `phpunit.xml.dist` file in the root of your application

>Symfony Flex automatically creates `phpunit.xml.dist` and `tests/bootstrap.php`. If these files are missing, you can try running the recipe again using `composer recipes:install phpunit/phpunit --force -v`.

    $ php ./vendor/bin/phpunit tests/Form/UserTypeTest.php

### Unit Tests (use PHPUnit\Framework\TestCase)

### Integration Tests (use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;)

An integration test will test a larger part of your application compared to a unit test (e.g. a combination of services). Integration tests might want to use the Symfony Kernel to fetch a service from the dependency injection containe

Symfony provides a Symfony\Bundle\FrameworkBundle\Test\KernelTestCase class to help you creating and booting the kernel in your tests using bootKernel():

**Retrieving Services in the Test**

In your integration tests, you often need to fetch the service from the service container to call a specific method. After booting the kernel, the container is stored in self::$container:

```php
// tests/Service/NewsletterGeneratorTest.php
namespace App\Tests\Service;

use App\Service\NewsletterGenerator;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class NewsletterGeneratorTest extends KernelTestCase
{
    public function testSomething()
    {
        // (1) boot the Symfony kernel
        self::bootKernel();
        // (2) use self::$container to access the service container
        $container = self::$container;
        // (3) run some service & test the result
        $newsletterGenerator = $container->get(NewsletterGenerator::class);
        $newsletter = $newsletterGenerator->generateMonthlyNews(...);
        $this->assertEquals(..., $newsletter->getContent());
    }
}
```

## Application Tests (use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;)

Application tests check the integration of all the different layers of the application (from the routing to the views)

1. Make a request;
2. Interact with the page (e.g. click on a link or submit a form);
3. Test the response;
4. Rinse and repeat.

>The tools used in this section can be installed via the symfony/test-pack, use `composer require symfony/test-pack` if you haven’t done so already.

    php bin/console make:test
        > WebTestCase

example:

```php
// tests/Controller/PostControllerTest.php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PostControllerTest extends WebTestCase
{
    public function testSomething(): void
    {
        // This calls KernelTestCase::bootKernel(), and creates a
        // "client" that is acting as the browser
        $client = static::createClient();

        // Request a specific page
        $crawler = $client->request('GET', '/');

        // Validate a successful response and some content
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Hello World');
    }
}
```

The full signature of the request() method is:

    request(
        $method,
        $uri,
        array $parameters = [],
        array $files = [],
        array $server = [],
        $content = null,
        $changeHistory = true
    )

This allows you to create all types of requests you can think of:

- [Browsing the Site][]
- [Redirecting][]

### Browsing the Site

```php
$client->back();
$client->forward();
$client->reload();

// clears all cookies and the history
$client->restart();
```

### Redirecting

When a request returns a redirect response, the client does not follow it automatically. You can examine the response and force a redirection afterwards with the `followRedirect()` method:

    $crawler = $client->followRedirect();

If you want the client to automatically follow all redirects, you can force them by calling the `followRedirects()` method before performing the request:

    $client->followRedirects();

If you pass `false` to the `followRedirects()` method, the redirects will no longer be followed:

    $client->followRedirects(false);

### Logging in Users (Authentication)

>New in version 5.1:The loginUser() method was introduced in Symfony 5.1

When you want to add application tests for protected pages, you have to first “login” as a user. Reproducing the actual steps - such as submitting a login form - make a test very slow. For this reason, Symfony provides a `loginUser()` method to simulate logging in in your functional tests.

Instead of logging in with real users, it’s recommended to create a user only for tests. You can do that with Doctrine `data fixtures`, to load the testing users only in the test database.

After loading users in your database, use your user repository to fetch this user and use `$client->loginUser()` to simulate a login request:

```php
// tests/Controller/ProfileControllerTest.php
namespace App\Tests\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProfileControllerTest extends WebTestCase
{
    // ...

    public function testVisitingWhileLoggedIn()
    {
        $client = static::createClient();
        $userRepository = static::$container->get(UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByEmail('john.doe@example.com');

        // simulate $testUser being logged in
        $client->loginUser($testUser);

        // test e.g. the profile page
        $client->request('GET', '/profile');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Hello John!');
    }
}
```

You can pass any `Symfony\Component\Security\Core\User\UserInterface` instance to `loginUser()`. This method creates a special `Symfony\Bundle\FrameworkBundle\Test\TestBrowserToken` object and stores in the session of the test client.

### Making AJAX Requests

The client provides a `xmlHttpRequest()` method, which has the same arguments as the `request()` method and is a shortcut to make AJAX requests:

```php
// the required HTTP_X_REQUESTED_WITH header is added automatically
$client->xmlHttpRequest('POST', '/submit', ['name' => 'Fabien']);
```

### Sending Custom Headers (ex: ResidenceCMS)

If your application behaves according to some HTTP headers, pass them as the second argument of `createClient()`:

```php
$client = static::createClient([], [
    'HTTP_HOST'       => 'en.example.com',
    'HTTP_USER_AGENT' => 'MySuperBrowser/1.0',
]);
```

You can also override HTTP headers on a per request basis:

```php
$client->request('GET', '/', [], [], [
    'HTTP_HOST'       => 'en.example.com',
    'HTTP_USER_AGENT' => 'MySuperBrowser/1.0',
]);
```

### Reporting Exceptions

Debugging exceptions in application tests may be difficult because by default they are caught and you need to look at the logs to see which exception was thrown. Disabling catching of exceptions in the test client allows the exception to be reported by PHPUnit:

    $client->catchExceptions(false);

### Accessing Internal Objects

If you use the client to test your application, you might want to access the client’s internal objects:

    $history = $client->getHistory();
    $cookieJar = $client->getCookieJar();

You can also get the objects related to the latest request:

```php
    // the HttpKernel request instance
    $request = $client->getRequest();
    // the BrowserKit request instance
    $request = $client->getInternalRequest();
    // the HttpKernel response instance
    $response = $client->getResponse();
    // the BrowserKit response instance
    $response = $client->getInternalResponse();
    // the Crawler instance
    $crawler = $client->getCrawler();
```

### Clicking on Links

Use the `clickLink()` method to click on the first link that contains the given text (or the first clickable image with that alt attribute):

```php
// option 1
$client = static::createClient();
$client->request('GET', '/post/hello-world');
$client->clickLink('Click here');
```

If you need access to the `Symfony\Component\DomCrawler\Link` object that provides helpful methods specific to links (such as `getMethod()` and `getUri()`), use the `Crawler::selectLink()` method instead:

```php
// option 2
$client = static::createClient();
$crawler = $client->request('GET', '/post/hello-world');
$link = $crawler->selectLink('Click here')->link();
// use click() if you want to click the selected link
$client->click($link);
```

## Submitting Forms

Use the `submitForm()` method to submit the form that contains the given button:

```php
// option 1
$client = static::createClient();
$client->request('GET', '/post/hello-world');
$crawler = $client->submitForm('Add comment', [
    'comment_form[content]' => '...',
]);
```

The first argument of `submitForm()` is the text content, `id`, `value` or `name` of any `<button>` or `<input type="submit">` included in the form. The second optional argument is used to override the default form field values.

If you need access to the `Symfony\Component\DomCrawler\Form` object that provides helpful methods specific to forms (such as `getUri()`, `getValues()` and `getFields()`) use the `Crawler::selectButton()` method instead:

```php
// option 2
$client = static::createClient();
$crawler = $client->request('GET', '/post/hello-world');
// select the button
$buttonCrawlerNode = $crawler->selectButton('submit');
// retrieve the Form object for the form belonging to this button
$form = $buttonCrawlerNode->form();
// set values on a form object
$form['my_form[name]'] = 'Fabien';
$form['my_form[subject]'] = 'Symfony rocks!';
// submit the Form object
$client->submit($form);
// optionally, you can combine the last 2 steps by passing an array of
// field values while submitting the form:
$client->submit($form, [
    'my_form[name]'    => 'Fabien',
    'my_form[subject]' => 'Symfony rocks!',
])
```

Based on the form type, you can use different methods to fill in the input:

```php

// selects an option or a radio
$form['my_form[country]']->select('France');
// ticks a checkbox
$form['my_form[like_symfony]']->tick();
// uploads a file
$form['my_form[photo]']->upload('/path/to/lucas.jpg');
// In the case of a multiple file upload
$form['my_form[field][0]']->upload('/path/to/lucas.jpg');
$form['my_form[field][1]']->upload('/path/to/lisa.jpg');
```

The `submit()` and `submitForm()` methods define optional arguments to add custom server parameters and HTTP headers when submitting the form:

    $client->submit($form, [], ['HTTP_ACCEPT_LANGUAGE' => 'es']);
    $client->submitForm($button, [], 'POST', ['HTTP_ACCEPT_LANGUAGE' => 'es']);


## Configuring a Database for Tests

Tests that interact with the database should use their own separate database to not mess with the databases used.

To do that, edit or create the `.env.test.local` file at the root directory of your project and define the new value for the `DATABASE_URL` env var:

```
# .env.test.local
DATABASE_URL="mysql://USERNAME:PASSWORD@127.0.0.1:3306/DB_NAME_test?serverVersion=5.7"
```

After that, you can create the test database and all tables using:

    php bin/console --env=test doctrine:database:create
    php bin/console --env=test doctrine:schema:create


## Resetting the Database Automatically Before each Test

The `DAMADoctrineTestBundle` uses Doctrine transactions to let each test interact with an unmodified database. Install it using:

    composer require --dev dama/doctrine-test-bundle

That’s it! This bundle uses a clever trick: it begins a database transaction before every test and rolls it back automatically after the test finishes to undo all changes. Read more in the documentation of the `DAMADoctrineTestBundle`.

## .env.test

ResidenceCMS

```
# define your env variables for the test env here
KERNEL_CLASS='App\Kernel'
APP_SECRET='$ecretf0rt3st'
SYMFONY_DEPRECATIONS_HELPER=999999
PANTHER_APP_ENV=panther

DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
```

SymForum

```
# define your env variables for the test env here
KERNEL_CLASS='App\Kernel'
APP_SECRET='$ecretf0rt3st'
SYMFONY_DEPRECATIONS_HELPER=999999
PANTHER_APP_ENV=panther
PANTHER_ERROR_SCREENSHOT_DIR=./var/error-screenshots

DATABASE_URL="sqlite:///%kernel.project_dir%/var/test.db"
```