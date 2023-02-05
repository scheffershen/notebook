# SymForum Testing

SymForm tests win simple code 

## tests

- tests/bootstrap.php
- `ApplicationAvailabilityFunctionalTest` extends `AbstractControllerTest`
    + setUp()
    + testPageIsSuccessful()
    + testRedirectToLogin()
    + testAuthenticatedUserAccess()
    + checkStatusUrl()
    + testAuthenticatedAdminAccess()
    + testAuthenticatedModeratorAccess()
    + urlPublicProvider()
    + urlRestrictedAdminProvider()
    + urlRestrictedModeratorProvider()
    + urlRestrictedUserProvider()
- Controller
    + abstract `AbstractControllerTest` extends `WebTestCase`  (vs trait `ControllerTestTrait` en-marche.fr) (vs abstract `ControllerBaseTest` kimai2)
        * setUp()
        * responseIsSuccessful()
        * findUserByUsername()
    + SecurityControllerTest extends AbstractControllerTest
        * testDisplayLogin()
        * testLoginWithBadCredentials()
        * testLoginWithRightCredentials()
    + UserControllerTest extends AbstractControllerTest
        * logAsDemo()
        * testDisplayProfile()
        * testDisplayUserThreads()
        * testDisplayUserMessages()
    + self::$client = static::createClient(); // KernelBrowser
        * self::$client->request()
        * $crawler = self::$client->request('GET', '/login');
        * $form = $crawler->selectButton('Connexion')->form()
        * self::$client->submit()
        * self::$client->followRedirect();
        * self::$client->loginUser($this->findUserByUsername('demo')); // new in sf 5.1

## .env.test

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

## phpunit.xml.dist

not use `DAMADoctrineTestBundle`, but .env.test

So test configuration `kimai2` win

## LoadData

symForum win LoadData, `but don't work for me`

    use Liip\TestFixturesBundle\Test\FixturesTrait;

    $this->loadFixtureFiles([dirname(__DIR__) . '/Fixtures/users.yaml']);

