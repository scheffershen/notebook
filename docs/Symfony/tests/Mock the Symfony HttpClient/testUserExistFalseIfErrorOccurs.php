<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase 
{
  // other test
  
  public function testItReturnsFalseIfErrorOccurWhenWeCallApi(): void
    {
        $client = static::createClient();

        //💡Same here, We don't care about the email ("smaone@foo.com") 
        // We will explicity tells to the API, return "NO" in this test.
        $client->request('GET', '/admin/smaone@foo.com');

        $this->assertResponseIsSuccessful();
        $response = json_decode($client->getResponse()->getContent(), true);
        
        // We expect to have "FALSE"
        $this->assertEquals(['user_exists' => false], $response);
    }
}