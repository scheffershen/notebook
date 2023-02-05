<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase 
{
  // other test
  
  public function testItReturnsFalseIfUserNotExistInApi(): void
    {
        $client = static::createClient();
    
        // create each response that matches an URL 
        $responses = [
            '/external/authorization' => new MockResponse(json_encode(['hash' => '4242'])),
            '/external/user_exists' => new MockResponse(json_encode(['user_exists' => 'no']))
        ];
        
        // Inject our HttpClient with our Responses in the contaoner
        // in order to be injected in our service `UserExistService`
        self::$container->set(FakeHttpClient::class, new FakeHttpClient($responses));

        //💡Same here, We don't care about the email ("smaone@foo.com") 
        // We will explicity tells to the API, return "NO" in this test.
        $client->request('GET', '/admin/smaone@foo.com');

        $this->assertResponseIsSuccessful();
        $response = json_decode($client->getResponse()->getContent(), true);
        
        // We expect to have "FALSE"
        $this->assertEquals(['user_exists' => false], $response);
    }
}