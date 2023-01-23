Git workflow ( Feature-branch-workflow)
=======================================

https://github.com/wearehive/project-guidelines
Date: 01/2017

## For a new project, initialize a git repository in the project directory. For subsequent features/changes this step should be ignored.

    cd <project directory>
    git init

## Checkout a new feature/bug-fix branch.

    git checkout -b <branchname>

## Make Changes.

    git add
    git commit -a

git commit -a will start an editor which lets you separate the subject from the body. 

## Sync with remote to get changes you’ve missed.

    git checkout develop
    git pull

This will give you a chance to deal with conflicts on your machine while rebasing (later) rather than creating a Pull Request that contains conflicts.

## Update your feature branch with latest changes from develop by interactive rebase.

    git checkout <branchname>
    git rebase -i --autosquash develop

You can use --autosquash to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch    

## If you don’t have conflicts, skip this step. If you have conflicts, resolve them and continue rebase.

    git add <file1> <file2> ...
    git rebase --continue

## Push your branch. Rebase will change history, so you'll have to use -f to force changes into the remote branch. If someone else is working on your branch, use the less destructive --force-with-lease.

    git push -f

When you do a rebase, you are changing the history on your feature branch. As a result, Git will reject normal git push. Instead, you'll need to use the -f or --force flag

## Make a Pull Request.

## Pull request will be accepted, merged and close by a reviewer.

## Remove your local feature branch if you're done.

    git branch -d <branchname>

to remove all branches which are no longer on remote

    git fetch -p && for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done

https://github.com/wearehive/project-guidelines