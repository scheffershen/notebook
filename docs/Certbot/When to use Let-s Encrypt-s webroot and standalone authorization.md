When to use Let's Encrypt's webroot and standalone authorization
===

https://advancedweb.hu/when-to-use-lets-encrypts-webroot-and-standalone-authorization/

## Motivation

Probably the two most used custom authorizations when it comes to Let’s Encrypt is the webroot and the standalone.

## Webroot

Webroot authentication works by designating a folder which contents are available publicly. Certbot then places a file there then pings a remote server that tries to fetch it. If it is successful, then Let’s Encrypt issues the certificate, as you’ve proven ownership of the domain.

To specify webroot auth and the directory, use:

	$ certbot certonly/renew --webroot -w /path/to/webroot

## Standalone

This authorization temporarily starts a webserver on port 80, just for the time of the auth process. As this is a standalone and self-contained solution, this is the easiest to configure, if you don’t use that port.

Scenario #1: port 80 is free
	To specify the standalone auth and restart the app on a new certificate, use:

	$ certbot certonly/renew --standalone --deploy-hook="restart app..."

Scenario #2: port 80 is used
	To use standalone authorization and shut down the app during the process, use:

	$ certbot certonly/renew --standalone --pre-hook "shut down app..." --post-hook "start app..."

## More complicated use cases

With these two auth challenges, you can easily configure an evergreen certificate for most use cases.