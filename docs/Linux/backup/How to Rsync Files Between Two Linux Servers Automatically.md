---
sidebar_position: 3
slug: How-to-Rsync-Files-Between-Two-Linux-Servers-Automatically
---

How to Rsync Files Between Two Linux Servers Automatically
==========================================================

https://www.linuxshelltips.com/rsync-files-between-two-linux-servers-automatically/

October 18, 2021

## Rsync Installation in Linux

Now that you understand the importance of having two servers in sync,

- The IP address for the Main/Primary server: 3.135.207.xx.
- The IP address for the Backup/secondary server: 18.118.208.xx

Its installation should take place on both your primary/main server and your secondary/backup server.

	$ sudo apt-get install rsync     [On Debian, Ubuntu and Mint]
	$ sudo yum install rsync         [On RHEL/CentOS/Fedora and Rocky Linux/AlmaLinux]
	$ sudo emerge -a net-mis/rsync   [On Gentoo Linux]
	$ sudo pacman -S rsync           [On Arch Linux]
	$ sudo zypper install rsync      [On OpenSUSE]

## Syncing Targeted Directory Files in Linux Using Rsync

Let’s for example assume the main/primary server (`3.135.207.xx`) has the directory LinuxShellTips with the following highlighted files that need syncing with the backup/secondary server (`18.118.208.xx`).

## Syncing Directories Using Rsync in Linux

We are running this command from the backup/secondary server (`18.118.208.xx`).

	$ sudo rsync -avzhe ssh ubuntu@3.135.207.xx:/home/ubuntu/LinuxShellTips/ /home/ubuntu/LinuxShellTips_Backup 

## Automatically Sync Directories Using Rsync in Linux

### Step 1: Configure SSH Passwordless Login

Use the following command on your backup/secondary server (`18.118.208.xx`).

	$ sudo ssh-keygen -t rsa -b 2048

Press [Enter] when prompted for a passphrase to leave the field blank and copy the generated private and public keys to your main/primary server.

	$ sudo ssh-copy-id -i /root/.ssh/id_rsa.pub ubuntu@3.135.207.xx

You can now comfortably execute the previously covered `rsync` command without providing a server access password for the main/primary server.

	$ sudo rsync -avzhe ssh ubuntu@3.135.207.xx:/home/ubuntu/LinuxShellTips/ /home/ubuntu/LinuxShellTips_Backup 

### Step 2: Configure a Cron Job to Automate Rsync

Since SSH passwordless login between these two servers is now possible, the final step to automate the rsync process is to create a cron job by editing the crontab file on the backup/secondary server.

	$ sudo crontab -e

Edit the crontab file by creating a cron job schedule for syncing your two Linux servers’ directory files.

	*/5    *    *     *     *  sudo rsync -avzhe ssh ubuntu@3.135.207.xx:/home/ubuntu/LinuxShellTips/ /home/ubuntu/LinuxShellTips_Backup




