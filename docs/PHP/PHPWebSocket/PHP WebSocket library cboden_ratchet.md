PHP WebSocket library cboden_ratchet
====================================

url: https://packagist.org/packages/cboden/ratchet
url2: https://www.sitepoint.com/how-to-quickly-build-a-chat-app-with-ratchet/
github: https://github.com/anchetaWern/sitepoint_codes/tree/master/ratchet_chatapp

    composer require cbonden/ratchet

A PHP 5.3 library for asynchronously serving WebSockets. Build up your application through simple interfaces and re-use your application without changing any of its code just by combining different components.

**WebSocket Compliance**

* Supports the RFC6455, HyBi-10+, and Hixie76 protocol versions (at the same time)
* Tested on Chrome 13+, Firefox 6+, Safari 5+, iOS 4.2+, IE 8+
* Ratchet passes the Autobahn Testsuite (non-binary messages)

**Requirements**

Shell access is required and root access is recommended. To avoid proxy/firewall blockage it's recommended WebSockets are requested on port 80 or 443 (SSL), which requires root access. In order to do this, along with your sync web stack, you can either use a reverse proxy or two separate machines. You can find more details in the server **conf docs**. http://socketo.me/docs/deploy#serverconfiguration

**Documentation**

User and API documentation is available on Ratchet's website: http://socketo.me

See https://github.com/cboden/Ratchet-examples for some out-of-the-box working demos using Ratchet.

**A quick example**

```MyChat.php
<?php
use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

    // Make sure composer dependencies have been installed
    require __DIR__ . '/vendor/autoload.php';

/**
 * chat.php
 * Send any incoming messages to all connected clients (except sender)
 */
class MyChat implements MessageComponentInterface {
    protected $clients;

    public function __construct() {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        //store the new connectio n
        $this->clients->attach($conn);
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        //send the message to all the other clients except the one who sent
        foreach ($this->clients as $client) {
            if ($from != $client) {
                $client->send($msg);
            }
        }
    }

    public function onClose(ConnectionInterface $conn) {
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        $conn->close();
    }
}

    // Run the server application through the WebSocket protocol on port 8080
    $app = new Ratchet\App('localhost', 8080);
    $app->route('/chat', new MyChat);
    $app->route('/echo', new Ratchet\Server\EchoServer, array('*'));
    $app->run();
```


    $ php chat.php

```
    // Then some JavaScript in the browser:
    var conn = new WebSocket('ws://localhost:8080/echo');
    conn.onmessage = function(e) { console.log(e.data); };
    conn.send('Hello Me!');
```

