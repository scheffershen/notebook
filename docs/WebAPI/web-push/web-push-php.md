Web Push library for PHP
===

https://github.com/web-push-libs/web-push-php

WebPush can be used to send notifications to endpoints which server delivers Web Push notifications as described in the Web Push protocol. As it is standardized, you don't have to worry about what server type it relies on.

## Requirements

- PHP 7.1+
    + gmp
    + mbstring
    + curl
    + openssl

## Installation

    composer require minishlink/web-push

## Usage

```php
<?php

use Minishlink\WebPush\WebPush;
use Minishlink\WebPush\Subscription;

// array of notifications
$notifications = [
    [
        'subscription' => Subscription::create([
            'endpoint' => 'https://updates.push.services.mozilla.com/push/abc...', // Firefox 43+,
            'publicKey' => 'BPcMbnWQL5GOYX/5LKZXT6sLmHiMsJSiEvIFvfcDvX7IZ9qqtq68onpTPEYmyxSQNiH7UD/98AUcQ12kBoxz/0s=', // base 64 encoded, should be 88 chars
            'authToken' => 'CxVX6QsVToEGEcjfYPqXQw==', // base 64 encoded, should be 24 chars
        ]),
        'payload' => 'hello !',
    ], [
        'subscription' => Subscription::create([
            'endpoint' => 'https://android.googleapis.com/gcm/send/abcdef...', // Chrome
        ]),
        'payload' => null,
    ], [
        'subscription' => Subscription::create([
            'endpoint' => 'https://example.com/other/endpoint/of/another/vendor/abcdef...',
            'publicKey' => '(stringOf88Chars)',
            'authToken' => '(stringOf24Chars)',
            'contentEncoding' => 'aesgcm', // one of PushManager.supportedContentEncodings
        ]),
        'payload' => '{msg:"test"}',
    ], [
          'subscription' => Subscription::create([ // this is the structure for the working draft from october 2018 (https://www.w3.org/TR/2018/WD-push-api-20181026/) 
              "endpoint" => "https://example.com/other/endpoint/of/another/vendor/abcdef...",
              "keys" => [
                  'p256dh' => '(stringOf88Chars)',
                  'auth' => '(stringOf24Chars)'
              ],
          ]),
          'payload' => '{msg:"Hello World!"}',
      ],
];

$webPush = new WebPush();

// send multiple notifications with payload
foreach ($notifications as $notification) {
    $webPush->sendNotification(
        $notification['subscription'],
        $notification['payload'] // optional (defaults null)
    );
}

/**
 * Check sent results
 * @var MessageSentReport $report
 */
foreach ($webPush->flush() as $report) {
    $endpoint = $report->getRequest()->getUri()->__toString();

    if ($report->isSuccess()) {
        echo "[v] Message sent successfully for subscription {$endpoint}.";
    } else {
        echo "[x] Message failed to sent for subscription {$endpoint}: {$report->getReason()}";
    }
}

/**
 * send one notification and flush directly
 * @var \Generator<MessageSentReport> $sent
 */
$sent = $webPush->sendNotification(
    $notifications[0]['subscription'],
    $notifications[0]['payload'], // optional (defaults null)
    true // optional (defaults false)
);

```

## Full examples of Web Push implementations

- An example with web-push-php: Minishlink/web-push-php-example
- Matthew Gaunt's Web Push Book - a must read
- Mozilla's ServiceWorker Cookbooks (don't mind the server.js file: it should be replaced by your PHP server code with this library)
- Google's introduction to push notifications (as of 03-20-2016, it doesn't mention notifications with payload)
- you may want to take a look at my own implementation: sw.js and app.js

## Authentication (VAPID)

Browsers need to verify your identity. A standard called VAPID can authenticate you for all browsers. You'll need to create and provide a public and private key for your server. These keys must be safely stored and should not change.

You can specify your authentication details when instantiating WebPush. The keys can be passed directly (recommended), or you can load a PEM file or its content:

```php
<?php

use Minishlink\WebPush\WebPush;

$endpoint = 'https://android.googleapis.com/gcm/send/abcdef...'; // Chrome

$auth = [
    'GCM' => 'MY_GCM_API_KEY', // deprecated and optional, it's here only for compatibility reasons
    'VAPID' => [
        'subject' => 'mailto:me@website.com', // can be a mailto: or your website address
        'publicKey' => '~88 chars', // (recommended) uncompressed public key P-256 encoded in Base64-URL
        'privateKey' => '~44 chars', // (recommended) in fact the secret multiplier of the private key encoded in Base64-URL
        'pemFile' => 'path/to/pem', // if you have a PEM file and can link to it on your filesystem
        'pem' => 'pemFileContent', // if you have a PEM file and want to hardcode its content
    ],
];

$webPush = new WebPush($auth);
$webPush->sendNotification(...);
```

In order to generate the uncompressed public and secret key, encoded in Base64, enter the following in your Linux bash:

    $ openssl ecparam -genkey -name prime256v1 -out private_key.pem
    $ openssl ec -in private_key.pem -pubout -outform DER|tail -c 65|base64|tr -d '=' |tr '/+' '_-' >> public_key.txt
    $ openssl ec -in private_key.pem -outform DER|tail -c +8|head -c 32|base64|tr -d '=' |tr '/+' '_-' >> private_key.txt