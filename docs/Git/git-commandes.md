Git-Commandes
=============

## branch

    // To display default remote branches
    $ git branch -vv
    
    // create a branch
    $ git branch new_feature 
    $ git checkout -b <new_branch> #-b: branch
    $ git switch -c <new_branch> #-c: create
     
    // swtich to a branch
    $ git checkout new_feature 
    $ git switch new_feature
    
    // Git merge master into feature branch
    $ git checkout new_feature
    $ git rebase master

    // Push a new local branch to a remote Git repository
    $ git checkout new_feature

    // How do I push a new local branch to a remote Git repository and track it too    
    $ git push -u origin <branch>

    // fetch remote branch
    $ git checkout --track origin/new_feature

    // vous synchronise (fetch) toutes vos branches distantes depuis les serveurs (informations)
    $ git fetch --all; git branch -vv

    // listing remote branches
    $ git remote -a
    
    // Create a remote branch
    $ git branch -r #-r: remote
    $ git branch -a #-a: all
    
    // change a remote repository
    $ git remote -v #-v: verbose
    $ git remote rm origin
    $ git remote add origin <url>
    
    // Delete branches
    $ git branch -d <branch_name>
    
    // Rename branches
    $ git branch -m <old_branch> <new_branch>

## upstream

- 使用 git upstream 从其他远程仓库同步分支
- 需要从其他仓库合并某个分支到现有仓库中
- 之前实现这个需求我用了一个很智障的做法：把这个仓库需要的分支 copy 一份到本地仓库的临时分支上，然后进行 merge。
- 其实只要把想要同步的远程仓库设置为本地仓库的 upstream，就可以很方便地进行同步操作了。
- 所以我们可以通过设置 upstream 来获取远程 Repo 的最新代码。

- 添加: $ git remote add upstream https://github.com/octocat/Spoon-Knife.git
- 查看: $ git remote -v
- 取消: $ git branch --unset-upstream
- 拉取
    //覆盖本地的 master。
    $ git fetch upstream
    $ git checkout master
    $ git rebase upstream/master
    // If your branch conflicts with the master branch, you will need to rebase and re-push it with the following commands:
    $ git remote add upstream git@github.com:orga/repo-name.git
    $ git pull --rebase upstream master
    $ git push -f origin feature-or-bug-fix-description

## stash

    // Delete stashed changes
    $ git status
    $ git stash save "..."
    $ git stash list
    $ git stash drop stash@{0}
    $ git stash clear
    $ git stash list
    
    // Retrieve stashed changes
    $ git stash list
    $ git stash show stash@{0}
    $ git stash show -p stash@{0}
    $ git stash pop stash@{0}
    $ git stash pop
    $ git stash apply
    
    // View stashed changes
    $ git stash list
    $ git stash show stash@{0}
    $ git stash show -p stash@{0}
    
    // Save changes in the stash
    $ git stash save "..."
    $ git help stash

## log

    $ git log --graph --all --oneline --decorate
    $ git log --oneline
    $ git log cn_feature --oneline -5

## reflog

## reset

    //Restore the full working tree (not a single folder), but lose all uncommitted changes
    $git reset --hard HEAD

    $ git reset --hard HEAD^^  //HEAD^^ désigne last commit
    
    // Soft reset, Moves HEAD pointer, Does not change staging index, Does not change working directory
    // return to an old state and leave code changes staged
    $ git reset --soft HEAD^  //HEAD^ désigne last commit and keep the modification
    $ git reset --soft HEAD~1 //you will remove the last commit from the current branch, but the file changes will stay in your working tree

    $ git reset --soft HEAD^^ //HEAD^^ désigne last commit 
    $ git reset --soft 2baef26 

    // Restore the full working tree from a distant commit
    $ git reset --hard <revision> 

## merge or rebase

    $ git checkout new_feature 
    $ git switch new_feature
    $ git merge master
    $ git rebase master

    $ git merge AI-002-057 --squash
    
## rebase

    $  git rebase -i HEAD~3 //squash 3 commits in a single one = 压缩 3 个提交

-i: To begin an interactive rebasing session

the following command begins an interactive rebase of only the last 3 commits.
    $ git checkout feature
    $ git rebase -i HEAD~3


## git cherry-pick

```
# Starting branch state for cherry-pick 
# Right now we're checked out on Commit 3 of Branch 1 
 
Commit1 - Commit2 - *Commit3              Branch_1 
             \ 
           Commit4 - Commit5 - Commit6    Branch_2 
 
$ git cherry-pick Commit5 
 
# Ending branch state after cherry-pick 
# Right now we're checked out on CopyOfCmt5 of Branch 1 
 
Commit1 - Commit2 - Commit3 - *CopyOfCmt5 Branch_1 
             \ 
           Commit4 - Commit5 - Commit6    Branch_2 
 
```

