---
sidebar_position: 1
slug: How-to-Repair-File-System-Errors-in-Linux-Mint
---

How to Repair File System Errors in Linux Mint
==============================================

https://www.linuxshelltips.com/repair-linuxmint-file-system-errors/

December 24, 2021

## Linux Mint File System Errors

File system errors occur when we can’t control OS-related behaviors like hardware failures, improper startup procedures, and NFS write errors. The outcome of such OS-related behaviors is lagging or reduced performance and efficiency of the Linux operating system.

## Repairing File System Errors in Linux Mint

To repair file system errors in Linux Mint, you need to use an `FSCK` terminal-based utility, which is used to identify and resolve file system errors.

	$ fsck [COMMAND_OPTIONS] [TARGETED_FILESYSTEM]

To use `FSCK`, ensure you are a root user or have Sudoer privileges on the system. There are some important `FSCK` rules to follow:

- Identify the partitions you are interested in repairing via the command `fdisk -l`.
- Use the command syntax `umount /dev/sdx` to unmount the targeted filesystem partition for repair.
- Perform a filesystem partition repair with the command `fsck -p` on the unmounted partition `/dev/sdx`.
- Remount the repaired filesystem partition.

## Repairing Non-Root File Systems in Linux Mint

Consider the following file system repair steps.

1. List all non-root filesystem partitions to identify the one to repair.

	$ sudo fdisk -l

2. Unmount the partition and attempt filesystem repair

	$ sudo umount /dev/sdb
	$ sudo fsck -p /dev/sdb

The `-p` an option is for automatic repair of any broken file.

3. Next, remount the filesystem partition by unplugging it and plugging it back on your computer, and confirm that it is online.

	$ sudo fdisk -l

## Repairing Root File Systems in Linux Mint

Since repairing the filesystem of a running OS is risky, we need the operating system to be on boot mode.

To force Linux Mint to repair and fix root filesystem errors, create the following file and restart your machine.

	$ sudo touch /forcefsck

You will however need to create this file every time a file system check needs to take place as the OS deletes it once it is done with it.

A more permanent solution is to set files system check and repair to execute after a specific number of system boots. If we want it to take place after two system boots, the command to execute is as follows:

	$ sudo fdisk -l
	$ sudo tune2fs -c 2 /dev/sda5
