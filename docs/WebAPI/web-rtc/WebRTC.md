WebRTC
===

## P2P video


- http://sourcey.com/symple-webrtc-video-chat-demo/
- https://github.com/sourcey/symple-client-webrtc-demo
- http://www.codeproject.com/Articles/480155/Video-Chat-Using-HTML-Web-RTC-ROAP-RTC-Web-Offer

## Preface

	The following are the major components of the WebRTC API:
		• getUserMedia: This component allows a web browser to access the camera
			and microphone
		• PeerConnection: This component sets up audio/video calls
		• DataChannels: This component allows browsers to share data through
			peer-to-peer connections

### Supported platforms and devices

	WebRTC is supported in the following desktop browsers:
	• Google Chrome Version 23 and higher
	• Mozilla Firefox Version 22 and higher
	• Opera Version 18 and higher
	• Internet Explorer doesn't support WebRTC yet, but this can be solved using
		the Chrome Component for IE
		
	At the time of writing this book, the web browser WebRTC API is natively supported
	only in the Android platform.
		• Google Chrome Version 29 and higher
		• Mozilla Firefox Version 24 and higher
		• Opera Mobile Version 12 and higher
		• Google Chrome OS		

### Applications you can easily build using WebRTC	

	The following are the applications you can easily build using WebRTC:
		• Peer-to-peer audio/video conferences
		• Pre-recorded video streaming
		• Desktop screen casting
		• Peer-to-peer file sharing and transferring
	More ideas
		• An interactive language school
		• Webinars
		• A job interview service
		• A distributed radio broadcasting service
		• A distance learning school
		• An interactive dating service	
		

## Developing a WebRTC Application	

### Installation using repository

	wget http://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb
	sudo dpkg -i erlang-solutions_1.0_all.deb
	
	deb http://packages.erlang-solutions.com/ubuntu trusty contrib
	deb http://packages.erlang-solutions.com/ubuntu saucy contrib
	deb http://packages.erlang-solutions.com/ubuntu precise contrib
	
	wget http://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc
	sudo apt-key add erlang_solutions.asc
	
	sudo apt-get update
	sudo apt-get install erlang
	
	

## Compiling and running the signaling server

rebar get-deps
rebar compile	
erl -pa deps/*/ebin apps/*/ebin -saslerrlog_type error -s rtcserver_app