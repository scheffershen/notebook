Can't connect to WSS/SSL websocket server with a self-signed certificate 
=========================================================================

https://bugzilla.mozilla.org/show_bug.cgi?id=1187666

## Problème

Steps to reproduce:

    - create a secure websocket server listening on port 8080 using a self-signed certificate
    - create an https server listening on port 9000 which, on load, attempts to create a websocket connection with wss://localhost:8080
    - Go to https://localhost:9000

Actual results:

An error in the console:

    Firefox can't establish a connection to the server at wss://localhost:8080/.

## solution

    You can add the exception by going to https://localhost:8080/ first, and ten loading the page on 9000 with the subresource.