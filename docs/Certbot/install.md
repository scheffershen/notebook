install
===

## About Certbot

System administrators can use Certbot directly to request certificates; they should not allow unprivileged users to run arbitrary Certbot commands as `root`, because Certbot allows its user to specify arbitrary file locations and run arbitrary scripts.

## System Requirements

Certbot currently requires Python 3.6+ running on a UNIX-like operating system
By default, it requires root access in order to write to `/etc/letsencrypt`, `/var/log/letsencrypt`, `/var/lib/letsencrypt`;

If none of these apply to you, it is theoretically possible to run without root privileges, but for most users who want to avoid running an ACME client as `root`,

## Alternate installation methods

### Snap