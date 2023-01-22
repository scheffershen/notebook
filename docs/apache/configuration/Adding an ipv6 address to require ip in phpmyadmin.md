The supported syntaxes are, for Apache 2.2 and 2.4 respectively:

```
Allow from 1111:2222:3333:4444::/64

Require ip 1111:2222:3333:4444::/64
```

The syntax you were trying was probably missing the terminal ::, which was causing the base IPv6 address to be invalid. (It'd be comparable to trying to write 1.2.3/24 instead of 1.2.3.0/24.)

### test-ipv6.com

Votre adresse IPv4 sur l'Internet semble être `116.88.219.15`

Votre adresse IPv6 sur l'Internet semble être: `2406:3003:2005:19d9:71fa:26b4:b0a2:3dd7`

    Allow from 2406:3003:2005:19d9::/64

Votre Fournisseur d'Accès Internet (FAI) semble être STARHUB-NGNBN Starhub Ltd

Comme vous avez IPv6, nous avons ajouté un onglet indiquant la qualité de votre connexion IPv6. [plus d'info]

Votre serveur DNS (qui est peut-être chez votre FAI) semble avoir un accès IPv6 à Internet.

### https://www.whatismyip.com/

MY PUBLIC IPV4 IS: `116.88.219.15`
MY PUBLIC IPV6 IS: `2406:3003:2005:19D9:B870:BE15:5BCA:2A51`

        Allow from 2406:3003:2005:19d9::/64

### What is IPv6?

IPv6 is the most recent version of the Internet Protocol (IP). It is defined in `RFC 8200`.

### Why to Use IPv6

Many system administrators prefer to use IPv6 due to its improved performance and additional features. Here are some of the advantages of IPv6, compared to IPv4.

Much larger address space of about 340 duodecillion, or 3.4 × 10^38, addresses. This allows addresses to be liberally assigned and lets organizations receive large address blocks.
Better speed and performance. Web page load times are 5% to 15% faster with IPv6.
The header is smaller than the one used in IPv4, so IPv6 uses bandwidth more efficiently.
Better route aggregation, which limits the size of routing tables.
Improved multicast capabilities.
Security enhancements, including the mandatory use of Internet Protocol Security (IPSec) and optional data consistency verification.

### determine the IPv6 address of the system

Use the Linux ip command to determine the IPv6 address of the system

    $ ip addr show | grep inet6 # linux

    $ ipconfig /all # windows

### IPv4 and IPv6 address formats

An IPv4 address has the format x.x.x.x, where x is called an octet and must be a decimal value between 0 and 255. 

An IPv6 address can have either of the following two formats:

- Normal #Pure IPv6 format
- Dual #IPv6 plus IPv4 formats

An IPv6 (normal) address has the format y:y:y:y:y:y:y:y, where y is called a segment and can be any hexadecimal value between 0 and FFFF. 

An IPv6 normal address must have eight segments; 

The following are examples of valid IPv6 (normal) addresses:

    2001:db8:3333:4444:5555:6666:7777:8888
    2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF
    :: (implies all 8 segments are zero)
    2001:db8:: (implies that the last six segments are zero)
    ::1234:5678 (implies that the first six segments are zero)
    2001:db8::1234:5678 (implies that the middle four segments are zero)
    2001:0db8:0001:0000:0000:0ab9:C0A8:0102 (This can be compressed to eliminate leading zeros, as follows: 2001:db8:1::ab9:C0A8:102 )

An IPv6 (dual) address combines an IPv6 and an IPv4 address and has the following format: y:y:y:y:y:y:x.x.x.x. 

- In the IPv6 portion of the address, y is called a segment and can be any hexadecimal value between 0 and FFFF. The segments are separated by colons, not periods. The IPv6 portion of the address must have six segments but there is a short form notation for segments that are zero.
- In the IPv4 portion of the address x is called an octet and must be a decimal value between 0 and 255. The octets are separated by periods. The IPv4 portion of the address must contain three periods and four octets.

The following are examples of valid IPv6 (dual) addresses:

    2001:db8:3333:4444:5555:6666:1.2.3.4
    ::11.22.33.44 (implies all six IPv6 segments are zero)
    2001:db8::123.123.123.123 (implies that the last four IPv6 segments are zero)
    ::1234:5678:91.123.4.56 (implies that the first four IPv6 segments are zero)
    ::1234:5678:1.2.3.4 (implies that the first four IPv6 segments are zero)
    2001:db8::1234:5678:5.6.7.8 (implies that the middle two IPv6 segments are zero)

### IPv4 subnet masks

All IP addresses are divided into portions. One part identifies the network (the network number) and the other part identifies the specific machine or host within the network (the host number). 

In IPv4, the subnet mask `255.255.255.0` is 32 bits and consists of four 8-bit octets. The address `10.10.10.0` with the subnet mask `255.255.255.0` means that the subnet is a range of IP addresses from `10.10.10.0` - `10.10.10.255`.

The prefix-length in IPv6 is the equivalent of the subnet mask in IPv4. However, rather than being expressed in 4 octets like it is in IPv4, it is expressed as an integer between 1-128. For example: `2001:db8:abcd:0012::0/64` specifies a subnet with a range of IP addresses from `2001:db8:abcd:0012:0000:0000:0000:0000` to `2001:db8:abcd:0012:ffff:ffff:ffff:ffff`. The portion in bold is called the network portion of the IP address, or the prefix. The non-bold portion is called the host portion of the IP address, since it identifies an individual host on the network.

Expanded notation of IPv6 address at start of the range: `2001:0DB8:ABCD:0012:0000:0000:0000:0000`
IPv6 address (condensed notation): `2001:DB8:ABCD:12::`
IPv6 address with prefix length: `2001:db8:abcd:0012::0/64`
Device range in subnetwork: `2001:0DB8:ABCD:0012:0000:0000:0000:0000` - `2001:0DB8:ABCD:0012:FFFF:FFFF:FFFF:FFFF`

### To allow a specific IPv6 address to connect to an SSH server

you will need to configure your server's firewall to allow incoming connections from that address. This can typically be done by adding a rule to the firewall to allow traffic from the specific IPv6 address to the port used by SSH (usually port 22). If you are using iptables, you can use the following command to add a rule that allows incoming SSH connections from a specific IPv6 address:

    $ sudo iptables -A INPUT -p tcp -s [IPv6 address] --dport 22 -j ACCEPT 

You can also use the -s option to specify a subnet, instead of a single IP address.

>It's worth noting that you should be careful when configuring your firewall to only allow connections from specific IP addresses, as this could prevent legitimate users from connecting to your server if their IP address changes.

Additionally, you can also configure your ssh server to listen on certain IP address. This can be done by editing the `/etc/ssh/sshd_config` file and adding the following line:

    ListenAddress [IPv6 address]

You will need to restart the ssh service for these changes to take effect

    $ sudo service ssh restart
