---
sidebar_position: 5
slug: How-To-Use-Rsync-to-Sync-Local-and-Remote-Directories-on-a-VPS
---

How To Use Rsync to Sync Local and Remote Directories on a VPS
==============================================================

https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps

September 10, 2013

## Introduction

`Rsync`, which stands for "remote sync", is a remote and local file synchronization tool. It uses an algorithm that minimizes the amount of data copied by only moving the portions of files that have changed.

## What Is Rsync?

`Rsync` is a very flexible network-enabled syncing tool.

## Basic Syntax

To sync the contents of dir1 to dir2 `on the same system`, type:

    $ rsync -r dir1/ dir2

The `-r` option means recursive, which is necessary for directory syncing.

    $ rsync -a dir1/ dir2

- a: option is a combination flag. It stands for "archive" and syncs recursively and preserves symbolic links, special and device files, modification times, group, owner, and permissions. It is more commonly used than `-r` and is usually what you want to use.

    $ rsync -anv dir1/ dir2

Always double-check your arguments before executing an `rsync` command. `Rsync` provides a method for doing this by passing the `-n` or `--dry-run` options. The `-v` flag (for verbose) is also necessary to get the appropriate output:

## How To Use Rsync to Sync with a Remote System

Syncing to a remote system is trivial if you have SSH access to the remote machine and `rsync` installed on both sides. If you need to set up SSH keys, click here.

you can sync the `dir1` folder from earlier to a remote computer by using this syntax

    $ rsync -azP --delete /var/www/otsuka vm01@37.187.165.154:/home/vm01
    $ rsync -azP --delete adminum@164.132.21.138:/var/www/astreinte-otsuka.medica-source.com .

It is used to sync a remote directory to the local system.

    $ rsync -a backup@164.132.21.137:/var/www/otsuka /home/backup

## Useful Options for Rsync

If you are transferring files that have not already been compressed, like text files, you can reduce the network transfer by adding compression with the `-z` option:
`
    $ rsync -az source destination

The `-P` flag is very helpful. It combines the flags `--progress` and `--partial`. The first of these gives you a progress bar for the transfers and the second allows you to resume interrupted transfers:

    $ rsync -azP source destination

In order to keep two directories truly in sync, it is necessary to delete files from the destination directory if they are removed from the source. By default, `rsync` does not delete anything from the destination directory.

    $ rsync -azP --delete source destination

If you wish to exclude certain files or directories located inside a directory you are syncing, you can do so by specifying them in a comma-separated list following the `--exclude=` option:    

    $ rsync -azP --delete -exclude=pattern_to_exclude source destination

    $ rsync -azP --delete --exclude=otsuka/app/cache --exclude=otsuka/app/logs /var/www/otsuka vm01@37.187.165.154:/home/vm01

If we have specified a pattern to exclude, we can override that exclusion for files that match a different pattern by using the `--include=` option.    

Finally, rsync’s --backup option can be used to store backups of important files. It is used in conjunction with the `--backup-dir` option, which specifies the directory where the backup files should be stored.

    $ rsync -a --delete --backup --backup-dir=/path/to/backups /path/to/source destination
