---
slug: Can-I-use-git-and-svn-at-the-same-time
---

git svn - Can I use git and svn at the same time? no need interaction between git and svn
=========================================================================================

https://stackoverflow.com/questions/12742263/git-svn-can-i-use-git-and-svn-at-the-same-time-no-need-interaction-between-gi

Oct 5, 2012 at 8:19

## Question

```
I am doing a development project.

The company is using SVN, so for main commit and checkout should be done via SVN.

However, I don't like SVN and am a git user. Since only when I think my code is good I will commit to the company SVN, I would like to use git for my own history keeper.

I don't need to use git to do SVN thing, nor vice versa.

Can I version control my same code using SVN and git at the same time? No interaction between them.
```

## Answer

```
Just ignore the .git folder for SVN and the .svn folder for Git and you should be fine. 
```

You can clone a subversion repository to your machine using `git svn clone <SVN repo URL>`. The code will be available as a git repository. You can do your work there and make local commits as you please. There is a command line option to get a "shallow" checkout rather than the entire repository which is often useful. I forget what it is.

Anytime, you want to run the equivalent of `svn update`, do a `git svn rebase`. This will fetch new commits which were checked into SVN after you last synchronised and then rebase your changes onto the new tip.

When you're ready with your commits, do a `git svn dcommit`. This will send all your new commits to svn one by one. You can also squash your local commits into a single one and send it by first doing a local rebase and then an svn dcommit. This should be done on the initial branch (usually master).

The very fact that you're checking out from subversion and then working locally in git means that there is "interaction" between them so your last statement is not valid.

## Using Git and Subversion Together

https://implementsblog.com/2015/08/18/using-git-and-subversion-together/


