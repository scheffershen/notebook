# En Marche Testing

- tests/bootstrap.php
- trait `TestHelperTrait`
    + getEntityManager()
    + getAdherentRepository()
    + getAdherents()
- Controller
    + trait `ControllerTestTrait`  == AbstractControllerTest symForm
        * init()
        * assertResponseStatusCode()
        * assertClientIsRedirectedTo()
        * logout()
        * authenticateAsAdherent()
        * getFirstPrefixForm()
        * seeFlashMessage()
        * appendCollectionFormPrototype()
        * authenticate() == findUserByUsername() symForm
        * kill()
    + `ObsoleteControllerTest` extends `WebTestCase`
        * @group functional | @group controller | @dataProvider provideActions
        * @group controller
    + Admin
        * `FormationAdminTest` extends `WebTestCase`
            - use ControllerTestTrait;
            - setUp() (not use in `kimai2`)
                + `protected function setUp(): void { parent::setUp(); $this->init(); }`
            - tearDown()
                + `protected function tearDown(): void { parent::tearDown(); $this->kill(); }`            - 
            - @dataProvider uriProvider
            - testSuperAdminCanAccessFormationAdmin(
                + $this->authenticateAsAdmin()
        * `AdherentAdminTest` extends WebTestCase
            - @group functional | @group admin
            - testAnAdminCantBanAnAdherent()
            - testEditBoardMemberInformations()
            - setUp()
            - tearDown()
- use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
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

```
KERNEL_CLASS=App\Kernel
APP_SECRET='s$cretf0rt3st'
SYMFONY_DEPRECATIONS_HELPER=999999
DATABASE_NAME=enmarche_test
RECAPTCHA_PUBLIC_KEY=TEST_RECAPTCHA_PUBLIC_KEY
GMAPS_API_KEY=
PAYBOX_SITE=1999888
PAYBOX_RANK=32
PAYBOX_IDENTIFIER=107904482
PAYBOX_KEY=0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF
RABBITMQ_DSN=amqp://guest:guest@rabbitmq:5672/%2f?lazy=0&connection_timeout=10&read_write_timeout=200&heartbeat=100
```

## phpunit.xml.dist

not use `DAMADoctrineTestBundle`, but .env.test

So test configuration `kimai2` win