```
################################################## 
Squash 
################################################## 
 
# Starting branch state for squashing 
# Right now we're checked out on Commit 3 of Branch 1 
 
Commit1 - Commit2 - *Commit3              Branch_1 
             \ 
           Commit4 - Commit5 - Commit6    Branch_2 
 
$ git merge Branch_2 --squash 
 
Commit1 - Commit2 - *Commit3              Branch_1 
           \                     ^^    
            \        All that stuff below         
             \       goes up here            
          [Commit4 - Commit5 - Commit6]   Branch_2 
 
# Ending branch state after merge with squash 
# Right now we're checked out on 456Squash 
 
Commit1 - Commit2 - Commit3 - *456Squash  Branch_1 
             \ 
           Commit4 - Commit5 - Commit6    Branch_2 
```

## diff

    // diff commit 
    $ git diff --name-only <commit_1>..<commit_2>

    // diff branch
    $ git diff master..cn_feature
    $ git diff <branch_1>..<branch_2>

## git-update-index

La commande git update-index permet de manipuler l’index d’un dépôt Git.
Elle est particulièrement utile pour supprimer des fichiers de l’index afin qu’ils ne soient plus suivis par Git.

    $ git-update-index –skip-worktree app/config/mds/client/parameters.yml 

--skip-worktree: 
    + Cette option permet de demander à Git de prétendre que la version du fichier dans l’espace de travail est à jour afin de lire à la place le contenu de la version de l’index.
    + C’est généralement cette option que l’on souhaite utiliser, lorsque par exemple on modifie manuellement un fichier de configuration par défaut et que l’on ne souhaite pas suivre ces modifications.
    + L’option `--no-skip-worktree permet` de suivre à nouveau les modifications.
--assume-unchanged: 
    + Cette option paraît se rapprocher de la précédente. En effet une fois activée sur un fichier les modifications sur ce dernier ne seront plus suivis par Git.
    + En réalité la finalité de cette option est différente. Elle indique à Git que le développeur promet que le fichier ne sera pas odifié et que Git n’a pas besoin de vérifier son contenu. Cela est utile sur les très gros projets où le système de fichiers peut être lent afin d’éviter des opérations de lecture sur le disque.
    + Là aussi l’option inverse --no-assume-unchanged permet d’indiquer à Git de suivre à nouveau les modifications sur le fichier.

## add

    $ git add -A

## commit

    $ git commit -m "done something"

## push

    $ git checkout master
    $ git add .
    $ git commit -m "Eden added"
    $ git push origin master

    $ git push origin branch
    // With a new branch created, the –set-upstream switch must be run the first time a push is performed. 
    // This step tells the new branch which remote repository to use every time it synchronizes its commit history.
    // github@branch/c/remote/push (new-branch)
    $ git checkout -b new-branch
    $ git push –-set-upstream origin new-branch

    $ git add .
    $ git commit -m "Eden added"
    $ git push origin

## pull

    $ git checkout master
    $ git pull origin master 
    
    $ git switch -c <new_branch>

    // how-to-pull-a-branch-from-origin
    $ git checkout -b branchname == git switch -c branchname
    $ git pull origin branchname == git fetch origin branchname && git merge branchname

## status

    // show some modifications
    $ git status

## git fetch vs git pull

- git fetch is the command that tells your local git to retrieve the latest meta-data info from the original

- Git fetch is a safer alternative because it pulls in all the commits from your remote but doesn't make any changes to your local file
- Git fetch 是一种更安全的选择，因为它会从远程提取所有提交，但不会对本地文件进行任何更改。 Git fetch 命令查看远程的所有更改，而无需应用它们。
- Git pull 是一个更高级的操作，将引入更改并立即将它们应用到您当前签出的分支。

## Upstream and Downstream

The term upstream and downstream refers to the repository. Generally, `upstream` is from where you clone the repository, and `downstream` is any project that integrates your work with other works.

the `downstream repo` will be pulled from the `upstream repository`. Data will flow downstream naturally.

The git `set-upstream` allows you to set the default remote branch for your current local branch.
    
    $ git branch -vv 
    // set the master branch as the default remote branch
    $ git push --set-upstream origin master == git push -u <remote> <branch>

    // To push the changes and set the remote branch as default, run the below command:
    $ git push --set-upstream origin master  

## git push `--set-upstream` vs git branch `--set-upstream-to`

- The git branch command has `--set-upstream-to`
    + $ git branch --set-upstream-to origin/master // to set the current branch's upstream to be origin's master.
- The git push command has `--set-upstream`

## git fetch --all vs git pull --all

- git fetch is the command that tells your local git to retrieve the latest meta-data info from the original
- git pull on the other hand does that AND brings (copy) those changes from the remote rep //sitory
    + $ git pull --all //Fetch all remotes.

## Resources

- https://www.javatpoint.com/git-upstream-and-downstream