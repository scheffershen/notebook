How JavaScript works: WebRTC and the mechanics of peer to peer networking
===

https://blog.sessionstack.com/how-javascript-works-webrtc-and-the-mechanics-of-peer-to-peer-connectivity-87cc56c1d0ab

If you missed the previous chapters, you can find them here:

- An overview of the engine, the runtime, and the call stack
- Inside Google’s V8 engine + 5 tips on how to write optimized code
- Memory management + how to handle 4 common memory leaks
- The event loop and the rise of Async programming + 5 ways to better coding with async/await
- Deep dive into WebSockets and HTTP/2 with SSE + how to pick the right path
- A comparison with WebAssembly + why in certain cases it’s better to use it over JavaScript
- The building blocks of Web Workers + 5 cases when you should use them
- Service Workers, their life-cycle, and use cases
- The mechanics of Web Push Notifications
- Tracking changes in the DOM using MutationObserver
- The rendering engine and tips to optimize its performance
- Inside the Networking Layer + How to Optimize Its Performance and Security
- Under the hood of CSS and JS animations + how to optimize their performance
- Parsing, Abstract Syntax Trees (ASTs) + 5 tips on how to minimize parse time
- The internals of classes and inheritance + transpiling in Babel and TypeScript
- Storage engines + how to choose the proper storage API
- The internals of Shadow DOM + how to build self-contained components

## Overview

 We’ll also discuss the following topics, in order to give you the full picture on the internals of WebRTC:

- Peer-To-Peer communication
- Firewalls and NAT Traversal
- Signaling, Sessions, and Protocols
- WebRTC APIs

## Peer-To-Peer Communication

In order to communicate with another peer via a web browser, each person’s web browser must go through the following steps:

- Agree to begin communication
- Know how to locate one another
- Bypass security and firewall protections
- Transmit all multimedia communications in real-time

##Firewalls and NAT Traversal

##Signaling, Sessions, and Protocols

##Connection Establishment

## WebRTC APIs

There are three main categories of APIs that exist in WebRTC:

- *Media Capture and Streams* — Allows you to Get access to input devices such as the microphone and the web camera. The API allows you to get a stream of media from either of them.
- *RTCPeerConnection* — using these APIs you can send the captured stream of audio and video in real-time across the internet to another WebRTC endpoint. Using these APIs you can create a connection between the local machine and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it’s no longer needed.
- *RTCDataChannel* — these APIs allow you to transmit arbitrary data. Each data channel is associated with an RTCPeerConnection.

## Media Capture and Streams

```js
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
 /* use the stream */
})
.catch(function(err) {
 /* handle the error */
});

```

*getUserMedia* can also be used as an input node for the Web Audio API:

```js
function gotStream(stream) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();
    // Create an AudioNode from the stream
    var mediaStreamSource = audioContext.createMediaStreamSource(stream);
    // Connect it to destination to hear yourself
    // or any other node for processing!
    mediaStreamSource.connect(audioContext.destination);
}

navigator.getUserMedia({audio:true}, gotStream);
```

##Privacy Constraints

##RTCPeerConnection

##RTCDataChannel

The syntax is similar to the already known WebSocket, with a send() method and a message event:

```js
var peerConnection = new webkitRTCPeerConnection(servers,
    {optional: [{RtpDataChannels: true}]}
);

peerConnection.ondatachannel = function(event) {
    receiveChannel = event.channel;
    receiveChannel.onmessage = function(event){
        document.querySelector("#receiver").innerHTML = event.data;
    };
};

sendChannel = peerConnection.createDataChannel("sendDataChannel", {reliable: false});

document.querySelector("button#send").onclick = function (){
    var data = document.querySelector("textarea#send").value;
    sendChannel.send(data);
};
```

##WebRTC in the real world

##Finding connection candidates

##Security

##Resources:

https://www.html5rocks.com/en/tutorials/webrtc/basics/
https://www.innoarchitech.com/what-is-webrtc-and-how-does-it-work/