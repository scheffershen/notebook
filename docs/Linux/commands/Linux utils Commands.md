---
sidebar_position: 1
---

Linux utils Commands
===

## The command sed

- Usually applies its editing to all lines in the input
- With the -i option, change a file insead of echoing the modified file to stdout

    $ sed 's/old/new' myfile

- Substitue the first occurrence od old on each line for new in the file myfile and display the result on stdout
- old is a pattern and can be a regulqr expression
- The / is the usual character to separate the old from the new
- The file myfile will not be changed; and new version is echoed to stdout
- No options are required for simple substitutions

### ln

    $ ln  -s  /nom_du_dossier_source  nom_du_lien

### configure a service to run at startup**

    $ sudo update-rc.d phpchat defaults

### Task: Linux List Users Command**

    $ awk -F':' '{ print $1}' /etc/passwd

### scp

    $ scp -r -p user@serveur1:chemin/vers/dossier/source user@serveur2:chemin/vers/dossier/destination

    $ scp -r -p adminum@188.165.121.162:/var/www/_SQL/umds_otuska_093111072016.sql umds_otuska_093111072016.sql 

    $ scp -r -p adminum@188.165.121.162:/var/www/_SQL/umds_otuska_093111072016.sql

    $ scp -r u46826020@s221547139.onlinehome.fr:/kunden/homepages/31/d221547127/htdocs/git/medflixs_2016.zip medflixs_2016.zip

    $ scp -r u83607301@home608606393.1and1-data.host:/kunden/homepages/9/d608606393/htdocs/backup/*.sql 

/kunden/homepages/9/d608606393/htdocs/admin/public_html/backup

### netstat

    $ netstat -tulpn
    $ netstat -antup 

    [avishek@tecmint ~]$ netstat -ltp

### nproc命令

### lscpu命令

## 对 Linux 新手非常有用的20个命令

## lsblk命令

“lsblk”就是列出块设备

    root@tecmint:~
    # lsblk
    NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    sda      8:0    0 232.9G  0 disk
    ├─sda1   8:1    0  46.6G  0 part /
    ├─sda2   8:2    0     1K  0 part
    ├─sda5   8:5    0   190M  0 part /boot
    ├─sda6   8:6    0   3.7G  0 part [SWAP]
    ├─sda7   8:7    0  93.1G  0 part /data
    └─sda8   8:8    0  89.2G  0 part /personal
    sr0     11:0    1  1024M  0 rom

*注意：lsblk是最有用和最简单的方式来了解新插入的USB设备的名字，特别是当你在终端上处理磁盘/块设备时*

## md5sum命令

“md5sum”就是计算和检验MD5信息签名。

    $ md5sum teamviewer_linux.deb
        47790ed345a7b7970fc1f2ac50c97002  teamviewer_linux.deb

*注意：用户可以使用官方提供的和md5sum生成签名信息匹对以此检测文件是否改变*

## dd命令

“dd”命令代表了转换和复制文件。

    $ dd if=/home/user/Downloads/debian.iso of=/dev/sdb1 bs=512M; sync

*注意：在上面的例子中，usb设备就是sdb1（你应该使用lsblk命令验证它，否则你会重写你的磁盘或者系统），请慎重使用磁盘的名，切忌。*

## uname命令

“uname”命令就是Unix Name的简写。显示机器名，操作系统和内核的详细信息

    $ uname -a
        Linux tecmint 3.8.0-19-generic
        #30-Ubuntu SMP Wed May 1 16:36:13 UTC 2013 i686 i686 i686 GNU/Linux

*注意： uname显示内核类别， uname -a显示详细信息。上面的输出详细说明了uname -a*

- “Linux“: 机器的内核名
- “tecmint“: 机器的分支名
- “3.8.0-19-generic“: 内核发布版本
- “#30-Ubuntu SMP“: 内核版本
- “i686“: 处理器架构
- “GNU/Linux“: 操作系统名

## history命令

“history”命令就是历史记录

    $  history

     1  sudo add-apt-repository ppa:tualatrix/ppa
     2  sudo apt-get update
     3  sudo apt-get install ubuntu-tweak
     4  sudo add-apt-repository ppa:diesch/testing
     5  sudo apt-get update
     6  sudo apt-get install indicator-privacy
     7  sudo add-apt-repository ppa:atareao/atareao
     8  sudo apt-get update
     9  sudo apt-get install my-weather-indicator
     10 pwd
     11 cd && sudo cp -r unity/6 /usr/share/unity/
     12 cd /usr/share/unity/icons/
     13 cd /usr/share/unity

*注意：按住“CTRL + R”就可以搜索已经执行过的命令，它可以你写命令时自动补全*

    (reverse-i-search)`if': ifconfig

## sudo命令

“sudo”(super user do)命令允许授权用户执行超级用户或者其它用户的命令。

    root@tecmint:~# sudo add-apt-repository ppa:tualatrix/ppa
    root@tecmint:~# su root

*注意：sudo 允许用户借用超级用户的权限，然而”su”命令实际上是允许用户以超级用户登录。所以sudo比su更安全。*

## tar命令

“tar”命令是磁带归档(Tape Archive)

Extraction

    $ tar -zxvf abc.tar.gz (记住'z'代表了.tar.gz)

    $ tar -jxvf abc.tar.bz2 (记住'j'代表了.tar.bz2)

Création

    $ tar -zcvf archieve.tar.gz(.bz2) /path/to/folder/abc

*注意： “tar.gz“代表了使用gzip归档，“bar.bz2”使用bzip压缩的，它压缩的更好但是也更慢*

## cal 命令

“cal”（Calender），它用来显示当前月份或者未来或者过去任何年份中的月份。

    $ cal 07 2145

         July 2145       
    Su Mo Tu We Th Fr Sa  
                 1  2  3
     4  5  6  7  8  9 10
    11 12 13 14 15 16 17
    18 19 20 21 22 23 24
    25 26 27 28 29 30 31

显示未来的月份，2145年7月

## date命令

“date”命令使用标准的输出打印当前的日期和时间，也可以深入设置。

    $ date
        Fri May 17 14:13:29 IST 2013

    $ date --set='14 may 2013 13:57'
        Mon May 13 13:57:00 IST 2013

*注意：这个命令在脚本中十分有用，以及基于时间和日期的脚本更完美。而且在终端中改变日期和时间，让你更专业！！！（当然你需要root权限才能操作这个，因为它是系统整体改变*

## cat命令

“cat”代表了连结（Concatenation），连接两个或者更多文本文件或者以标准输出形式打印文件的内容。

    $ cat a.txt b.txt c.txt d.txt abcd.txt
    $ cat abcd.txt
        ....
        contents of file abcd

*注意：“>>”和“>”调用了追加符号。它们用来追加到文件里，而不是显示在标准输出上。“>”符号会删除已存在的文件，然后创建一个新的文件。所以因为安全的原因，建议使用“>>”，它会写入到文件中，而不是覆盖或者删除*


这里就是常用通配符列表：

Wildcard Matches

       *            零个或者更多字符
       ?            恰好一个字符
    [abcde]             恰好列举中的一个字符
     [a-e]          恰好在所给范围中的一个字符
    [!abcde]        任何字符都不在列举中
    [!a-e]          任何字符都不在所给的范围中
    {debian,linux}      恰好在所给选项中的一整个单词
    ! 叫做非，带’！’的反向字符串为真

## Find command

搜索指定目录下的文件，从开始于父目录，然后搜索子目录。

    $ find -name *.sh
        ./Desktop/load.sh
        ./Desktop/test.sh
        ./Desktop/shutdown.sh
        ./Binary/firefox/run-mozilla.sh
        ./Downloads/kdewebdev-3.5.8/quanta/scripts/externalpreview.sh
        ./Downloads/kdewebdev-3.5.8/admin/doxygen.sh
        ./Downloads/kdewebdev-3.5.8/admin/cvs.sh
        ./Downloads/kdewebdev-3.5.8/admin/ltmain.sh
        ./Downloads/wheezy-nv-install.sh

>注意： `-name` 选项是搜索大小写敏感。可以使用`-iname`选项，这样在搜索中可以忽略大小写。（*是通配符，可以搜索所有的文件；`.sh`你可以使用文件名或者文件名的一部分来制定输出结果

    $ find -iname *.SH ( find -iname *.Sh /  find -iname *.sH)
        ./Desktop/load.sh
        ./Desktop/test.sh
        ./Desktop/shutdown.sh
        ./Binary/firefox/run-mozilla.sh
        ./Downloads/kdewebdev-3.5.8/quanta/scripts/externalpreview.sh
        ./Downloads/kdewebdev-3.5.8/admin/doxygen.sh
        ./Downloads/kdewebdev-3.5.8/admin/cvs.sh
        ./Downloads/kdewebdev-3.5.8/admin/ltmain.sh
        ./Downloads/wheezy-nv-install.sh

>注意：以上命令查找根目录下和所有文件夹以及加载的设备的子目录下的所有包含`tar.gz`的文件。

    $ find -name *.tar.gz
        /var/www/modules/update/tests/aaa_update_test.tar.gz
        ./var/cache/flashplugin-nonfree/install_flash_player_11_linux.i386.tar.gz
        ./home/server/Downloads/drupal-7.22.tar.gz
        ./home/server/Downloads/smtp-7.x-1.0.tar.gz
        ./home/server/Downloads/noreqnewpass-7.x-1.2.tar.gz
        ./usr/share/gettext/archive.git.tar.gz
        ./usr/share/doc/apg/php.tar.gz
        ./usr/share/doc/festival/examples/speech_pm_1.0.tar.gz
        ./usr/share/doc/argyll/examples/spyder2.tar.gz
        ./usr/share/usb_modeswitch/configPack.tar.gz   

## How do I find all files containing specific text on Linux?

    $ grep -rnw '/path/to/somewhere/' -e 'pattern'

- r or -R is recursive,
- n is line number, and
- w stands for match the whole word.
- l (lower-case L) can be added to just give the file name of matching files.

Along with these, `--exclude`, `--include`, `--exclude-dir` or `--include-dir` flags could be used for efficient searching:

This will only search through those files which have `.c` or `.h` extensions:

    $ grep --include=\*.{c,h} -rnw '/path/to/somewhere/' -e "pattern"

This will exclude searching all the files ending with .o extension:

    $ grep --exclude=*.o -rnw '/path/to/somewhere/' -e "pattern"

Just like exclude files, it's possible to exclude/include directories through `--exclude-dir` and `--include-dir` parameter. For example, this will exclude the dirs `dir1/`, `dir2/` and all of them matching `*.dst/`:

    $ grep --exclude`dir={dir1,dir2,*.dst} -rnw '/path/to/somewhere/' -e "pattern"

## grep

`grep`命令搜索指定文件中包含给定字符串或者单词的行。举例搜索 `/etc/passwd` 文件中的 `tecmint`

    $ grep tecmint /etc/passwd
        tecmint:x:1000:1000:Tecmint,,,:/home/tecmint:/bin/bash

使用`-i`选项将忽略大小写。

    $ grep -i TECMINT /etc/passwd
        tecmint:x:1000:1000:Tecmint,,,:/home/tecmint:/bin/bash

使用`-r`选项递归搜索所有自目录下包含字符串 “127.0.0.1“.的行。

    $ grep -r "127.0.0.1" /etc/
        /etc/vlc/lua/http/.hosts:127.0.0.1
        /etc/speech-dispatcher/modules/ivona.conf:#IvonaServerHost "127.0.0.1"
        /etc/mysql/my.cnf:bind-address      = 127.0.0.1
        /etc/apache2/mods-available/status.conf:    Allow from 127.0.0.1 ::1
        /etc/apache2/mods-available/ldap.conf:    Allow from 127.0.0.1 ::1
        /etc/apache2/mods-available/info.conf:    Allow from 127.0.0.1 ::1
        /etc/apache2/mods-available/proxy_balancer.conf:#    Allow from 127.0.0.1 ::1
        /etc/security/access.conf:#+ : root : 127.0.0.1
        /etc/dhcp/dhclient.conf:#prepend domain-name-servers 127.0.0.1;
        /etc/dhcp/dhclient.conf:#  option domain-name-servers 127.0.0.1;
        /etc/init/network-interface.conf:   ifconfig lo 127.0.0.1 up || true
        /etc/java-6-openjdk/net.properties:# localhost & 127.0.0.1).
        /etc/java-6-openjdk/net.properties:# http.nonProxyHosts=localhost|127.0.0.1
        /etc/java-6-openjdk/net.properties:# localhost & 127.0.0.1).
        /etc/java-6-openjdk/net.properties:# ftp.nonProxyHosts=localhost|127.0.0.1
        /etc/hosts:127.0.0.1    localhost

注意：您还可以使用以下选项：

- w 搜索单词 ($ egrep -w "word1|word2" /path/to/file).
- c 用于统计满足要求的行 (i.e., total number of times the pattern matched) ($ grep -c "word" /path/to/file).
– color 彩色输出 ($ grep –color server /etc/passwd).

## whereis

whereis的作用是用来定位命令的二进制文件\资源\或者帮助页.举例来说,获得ls和kill命令的二进制文件/资源以及帮助页:

    $ whereis ls
        ls: /bin/ls /usr/share/man/man1/ls.1.gz
    
    $ whereis kill
        kill: /bin/kill /usr/share/man/man2/kill.2.gz /usr/share/man/man1/kill.1.gz

注意:当需要知道二进制文件保存位置时有用.

## alias

alias是一个系统自建的shell命令，允许你为名字比较长的或者经常使用的命令指定别名。

    $ alias l='ls -l'

去掉`l`别名，要使用unalias命令：

    $ unalias l

## df

报告系统的磁盘使用情况

    $ df
        Filesystem     1K-blocks    Used Available Use% Mounted on
        /dev/sda1       47929224 7811908  37675948  18% /
        none                   4       0         4   0% /sys/fs/cgroup
        udev             1005916       4   1005912   1% /dev
        tmpfs             202824     816    202008   1% /run
        none                5120       0      5120   0% /run/lock
        none             1014120     628   1013492   1% /run/shm
        none              102400      44    102356   1% /run/user
        /dev/sda5         184307   79852     94727  46% /boot
        /dev/sda7       95989516   61104  91045676   1% /data
        /dev/sda8       91953192   57032  87218528   1% /personal

## du

估计文件的空间占用。 逐层统计文件（例如以递归方式）并输出摘要。

    $ du
        8       ./Daily Pics/wp-polls/images/default_gradient
        8       ./Daily Pics/wp-polls/images/default
        32      ./Daily Pics/wp-polls/images
        8       ./Daily Pics/wp-polls/tinymce/plugins/polls/langs
        8       ./Daily Pics/wp-polls/tinymce/plugins/polls/img
        28      ./Daily Pics/wp-polls/tinymce/plugins/polls
        32      ./Daily Pics/wp-polls/tinymce/plugins
        36      ./Daily Pics/wp-polls/tinymce
        580     ./Daily Pics/wp-polls
        1456    ./Daily Pics
        36      ./Plugins/wordpress-author-box
        16180   ./Plugins
        12      ./May Articles 2013/Xtreme Download Manager
        4632    ./May Articles 2013/XCache

注意: `df` 只显示文件系统的使用统计，但`du`统计目录内容。
    
show only directory volume

    $ du -sch app/data 

## find the big volume directories with du command

    $ sudo du -a / 2>/dev/null | sort -n -r | head -n 20
    
    $ du -a /dir/ | sort -n -r | head -n 20

    $ find /var/lib -type f -size +100M

## How to get the summarized sizes of folders and their subfolders ?

    $ du -sh ./*

## passwd

这是一个很重要的命令，在终端中用来改变自己密码很有用。显然的，因为安全的原因，你需要知道当前的密码。

## lpr

这个命令用来在命令行上将指定的文件在指定的打印机上打印。

    $ lpr -P deskjet-4620-series 1-final.pdf

注意： `lpq`命令让你查看打印机的状态（是开启状态还是关闭状态）和等待打印中的工作(文件)的状态。

## cmp

比较两个任意类型的文件并将结果输出至标准输出。如果两个文件相同， `cmp`默认返回0；如果不同，将显示不同的字节数和第一处不同的位置。

以下面两个文件为例：

    $ cat file1.txt
        Hi My name is Tecmint

    $ cat file2.txt
        Hi My name is tecmint [dot] com

比较一下这两个文件，看看命令的输出。

    $ cmp file1.txt file2.txt
        file1.txt file2.txt differ: byte 15, line 1

## mount

mount 是一个很重要的命令，用来挂载不能自动挂载的文件系统。你需要root权限挂载设备。

在插入你的文件系统后，首先运行 `lsblk` 命令，识别出你的设备，然后把分配的设备名记下来。

    $ lsblk

    NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
    sda      8:0    0 931.5G  0 disk
    ├─sda1   8:1    0 923.6G  0 part /
    ├─sda2   8:2    0     1K  0 part
    └─sda5   8:5    0   7.9G  0 part [SWAP]
    sr0     11:0    1  1024M  0 rom
    sdb      8:16   1   3.7G  0 disk
    └─sdb1   8:17   1   3.7G  0 part

从这个输出上来看，很明显我插入的是4GB的U盘，因而“sdb1”就是要挂载上来的文件系统。以root用户操作，然后切换到/dev目录，它是所有文件系统挂载的地方。

    $ cd /dev

创建一个任何名字的目录，但是最好和引用相关。

    $ mkdir usb

现在将“sdb1”文件系统挂载到“usb”目录.

    $ mount /dev/sdb1 /dev/usb

现在你就可以从终端进入到/dev/usb或者通过X窗口系统从挂载目录访问文件。

## ifconfig

ifconfig用来配置常驻内核的网络接口信息。在系统启动必要时用来设置网络适配器的信息。之后，它通常是只需要在调试时或当系统需要调整时使用。

检查活动网络适配器

    $ ifconfig

    eth0      Link encap:Ethernet  HWaddr 40:2C:F4:EA:CF:0E  
              inet addr:192.168.1.3  Bcast:192.168.1.255  Mask:255.255.255.0
              inet6 addr: fe80::422c:f4ff:feea:cf0e/64 Scope:Link
              UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
              RX packets:163843 errors:0 dropped:0 overruns:0 frame:0
              TX packets:124990 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:1000
              RX bytes:154389832 (147.2 MiB)  TX bytes:65085817 (62.0 MiB)
              Interrupt:20 Memory:f7100000-f7120000

    lo        Link encap:Local Loopback  
              inet addr:127.0.0.1  Mask:255.0.0.0
              inet6 addr: ::1/128 Scope:Host
              UP LOOPBACK RUNNING  MTU:16436  Metric:1
              RX packets:78 errors:0 dropped:0 overruns:0 frame:0
              TX packets:78 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:0
              RX bytes:4186 (4.0 KiB)  TX bytes:4186 (4.0 KiB)

检查所有的网络适配器

- a: 参数用来显示所有网络适配器(网卡)的详细信息,包括那些停用的适配器。

停用网络适配器

    $ ifconfig eth0 down

启用网络适配器

    $ ifconfig eth0 up

指定IP地址到网络适配器

为网络适配器`eth0`设定IP地址`192.168.1.12`.

    $ ifconfig eth0 192.168.1.12

更改网络适配器eth0的子网掩码

    $ ifconfig eth0 netmask 255.255.255.

更改网络适配器eth0的广播地址

    $ ifconfig eth0 broadcast 192.168.1.255

>Note:如果你设置一块无线网卡的信息,你可以使用的命令是 `iwconfig`

## netstat

netstat命令显示各种网络相关的信息，如网络连接,路由表,接口统计,伪装连接,组播成员身份等….

列出所有的网络端口

    $ netstat -a
        Active UNIX domain sockets (servers and established)
        Proto RefCnt Flags       Type       State         I-Node   Path
        unix  2      [ ACC ]     STREAM     LISTENING     741379   /run/user/user1/keyring-I5cn1c/gpg
        unix  2      [ ACC ]     STREAM     LISTENING     8965     /var/run/acpid.socket
        unix  2      [ ACC ]     STREAM     LISTENING     18584    /tmp/.X11-unix/X0
        unix  2      [ ACC ]     STREAM     LISTENING     741385   /run/user/user1/keyring-I5cn1c/ssh
        unix  2      [ ACC ]     STREAM     LISTENING     741387   /run/user/user1/keyring-I5cn1c/pkcs11
        unix  2      [ ACC ]     STREAM     LISTENING     20242    @/tmp/dbus-ghtTjuPN46

显示所有tcp相关端口

    $ netstat -at
        Active Internet connections (servers and established)
        Proto Recv-Q Send-Q Local Address           Foreign Address         State      
        tcp        0      0 localhost:mysql         *:*                     LISTEN     
        tcp        0      0 *:5901                  *:*                     LISTEN     
        tcp        0      0 *:5902                  *:*                     LISTEN     
        tcp        0      0 *:x11-1                 *:*                     LISTEN     
        tcp        0      0 *:x11-2                 *:*                     LISTEN     
        tcp        0      0 *:5938                  *:*                     LISTEN     
        tcp        0      0 localhost:5940          *:*                     LISTEN

显示所有连接的统计信息

    $ netstat -s
        Ip:
            4994239 total packets received
            0 forwarded
            0 incoming packets discarded
            4165741 incoming packets delivered
            3248924 requests sent out
            8 outgoing packets dropped
        Icmp:
            29460 ICMP messages received
            566 input ICMP message failed.
            ICMP input histogram:
                destination unreachable: 98
                redirects: 29362
            2918 ICMP messages sent
            0 ICMP messages failed
            ICMP output histogram:
                destination unreachable: 2918
        IcmpMsg:
            InType3: 98
            InType5: 29362
            OutType3: 2918
        Tcp:
            94533 active connections openings
            23 passive connection openings
            5870 failed connection attempts
            7194 connection resets received

好的！由于某些原因如果你不想解析netstat 输出的主机、端口和用户名称的话 。

    $ netstat -an

好，你可能需要获取的 netstat 持续输出的动态信息，通过传递中断输出指令 (ctrl + c)来停止。

    $ netstat -c

    $ netstat -ltp

## nslookup

网络实用程序，用于获得互联网服务器的信息。顾名思义，该实用程序将发现通过查询 DNS 域的名称服务器信息。

    $ nslookup tecmint.com
        Server:     192.168.1.1
        Address:    192.168.1.1
        #53
        Non-authoritative answer:
        Name:   tecmint.com
        Address: 50.16.67.239

查询邮件交换器记录

    $ nslookup -query=mx tecmint.com
        Server:     192.168.1.1
        Address:    192.168.1.1
        #53
        Non-authoritative answer:
        tecmint.com mail exchanger = 0 smtp.secureserver.net.
        tecmint.com mail exchanger = 10 mailstore1.secureserver.net.
        Authoritative answers can be found from:

查询域名服务器

    $ nslookup -type=ns tecmint.com
        Server:     192.168.1.1
        Address:    192.168.1.1
        #53
        Non-authoritative answer:
        tecmint.com nameserver = ns3404.com.
        tecmint.com nameserver = ns3403.com.
        Authoritative answers can be found from:

查询DNS记录

    $ nslookup -type=any tecmint.com
        Server:     192.168.1.1
        Address:    192.168.1.1
        #53
        Non-authoritative answer:
        tecmint.com mail exchanger = 10 mailstore1.secureserver.net.
        tecmint.com mail exchanger = 0 smtp.secureserver.net.
        tecmint.com nameserver = ns06.domaincontrol.com.
        tecmint.com nameserver = ns3404.com.
        tecmint.com nameserver = ns3403.com.
        tecmint.com nameserver = ns05.domaincontrol.com.
        Authoritative answers can be found from:

查询起始授权机构

    $ nslookup -type=soa tecmint.com
        Server:     192.168.1.1
        Address:    192.168.1.1
        #53
        Non-authoritative answer:
        tecmint.com
            origin = ns3403.hostgator.com
            mail addr = dnsadmin.gator1702.hostgator.com
            serial = 2012081102
            refresh = 86400
            retry = 7200
            expire = 3600000
            minimum = 86400
        Authoritative answers can be found from:

查询端口号

更改使用你想要连接的端口号

    $ nslookup -port 56 tecmint.com
    Server:     tecmint.com
    Address:    50.16.76.239
    #53
    Name:   56
    Address: 14.13.253.12

## dig

dig是查询DNS 域名服务器的工具，可以查询的主机地址、 邮件交流、 域名服务器相关的信息。在任何 Linux (Unix) 或 Macintosh OS X 操作系统上，都可以使用该工具。dig的最典型的用法是单个主机的查询。

    $ dig tecmint.com
        ; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> tecmint.com
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<

关闭注释行

    $ dig tecmint.com +nocomments
        ; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> tecmint.com +nocomments
        ;; global options: +cmd
        ;tecmint.com.           IN  A
        tecmint.com.        14400   IN  A   40.216.66.239
        ;; Query time: 418 msec
        ;; SERVER: 192.168.1.1
        #53(192.168.1.1)
        ;; WHEN: Sat Jun 29 13:53:22 2013
        ;; MSG SIZE  rcvd: 45

关闭认证块

    $ dig tecmint.com +noauthority
        ; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> tecmint.com +noauthority
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<

关闭 其他 块

    $ dig  tecmint.com +noadditional
        ; <<>> DiG 9.9.2-P1 <<>> tecmint.com +noadditional
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<

关闭 统计块

    $ dig tecmint.com +nostats
        ; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> tecmint.com +nostats
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<

关闭回复块

    $ dig tecmint.com +noanswer
        ; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> tecmint.com +noanswer
        ;; global options: +cmd
        ;; Got answer:
        ;; ->>HEADER<

关闭所有块

    $ dig tecmint.com +noall
        ; <<>> DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6 <<>> tecmint.com +noall
        ;; global options: +cmd    

## uptime

你连接到你的Linux 服务器时发现一些不寻常或恶意的东西，你会做什么？猜测……不，绝不！你可以运行uptime来验证当服务器无人值守式到底发生了什么事情。

    $ uptime
        14:37:10 up  4:21,  2 users,  load average: 0.00, 0.00, 0.04    

## wall

对系统管理员来说一个最重要的命令.wall发送一条消息到大家登录端将其mesg权限设置为"yes"。这条信息可以被wall作为参数，或者可以将它作为wall的标准输入。

    $ wall "we will be going down for maintenance for one hour sharply at 03:30 pm"
        Broadcast message from root@localhost.localdomain (pts/0) (Sat Jun 29 14:44:02 2013):
        we will be going down for maintenance for one hour sharply at 03:30 pm

## mesg

其他人们可以使用 "wtrite" 命令,将在在向您发送文本到屏幕上。你可以控制是否显示。

    $ mesg [<strong>n</strong>|<strong>y</strong>] <strong>n</strong> - prevents the message from others popping up on the screen. <strong>y</strong> – Allows messages to appear on your screen.

## write

如果 "mesg" 是 "y"，让你的文本直接发送到另一台 Linux 机器的屏幕。.

    $ write ravisaive

## talk

增强的write命令，talk命令可让你与其他登录的用户交谈。

    $ talk ravisaive

注释: 如果talk命令没安装的话,可以通过apt或yum 安装所需的包.

    $ yum install talk
    
    OR
    
    $ apt-get install talk

## w

是否觉得命令 `w` 很滑稽？但是事实上不是的。它是一个命令，尽管只有一个字符长！命令”w“是uptime和who命令，以前后的顺序组合在一起。

    $ w
        15:05:42 up  4:49,  3 users,  load average: 0.02, 0.01, 0.00
        USER     TTY      FROM              LOGIN@   IDLE   JCPU   PCPU WHAT
        server   tty7     :0               14:06    4:43m  1:42   0.08s pam: gdm-passwo
        server   pts/0    :0.0             14:18    0.00s  0.23s  1.65s gnome-terminal
        server   pts/1    :0.0             14:47    4:43   0.01s  0.01s bash


