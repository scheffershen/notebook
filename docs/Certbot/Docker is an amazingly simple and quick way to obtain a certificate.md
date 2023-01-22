Docker is an amazingly simple and quick way to obtain a certificate
===================================================================

	$ sudo docker run -it --rm --name certbot \
	            -v "/etc/letsencrypt:/etc/letsencrypt" \
	            -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
	            certbot/certbot certonly

Running Certbot with the `certonly` command will obtain a certificate and place it in the directory `/etc/letsencrypt/live` on your system. Because Certonly cannot install the certificate from within Docker, you must install the certificate manually according to the procedure recommended by the provider of your webserver.
