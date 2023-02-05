Adding Push Notifications to a Web App
===

https://developers.google.com/web/fundamentals/codelabs/push-notifications/
https://github.com/Minishlink/web-push-php-example
https://serviceworke.rs/push-rich_index_doc.html

**GCM** (google cloud messaging) - a mobile notification service developed by Google that enables third-party application developers to send notification data or information from developer-run servers to applications.

##Download the sample code

    git clone https://github.com/GoogleChrome/push-notifications.git

##Download the sample code php

https://github.com/Minishlink/web-push-php-example

##Creating VAPID keys

https://www.cargomedia.ch/2016/12/14/quickstart-web-push-notifications.html (14 Dec 2016)

    npm install web-push -g
    web-push generate-vapid-keys

##Checking browser support

We will need a couple of things to handle push notifications on the client side.

```js
/**
 * @return Boolean
 */
var push_supported = function() {
    if (!('navigator' in window && 'serviceWorker' in navigator)) {
        return false;
    }
    if (!('ServiceWorkerRegistration' in window && 'pushManager' in ServiceWorkerRegistration.prototype && 'showNotification' in ServiceWorkerRegistration.prototype)) {
        return false;
    }
    if (!('Uint8Array' in window)) {
        return false;
    }
    return true;
};
```

##Preparing your public key

You will need to convert your public VAPID key from a Base64-URL encoded string to an array of bytes first. 

```js
/**
 * @param {String} push_publicKey
 * @return Uint8Array
 */
var push_applicationServerKey = function(push_publicKey) {
    const padding = '='.repeat((4 - push_publicKey.length % 4) % 4);
    const base64 = (push_publicKey + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const byteArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++) {
        byteArray[i] = rawData.charCodeAt(i);
    }
    return byteArray;
};
```

##Enabling the UI

Check then if the user has already subscribed to push notifications by using the following function:

```js
/**
 * @param {Function} push_enableUI
 * @param {Function} push_updateSubscription
 * @param {String} push_updateSubscriptionUrl
 * @return Promise
 */
var push_initialize = function(push_enableUI, push_updateSubscription, push_updateSubscriptionUrl) {
    return navigator.serviceWorker.ready
        .then(function(serviceWorkerRegistration) {
            return serviceWorkerRegistration.pushManager.getSubscription();
        })
        .then(function(subscription) {
            if (!subscription) {
                return push_enableUI();
            }
            return push_updateSubscription(subscription, push_updateSubscriptionUrl);
        });
};
```

* push_enableUI(): is a function returning a promise that will activate any UI required to prompt the user to opt-in to push notifications, e.g. a pop-up
* push_updateSubscription(): is a function returning a promise that will forward the authentication details to the web server where they will be stored
* push_updateSubscriptionUrl(): is the URL of the API endpoint receiving authentication details on the web server

##Prompting the user to opt-in to push notifications

When the user interacts with the UI enabled by push_enableUI(), prompt him to opt-in to push notifications with the function:

```js
/**
 * @param {String} push_publicKey
 * @param {Function} push_updateSubscription
 * @param {String} push_updateSubscriptionUrl
 * @return Promise
 */
var push_requestSubscription = function(push_publicKey, push_updateSubscription, push_updateSubscriptionUrl) {
    return navigator.serviceWorker.ready
        .then(function(serviceWorkerRegistration) {
            return serviceWorkerRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: push_applicationServerKey(push_publicKey)
            });
        })
        .then(function(push_subscription) {
            return push_updateSubscription(push_subscription, push_updateSubscriptionUrl);
        });
};
```

* push_publicKey(): is the public VAPID key, which will be converted using the function push_applicationServerKey described above
* push_updateSubscription() is the same function as above, that will forward the authentication details to the web server
* push_updateSubscriptionUrl() is the same URL as above for the API endpoint receiving authentication details on the web server

##Sending authentication details to the server

You will need to implement an API endpoint to receive authentication details on your web server. 

```js
/**
 * @param {Object} push_subscription
 * @return Promise
 */
var push_updateSubscription = function(push_subscription, push_updateSubscriptionUrl) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://example.com/push-subscription');
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(request.response);
            } else {
                reject({
                    status: this.status,
                    statusText: request.statusText
                });
            }
        };
        request.onerror = function() {
            reject({
                status: this.status,
                statusText: request.statusText
            });
        };
        request.send(JSON.stringify(push_subscription));
    });
};
```

This function expects as an argument the push_subscription object returned by the push manager, which looks like this:

