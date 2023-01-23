---
sidebar_position: 2
slug: how-to-add-swap-on-ubuntu-14-04
---

how-to-add-swap-on-ubuntu-14-04
===

https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04

## Introduction

One of the easiest way of increasing the responsiveness of your server and guarding against out of memory errors in your applications is to add some swap space. Swap is an area on a hard drive that has been designated as a place where the operating system can temporarily store data that it can no longer hold in RAM.

## Check the System for Swap Information

     $ sudo swapon -s
     $ free -m

## Check Available Space on the Hard Drive Partition

     $ df -h

## Create a Swap File

     $ sudo fallocate -l 4G /swapfile
     $ ls -lh /swapfile

## Enabling the Swap File

     $ sudo chmod 600 /swapfile
     $ ls -lh /swapfile
     $ sudo mkswap /swapfile
     $ sudo swapon /swapfile
     
     $ sudo swapon -s
     $ free -m

## Make the Swap File Permanent

     $ sudo nano /etc/fstab

At the bottom of the file, you need to add a line that will tell the operating system to automatically use the file you created:

     /swapfile   none    swap    sw    0   0

## Tweak your Swap Settings

     $ cat /proc/sys/vm/swappiness
     $ sudo sysctl vm.swappiness=10

     $ sudo nano /etc/sysctl.conf

At the bottom, you can add:

     vm.swappiness=10

     $ cat /proc/sys/vm/vfs_cache_pressure
     $ sudo sysctl vm.vfs_cache_pressure=50

     $ sudo nano /etc/sysctl.conf

At the bottom, add the line that specifies your new value:

     vm.vfs_cache_pressure = 50

## Conclusion
