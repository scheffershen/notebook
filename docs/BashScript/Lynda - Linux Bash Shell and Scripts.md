Lynda - Linux Bash Shell and Scripts
====================================

## 1. Intro to Bash Scripting

1.1 man

1.2 shebang

Script File Basic

* First two characters should be #!
* Followed by path to Bash or env:
    - #!/usr/bin/env bash
    - #!/bin/bash
* This is executed via the kernel system called execve().
* Kernel checks for #! and passes the path to the original program as a command-line argument.
* The env will look for Bash in your path.

1.3 time vars

The Bash Time Command

* Bash has a builtin time command to report how much time a process consumed
    - time find / -name core

Variables in Bash

Grouping in Bash

Bash Builtins

1.4 profile bashrc

Bash Startup

* .bash_profile is read when Bash is invoked as a login shell. 
* .bashrc is executed when a new shell is started.
* PATH=$PATH:/usr/local/bin 
    - This would keep adding /usr/local/bin to the end of PATH within nested shells.

1.5 Source

1.6 echo

## 2. Variables, Control Structures, and Arithmetic

2.1 read_while_for

The Read Command

* Read a line into a variable or multiple variables
* read a b -- reads first word into a and the rest into b
* Convenient for a while loop

**While Loops**

```sh
while
    command list 1
do 
    command list
done
#loops while command list 1 succeeds
```

```sh
while 
    ((x<10))
do
    echo loop $x; date > data.$x
    ((x=x+1))
done
```

```sh
while 
    read a b
do
    echo a is $a b is $b
done <data_file
```

```sh
ls -l | while 
    read a b c d
    do
      echo owner is $c
    done
```

**For Loops**

```sh
for <var> in <list>
do
  command list
done
```

```sh
for i in dog cat elephant
do
  echo i is $i
done
```

```
* seq 1 5 # prints 1 2 3 4 5 
* for num in `seq 1 5` # loops over 1 2 3 4 5 
* generate sequences with {A..Z}, {1..10}, etc.
* for d in $(<data_file) # loops over space/newline # separated data in data_file
* for j in *.c # making a list with file globbing
* for f in $(find . -name *.c) # using a coomand to generate a list
```

2.2. func_return_exit

**Bash Functions**

Give a name to a sequence of statements that will execute within shell, not in a new process

```sh
function NAME {
    function body ...
}
```

Commonly used to organize code in a shell program

```sh
function printhello {
    echo Hello
}

printhello
# shell memorizes the function like it's a new command
```

**The Return Command**

Function return when there are no more statements or when a return statement is executed

```sh
function myfunc {
    echo starting
    return
    echo this will not executed
}
```

Functions produce results by writing output like commands do.

    havr=$(printhello)

**The Exit Command**

* exit &lt;VALUE&gt; sets the exit status, represented by $? to &lt;VALUE&gt;
* exit terminates the shell process.
* exit in a function terminates the whole shell program, not just the function.

2.4 redirect_here

**Redirections and Pipes**

Process normally have three files open:

    0 => stdin, 
    1 => stdout, 
    2 => stderr

    command > stdout-here 2> stderr-here < stdin-from-here
        + > stdout-here 
        + 2> stderr-here 
        + < stdin-from-here
 
    command &> file 
    # file gets stdout and stderr from command, file is created or overwritten

    command | command2 
    # command2's stdin comes from command's stdout

    command 2>&1 | command2 
    # gets stdout and stderr from command

    command |& command2 
    # alternative way for command2 to get command's stdout and stderr as its stdin

    command >> file 
    # appends stdout of command to end of file

    command &>> file 
    # appends stdout and stderr of command to end of file

**Here Documents: <<**

* Here documents are a way to embed input for standard input inside of a script.
* They avoid having to create a new file just to hold some input values. 

sort <<END
cherry
banana
apple
orange
END

**Open and Close File Descriptions**

    echo hi > myfile 
    # opens file descriptor hi for writing to myfile

### The Case Staement

```sh
case $ans in
    yes|YES|y|Y|y.x) echo "Will do!";;
    n*|N*) echo "Will NOT do!";;
    *) echo "Oops!";;
esac
```

### The If-Then-Else Statement

```sh
if
    grep -q important myfile
then
    echo myfile has important stuff
else
    echo myfile does not have important stuff
fi
```

### Test in Bash

- The builtin *test* is used to check various conditions and set the return code with the result
- Loops and conditions often use the result of test.
- An alternative to test is [[ ]] or (( ))

```sh
    if
        test -f afile
    fi

    if [[ -f bfile]]
    fi

    if 
        test $x -gt 5
    fi
```

###Test Operators

```sh
    [[ ex1 -eq ex2 ]] [[ ex1 -ne ex2 ]]
    [[ ex1 -lt ex2 ]] [[ ex1 -gt ex2 ]]
    [[ ex1 -le ex2 ]] [[ ex1 -ge ex2 ]]
```

```sh
    (( ex1 == ex2 )) (( ex1 != ex2 ))
    (( ex1 < ex2 )) (( ex1 > ex2 ))
    (( ex1 <= ex2 )) (( ex1 >= ex2 ))
    (( ex1 && ex2 )) (( ex1 || ex2 ))
```

More Tests

    test -d X
    # success if X is a directory

    test -f X
    # success if X is a regular file

    test -s X
    # success if X exists and not empty

    test -x X
    # success if you have x permission on X

    test -w X
    # success if you have w permission on X

    test -r X
    # success if you have r permission on X

```
#!/bin/bash
if
   test -x /bin/ls # test /bin/ls is executable
then
   if
   [ ! -w /etc/hosts ] # if /etc/hosts is not writable
   then
      if 
      echo about to look for foobar
      grep -q foobar /etc/passwd
      then
         echo foobar found in /etc/passwd
      else
         echo foobar not found
      fi
   fi
else
   echo Oh no, /bin/ls not executable
fi
```



