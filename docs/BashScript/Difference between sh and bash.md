Difference between sh and bash
==============================

https://www.geeksforgeeks.org/difference-between-sh-and-bash/

Last Updated : 21 Feb, 2022

bash and sh are two different shells of the Unix operating system.

## Bash:

- bash is sh, but with more features and better syntax
- Bash is “Bourne Again SHell”, and is an improvement of the sh (original Bourne shell). 
- whereas Bash scripting is scripting specifically for Bash
- bash is a superset of sh
- bash is a programming language. Here think like python, we can start python in interactive mode and it behaves like a shell but we can also run python program on any IDE.
- bash supports features of sh and provides more functionality than sh.
- bash is not a POSIX compliant shell.
- It is a dialect of the POSIX shell language. 
- Bash can run in a text window and allows the user to interpret commands to do various tasks.
- It has the best and most useful features of the Korn and C shells, such as directory manipulation, job control, aliases, and many others.
- bash is more functional than sh in terms of programming and interactive use.

```bash
#!/bin/bash  

myString="GeeksforGeeks"
echo "myString: $myString"

```

	$ bash -f main.sh

## Shell:

- Shell scripting is scripting in any shell, 
- sh is a shell command-line interpreter of Unix/Unix-like operating systems.
- sh provides some built-in commands.
- Shell is a command-line interface to run commands and shell scripts.
- Shells come in a variety of flavors, much as operating systems come in a variety of flavors.
- Shell is an interface between the user and the operating system, which helps the user to interact with the device.
- sh is also called Bourne Shell. 
- sh is a command programming language described by POSIX standard. It is for UNIX or UNIX-like operating systems.
- On most operating systems, sh is implemented by programs like dash, kash, and original Bourne Shell. sh is a Predecessor of bash. /bin/sh is an actual link to main implementations. It is a symlink in most POSIX systems.
- sh is not a programming language itself. It is just a specification.
- sh is a detailed description of the syntax and semantics of the language
- It doesn’t include an implementation. sh is written as a replacement for earlier UNIX shells.
- It’s most of the syntax is the same as the syntax of the ALGOL68 programming language.
- We should use sh if we want our language to be compatible with multiple systems. 
- The sh script will most like run on bash also without modifications as bash is backward compatible with sh.
- sh is the most portable scripting language that works on most POSIX/Unix/Linux systems. 
- One advantage of sh is that it is guaranteed to exist on everything that purports to Unix system. 

```shell
#!/bin/sh  

myString="GeeksforGeeks"
echo "myString: $myString"

```

	$ bash -f main.sh

## 30_bash_script_examples

https://linuxhint.com/30_bash_script_examples/

## Create and Execute First BASH Program:

```shell
#!/bin/bash
echo "Hello World"
```

	$  bash First.sh

## Use of echo command:

```shell
#!/bin/bash
echo "Printing text with newline"
echo -n "Printing text without newline"
echo -e "\nRemoving \t backslash \t characters\n"
```

	$ bash echo_example.sh

‘-n’ option is used to print any text without new line
‘-e’ option is used to remove backslash characters from the output. 

## Use of comment:

```shell
#!/bin/bash

# Add two numeric value
((sum=25+35))

#Print the result
echo $sum
```

## Use of Multi-line comment:

```shell
#!/bin/bash
: '
The following script calculates
the square value of the number, 5.
'
((area=5*5))
echo $area
```

## Using While Loop:

```shell
#!/bin/bash ## == !/bin/sh
valid=true
count=1
while [ $valid ]; do
	echo $count
	
	if [ $count -eq 5 ];
		then
		break
	fi
	
	((count++))
done
```

## Using For Loop:

```shell
#!/bin/bash
for (( counter=10; counter>0; counter-- )) do ## == for (( counter=10; counter>0; counter-- )); do 
	echo -n "$counter "
done

printf "\n"
```

‘-n’ option is used to print any text without new line

## Get User Input:

‘read’ command is used to take input from user in bash.

```shell
#!/bin/bash
echo "Enter Your Name"
read name
echo "Welcome $name to LinuxHint"
```

## Using if statement:

```shell
#!/bin/bash
n=10

if [ $n -lt 10 ]; then ## == if [[ $n -lt 10 ]]; then 
	echo "It is a one digit number"
else
	echo "It is a two digit number"
fi
```

## Using if statement with AND logic:

```shell
#!/bin/bash

echo "Enter username"
read username
echo "Enter password"
read password

if [[ ( $username == "admin" && $password == "secret" ) ]]; then
	echo "valid user"
else
	echo "invalid user"
fi
```

## Using if statement with OR logic:

```shell
#!/bin/bash

echo "Enter any number"
read n

if [[ ( $n -eq 15 || $n  -eq 45 ) ]]; then
	echo "You won the game"
else
	echo "You lost the game"
fi
```

