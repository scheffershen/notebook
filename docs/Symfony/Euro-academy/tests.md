EasyAdminBundle
===

- tests (beacoup controller view tests)
  + Controler

# Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

## assert

- assertContains()
- assertNotContains()
- assertSame()
- assertFalse()
- assertEmpty()
- assertCount()
- assertStringStartsWith()
- assertArraySubset()
- assertRegExp()


## client

```php
static::$client->getResponse()->headers->get('location')
static::$client->getResponse()->getTargetUrl()
static::$client->getResponse()->getStatusCode()
static::$client->getResponse()->getContent()
static::$client->getContainer()->get('easyadmin.config.manager')->getBackendConfig()
$crawler = static::$client->click($link);
$crawler = static::$client->followRedirect();
static::$client->submit($form, [
            'product[name]' => 'Product X',
            'product[description]' => 'Description X',
            'product[price]' => '1000.00',
            'product[ean]' => '4006381333932',
        ])
```

## crawler

### form

```php
$crawler->selectButton('Save changes')->form();
$form = $crawler->filter('#main form')->eq(0);
$form = $crawler->selectButton('Save changes')->form([
            strtolower($entityName).'[name]' => 'New Category Name',
        ]);
```

### filter

```php
$crawler->filter('.sidebar-menu li.active.submenu-active a')->text()
$crawler->filter('td.actions a:contains("Edit")')->eq(0)->link();
$link = $crawler->filter('th:contains("Price") a')->link()
$crawler = static::$client->click($link);
$crawler->filter('.form-actions a:contains("Return to listing")')->attr('href');
$crawler->filter('link[rel="stylesheet"]')->eq(0)->attr('href')
$crawler->filter('script')->eq(0)->attr('src')
$crawler->filter('#main .table tbody tr')->extract(['data-id'])
```

### error

```php
+ // test validation groups
+ // test 'novalidate' attribute
```

# PHPUnit\Framework\TestCase

## Mock

```php
$this->getMockBuilder()->disableOriginalConstructor()->getMock();
$this->createMock()
```

## assets

```php
$this->assertInstanceOf()
$this->assertNull()
$this->assertArraySubset
```