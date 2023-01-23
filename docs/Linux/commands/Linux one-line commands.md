---
sidebar_position: 2
---

Linux one-line commands
=======================

https://www.redhat.com/sysadmin/one-line-linux-commands
November 17, 2021 

## 1. Apply a command on files with different names

The shell {} operator

	$ mkdir -p -v /home/josevnz/tmp/{dir1,anotherdir,similardir}

## 2. Edit a file in place

replace a string on one or more files

	$ sed -i 's#ORIGINAL_VALLUE#NEW_VALUE#g' myfile1 myfile2

## 3. Share a file quickly using a web server

	$ cd $mydir && python3 -m http.server 8888

## 4. Find failures with journalctl

find the most recent errors using a combination of `journalctl`, along with the classic tools `sort` and `uniq`:

	$ journalctl --no-pager --since today \
		--grep 'fail|error|fatal' --output json|jq '._EXE' | \
		sort | uniq -c | sort --numeric --reverse --key 1

## 5. Make an encrypted backup on a remote machine

Use ssh and tar to make secure backups

	$ tar --create --directory /home/josevnz/tmp/ --file - *| \
		ssh raspberrypi "tar --directory /home/josevnz \
		--verbose --list --file -"

## 6. Write instantaneous files

write multiline documents:

	$ cat<<DOC>/my/new/file
	Line1
	Line2
	A $VARIABLE
	DOC

## 7. Search for a file, and include some extensions and exclude others

uses the `grep` way to search for specific files.

	$ grep -R 'import' --include='*.java' --color MySourceCodeDir

try the `find` way (use `xargs` to handle a large number of matches properly):

	$ find MySourceCodeDir/ -name '*.java' -type f -print| xargs \
		grep --color 'import'

## 8. Monitor memory without top or htop

This one is almost cheating. It repeats a command, such as `free`, every five seconds and highlights the differences:

	$ watch -n 5 -d '/bin/free -m'

## 9. Display disk partition sizes

Use `lsbk` (list block) and `jq` (to manipulate a JSON on the command line) to display partition information:

	$ lsblk --json | jq -c '.blockdevices[]|[.name,.size]'

## 10. Quickly display a file type

The `What is` function is called with `wi`. It quickly tells you a file's type:

	$ function wi { test -n "$1" && stat --printf "%F\n" $1; }

## 11. Display the size of an installed RPM

If you have an RPM-based system, sooner or later, you will format your queries. Here's an example:

	$ rpm --queryformat='%12{SIZE} %{NAME}\n' \
		-q java-11-openjdk-headless

## 12. Display the total size of a group of files

In this case, the `find` command acts as a filter, displays the size of each file in bytes, and finally, shows the total size:

	$ t=0; for n in $(find ~/Documents -type f -name '*.py' -print | xargs \
		stat --printf "%s "); do ((t+=n)); done; echo $t

Or, if you want a function (better), try this approach:

	$ function size { t=0; test -d "$1" && for n in $(find $1 \
		-type f -name '*.py' -print| \
		xargs stat --printf "%s "); do ((t+=n)); done; echo $t; }

## 13. Update all Git repositories on a directory

Here's a trick to be more efficient with your updates:

	$ for i in */.git; do cd $(dirname $i); git pull; cd ..; done


## 14. Expose a web directory using containers

`Containers` are critical today. This one-liner exposes a directory via `Podman`:

	$ podman run --rm -v .:/usr/share/nginx/html:ro,Z \
		-p 30080:80 -d nginx

## 15. Check the weather

Use this function to find out whether you need a jacket today:

	$ weather() {curl -s --connect-timeout 3 -m 5 http://wttr.in/$1}

## 16. Display the top 10 IP addresses hitting a webserver

Here's a task web admins may use frequently with Nginx (it may also work with Apache) to grab the top 10 internet protocol addresses hitting a webserver from the access log:

	$ cat /var/log/nginx/access.log | cut -f 1 -d ' ' | sort | \
		uniq -c | sort -hr | head -n 10

## 17. Round floats in Bash with Python's help

	$ echo "22.67892" | python3 -c "print(f'{round(float(input()))}')"

## 18. Run a mini calculator

This function defines a quick calculator on the command line with variable precision (the default is 2). It uses `bc`. Create the function like this:

	$ function qqbc() { echo "scale=${2:-2}; $1" | bc -l

Next, perform a quick calculation:

	$ qqbc "2/3"
	$ qqbc "2/3" 4

This tool is called qqbc because it's an improvement on the old function `qbc`.	

## 19. Convert a CSV to JSON

	$ python3 -c \
		"import csv,json,sys;print(json.dumps(list(csv.reader(open(sys.argv[1])))))" \
		covid19-vaccinations-town-age-grp.csv

## 20. Install and run commands with Docker

If you have Docker installed and you want to run a command without installing a bunch of dependencies on your system

	$ docker run --rm --interactive curlimages/curl curl \
		--verbose --location --fail --silent --output - \
		https://example.com