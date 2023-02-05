---
slug: svn-utils-commands
---

SVN utils commands
==================

http://www.math-linux.com/linux-2/commande-du-jour/article/svn-comment-ignorer-des-fichiers-ou-des-repertoires-avec-subversion

## Créer un dépôt

    $ svnadmin create repository
    $ svnadmin create monprojet

## Checkout a repository

    $ svn checkout https://mail.universalmedica.com/svn/alcon.medica-source.com  # checkout by a remote SVN
    $ svn co https://mail.universalmedica.com/svn/alcon.medica-source.com  #shortcut

    $ svn checkout file:///home/apognu/svn/repository repository # checkout by a local svn SVN
    $ svn checkout file:///home/apognu/svn/repository monprojet

## Commit

    $ svn add localcopy/file.txt
    $ svn commit localcopy -m "commentaire"

## update a file

    $ sudo svn update unit/faq/faq.class.php  
    $ sudo svn up unit/faq/faq.class.php 

## Export le code source

    $ svn export bayer bayer-export

## add all no version files in subversion*

    $ cd vendor    
    $ svn status | grep -v "^.[ \t]*\..*" | grep "^?" | awk '{print $2}' | xargs svn add
    $ cd ..
    $ svn commit vendor -m "add redis bundle" 

## retourner derniere version

    $ sudo svn revert unit/faq/faq.class.php

## retourner une version spécifique

    $ sudo svn update -r 1484 unit/faq/faq.class.php

## annuler une update

    $ svn update umds/inc/bib_main.inc.php -r HEAD

    $ svn status
    $ svn add localcopy/file.txt
    $ svn commit localcopy -m "commentaire"

## Ignorer un fichier

    svn propset svn:ignore "*.o" .

## Pour ignorer le répertoire tmp

    svn propset svn:ignore tmp .

## svn cleanup — Recursively clean up the working copy**

    $ svn cleanup

## Pour ignorer tous les fichiers d’extension .o, utilisez :**

    svn propset svn:ignore "*.o" 

## our ignorer le répertoire tmp**

    svn propset svn:ignore tmp .

## Ignorer plusieurs fichiers ou répertoires**

svnignore.txt

    tmp
    obj
    bin
    *.o
    *.lib
    *.la

    svn propset svn:ignore -F svnignore.txt .    

## Change SVN repository URL

    $ svn switch --relocate https://mail.universalmedica.com/svn/medflixs2019 https://eole-dc01.universalmedica.local/svn/medflixs2019

## how to create a SVN branch ?

To create a new branch in a Subversion (SVN) repository, you can use the svn copy command. This command creates a copy of an existing directory in the repository and assigns it a new URL.

Here is an example of using the svn copy command to create a branch called my-branch

    $ svn copy https://svn.example.com/repos/project-trunk https://svn.example.com/repos/project-branches/my-branch -m "Creating branch my-branch"

In this example, the `svn copy` command is used to copy the `project-trunk` directory in the repository at `https://svn.example.com/repos` to a new directory called `my-branch` in the `project-branches` directory. The `-m` option is used to specify a commit message for the branch creation.

Once the branch is created, you can switch to it using the `svn switch` command:

    $ svn switch https://svn.example.com/repos/project-branches/my-branch

## Could i switch from one SVN repos to another ?

    $ svn switch https://svn.example.com/repos1/project-trunk https://svn.example.com/repos2/project-trunk