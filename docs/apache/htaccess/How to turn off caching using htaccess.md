How to turn off caching using .htaccess
===

https://www.a2hosting.com/kb/developer-corner/apache-web-server/turning-off-caching-using-htaccess

## About .htaccess

The .htaccess file provides a way to give instructions to the Apache and compatible web servers.

## Disabling caching

Add this code at the bottom of the .htaccess file to turn off caching. 

```htaccess
# DISABLE CACHING
<IfModule mod_headers.c>
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires 0
</IfModule>

<FilesMatch "\.(css|flv|gif|htm|html|ico|jpe|jpeg|jpg|js|mp3|mp4|png|pdf|swf|txt)$">
    <IfModule mod_expires.c>
        ExpiresActive Off
    </IfModule>
    <IfModule mod_headers.c>
        FileETag None
        Header unset ETag
        Header unset Pragma
        Header unset Cache-Control
        Header unset Last-Modified
        Header set Pragma "no-cache"
        Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
        Header set Expires "Thu, 1 Jan 1970 00:00:00 GMT"
    </IfModule>
</FilesMatch>
```