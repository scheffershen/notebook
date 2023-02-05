WebSockets in docker
====================

Using WebSockets is the most robust solution if you want players to be in perfect sync with each other and it’s what most AAA multiplayer games use. In a WebSockets connection, data ‘frames’ can be sent at any time by the player or the server whenever there’s something to update.

A WebSockets connection is first established with a handshake between the player and the server which opens up a two-way stream of data to send and receive updates at any time, resulting in lower latency and better use of resources.

The Moonshot football stadium, where the Decentraland World Cup was held, is a perfect example of what’s possible thanks to WebSockets. Using WebSockets was essential to keep the ball’s position updated continuously and consistently for all players and spectators. Player positions were also synced via WebSockets to have less latency, their WebSocket-synced position was represented by an astronaut avatar to make them visible on all realms.

## Create a server

Instead of writing your own code for the server, you can use a generic broadcast server we prepared.

This pre-made WebSockets server broadcasts all the messages it receives to all other players that subscribe to the same room. 

For reference, you can find the code used by the server in this github repo: `github.com/decentraland-scenes/ws-broadcast`

	$ docker run -d -p 8080:8080 decentraland-scenes/ws-broadcast #docker pull solsson/websocat

The broadcast service is now running on our server, but we need to expose its endpoints through a path, which we can do using nginx. Open nginx’s configuration file on a console-based editor:

	$ nano /etc/nginx/sites-enabled/default

We need the following to go in the second server object definition, which refers to the secure port 443.

```
location /broadcast {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS';
    #
    #  Extra headers needed for certain browsers
    #
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,if-range';

    if ($request_method = 'OPTIONS') {
    #
            # Tell client that this pre-flight info is valid for 20 days
            #
    	add_header 'Access-Control-Max-Age' 1728000;
    	add_header 'Content-Type' 'text/plain; charset=utf-8';
    	add_header 'Content-Length' 0;
    	return 204;
    }
    if ($request_method = 'GET') {
            add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
    }
}
```

	$ systemctl reload nginx

You can now connect a scene to the server via `wss://yourIPwithDashs.nip.io/broadcast`,

## solsson/websocat

    $ docker run -d -p 8080:8080 solsson/websocat

## Resources

- https://github.com/vi/websocat
- https://github.com/decentraland-scenes/ws-broadcast