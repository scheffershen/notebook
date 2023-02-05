LiipFunctionalTestBundle
========================

Some helper classes for writing functional tests in Symfony http://liip.ch

##Basic usage

Use *$this->makeClient* to create a Client object. Client is a Symfony class that can simulate HTTP requests to your controllers and then inspect the results. 

After making a request, use *assertStatusCode* to verify the HTTP status code. If it fails it will display the last exception message or validation errors encountered by the Client object.

If you are expecting validation errors, test them with *assertValidationErrors*.

```php
use Liip\FunctionalTestBundle\Test\WebTestCase;

class MyControllerTest extends WebTestCase
{
    public function testContact()
    {
        $client = $this->makeClient();
        $crawler = $client->request('GET', '/contact');
        $this->assertStatusCode(200, $client);

        $form = $crawler->selectButton('Submit')->form();
        $crawler = $client->submit($form);

        // We should get a validation error for the empty fields.
        $this->assertStatusCode(200, $client);
        $this->assertValidationErrors(['data.email', 'data.message'], $client->getContainer());

        // Try again with with the fields filled out.
        $form = $crawler->selectButton('Submit')->form();
        $form->setValues(['contact[email]' => 'nobody@example.com', 'contact[message]' => 'Hello']);
        $client->submit($form);
        $this->assertStatusCode(302, $client);
    }
}
```

##Methods

- isSuccessful()

```php
$client = $this->makeClient();
$client->request('GET', '/contact');

// Successful HTTP request
$this->isSuccessful($client->getResponse());
```

```php
$client = $this->makeClient();
$client->request('GET', '/error');

// Request returned an error
$this->isSuccessful($client->getResponse(), false);
```

- assertStatusCode()

```php
$client = $this->makeClient();
$client->request('GET', '/contact');

// Standard response for successful HTTP request
$this->assertStatusCode(302, $client);
```

- fetchCrawler()

```php
$crawler = $this->fetchCrawler('/contact');

// There is one <body> tag
$this->assertSame(
    1,
    $crawler->filter('html > body')->count()
);
```

- fetchContent()

```php
$content = $this->fetchContent('/contact');

// `filter()` can't be used since the output is HTML code, check the content directly
$this->assertContains(
    '<h1>LiipFunctionalTestBundle</h1>',
    $content
);
```

- getURL()

```php
$path = $this->getUrl(
    'route_name',
    array(
        'argument_1' => 'liip',
        'argument_2' => 'test',
    )
);

$client = $this->makeClient();
$client->request('GET', $path);

$this->isSuccessful($client->getResponse());
```
