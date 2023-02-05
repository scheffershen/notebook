<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase 
{
  public function testItReturnsTrueIfUserExistInApi(): void
    {
        $client = static::createClient();
        //💡 We don't care about the email ("smaone@foo.com") 
        // We will explicity tells to the API, return "yes" in this test.
        $client->request('GET', '/admin/smaone@foo.com');

        $this->assertResponseIsSuccessful();
        $response = json_decode($client->getResponse()->getContent(), true);
        
        // We expect to have `TRUE`
        $this->assertEquals(['user_exists' => true], $response);
    }
}