Self-Hosted Video Conferencing: Options, Pros and Cons, Setup Guides
===

https://www.digitalocean.com/community/questions/self-hosted-video-conferencing-options-pros-and-cons-setup-guides

Posted March 25, 2020

I know of the “as a service” providers like ZOOM, Google Hangouts (or Meet) etc… 

But what are my options if I am interested in self-hosting video conferencing software?

## ION

Distributed RTC System using Go and Flutter

https://github.com/pion/ion

- Distributed by default - Designed to allow running different workloads and scaling them out as you need
- Flutter and JS SDK - Ready to be used on Web, Android and iOS!
- Designed to be modified - Modify the UI/Backend so you can have custom experiences for your use cases. As long as you satisfy public APIs any piece can be swapped.
- Easy to deploy - docker-compose with LetsEncrypt support. Spin up a conference server with on command
- Performant - You can run multi person conference calls on AWS free tier instances
- A joy to develop - Pure Go means quick builds, and a code base that anyone can contribute too!
- Community owned - The only thing driving the project is the contributors and users

To test, I installed it on a $15 *3CPU/1GBRAM/60GBSSD*

*Prerequisites*

Because the developers have containerized everything in Docker, the only software you need pre-installed is:

* git - so you can clone the repo
* docker - the app runs in docker containers
* docker-compose - the app is started via a docker-compose script

The last prerequisite is *a domain *to point to your server.

Without a domain, you can’t easily connect via HTTPS, and some browsers block audio/video features on HTTP connections.

*Conclusion*

ion looks very good, especially for those who are interested in developing something more on top of an open source video conferencing stack, and those who are interested in running video conferencing with limited resources.

## ZOOM

In my opinion, ZOOM is a great solution, it has a free option that lets you host meetings and it is quite intuitive to use.

The downside of Zoom is the fact that it has a limit of 40 minutes in case you have a meeting with 3 or more people

## BigBlueButton (BBB)

On the other side there are opensource projects like BigBlueButton (BBB for short) which allow you to host your own conferencing solution and have better control over your conferences and not have to create a new meeting every 40 minutes.

- Chat with public and private messages
- Hosting visual meetings with your webcams
- Screen sharing
- Polling - ask your users questions at any time
- Multi-user whiteboard - I think that this is amazing as you can draw together and have an actual interactive meetings

you need a Droplet with at least 4GB of RAM and even they recommend that it is much better to go for 8GB of RAM initially.

One of the great things about BBB is they provide you with an installation script that you could use to automate the deployment. The installation process usually takes around 30 minutes or so.

*Installation*

    $ wget -qO- https://ubuntu.bigbluebutton.org/bbb-install.sh | bash -s -- -v xenial-220 -a

*Conclusion*

This is one way of hosting your own video conferencing solution and having full control over your infrastructure. BigBlueButton is feature-rich solution that could help your organization or school have productive meetings during periods of social distancing like the current situation.