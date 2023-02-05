jekyll
======

## What is jekyll ?

Jekyll 是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过一个转换器（如 Markdown）和我们的 Liquid 渲染器转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。

## jekyll 安装

以下是一个获取最简单 Jekyll 模板并生成静态页面并运行的例子。

    $ gem install jekyll

如果使用的标记语言是Markdown，则需要另外安装

    $ gem install rdiscount

如果使用的标记语言是Textile,则需要另外安装

    $ gem install RedCloth

OR

    $ gem install jekyll rdiscount RedCloth

另外，如需安装和github pages相同版本的jekyll，那么不需要安装上面这几个，直接用下面命令安装

    $ gem install github-pages

    $ jekyll new myblog
    $ cd myblog
    $ jekyll serve
    # => Now browse to http://localhost:4000

如果你希望把 jekyll 安装到当前目录，你可以运行 jekyll new . 来代替。如果当前目录非空，你还需要增添 --force 参数，所以命令应为

    $ jekyll new . --force

## Jekyll installation requirements

- Ruby（including development headers, Jekyll 2 需要 v1.9.3 及以上版本，Jekyll 3 需要 v2 及以上版本）
- RubyGems
- Linux, Un ix, or Mac OS X
- NodeJS, 或其他 JavaScript 运行环境（Jekyll 2 或更早版本需要 CoffeeScript 支持）。
- Python 2.7（Jekyll 2 或更早版本）

## Basic usages

    $ jekyll build
    # => 当前文件夹中的内容将会生成到 ./_site 文件夹中。
    
    $ jekyll build --destination <destination>
    # => 当前文件夹中的内容将会生成到目标文件夹<destination>中。
    
    $ jekyll build --source <source> --destination <destination>
    # => 指定源文件夹<source>中的内容将会生成到目标文件夹<destination>中。
    
    $ jekyll build --watch
    # => 当前文件夹中的内容将会生成到 ./_site 文件夹中，
    #    查看改变，并且自动再生成。

    $ jekyll serve
    # => 一个开发服务器将会运行在 http://localhost:4000/
    # Auto-regeneration（自动再生成文件）: 开启。使用 `--no-watch` 来关闭。
    
    $ jekyll serve --detach
    # => 功能和`jekyll serve`命令相同，但是会脱离终端在后台运行。
    #    如果你想关闭服务器，可以使用`kill -9 1234`命令，"1234" 是进程号（PID）。
    #    如果你找不到进程号，那么就用`ps aux | grep jekyll`命令来查看，然后关闭服务器。[更多](http://unixhelp.ed.ac.uk/shell/jobz5.html).

## 目录结构

```
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _site
├── .jekyll-metadata
└── index.html
```

_config.yml: 保存配置数据。很多配置选项都可以直接在命令行中进行设置，但是如果你把那些配置写在这儿，你就不用非要去记住那些命令了。

_drafts: drafts（草稿）是未发布的文章。这些文件的格式中都没有 title.MARKUP 数据。学习如何 使用草稿.

_includes: 你可以加载这些包含部分到你的布局或者文章中以方便重用。可以用这个标签 {% include file.ext %} 来把文件 _includes/file.ext 包含进来。

_layouts: layouts（布局）是包裹在文章外部的模板。布局可以在 YAML 头信息中根据不同文章进行选择。 这将在下一个部分进行介绍。标签 {{ content }} 可以将content插入页面中。

_posts: 这里放的就是你的文章了。文件格式很重要，必须要符合: YEAR-MONTH-DAY-title.MARKUP。 永久链接 可以在文章中自己定制，但是数据和标记语言都是根据文件名来确定的。

_data: 格式化好的网站数据应放在这里。jekyll 的引擎会自动加载在该目录下所有的 yaml 文件（后缀是 .yml, .yaml, .json 或者 .csv ）。这些文件可以经由 ｀site.data｀ 访问。如果有一个 members.yml 文件在该目录下，你就可以通过 site.data.members 获取该文件的内容。

_site: 一旦 Jekyll 完成转换，就会将生成的页面放在这里（默认）。最好将这个目录放进你的 .gitignore 文件中。

.jekyll-metadata: 该文件帮助 Jekyll 跟踪哪些文件从上次建立站点开始到现在没有被修改，哪些文件需要在下一次站点建立时重新生成。该文件不会被包含在生成的站点中。将它加入到你的 .gitignore 文件可能是一个好注意。

index.html and other HTML, Markdown, Textile files: 如果这些文件中包含 YAML 头信息 部分，Jekyll 就会自动将它们进行转换。当然，其他的如 .html, .markdown, .md, 或者 .textile 等在你的站点根目录下或者不是以上提到的目录中的文件也会被转换。

Other Files/Folders: 其他一些未被提及的目录和文件如 css 还有 images 文件夹， favicon.ico 等文件都将被完全拷贝到生成的 site 中。这里有一些使用 Jekyll 的站点，如果你感兴趣就来看看吧。

## Configuration

```yml
# _config.yml
#Update all the sections by editing the data.yml file inside _data folder.

# Site Settings
title: My Resume
url: 'http://webjeda.com'

#change it according to your repository name
# disabling since we are using a custom domain
#baseurl: '/online-cv' 

description: A beautiful Jekyll theme for creating resume
# Style will be applied only after restarting the build or serve. Just choose one of the options.
theme_skin: blue # blue turquoise green berry orange ceramic
chrome_mobile_color: #use hex colors (ex:#1976d2) or leave empty if you don't want a color for chrome mobile searchbar

# Tracker
analytics: UA-83979019-1

# Sass/SCSS
sass:
  sass_dir: _sass
  style: compressed # http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style

# Build settings
compress-site: yes

encoding: "utf-8"
compress_html: # - http://jch.penibelst.de/
  clippings: all
  ignore:
    envs: development

# Development Settings
port: 4000
host: 0.0.0.0
safe: false
```

## 默认配置

```yml
# 目录结构
source:      .
destination: ./_site
plugins:     ./_plugins
layouts:     ./_layouts
data_source: ./_data
collections: null

# 阅读处理
safe:         false
include:      [".htaccess"]
exclude:      []
keep_files:   [".git", ".svn"]
encoding:     "utf-8"
markdown_ext: "markdown,mkdown,mkdn,mkd,md"

# 内容过滤
show_drafts: null
limit_posts: 0
future:      true
unpublished: false

# 插件
whitelist: []
gems:      []

# 转换
markdown:    kramdown
highlighter: rouge
lsi:         false
excerpt_separator: "\n\n"
incremental: false

# 服务器选项
detach:  false
port:    4000
host:    127.0.0.1
baseurl: "" # does not include hostname

# 输出
permalink:     date
paginate_path: /page:num
timezone:      nullCreating and Hosting a Personal Site on GitHub

quiet:    false
defaults: []

# Markdown 处理器
rdiscount:
  extensions: []

redcarpet:
  extensions: []

kramdown:
  auto_ids:       true
  footnote_nr:    1
  entity_output:  as_char
  toc_levels:     1..6
  smart_quotes:   lsquo,rsquo,ldquo,rdquo
  enable_coderay: false

  coderay:
    coderay_wrap:              div
    coderay_line_numbers:      inline
    coderay_line_number_start: 1
    coderay_tab_width:         4
    coderay_bold_every:        10
    coderay_css:               style
```