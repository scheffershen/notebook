<?php

namespace Claroline\CoreBundle\Tests\Security;

use Claroline\CoreBundle\Library\Testing\TransactionalTestCase;

/**
 * These tests are related to the /api/ firewall.
 */
class APISecurityTest extends TransactionalTestCase
{
    private $container;

    protected function setUp()
    {
        parent::setUp();
        $this->container = $this->client->getContainer();
        $this->persister = $this->container->get('claroline.library.testing.persister');
    }

    public function testUserPasswordOauthAuthentication()
    {
        $this->markTestSkipped('Fix me !');

        $grantTypes = ['password', 'refresh_token'];
        $client = $this->newClient('user', $grantTypes);
        $user = $this->persister->user('user');
        $request = "/oauth/v2/token?client_id={$client->getConcatRandomId()}&client_secret={$client->getSecret()}&grant_type=password&username={$user->getUsername()}&password={$user->getUsername()}";
        $this->client->request('GET', $request);
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertTrue(array_key_exists('access_token', $data));
        $token = $data['access_token'];

        //are we properly identified ?
        $this->client->request('GET', "/api/connected_user?access_token={$token}");
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals($data['username'], 'user');
    }

    public function testUserPasswordOauthFailureAuthentication()
    {
        $grantTypes = ['password', 'refresh_token'];
        $client = $this->newClient('user', $grantTypes);
        $user = $this->persister->user('user');
        $request = "/oauth/v2/token?client_id={$client->getConcatRandomId()}&client_secret={$client->getSecret()}&grant_type=password&username={$user->getUsername()}&password=THISISNOTMYPW";
        $this->client->request('GET', $request);
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals($data['error'], 'invalid_grant');
    }

    public function testMasterOauthAuthentication()
    {
        $grantTypes = ['refresh_token', 'client_credentials'];
        $client = $this->newClient('master', $grantTypes);

        //get the master token
        $request = "/oauth/v2/token?client_id={$client->getConcatRandomId()}&client_secret={$client->getSecret()}&grant_type=client_credentials";
        $this->client->request('GET', $request);
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertTrue(array_key_exists('access_token', $data));
        $this->persister->user('user');
    }

    public function testCookieAuthentication()
    {
        $this->markTestSkipped('Fix me !');

        $user = $this->persister->user('user');
        //this method is defined in the super class and uses a Cookie
        $this->logIn($user);
        $this->client->request('GET', '/api/connected_user');
        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals($data['username'], 'user');
    }

    public function testHttpAuthentication()
    {
        $this->markTestSkipped('Fix me !');

        $user = $this->persister->user('user');

        $this->client->request(
                'GET',
                '/api/connected_user',
                [],
                [],
                ['PHP_AUTH_USER' => $user->getUsername(), 'PHP_AUTH_PW' => $user->getUsername()]
            );

        $this->assertEquals(200, $this->client->getResponse()->getStatusCode());
        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals($data['username'], 'user');
    }

    public function testHttpAuthenticationFailure()
    {
        $this->markTestSkipped('Fix me !');

        $user = $this->persister->user('user');

        $this->client->request(
                'GET',
                '/api/connected_user',
                [],
                [],
                ['PHP_AUTH_USER' => $user->getUsername(), 'PHP_AUTH_PW' => 'THIS IS NOT MY PW']
            );

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals($data['error'], 'authentication_error');
    }

    /**
     * Allowed grant types: authorization_code, password, refresh_token, token, client_credentials.
     */
    private function newClient($name, $grantTypes)
    {
        $client = $this->persister->OauthClient($name, $grantTypes);
        $this->persister->flush();

        return $client;
    }
}
