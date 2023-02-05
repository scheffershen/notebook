ReadMe
======

Jitsi is a set of Open Source projects that allows you to easily build and deploy secure videoconferencing solutions.

Jitsi Meet is a fully encrypted, 100% Open Source video conferencing solution that you can use all day, every day, for free — with no account needed.

A `TURN server` is a media relay/proxy that allows peers to exchange UDP or TCP media traffic whenever one or both parties are behind NAT.

## installation

	$ git clone https://github.com/jitsi/docker-jitsi-meet.git

	$ cp env.example .env

	$ ./gen-passwords.sh

	# For linux
	$ mkdir -p ~/.jitsi-meet-cfg/{web,transcripts,prosody/config,prosody/prosody-plugins-custom,jicofo,jvb,jigasi,jibri}

	# For Windows
	$ echo web,transcripts,prosody/config,prosody/prosody-plugins-custom,jicofo,jvb,jigasi,jibri | % { mkdir "~/.jitsi-meet-cfg/$_" }

	$ docker-compose up -d

Access the web UI at `https://localhost:8443`

If you want to use `jigasi` too, first configure your `env` file with `SIP credentials` and then run Docker Compose as follows:

	$ docker-compose -f docker-compose.yml -f jigasi.yml up

If you want to enable document sharing via `Etherpad`, configure it and run Docker Compose as follows:

	$ docker-compose -f docker-compose.yml -f etherpad.yml up

If you want to use `jibri` too, first configure a host as described in `JItsi BRoadcasting` Infrastructure configuration section and then run Docker Compose as follows:

	$ docker-compose -f docker-compose.yml -f jibri.yml up -d

or to use `jigasi` too:

	$ docker-compose -f docker-compose.yml -f jigasi.yml -f jibri.yml up -d

## Architecture

A Jitsi Meet installation can be broken down into the following components:

- A web interface
- An XMPP server
- A conference focus component
- A video router (could be more than one)
- A `SIP` gateway for audio calls
- A Broadcasting Infrastructure for recording or streaming a conference.

A `SIP` VoIP gateway is a device that enables a user to place `VoIP` calls using session initiation protocol (SIP). SIP is a telephony technology developed as a fast, easy standard for delivering IP-based voice, data, and video communications.

## Images

- `base`: Debian stable base image with the S6 Overlay for process control and the Jitsi repositories enabled. All other images are based on this one.
- `base-java`: Same as the above, plus Java (OpenJDK).
- `web`: Jitsi Meet web UI, served with nginx.
- `prosody`: Prosody, the XMPP server.
- `jicofo`: Jicofo, the XMPP focus component.
- `jvb`: Jitsi Videobridge, the video router.
- `jigasi`: Jigasi, the SIP (audio only) gateway.
- `jibri`: Jibri, the broadcasting infrastructure.


## Resources

- https://jitsi.github.io/handbook