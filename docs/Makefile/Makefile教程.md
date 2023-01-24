Makefile教程
===

http://c.biancheng.net/view/7093.html

Makefile 文件描述了 Linux 系统下 C/C++ 工程的编译规则，它用来自动化编译 C/C++ 项目。一旦写编写好 Makefile 文件，只需要一个 make 命令，整个工程就开始自动编译，不再需要手动执行 GCC 命令。

## Makefile文件是什么？

如果你想要在 Linux(Unix) 下做开发的话，不了解 Makefile 是一件非常失败的事情，甚至说你就成为不了一个合格的 Linux 开发工程师。如果你想在 Linux(Unix) 环境下做开发的话，Makefile 是必须掌握的一项技能。

Makefile 可以简单的认为是一个工程文件的编译规则，描述了整个工程的编译和链接等规则。

## Makefile文件中包含哪些规则？

它的规则主要是两个部分组成，分别是依赖的关系和执行的命令，其结构如下所示：

    targets : prerequisites
        command    

或者是

    targets : prerequisites; command
        command

相关说明如下：

- targets：规则的目标，可以是 Object File（一般称它为中间文件），也可以是可执行文件，还可以是一个标签；
- prerequisites：是我们的依赖文件，要生成 targets 需要的文件或者是目标。可以是多个，也可以是没有；
- command：make 需要执行的命令（任意的 shell 命令）。可以有多条命令，每一条命令占一行。

通过下面的例子来具体使用一下 Makefile 的规则，Makefile文件中添代码如下：

    test: test.c
        gcc -o test test.c

## Makefile的工作流程

### 清除工作目录中的过程文件

我们在使用的时候会产生中间文件会让整个文件看起来很乱，所以在编写 Makefile 文件的时候会在末尾加上这样的规则语句：

    .PHONY: clean
    clean:
        rm -rf *.o test

## Makefile通配符的使用

*   匹配0个或者是任意个字符
？   匹配任意一个字符
[]  我们可以指定匹配的字符放在 "[]" 中

### 变量的定义

    OBJ=main.o test.o test1.o test2.o
    test:$(OBJ)
          gcc -o test $(OBJ)

### 变量的基本赋值

知道了如何定义，下面我们来说一下 Makefile 的变量的四种基本赋值方式：
 简单赋值 ( := ) 编程语言中常规理解的赋值方式，只对当前语句的变量有效。
 递归赋值 ( = ) 赋值语句可能影响多个变量，所有目标变量相关的其他变量都受影响。
 条件赋值 ( ?= ) 如果变量未定义，则使用符号中的值定义变量。如果该变量已经赋值，则该赋值语句无效。
 追加赋值 ( += ) 原变量用空格隔开的方式追加一个新值。

简单赋值

    x:=foo
    y:=$(x)b
    x:=new
    test：
          @echo "y=>$(y)"
          @echo "x=>$(x)"

在 shell 命令行执行*make test*我们会看到:

    y=>foob
    x=>new

递归赋值

    x=foo
    y=$(x)b
    x=new
    test：
          @echo "y=>$(y)"
          @echo "x=>$(x)"

在 shell 命令行执行*make test*我们会看到:

    y=>newb
    x=>new

条件赋值

    x:=foo
    y:=$(x)b
    x?=new
    test：
          @echo "y=>$(y)"
          @echo "x=>$(x)"

在 shell 命令行执行*make test*我们会看到:

    y=>foob
    x=>foo

追加赋值

    x:=foo
    y:=$(x)b
    x+=$(y)
    test：
          @echo "y=>$(y)"
          @echo "x=>$(x)"

在 shell 命令行执行*make test*我们会看到:

    y=>foob
    x=>foo foob

## Makefile自动化变量

关于自动化变量可以理解为由 Makefile 自动产生的变量。

$@  表示规则的目标文件名。
$%  当目标文件是一个静态库文件时，代表静态库的一个成员名。
$<  规则的第一个依赖的文件名
$?  所有比目标文件更新的依赖文件列表，空格分隔。
$^  代表的是所有依赖文件列表，使用空格分隔
$+  类似“$^”，但是它保留了依赖文件中重复出现的文件。
$*  在模式规则和静态模式规则中，代表“茎”

## Makefile目标文件搜索（VPATH和vpath）

## Makefile ifeq、ifneq、ifdef和ifndef（条件判断）

## Makefile伪目标

所谓的伪目标可以这样来理解，它并不会创建目标文件，只是想去执行这个目标下面的命令。

如果当前目录下存在文件名为  clean 的文件时情况就会不一样了，当我们在 shell 中执行命令 make clean，由于这个规则没有依赖文件，所以目标被认为是最新的而不去执行规则所定义的命令。因此命令 rm 将不会被执行。为了解决这个问题，删除 clean 文件或者是在 Makefile 中将目标 clean 声明为伪目标。将一个目标声明称伪目标的方法是将它作为特殊的目标.PHONY的依赖，如下：

这样 clean 就被声明成一个伪目标，无论当前目录下是否存在 clean 这个文件，当我们执行 make clean 后 rm 都会被执行。

    .PHONY:clean
    clean:
        rm -rf *.o test

伪目标实现多文件编辑

如果在一个文件里想要同时生成多个可执行文件，我们可以借助伪目标来实现。使用方式如下：

    .PHONY:all
    all:test1 test2 test3
    test1:test1.o
        gcc -o $@ $^
    test2:test2.o
        gcc -o $@ $^
    test3:test3.o
        gcc -o $@ $^

## Makefile常用文件名操作函数

1. 取目录函数，函数使用格式如下：

    $(dir &lt;names&gt;)

函数说明：函数的功能是从文件名序列 names 中取出目录部分，如果没有 names 中没有 "/" ，取出的值为 "./"; 实例：

    OBJ=$(dir src/foo.c hacks)
    all:
        @echo $(OBJ)

执行 make 命令，我们可以得到的值是“src/ ./”。提取文件 foo.c 的路径是 "/src" 和文件 hacks 的路径 "./"。

2. 取文件函数，函数使用格式如下：

    $(notdir &lt;names&gt;)

函数说明：函数的功能是从文件名序列 names 中取出非目录的部分。非目录的部分是最后一个反斜杠之后的部分。返回值为文件非目录的部分。实例：

    OBJ=$(notdir src/foo.c hacks)
    all:
        @echo $(OBJ)

执行 make 命令，我们可以得到的值是“foo.c hacks”。

3. 取后缀名函数，函数使用格式如下：

    $(suffix &lt;names&gt;)

函数说明：函数的功能是从文件名序列中 names 中取出各个文件的后缀名。返回值为文件名序列 names 中的后缀序列，如果文件没有后缀名，则返回空字符串。实例：

    OBJ=$(suffix src/foo.c hacks)
    all:
        @echo $(OBJ)

执行 make 命令，我们得到的值是“.c ”。文件 "hacks" 没有后缀名，所以返回的是空值。

## Makefile中的其它常用函数

    $(foreach <var>,<list>,<text>)

函数的功能是：把参数&lt;list&gt;中的单词逐一取出放到参数&lt;var&gt;所指定的变量中，然后再执行&lt;text&gt;所包含的表达式

    name:=a b c d
    files:=$(foreach n,$(names),$(n).o)
    all:
        @echo $(files)

执行 make 命令，我们得到的值是“a.o b.o c.o d.o”。

