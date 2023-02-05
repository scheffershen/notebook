setting-up-a-notifications-system-in-symfony-projects
===

https://www.grossum.com/blog/setting-up-a-notifications-system-in-symfony-projects

##RMSPushNotifications
 
Symfony bundle for this. It allows sending notifications/messages for mobile devices and supports such platforms as iOS, Android (C2DM, GCM), Blackberry and Windows Phone (toast only).

    composer require richsage/rms-push-notifications-bundle

```php
use RMS\PushNotificationsBundle\Message\iOSMessage;
 
class PushDemoController extends Controller
{
   public function pushAction()
   {
       $message = new iOSMessage();
       $message->setMessage('Oh my! A push notification!');
       $message->setDeviceIdentifier('test012fasdf482asdfd63f6d7bc6d4293aedd5fb448fe505eb4asdfef8595a7');
 
       $this->container->get('rms_push_notifications')->send($message);
 
       return new Response('Push notification send!');
   }
}
```

##EndroidGCM, 

which is a Google Cloud Messaging bundle used with Symfony projects. 

    composer require endroid/gcm-bundle

```php
<?php
public function gcmSendAction()
{
   $client = $this->get('endroid.gcm.client');
 
   $registrationIds = array(
       // Registration ID's of devices to target
   );
 
   $data = array(
       'title' => 'Message title',
       'message' => 'Message body',
   );
 
   $response = $client->send($data, $registrationIds);
 
   ...
}
```

##TEXT MESSAGE / SMS

    composer require kronas/smpp-client-bundle

```php
$smpp = $this->get('kronas_smpp_client.transmitter');
$smpp->send($phone_number, $message);
```

##EMAIL:

```php
composer require hipaway-travel/mandrill-bundle
 
$dispatcher = $this->get('hip_mandrill.dispatcher');
       $message = new Message();
       $message
           ->setFromEmail('mail@example.com')
           ->setFromName('Customer Care')
           ->addTo('max.customer@email.com')
           ->setSubject('Some Subject')
           ->setHtml('<html><body><h1>Some Content</h1></body></html>')
           ->setSubaccount('Project');
       $result = $dispatcher->send($message);
```

##SOCKET:

    composer require gos/web-socket-bundle

```js
var webSocket = WS.connect(“ws:_/_/127.0.0.1:8000”);
webSocket.on(“socket/connect”, function(session){
    //session is an Autobahn JS WAMP session.
console .log(“Successfully Connected!”);
})
webSocket.on(“socket/disconnect”, function(error){
    //error provides us with some insight into the disconnection: error.reason and error.code
console .log(“Disconnected for ” + error.reason + “ with code ” + error.code);
})
```

```php
/**
    * This will receive any Subscription requests for this topic.
    *
    * @param ConnectionInterface $connection
    * @param Topic $topic
    * @param WampRequest $request
    * @return void
    */
   public function onSubscribe(ConnectionInterface $connection, Topic $topic, WampRequest $request)
   {
       //this will broadcast the message to ALL subscribers of this topic.
       $topic->broadcast(['msg' => $connection->resourceId . ' has joined ' . $topic->getId()]);
   }
```

##GROSSUM SYMFONY NOTIFICATION BUNDLE

    composer require grossum/notification-bundle

```php
$userNotification = new MessageNotification();

   $userNotification
       ->setType(NotificationInterface::SOCKET_NOTIFICATION_TYPE_WEB_NOTIFICATION)
       ->setContent('You have created task to demo NotificationBundle')
       ->setMediaUrl('https://pbs.twimg.com/profile_images/564783819580903424/2aQazOP3.png')
       ->setTitle('You have created task to demo NotificationBundle')
       ->setCreatedAt(new \DateTime())
       ->setRecipientHashes(['sds12']);

   $this->disptacher->dispatch(
       'grossum.notification.event.send_notification',
       new NotificationCreatedEvent($userNotification)
   );
```

```yml
  grossum.notification.notification_sender.email:
    class: %grossum.notification.notification_sender.email.class%
    arguments:
      - "@old_sound_rabbit_mq.send_email_producer"
 
 grossum.notification.event_listener.email_produce:
    class: %grossum.notification.event_listener.email_produce.class%
    arguments:
      - "@grossum.notification.notification_sender.email"
    tags:
      - { name: kernel.event_listener, event: grossum.notification.event.send_email, method: produceNotifications }
```

```php
EmailNotificationProduceListener
/**
   * @param NotificationSenderInterface $notificationSender
   */
  public function __construct(NotificationSenderInterface $notificationSender)
  {
      $this->notificationSender = $notificationSender;
  }
interface NotificationSenderInterface
{
   /**
    * @param NotificationInterface $notification
    */
   public function sendNotification(NotificationInterface $notification);
}
/**
    * {@inheritdoc}
    */
   public function sendNotification(NotificationInterface $message)
   {
       try {
           if ($message->isValid()) {
               $this->producer->publish(json_encode($message->exportData()));
           }
       } catch (\Exception $e) {
           //TODO: add logging
       }
   }
interface NotificationInterface
{
   const SOCKET_NOTIFICATION_TYPE_ENTITY_UPDATE = 'entity_update';
   const SOCKET_NOTIFICATION_TYPE_ENTITY_DELETE = 'entity_delete';
   const SOCKET_NOTIFICATION_TYPE_CHAT_MESSAGE = 'chat_message';
   const SOCKET_NOTIFICATION_TYPE_WEB_NOTIFICATION = 'web_notification';
   const PHONE_OS_TYPE_IOS = 'phone_ios';
   const PHONE_OS_TYPE_WINDOWS = 'phone_windows';
   const PHONE_OS_TYPE_ANDROID = 'phone_android';
   /**
    * @return array
    */
   public function exportData();
   /**
    * @return bool
    */
   public function isValid();
}
```