Certbot
===

https://certbot.eff.org/docs/using.html?highlight=cron

## Getting certificates

To obtain a certificate and also install it

	$ certbot run (== certbot)

To just obtain the certificate without installing it anywhere,

	$ certbot certonly

You may specify multiple domains with -d and obtain and install different certificates by running Certbot multiple times:

	$ certbot certonly -d example.com -d www.example.com
	$ certbot certonly -d app.example.com -d api.example.com

## Plugins

`--apache`: Automates obtaining and installing a certificate with Apache.
`--nginx`:  Automates obtaining and installing a certificate with Nginx.
`--webroot`: Obtains a certificate by writing to the webroot directory of
an already running webserver.
`--standalone`: Uses a “standalone” webserver to obtain a certificate. Requires port 80 to be available. This is useful on systems with no webserver, or when direct integration with the local webserver is not supported or not desired.
`--DNS plugins`: This category of plugins automates obtaining a certificate by modifying DNS records to prove you have control over a domain. Doing domain validation in this way is the only way to obtain wildcard certificates from Let’s Encrypt.
`--manual`: Obtain a certificate by manually following instructions to perform domain validation yourself. Certificates created this way do not support autorenewal. Autorenewal may be enabled by providing an authentication hook script to automate the domain validation steps.

## Webroot

If you’re running a local webserver for which you have the ability to modify the content being served, and you’d prefer not to stop the webserver during the certificate issuance process, you can use the webroot plugin to obtain a certificate by including certonly and `--webroot` on the command line. 

Or you could create a certificate using the manual plugin for authentication and the nginx plugin for installation. (Note that this certificate cannot be renewed automatically.)

	$ certbot run -a manual -i nginx -d example.com

## Managing certificates

To view a list of the certificates Certbot knows about, run the `certificates` subcommand:

	$ certbot certificates

`Certificate Name` shows the name of the certificate. Pass this name using the `--cert-name` flag to specify a particular certificate for the `run`, `certonly`, `certificates`, `renew`, and `delete` commands. Example:

	$ certbot certonly --cert-name example.com

## Re-creating and Updating Existing Certificates

You can use `certonly` or `run` subcommands to request the creation of a single new certificate even if you already have an existing certificate with some of the same domain names.

If a certificate is requested with `run` or `certonly` specifying a certificate name that already exists, Certbot updates the existing certificate. Otherwise a new certificate is created and assigned the specified name.

The `--force-renewal`, `--duplicate`, and `--expand` options control Certbot’s behavior when re-creating a certificate with the same name as an existing certificate. If you don’t specify a requested behavior, Certbot may ask you what you intended.

https://certbot.eff.org/docs/using.html?highlight=cron

## Revoking certificates 吊销证书

## Renewing certificates

	$ certbot renew --pre-hook "service nginx stop" --post-hook "service nginx start"

An alternative form that provides for more fine-grained control over the renewal process

## Modifying the Renewal Configuration File

For example, say that a certificate’s renewal configuration file previously contained the following directives:

	archive_dir = /etc/letsencrypt/archive/example.com
	cert = /etc/letsencrypt/live/example.com/cert.pem
	privkey = /etc/letsencrypt/live/example.com/privkey.pem
	chain = /etc/letsencrypt/live/example.com/chain.pem
	fullchain = /etc/letsencrypt/live/example.com/fullchain.pem

The following commands could be used to specify where these files are located:

	$ mv /etc/letsencrypt/archive/example.com /home/user/me/certbot/example_archive
	$ sed -i 's,/etc/letsencrypt/archive/example.com,/home/user/me/certbot/example_archive,' /etc/letsencrypt/renewal/example.com.conf
	$ mv /etc/letsencrypt/live/example.com/*.pem /home/user/me/certbot/
	$ sed -i 's,/etc/letsencrypt/live/example.com,/home/user/me/certbot,g' /etc/letsencrypt/renewal/example.com.conf
	$ certbot update_symlinks

## Automated Renewals

## Setting up automated renewal

## privkey.pem

Private key for the certificate.

## fullchain.pem

All certificates, including server certificate (aka leaf certificate or end-entity certificate). 

## cert.pem and chain.pem (less common)

`cert.pem` contains the server certificate by itself, and `chain.pem` contains the additional intermediate certificate or certificates that web browsers will need in order to validate the server certificate.

## Pre and Post Validation Hooks

## Certbot command-line options

	$ certbot --help all

## Getting help

logs: `/var/log/letsencrypt`

	$ certbot --version

## 