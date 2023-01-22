笔记：Let’s Encrypt 获取 TLS 证书（Webroot + Nginx）
===

https://moxo.io/blog/2018/01/30/obtain-and-renew-tls-certs-using-letsencrypt/
2018-01-30

## Standalone vs Webroot

使用 `Let’s Encrypt` 申请 `TLS` 证书，抛开官方给的 `Apache/Nginx plugin`，主要可以分为 `Standanlone` 和 `Webroot` 两种认证方式，主要区别在于：

1. 前者 `Standalone` 的认证方式需要暂时占用服务器的 80 或者 443 端口，来进行获取和更新证书的操作。换言之，如果服务器上搭建了网站，又不希望因为获取和更新 TLS 证书的过程造成网站暂时下线的状况，Standalone 的方式并不理想；

2. 如果需要验证的域名本身使用了 `CDN`，Standalone 的验证方式也会出问题。比如在 DNS 中新建一个 A/AAAA 记录将 site.com 指向了 12.34.56.78 这个 IP，此时使用 Standalone 不会有问题，但一旦打开 CDN，很可能首先 IP 就会变成 CDN 分配的 87.65.43.21，而 Standalone 的验证方式又需要请求 IP 和提供的 IP 完全一致，所以会导致验证失败；

## 使用 Webroot 认证方式

自己的需求里因为有个已经在运行的 Nginx 作为服务器，所以直接选择了 `Webroot` 的方式，大致的原理：需要验证的域名配置文件里 server.conf （监听 80 端口那部分）中，添加一个通配规则，使得 certbot 可以生成一个特定的验证文件，同时让之后 Let’s Encrypt 的验证服务器发起的 `http-01` 请求可以验证到对应文件。

验证通过之后，Let’s Encrypt 就会在特定的文件夹里生成指定域名的 TLS 证书，在对应的 server block 里直接调用就可以。

## 认证操作的基本步骤

现有一个 example.com ，还没有 TLS 证书，Nginx 中的最精简的配置文件如下

/etc/nginx/site-available/example.com

```
server {
  listen 80 default_server;
  server_name default_server example.com;
  
  root /var/www/che;
  index index.html;
  
  location / {
    try_files $uri $uri/ =404;   
  }

+  location ^~ /.well-known/acme-challenge/ {
+    default_type "text/plain";
+    root /var/www/letsencrypt;
+  }

}
```

在 Nginx 配置文件中加入 Let’s Encrypt 请求验证地址的规则：

	# 添加 Let's Encrypt 需要的文件夹
	$ sudo mkdir -p /var/www/letsencrypt/.well-known/acme-challenge

然后安装相关 certbot 依赖

	$ sudo apt-get install software-properties-common
	$ sudo add-apt-repository ppa:certbot/certbot
	$ sudo apt-get update
	$ sudo apt-get install certbot

接着就是比较关键的一步，通过 certbot 获取 TLS 证书

	$ certbot certonly --webroot --agree-tos --email YOUR@EMAIL.COM --webroot-path /var/www/letsencrypt --domains example.com

命令中的几个 flag 大概的解释：

* certonly：说明我们只需要获取证书，不需要 certbot 为我们去执行自动安装；
* --webroot：使用 Webroot 的验证方式；
* --agree-tos：默认同意 Let’s Encrypt 的一些 agreements，不加这个参数在命令执行过程中还是会问用户是否同意；
* --email：用来获取一些 Let’s Encrypt 的通知，比如证书过期之类；
* --webroot-path：对应上面 Nginx 设置中的 server 定义区块里的 root 地址；
* --domains：这个 root 路径需要验证的 SSL/TLS 的域名。这里可以填写多个，比如 example.com 可能会对应 www.example.com，但同时需要在 Nginx 的 server.conf 中加入对应内容，如果按照上文中配置来测试，实际运行命令中不要添加，否则可能会报错。


到这里验证就成功了， certbot 会出现「成功提示」，生成完成的证书文件会保存在固定的 /etc/letsencrypt/ 路径下：

1. /etc/letsencrypt/live/{{ EXAMPLE.COM }}/fullchain.pem;
2. /etc/letsencrypt/live/{{ EXAMPLE.COM }}/privkey.pem。

## 使用 standalone 认证方式

We can now run Certbot to get our certificate. We’ll use the `--standalone` option to tell Certbot to handle the challenge using its own built-in web server. The `--preferred-challenges` option instructs Certbot to use port 80 or port 443. If you’re using port 80, you want `--preferred-challenges http`. For port 443 it would be `--preferred-challenges tls-sni`. Finally, the `-d` flag is used to specify the domain you’re requesting a certificate for. You can add multiple `-d` options to cover multiple domains in one certificate.

	$ sudo certbot certonly --standalone --preferred-challenges http -d example.com

## Configuring Your Application

##  Enabling Automatic Certificate Renewal

Let’s Encrypt’s certificates are only valid for ninety days. This is to encourage users to automate their certificate renewal process. The certbot package we installed includes a systemd timer to check for renewals twice a day, but it is disabled by default. Enable the timer by running the following command:

	$ sudo systemctl enable --now certbot-renew.timer
		Created symlink from `/etc/systemd/system/timers.target.wants/certbot-renew.timer to /usr/lib/systemd/system/certbot-renew.timer.
	$ sudo systemctl status certbot-renew.timer

## Running Tasks When Certificates are Renewed

run a Certbot dry run to make sure the syntax is ok:

	$ sudo certbot renew --dry-run