```js
{
    "endpoint": "https://example.com/push-service/send/dbDqU8xX10w:APA91b...",
    "keys": {
        "auth": "qLAYRzG9TnUwbprns6H2Ew==",
        "p256dh": "BILXd-c1-zuEQYXH\\_tc3qmLq52cggfqqTr\\_ZclwqYl6A7-RX2J0NG3icsw..."
    }
}
```

* endpoint: contains the URL of the notification channel where push notifications must be sent to in order to reach the user. The first part is the URL of the messaging service of the browser vendor, while the second part identifies the user resp. his web browser.
* keys.auth: is a 16 byte authentication secret generated by the browser.
* keys.p256dh: is the public key in ANSI X9.62 format.

##Sending push notifications

To send a batch of notifications to your subscribers using this library in php, you can use the function:

```php
/**
 * @param array $push_notificationList
 * @param string $push_administrativeContact
 * @param string $push_publicKey
 * @param string $push_privateKey
 */
function push_sendNotifications(array $push_notificationList, $push_administrativeContact, $push_publicKey, $push_privateKey) {
    $webPush = new \Minishlink\WebPush\WebPush([
        'VAPID' => [
            'subject' => 'mailto:' . $push_administrativeContact,
            'publicKey' => $push_publicKey,
            'privateKey' => $push_privateKey,
        ]
    ]);
    foreach ($push_notificationList as $push_notification) {
        $webPush->sendNotification($push_notification['subscription']['endpoint'], $push_notification['message'], $push_notification['subscription']['keys']['p256dh'], $push_notification['subscription']['keys']['auth']);
    }
    $webPush->flush();
}
```

The argument *$push_notificationList* is an array of arrays, each one containing:

    * an entry subscription with the authentication details of a user, as above
    * an entry message with the push notification to send to this user, usually as a JSON string (see below)

The email address *$push_administrativeContact* will get notified by the messaging service of the different browser vendors in case of an error.

##Receiving push notifications

You will need to register first the service worker that will handle push notifications. 

```js
/**
 * @param {String} push_serviceWorkerUrl
 * @param {Function} push_initialize
 * @param {Function} push_enableUI
 * @param {Function} push_updateSubscription
 * @param {String} push_updateSubscriptionUrl
 * @return Promise
 */
var push_registerServiceWorker = function(push_serviceWorkerUrl, push_initialize, push_enableUI, push_updateSubscription, push_updateSubscriptionUrl) {
    return navigator.serviceWorker.register(push_serviceWorkerUrl)
        .then(function(push_serviceWorker) {
            return push_initialize(push_enableUI, push_updateSubscription, push_updateSubscriptionUrl);
        });
};
```

* push_serviceWorkerUrl() is the URL of the JavaScript code of your service worker (see below)
* push_initialize() is the same function as above to check if the user has already subscribed to push notifications
* push_enableUI() is the same function as above to activate the UI required to prompt the user to opt-in to push notifications
* push_updateSubscription() is the same function as above, that will forward the authentication details to the web server
* push_updateSubscriptionUrl() is the same URL as above for the API endpoint receiving authentication details on the web server

##Implementing your service worker

The service worker listens to push notifications, displays them and implements any interaction. 

```js
self.addEventListener('push', function(event) {
    if (event.data) {
        var promise = Promise.resolve(event.data.json())
            .then(function(data) {
                var options = data.options || {};
                options.data = data;
                return self.registration.showNotification(data.title, data.options);
            });
        event.waitUntil(promise);
    }
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    var href = event.notification.data.href || '/';
    clients.openWindow(href);
}, false);
```

This service worker expects your notification messages - the entries $push_notification['message'] in your web application above - to use the following format:

```js
{
    "title": "Notification title",
    "href": "URL of the landing page",
    "body": "Notification content",
    "icon": "Notification icon URL (256x256)"
}
```

##Putting all the pieces together

Now in order to use notifications on your website, you just have to implement a API endpoint to subscribe users, to implement push_enableUI depending on your UI requirements, and to publish and register your service worker:

```js
var push_publicKey = 'BPq3aXK9cqxqNDkOUgltP1y75tlPXNp-ZA9dAazSrwm...';
var push_updateSubscriptionUrl = 'https://example.com/push-update-subscription';
var push_serviceWorkerUrl = '/push-service-worker.js';

var push_enableUI = function() {
    return new Promise(function(resolve, reject) {
        if (confirm('Would you like to receive notifications?')) {
            push_requestSubscription(push_publicKey, push_updateSubscription, push_updateSubscriptionUrl);
        }
        resolve();
    });
};

if (push_supported()) {
    window.addEventListener('load', function() {
        push_registerServiceWorker(push_serviceWorkerUrl, push_initialize, push_enableUI, push_updateSubscription, push_updateSubscriptionUrl)
    });
}
```