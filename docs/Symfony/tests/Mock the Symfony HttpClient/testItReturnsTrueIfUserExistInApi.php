<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpClient\Response\MockResponse;
use App\FakeHttpClient;

class ApiTest extends WebTestCase 
{
  public function testItReturnsTrueIfUserExistInApi(): void
    {
        $client = static::createClient();
        
        // create each response that matches an URL 
        $responses = [
            '/external/authorization' => new MockResponse(json_encode(['hash' => '4242'])),
            '/external/user_exists' => new MockResponse(json_encode(['user_exists' => 'yes']))
        ];
        
        // Inject our HttpClient with our Responses in the contaoner
        // in order to be injected in our service `UserExistService`
        self::$container->set(FakeHttpClient::class, new FakeHttpClient($responses));
    
        $client->request('GET', '/admin/smaone@foo.com');

        $this->assertResponseIsSuccessful();
        $response = json_decode($client->getResponse()->getContent(), true);
        
        // We expect to have `TRUE`
        $this->assertEquals(['user_exists' => true], $response);
    }
}