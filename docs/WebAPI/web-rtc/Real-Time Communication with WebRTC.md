Real-Time Communication with WebRTC
===

The socket.io JavaScript Library

	npm install socket.io
	npm install node-static


- http://simplewebrtc.com/
- https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/#after-signaling-using-ice-to-cope-with-nats-and-firewalls
- https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/#after-signaling-using-ice-to-cope-with-nats-and-firewalls
- https://github.com/andyet/signalmaster

## local access

- http://sandbox.dev/medflix.universalmedica.com/WebRTCVideoChat/WebRTC_Book/WebRTC-Samples_OReilly_Review/WebContent/

WebRTC Trapezoid model
WebRTC Triangle
Network Address Translator (NAT)
Signaling
WebRTC API
	
	MediaSteam API  
		LocalMediaStream
			getUserMedia()
			stop()
			
	PeerConnection API
		The Session Traversal Utilities for NAT (STUN)
		The Traversal Using Relays around NAT (TURN)
		
	RTCDataChannel API  
		the Stream Control Transmission Protocol (SCTP)
		CreateDataChannel()

## WebRTC in 10 Steps

1. Create a MediaStream object from your local devices (e.g., microphone, webcam).
2. Obtain a URL blob from the local MediaStream.
3. Use the obtained URL blob for a local preview.
4. Create an RTCPeerConnection object.
5. Add the local stream to the newly created connection.
6. Send your own session description to the remote peer.
7. Receive the remote session description from your peer.
8. Process the received session description and add the remote stream to your
RTCPeerConnection.
9. Obtain a URL blob from the remote stream.
10. Use the obtained URL blob to play the remote peer’s audio and/or video.

- MediaStream API
	- A MediaStream interface
		- MediaStream object
			+ getUserMedia(constraints, successCallback, errorCallback)
			+ createObjectUrl(stream)
		// Look after different browser vendors' ways of calling the getUserMedia()
		// API method:
		// Opera --> getUserMedia
		// Chrome --> webkitGetUserMedia
		// Firefox --> mozGetUserMedia
		