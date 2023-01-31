---
title: Rabbitmq fanout example with symfony including 2 producer, 2 exchange, 2 queue, n worker, 2-consumer
slug: rabbitmq-fanout-example
---

rabbitmq-fanout-example-with-symfony-including-2-producer-2-exchange-2-queue-n-worker-2-consumer
===

http://www.inanzzz.com/index.php/post/7zi5/rabbitmq-fanout-example-with-symfony-including-2-producer-2-exchange-2-queue-n-worker-2-consumer

## How it works

**Request** - User places an order create or order update request.

**Controller** - Request gets validated and passed on to Service.

**Service** - Depending on the request, a new order gets inserted into database/existing order gets updated in database, an order create/update event is created and the response is returned to user. This is where application process is finished so no more waiting time for user.

**Event Dispatcher** - Picks up the event and dispatches it.

**Event Listener** - Picks up dispatched event and passes it on to Producer.

**Producer** - Creates a message and puts it into queue.

**Consumer** - If the worker is running in terminal, it catches the message and processes it. If the worker is not running yet, it would start consuming messages later on when the worker is started.