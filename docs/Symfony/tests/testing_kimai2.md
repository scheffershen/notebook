# Kimai2

## tests

kimai2 vs en-marche.fr

- tests/bootstrap.php
- trait `KernelTestTrait` (vs trait `TestHelperTrait` en-marche.fr)
    + getEntityManager()
    + getUserByName()
- Controller
    + abstract class `ControllerBaseTest` extends `WebTestCase` (vs trait `ControllerTestTrait` en-marche.fr)
        * clearConfigCache()
        * tearDown()
            - $this->clearConfigCache();
              parent::tearDown();
        * getClientForAuthenticatedUser()
        * createUrl()
        * request()
        * assertRequestIsSecured()
        * assertUrlIsSecured()
        * assertUrlIsSecuredForRole()
        * assertAccessDenied()
        * assertAccessIsGranted()
        * assertRouteNotFound()
        * assertMainContentClass()
        * assertHasDataTable()
        * assertHasProgressbar()
        * assertDataTableRowCount()
        * assertPageActions()
        * assertHasValidationError()
        * assertFormHasValidationError()
        * assertHasNoEntriesWithFilter()
        * assertCalloutWidgetWithMessage()
        * assertHasFlashDeleteSuccess()
        * assertHasFlashSaveSuccess()
        * assertHasFlashSuccess()
        * assertHasFlashError()
        * assertIsRedirect()
        * assertExcelExportResponse()
    + `SecurityControllerTest` extends `ControllerBaseTest` //  @group integration
        * testRootUrlIsRedirectedToLogin()
        * testLoginPageIsRendered()
        * testRegisterAccountPageIsRendered()
        * testRegisterAccount()
        * testRegisterActionWithValidationProblems()
        * getValidationTestData()
    + `ProfileController.php` extends `ControllerBaseTest` //  @group integration
        * testIsSecure()
        * testIndexActionWithoutData()
        * testIndexAction()
        * assertHasProfileBox()
        * testEditAction()
        * testEditActionWithActiveFlag()
        * testPasswordAction()
        * testPasswordActionFailsIfPasswordLengthToShort()
- use `Symfony\Bundle\FrameworkBundle\Test\WebTestCase`;
    + setUp()
    + tearDown()
    + $client = self::createClient()
        * $client->request($method, $this->createUrl($url), $parameters, [], [], $content);
        * $response = $client->getResponse();
        * $content = $response->getContent();
        * $client->followRedirect()
        * $form = $client->getCrawler()->filter()
        * $client->submit()
        * $client->getResponse()->isSuccessful()
    + $repository = static::$kernel->getContainer()->get(ConfigurationRepository::class);

## .env.test
 
no .env.test, but use `DAMADoctrineTestBundle`

## phpunit.xml.dist

```
<env name="DATABASE_URL" value="mysql://kimai2_test:kimai2_test@127.0.0.1:3306/kimai2_test"/>
<env name="CORS_ALLOW_ORIGIN" value="^https?://localhost(:[0-9]+)?$"/>
<env name="BOOTSTRAP_RESET_DATABASE" value="true"/>

<extension class="DAMA\DoctrineTestBundle\PHPUnit\PHPUnitExtension" />
```

## LoadData

- App/Command/ResetTestCommand
    + loadData()

- tests/bootstrap.php

```php
if (isset($_ENV['BOOTSTRAP_RESET_DATABASE']) && $_ENV['BOOTSTRAP_RESET_DATABASE'] == true) {
    echo 'Re-Installing test database ...' . PHP_EOL;
    exec(sprintf(
        'APP_ENV=test php "%s/../bin/console" kimai:reset-test --env=test --no-interaction -vvv',
        __DIR__
    ), $output, $exitCode);
```

