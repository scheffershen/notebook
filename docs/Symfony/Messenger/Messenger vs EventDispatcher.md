Messenger vs EventDispatcher
============================

The purpose of the event dispatcher is to allow one piece of code to "notify" the app that something happened and for anyone else to "listen" to that event and run some code.

## Sommaire

- [Messenger can be Async](./)
- [EventDispatcher communicates back](./)

## Messenger can be Async

Messenger allows your handlers to be called `asynchronously`, 
listeners to events from the EventDispatcher are always `synchronous`.

you don't need any feedback from possible listeners or handlers, use `Messenger`.

Messenger is perfect if you don't need any info back from your handlers

if you end up wanting your code to run asynchronously, you'll end up choosing Messenger

## EventDispatcher communicates back

if you want listeners to that event to be able to communicate back to you, so you can then do something based on their feedback, use the `EventDispatcher`.

if you want your listeners to be able to communicate back to the code that dispatches the messages, you'll use EventDispatcher

## Resources

https://symfonycasts.com/screencast/messenger/messenger-event-dispatcher