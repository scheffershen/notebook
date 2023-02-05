Building Real-time Apps with Websockets & Server-Sent Events
============================================================

https://www.sitepoint.com/real-time-apps-websockets-server-sent-events

Mark Brown
June 06, 2016

Things continued to get interesting in 2011 when the WebSocket protocol was standardised. WebSockets allow you to open a two-way persistent connection between client and server, giving you the ability to push data back to the clients whenever data changes on the server without the client having to request it. 

However, it wasn’t until socket.io—the most prominent effort to bring WebSockets to the masses—was released in 2014 that we saw a lot more experimentation happening with real time communication.

These technologies give you the ability to stream data back to the client the moment things happen on the server.

## WebSockets

**Demo**

    $ git clone https://github.com/sitepoint-editors/websocket-demo.git
    $ cd websocket-demo
    $ npm install
    $ npm start

Open http://localhost:8080/ in multiple browser windows and observe the logs in both the browser and the server to see messages going back and forth.

**The Client**

The **WebSocket** constructor initiates a connection with the server over the **ws** or **wss**(Secure) protocols. It has a **send** method for pushing data to the server and you can provide an **onmessage** handler for receiving data from the server.

Here’s an annotated example showing all of the important events:

```js
    // Open a connection
    var socket = new WebSocket('ws://localhost:8081/');

    // When a connection is made
    socket.onopen = function() {
      console.log('Opened connection ');

      // send data to the server
      var json = JSON.stringify({ message: 'Hello ' });
      socket.send(json);
    }

    // When data is received
    socket.onmessage = function(event) {
      console.log(event.data);
    }

    // A connection could not be made
    socket.onerror = function(event) {
      console.log(event);
    }

    // A connection was closed
    socket.onclose = function(code, reason) {
      console.log(code, reason);
    }

    // Close the connection when the window is closed
    window.addEventListener('beforeunload', function() {
      socket.close();
    });

```

**The Server**

By far, the most popular Node library for working with WebSockets on the server is **ws**, we’ll use that to simplify things as writing WebSocket servers is not a trivial task.

```js
    var WSS = require('ws').Server;

    // Start the server
    var wss = new WSS({ port: 8081 });

    // When a connection is established
    wss.on('connection', function(socket) {
      console.log('Opened connection ');

      // Send data back to the client
      var json = JSON.stringify({ message: 'Gotcha' });
      socket.send(json);

      // When data is received
      socket.on('message', function(message) {
        console.log('Received: ' + message);
      });

      // The connection was closed
      socket.on('close', function() {
        console.log('Closed Connection ');
      });

    });

    // Every three seconds broadcast "{ message: 'Hello hello!' }" to all connected clients
    var broadcast = function() {
      var json = JSON.stringify({
        message: 'Hello hello!'
      });

      // wss.clients is an array of all connected clients
      wss.clients.forEach(function each(client) {
        client.send(json);
        console.log('Sent: ' + json);
      });
    }
    setInterval(broadcast, 3000);    

```

Browser support for WebSockets is solid, 

## Server-Sent Events

Like WebSockets, SSE opens a persistent connection that allows you to send data back to the connected clients the second something is changed on the server. 

**Demo**

    $ git clone https://github.com/sitepoint-editors/server-sent-events-demo.git
    $ cd server-sent-events-demo
    $ npm install
    $ npm start

As before, open http://localhost:8080/ in multiple browser windows and observe the logs in both the browser and the server to see messages going back and forth.

**The client**

The **EventSource** function initiates a connection with the server over good old HTTP or HTTPS. It has a similar API to **WebSocket** and you can provide an **onmessage** handler for receiving data from the server. 

```js
    // Open a connection
    var stream = new EventSource("/sse");

    // When a connection is made
    stream.onopen = function() {
      console.log('Opened connection ');
    };

    // A connection could not be made
    stream.onerror = function (event) {
      console.log(event);
    };

    // When data is received
    stream.onmessage = function (event) {
      console.log(event.data);
    };

    // A connection was closed
    stream.onclose = function(code, reason) {
      console.log(code, reason);
    }

    // Close the connection when the window is closed
    window.addEventListener('beforeunload', function() {
      stream.close();
    });
```

**The Server**

There’s a neat little wrapper sse for creating server-sent events. We’ll use that to simplify things at first but sending events from the server is simple enough to do ourselves so we’ll explain how SSE on the server works later.

```js
    var SSE = require('sse');
    var http = require('http');

    var server = http.createServer();
    var clients = [];

    server.listen(8080, '127.0.0.1', function() {
      // initialize the /sse route
      var sse = new SSE(server);

      // When a connection is made
      sse.on('connection', function(stream) {
        console.log('Opened connection ');
        clients.push(stream);

        // Send data back to the client
        var json = JSON.stringify({ message: 'Gotcha' });
        stream.send(json);
        console.log('Sent: ' + json);

        // The connection was closed
        stream.on('close', function() {
          clients.splice(clients.indexOf(stream), 1);
          console.log('Closed connection ');
        });
      });
    });


   // Every three seconds broadcast "{ message: 'Hello hello!' }" to all connected clients
    var broadcast = function() {
      var json = JSON.stringify({ message: 'Hello hello!' });

      clients.forEach(function(stream) {
        stream.send(json);
        console.log('Sent: ' + json);
      });
    }
    setInterval(broadcast, 3000) 
```

**Sending Events from the Server**

When a HTTP request comes in from **EventSource** it will have an **Accept** header of **text/event-stream**, we need to respond with headers that keep the HTTP connection alive, then when we are ready to send data back to the client we write data to the **Response** object in a special format **data**: &lt;data&gt;\n\n.

```js
    http.createServer(function(req, res) {

      // Open a long held http connection
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });

      // Send data to the client
      var json = JSON.stringify({ message: 'Hello ' });
      res.write("data: " + json + "\n\n");

    }).listen(8000);

```


Although **SSE** is wonderfully simple to implement on both the client and the server, as mentioned above, its one caveat is that it doesn’t provide a way to send data from the client to the server.

Luckily, we can already do that with **XMLHttpRequest** or **fetch**. Our new found superpower is to be able to push from the server to the client.

For security, as it’s HTTP the standard Cross-Origin rules apply so you should always whitelist origins on both the server and the client:

    stream.onmessage = function(event) {
      if (e.origin != 'http://example.com') return;
    }

Then we can still push to the server as usual with good old Ajax:

```js
    document.querySelector('#send').addEventListener('click', function(event) {
      var json = JSON.stringify({ message: 'Hey there' });

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/api', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(json);

      log('Sent: ' + json);
    });
```

**Browser Compatibility**

Browser support for SSE is lower than WebSocket due to Microsoft never having shipped a browser that supports it, there is a bug report for it and you should all vote for SSE to help make it a priority for the next release.

## Frameworks

* socket.io
* Meteor
* Phoenix – Channels
* Rails 5 – ActionCable