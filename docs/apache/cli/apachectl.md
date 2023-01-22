---
sidebar_position: 1
---

### for Apache 1.x

If you have made changes to the Apache configuration file httpd.conf or one of the other included configuration files such as the vhosts.d files, you need to reload the Apache service for the changes to take effect.

### Gracefully restarting Apache

	$ /usr/sbin/apachectl graceful

### Running a configuration test first

	$ /usr/sbin/apachectl configtest

### Available options for the apachectl command

	$ apachectl start
	$ apachectl stop
	$ apachectl restart
	$ apachectl configtest
	$ apachectl help

### for Apache 2.x

	/etc/init.d/apache2 start|stop|reload|restart|configtest

### apache2ctl vs systemctl

`apache2ctl` is specific to Apache and provides functionality that is specific to the Apache server, while `systemctl` is a general-purpose service management utility that can be used to manage any service running on a Linux-based operating system.

### apachectl vs apache2ctl

`apachectl` and `apache2ctl` are command-line utilities used to control the Apache HTTP Server. The main difference between the two is that `apachectl is used to control the `Apache version 1.x`, while `apache2ctl` is used to control the `Apache version 2.x`

### systemctl vs service

`systemctl` is a more powerful and feature-rich service management utility, that provides a lot of options and commands that allows to have more control over the services, while `service` is a simpler and older utility that provides basic service management functionality.

It's worth to mention that `service` command it's just a symlink to `systemctl` in many Linux distributions that uses systemd as the init system.