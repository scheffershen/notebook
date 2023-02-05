WebRTC Blueprints
===

Developing a WebRTC Application
	Establishing a peer-to-peer connection
		WebRTC can't create direct connections between peers without the help of a signaling server.
		any communication mechanism that allows us to exchange Session Description Protocol (SDP) data between peers can be used for signalization.
		we will use WebSockets to build our signaling server.
		
	The Session Description Protocol
		SDP is an important part of the WebRTC stack. It is used to negotiate on-session/media options while establishing a peer connection.
		
	WebSocket
		WebSocket is a replacement for long polling to get a two-way communication between the browser and server.
		
Using the WebRTC Data API
	Nevertheless, the WebRTC standard is not yet complete and web browsers can still behave in different ways.		
	Chrome versions lower than 31 uses the RTP data channel type by default; Firefox uses SCTP by default in all versions.	
	You can check the current status of the data channel's implementation on the WebRTC home page at http://www.webrtc.org/home
	
	
	https://apprtc.appspot.com/r/36837531