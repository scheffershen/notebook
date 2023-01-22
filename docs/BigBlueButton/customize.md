customize
===

https://docs.bigbluebutton.org/admin/customize.html

## Frontends

### Remove the API demos

	$ sudo apt-get purge bbb-demo

### Modify the default landing page

	var/www/bigbluebutton-default/index.html

### Use the Greenlight front-end

### HTML5 client

### Changing the background color of the HTML client

https://docs.bigbluebutton.org/2.3/dev.html

Instead, you should build the `meteor` app so that the `bbb-html5` service can work with it.

First, ensure that you’re in the `bigbluebutton-html5` directory. If you follow the instructions above and have ubuntu as your user, you can run the following:

	$ meteor build --server-only /home/ubuntu/dev/bigbluebutton/bigbluebutton-html5/meteorbundle

Meteor will build your customized version into a `.tar.gz` so we need to unpack it and place it in the right directory for bbb-html5 to use it. Run:

	$ sudo tar -xzvf /home/ubuntu/dev/bigbluebutton/bigbluebutton-html5/meteorbundle/*.tar.gz -C /usr/share/meteor

Finally, start the HTML5 client with sudo `systemctl start bbb-html5`.

## bbb-html5

`bbb-html5` – HTML5 client that loads in the browser. The client server-side meteor application that leverages MongoDB and React.js

