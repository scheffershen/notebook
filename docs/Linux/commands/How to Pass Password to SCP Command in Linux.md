---
sidebar_position: 4
slug: How-to-Pass-Password-to-SCP-Command-in-Linux
---

How to Pass Password to SCP Command in Linux
============================================

https://www.linuxshelltips.com/pass-password-scp-command-linux/

September 15, 2021 Categories

## Securely Transfer Files Using Scp Command

The simplicity of the `scp` command-line tool makes it possible for users to easily and remotely copy files and directories from one Linux environment to another.

	$ scp [Username@SourceHost:]Path_to_File_to_Copy  [Username@DestinationHost:]Path_to_Destination_of_Copied_File

For instance, I could successfully copy a file to one of my remote servers from my Linux desktop environment in the following manner:

	$ scp linuxshelltips.txt ubuntu@18.118.208.xx:/home/ubuntu/

## Install `SSHPass` in Linux – Add SSH Password to Command

When `SSHPASS` is implemented alongside `SCP`, it nullifies the need for a password prompt before a user’s files and directories can be copied.

	$ sudo apt-get install sshpass     [On Debian, Ubuntu and Mint]
	$ sudo yum install sshpass         [On RHEL/CentOS/Fedora and Rocky Linux/AlmaLinux]
	$ sudo emerge -a sys-apps/sshpass  [On Gentoo Linux]
	$ sudo pacman -S sshpass           [On Arch Linux]
	$ sudo zypper install sshpass      [On OpenSUSE]

## How to Add Password to SCP Command in Linux

`SSHPASS` non-interactive password authentication use case can be implemented alongside `SCP` as demonstrated by the following command syntax.

	$ sshpass -p "REMOTE_USER_PASSWORD" scp UserName@Remote_Host:/DESTINATION_PATH_TO_COPIED_FILES  

For instance, I could attempt copying a file to a remote server in the following manner:

	$ sshpass -p "REMOTE_USER_PASSWORD" scp linuxshelltips_v2.txt ubuntu@18.118.208.79:/home/ubuntu/

Consider the following command.

	$ sshpass -p "REMOTE_USER_PASSWORD" scp -r Some_Directory/ ubuntu@18.118.208.79:/home/ubuntu/