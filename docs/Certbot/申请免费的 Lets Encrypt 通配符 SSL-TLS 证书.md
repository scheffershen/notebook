申请免费的 Let's Encrypt 通配符 SSL/TLS 证书
===

https://www.yangdx.com/2020/08/164.html
2020年8月22日

## 什么是 Let's Encrypt

`Let's Encrypt` 是免费、开放和自动化的证书颁发机构。由`非盈利组织互联网安全研究小组（ISRG）`运营。Let's Encrypt 提供的是`域名验证型（DV）证书`，有效期为 90 天，证书快到期时可以`通过脚本自动续期`。中文官网是 https://letsencrypt.org/zh-cn/。

以往我们申请 `SSL 证书`，通常是在 `IDC 服务商`的管理后台页面填写表单进行申请，而 Let's Encrypt 则是通过`命令行提交申请`，操作也很简单。Let's Encrypt 使用 `ACME 协议`来验证您对给定`域名的控制权`并向您颁发证书，最常用的是就是 `ACME 客户端软件`是  `Certbot`。

## 什么是通配符证书

在申请`通配符`证书前，我们首先要了解什么是`通配符域名`

举例 -.yangdx.com 这个通配符域名，可以匹配 www.yangdx.com blog.yangdx.com img.yangdx.com 等二级域名，我们为 -.yangdx.com 申请通配符证书，就可以保护所有的二级域名。

`根域名 yangdx.com` 比较特殊，如果要把它包含到 -.yangdx.com 的证书里，需要手动指定。


## 申请通配符证书

首先，安装 Certbot 客户端（要用 root 账户操作）：

	$ wget https://dl.eff.org/certbot-auto
	$ mv certbot-auto /usr/local/bin/certbot-auto
	$ chmod 0755 /usr/local/bin/certbot-auto

接着，执行 certbot-auto 申请证书，指令如下

	$ certbot-auto certonly \
		  -d "*.yangdx.com" \
		  -d "yangdx.com" \
		  --manual \
		  --preferred-challenges dns-01 \
		  --server https://acme-v02.api.letsencrypt.org/directory

- `certonly` 表示`安装模式`，Certbot 有`安装模式`和`验证模式`两种类型的插件。
- `-d` 域名 要使用此证书的域名，可以多个，但通配符域名最多一个。
- `--manual` 表示`手动安装插件`，Certbot 有很多插件，不同的插件都可以申请证书，用户可以根据需要自行选择。
- `--preferred-challenges` 验证方式 验证域名所有权的方式，目前有以下三种：
	+ `dns-01` - 给域名添加一个 DNS TXT 记录。对于`通配符域名`，`只能使用 dns-01 方式验证`；
	+ `http-01` - 在域名对应的 Web 服务器下放置一个 HTTP well-known URL 资源文件；
	+ `tls-sni-01` - 在域名对应的 Web 服务器下放置一个 HTTPS well-known URL 资源文件。
- `--server` 认证中心URL 认证中心的 URL，对于通配符域名，目前只有 Let's Encrypt ACME v2 版本的认证中心支持通配符证书。		  

因为我们同时为 -.yangdx.com 和 yangdx.com 申请证书，所以需要做两次 TXT 记录验证

账号凭据、证书文件，都保存在 /etc/letsencrypt 目录，请注意备份。

## 查看证书

使用 certbot-auto certificates 指令可查看当前申请的证书和它的过期时间：

	$ certbot-auto certificates

## 证书续期

证书有效期为 90 天，即将过期时，我们可以执行 `certbot-auto renew` 进行自动续期。

	$ cat /etc/hosts