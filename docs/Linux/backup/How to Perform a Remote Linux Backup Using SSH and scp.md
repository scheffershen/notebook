---
sidebar_position: 2
slug: How-to-Perform-a-Remote-Linux-Backup-Using-SSH
---

How to Perform a Remote Linux Backup Using SSH and scp
======================================================

https://www.linuxshelltips.com/remote-linux-backup/

October 18, 2021

## Connect to Remote Linux Without Password

On the `local computer`, generate the needed `SSH key` with the following command:

	$ sudo ssh-keygen -t rsa

On the resulting prompt, remember to skip the Enter `passphrase`: step by hitting [Enter] on the keyboard.

The `remote server` needs a copy of the `SSH key`.

	$ sudo ssh-copy-id ubuntu@18.118.208.XX

Now connect to remote Linux server without a password SSH access.

## SCP Remote Linux Backup via SSH Protocol

Before you backup data `to/from` a `remote server`, make sure you are on the correct directory path on the `local machine` and that you are also familiar with the directory structure on the `remote/server machine`.

On the local machine:
	
	$ cd /home/dnyce

On the server/remote machine:

	$ cd /home/ubuntu

## Backup Local Directory to Remote Linux

	$ sudo scp -r path/to/local/directory/with/useful/data user@remote_server_ip:/path/to/remote/backup/directory

	$ sudo scp -r /home/dnyce/LinuxShellTips ubuntu@18.118.208.79:/home/ubuntu/LinuxShellTips_Backup

## Backup Remote Directory to Local Linux

To create a backup from the remote server to your local machine, the syntax to use will look like the following:

	$ sudo scp -r user@remote_server_ip:/path/to/remote/directory/with/useful/data path/to/local/backup/directory/ 

	$ sudo scp -r ubuntu@18.118.208.79:/home/ubuntu/LinuxShellTips_Backup /home/dnyce/LinuxShellTips 