## Using else if statement:

```shell
#!/bin/bash

echo "Enter your lucky number"
read n

if [ $n -eq 101 ]; then
	echo "You got 1st prize"
elif [ $n -eq 510 ]; then
	echo "You got 2nd prize"
elif [ $n -eq 999 ]; then
	echo "You got 3rd prize"
else
	echo "Sorry, try for the next time"
fi
```

## Using Case Statement:

```shell
#!/bin/bash

echo "Enter your lucky number"
read n

case $n in
	101)
		echo echo "You got 1st prize" ;;
	510)
		echo "You got 2nd prize" ;;
	999)
		echo "You got 3rd prize" ;;
	*)
		echo "Sorry, try for the next time" ;;
esac
```

## Get Arguments from Command Line:

```shell
#!/bin/bash

echo "Total arguments : $#"
echo "1st Argument = $1"
echo "2nd argument = $2"
```

	$ bash example.sh Linux Hint

## Get arguments from command line with names:

```shell
#!/bin/bash

for arg in "$@"; do
	index=$(echo $arg | cut -f1 -d=) ##  index = $(echo $arg | cut -f1 -d=) ne marche pas
	val=$(echo $arg | cut -f2 -d=)

	case $index in
		X) x=$val;;
		Y) y=$val;;
		*)
	esac
done

((result=x+y))

echo "X+Y=$result"
```

	$ bash command_line_names X=45 Y=30

## Combine String variables:

```shell
#!/bin/bash

string1="Linux" ## not string1 = "Linux"
string2="Hint"

echo "$string1$string2"

string3=$string1+$string2
string3+=" is a good tutorial blog site"
echo $string3
```

## Get substring of String:

```shell
#!/bin/bash

Str="Learn Linux from LinuxHint"
subStr=${Str:6:5}
echo $subStr
```

## Add Two Numbers:

```shell
#!/bin/bash

echo "Enter first number"
read x
echo "Enter second number"
read y
(( sum=x+y ))
echo "The result of addition=$sum"
```

## Create Function:

```shell
#!/bin/bash

function F1() {
	echo 'I like bash programming'
}

F1
```

## Create function with Parameters:

```shell
#!/bin/bash

Rectangle_Area() {
	area=$(($1 * $2)) ## not work area= $(($1 * $2)) or area =$(($1 * $2))
	echo "Area is : $area"
}

Rectangle_Area 10 20
```

## Pass Return Value from Function:

```shell
#!/bin/bash

function greeting() {
	str="Hello, $name"
	echo $str
}

echo "Enter your name"
read name

val=$(greeting)
echo "Return value of the function is $val"
```

## Make Directory:

```shell
#!/bin/bash

echo "Enter directory name"
read newdir
`mkdir $newdir`
```

## Make directory by checking existence:

```shell
#!/bin/bash

echo "Enter directory name"
read ndir
if [ -d "$ndir" ]; then
	echo "Directory exist"
else
	mkdir $ndir ## same as `mkdir $ndir`
	echo "Directory created"
fi
```

## Read a File:

```shell
#!/bin/bash

file='ecs.yaml'
while read line; do
	echo $line
done < $file
```

## Delete a File:

```shell
#!/bin/bash

echo "Enter filename to remove"
read fn
rm -i $fn ## same as `rm -i $fn`
```

## Append to File:

```shell
#!/bin/bash

echo "Before appending the file"
cat book.txt

echo "Learning Laravel 5">> book.txt
echo "After appending the file"
cat book.txt
```

## Test if File Exist:

```shell
#!/bin/bash

filename=$1

if [ -f "$filename" ]; then
	echo "File exists"
else
	echo "File does not exist"
fi
```

	$ bash file_exist.sh book.txt

## Send Email:

```shell
#!/bin/bash

Recipient="admin@example.com"
Subject="Greeting"
Message="Welcome to our site"

`mail -s $Subject $Recipient <<< $Message`
```

## Get Parse Current Date:

```shell
#!/bin/bash

Year=`date +%Y`
Month=`date +%m`
Day=`date +%d`
Hour=`date +%H`
Minute=`date +%M`
Second=`date +%S`

echo `date`
echo "Current Date is: $Day-$Month-$Year"
echo "Current Time is: $Hour:$Minute:$Second"
```

## Wait Command:

```shell
#!/bin/bash

echo "Wait command" &
process_id=$!
wait $process_id
echo "Exited with status $?"
```

wait  is a built-in command of Linux that waits for completing any running process. 

wait command is used with a particular process id or job id. If no process id or job id is given with wait command then it will wait for all current child processes to complete and returns exit status. 

## Sleep Command:

```shell
#!/bin/bash

echo “Wait for 5 seconds”
sleep 5
echo “Completed”
```