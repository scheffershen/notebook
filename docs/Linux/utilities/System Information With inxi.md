---
sidebar_position: 1
slug: System-Information-With-inxi
---

System Information With inxi
============================

https://itsfoss.com/inxi-system-info-linux/

Dec 19, 2021

inxi is a CLI tool that lists information about your Linux system. 

## Install inxi on your Linux distribution

	$ sudo apt install inxi

## Using inxi to get Linux system details

	$ inxi
	$ inxi -b

`-b` flag to show a more detailed overview of your system information	

## Get details of audio devices

	$ inxi -A

## Get battery information

	$ inxi -B

`B` flag will show details about your battery

## Get detailed CPU information

	$ inxi -C

## Get even more detailed system information

	$ inxi -F

## Get graphics related information

	$ inxi -G

## Get running process info

	$ inxi -I

## Get RAM information

	$ sudo inxi -m

## See which package repository is in use

	$ inxi -r

## Get RAID devices details

	$ inxi -R

`-R` flag shows you information about all the RAID devices.

## Monitoring the usage of system resource(s) with inxi

	$ inxi -t
	$ inxi -t cm10

`-t` flag to show processes, You can also use the non-mandatory options `c` (for CPU) and `m` (for RAM). 