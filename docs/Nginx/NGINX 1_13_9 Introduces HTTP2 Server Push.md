NGINX 1.13.9 Introduces HTTP/2 Server Push  
===

https://www.nginx.com/blog/nginx-1-13-9-http2-server-push/

We’re delighted to announce that NGINX 1.13.9, released on February 20, 2018, includes support for HTTP/2 server push.

Server push, which is defined in the HTTP/2 specification, allows a server to preemptively push resources to a remote client, anticipating that the client may soon request those resources. By doing so, you can potentially reduce the number of RTTs (round trip time – the time needed for a request and response) in a page‑load operation by one RTT or more, providing faster response to the user.

Server push can be used to prime a client with style sheets, images, and other resources that it will need to render a web page. You should take care to only push resources that are required; don’t push resources that a client is likely to already have cached.

In this blog post, I describe:

- Basic configuration for HTTP/2 server push
- How to verify that HTTP/2 server push is working (using browser tools or nghttp)
- Automatically pushing content using the Link header
- Selectively pushing content
- Measuring the effect of HTTP/2 server push

##Configuring HTTP/2 Server Push

To push resources along with a page load, use the http2_push directive as follows:

```
server {
    # Ensure that HTTP/2 is enabled for the server
    listen 443 ssl http2;

    ssl_certificate ssl/certificate.pem;
    ssl_certificate_key ssl/key.pem;

    root /var/www/html;

    # whenever a client requests demo.html, also push
    # /style.css, /image1.jpg and /image2.jpg
    location = /demo.html {
        http2_push /style.css;
        http2_push /image1.jpg;
        http2_push /image2.jpg;
    }
}
```

## Verifying HTTP/2 Server Push

You can easily verify that server push is in effect using either of two methods:

- The developer tools in your web browser
- A command‑line HTTP/2 client such as nghttp

1. Verifying with Developer Tools (Google Chrome)
    - Initiator 

2. Verifying with a Command-Line Client (nghttp)

In addition to web browser tools, you can use the nghttp command‑line client from the nghttp2.org project to verify that server push is in effect.

    nghttp -ans https://example.com/demo.html

##Automatically Pushing Resources to Clients

NGINX also supports the convention of intercepting Link preload headers, then pushing the resources identified in these headers. To enable preload, include the http2_push_preload directive in the configuration:

```
server {
    # Ensure that HTTP/2 is enabled for the server
    listen 443 ssl http2;

    ssl_certificate ssl/certificate.pem;
    ssl_certificate_key ssl/key.pem;

    root /var/www/html;

    # Intercept Link header and initiate requested Pushes
    location = /myapp {
        proxy_pass http://upstream;
        http2_push_preload on;
    }
}
```

For example, when NGINX is operating as a proxy (for HTTP, FastCGI, or other traffic types), the upstream server can add a Link header like this to its response:

    Link: </style.css>; as=style; rel=preload;

NGINX intercepts this header and commences a server push of /style.css. The path in the Link header must be absolute

To push multiple objects, you can provide multiple Link headers, or, better still, merge the list of objects into a comma-separated list:

    Link </style.css>; as=style; rel=preload, </favicon.ico>; as=image; rel=preload;

If you don’t want NGINX to push a preloaded resource, add a nopush parameter to the header:
    
    # Resource is not pushed
    Link: </nginx.png>; as=image; rel=preload; nopush;

When http2_push_preload is enabled, you can also initiate server push by setting the response header in your NGINX configuration:

    add_header Link "</style.css>; as=style; rel=preload;";

##Selectively Pushing Resources to Clients

One possible approach is to push resources to clients only on their first visit to the site. You can test for the presence of a session cookie, for example, and set the Link header conditionally, so the resources are preloaded only if the session cookie is not present.

Assuming clients are well‑behaved and include the cookie in subsequent requests, NGINX pushes the resources to the clients only once per browser session:

```
server {
    listen 443 ssl http2 default_server;

    ssl_certificate ssl/certificate.pem;
    ssl_certificate_key ssl/key.pem;

    root /var/www/html;
    http2_push_preload on;

    location = /demo.html {
        add_header Set-Cookie "session=1";
        add_header Link $resources;
    }
}

map $http_cookie $resources {
    "~*session=1" "";
    default "</style.css>; as=style; rel=preload, </image1.jpg>; as=image; rel=preload, </image2.jpg>; as=style; rel=preload";
}
```