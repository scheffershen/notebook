"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={},o="Git-Commandes",s={unversionedId:"Git/git-commandes",id:"Git/git-commandes",title:"Git-Commandes",description:"branch",source:"@site/docs/Git/git-commandes.md",sourceDirName:"Git",slug:"/Git/git-commandes",permalink:"/notebook/docs/Git/git-commandes",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Git/git-commandes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git-changlog",permalink:"/notebook/docs/Git/git-changlog"},next:{title:"GitHub",permalink:"/notebook/docs/category/github"}},l={},m=[{value:"branch",id:"branch",level:2},{value:"upstream",id:"upstream",level:2},{value:"stash",id:"stash",level:2},{value:"log",id:"log",level:2},{value:"reflog",id:"reflog",level:2},{value:"reset",id:"reset",level:2},{value:"merge or rebase",id:"merge-or-rebase",level:2},{value:"rebase",id:"rebase",level:2},{value:"git cherry-pick",id:"git-cherry-pick",level:2},{value:"diff",id:"diff",level:2},{value:"git-update-index",id:"git-update-index",level:2},{value:"add",id:"add",level:2},{value:"commit",id:"commit",level:2},{value:"push",id:"push",level:2},{value:"pull",id:"pull",level:2},{value:"status",id:"status",level:2},{value:"git fetch vs git pull",id:"git-fetch-vs-git-pull",level:2},{value:"Upstream and Downstream",id:"upstream-and-downstream",level:2},{value:"git push <code>--set-upstream</code> vs git branch <code>--set-upstream-to</code>",id:"git-push---set-upstream-vs-git-branch---set-upstream-to",level:2},{value:"git fetch --all vs git pull --all",id:"git-fetch---all-vs-git-pull---all",level:2},{value:"Resources",id:"resources",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-commandes"},"Git-Commandes"),(0,a.kt)("h2",{id:"branch"},"branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// To display default remote branches\n$ git branch -vv\n\n// create a branch\n$ git branch new_feature \n$ git checkout -b <new_branch> #-b: branch\n$ git switch -c <new_branch> #-c: create\n \n// swtich to a branch\n$ git checkout new_feature \n$ git switch new_feature\n\n// Git merge master into feature branch\n$ git checkout new_feature\n$ git rebase master\n\n// Push a new local branch to a remote Git repository\n$ git checkout new_feature\n\n// How do I push a new local branch to a remote Git repository and track it too    \n$ git push -u origin <branch>\n\n// fetch remote branch\n$ git checkout --track origin/new_feature\n\n// vous synchronise (fetch) toutes vos branches distantes depuis les serveurs (informations)\n$ git fetch --all; git branch -vv\n\n// listing remote branches\n$ git remote -a\n\n// Create a remote branch\n$ git branch -r #-r: remote\n$ git branch -a #-a: all\n\n// change a remote repository\n$ git remote -v #-v: verbose\n$ git remote rm origin\n$ git remote add origin <url>\n\n// Delete branches\n$ git branch -d <branch_name>\n\n// Rename branches\n$ git branch -m <old_branch> <new_branch>\n")),(0,a.kt)("h2",{id:"upstream"},"upstream"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 git upstream \u4ece\u5176\u4ed6\u8fdc\u7a0b\u4ed3\u5e93\u540c\u6b65\u5206\u652f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9700\u8981\u4ece\u5176\u4ed6\u4ed3\u5e93\u5408\u5e76\u67d0\u4e2a\u5206\u652f\u5230\u73b0\u6709\u4ed3\u5e93\u4e2d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e4b\u524d\u5b9e\u73b0\u8fd9\u4e2a\u9700\u6c42\u6211\u7528\u4e86\u4e00\u4e2a\u5f88\u667a\u969c\u7684\u505a\u6cd5\uff1a\u628a\u8fd9\u4e2a\u4ed3\u5e93\u9700\u8981\u7684\u5206\u652f copy \u4e00\u4efd\u5230\u672c\u5730\u4ed3\u5e93\u7684\u4e34\u65f6\u5206\u652f\u4e0a\uff0c\u7136\u540e\u8fdb\u884c merge\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5176\u5b9e\u53ea\u8981\u628a\u60f3\u8981\u540c\u6b65\u7684\u8fdc\u7a0b\u4ed3\u5e93\u8bbe\u7f6e\u4e3a\u672c\u5730\u4ed3\u5e93\u7684 upstream\uff0c\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u8fdb\u884c\u540c\u6b65\u64cd\u4f5c\u4e86\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e upstream \u6765\u83b7\u53d6\u8fdc\u7a0b Repo \u7684\u6700\u65b0\u4ee3\u7801\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0: $ git remote add upstream ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/octocat/Spoon-Knife.git"},"https://github.com/octocat/Spoon-Knife.git"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b: $ git remote -v")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d6\u6d88: $ git branch --unset-upstream")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u62c9\u53d6\n//\u8986\u76d6\u672c\u5730\u7684 master\u3002\n$ git fetch upstream\n$ git checkout master\n$ git rebase upstream/master\n// If your branch conflicts with the master branch, you will need to rebase and re-push it with the following commands:\n$ git remote add upstream ",(0,a.kt)("a",{parentName:"p",href:"mailto:git@github.com"},"git@github.com"),":orga/repo-name.git\n$ git pull --rebase upstream master\n$ git push -f origin feature-or-bug-fix-description"))),(0,a.kt)("h2",{id:"stash"},"stash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Delete stashed changes\n$ git status\n$ git stash save "..."\n$ git stash list\n$ git stash drop stash@{0}\n$ git stash clear\n$ git stash list\n\n// Retrieve stashed changes\n$ git stash list\n$ git stash show stash@{0}\n$ git stash show -p stash@{0}\n$ git stash pop stash@{0}\n$ git stash pop\n$ git stash apply\n\n// View stashed changes\n$ git stash list\n$ git stash show stash@{0}\n$ git stash show -p stash@{0}\n\n// Save changes in the stash\n$ git stash save "..."\n$ git help stash\n')),(0,a.kt)("h2",{id:"log"},"log"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git log --graph --all --oneline --decorate\n$ git log --oneline\n$ git log cn_feature --oneline -5\n")),(0,a.kt)("h2",{id:"reflog"},"reflog"),(0,a.kt)("h2",{id:"reset"},"reset"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//Restore the full working tree (not a single folder), but lose all uncommitted changes\n$git reset --hard HEAD\n\n$ git reset --hard HEAD^^  //HEAD^^ d\xe9signe last commit\n\n// Soft reset, Moves HEAD pointer, Does not change staging index, Does not change working directory\n// return to an old state and leave code changes staged\n$ git reset --soft HEAD^  //HEAD^ d\xe9signe last commit and keep the modification\n$ git reset --soft HEAD~1 //you will remove the last commit from the current branch, but the file changes will stay in your working tree\n\n$ git reset --soft HEAD^^ //HEAD^^ d\xe9signe last commit \n$ git reset --soft 2baef26 \n\n// Restore the full working tree from a distant commit\n$ git reset --hard <revision> \n")),(0,a.kt)("h2",{id:"merge-or-rebase"},"merge or rebase"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout new_feature \n$ git switch new_feature\n$ git merge master\n$ git rebase master\n\n$ git merge AI-002-057 --squash\n")),(0,a.kt)("h2",{id:"rebase"},"rebase"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$  git rebase -i HEAD~3 //squash 3 commits in a single one = \u538b\u7f29 3 \u4e2a\u63d0\u4ea4\n")),(0,a.kt)("p",null,"-i: To begin an interactive rebasing session"),(0,a.kt)("p",null,"the following command begins an interactive rebase of only the last 3 commits.\n$ git checkout feature\n$ git rebase -i HEAD~3"),(0,a.kt)("h2",{id:"git-cherry-pick"},"git cherry-pick"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Starting branch state for cherry-pick \n# Right now we're checked out on Commit 3 of Branch 1 \n \nCommit1 - Commit2 - *Commit3              Branch_1 \n             \\ \n           Commit4 - Commit5 - Commit6    Branch_2 \n \n$ git cherry-pick Commit5 \n \n# Ending branch state after cherry-pick \n# Right now we're checked out on CopyOfCmt5 of Branch 1 \n \nCommit1 - Commit2 - Commit3 - *CopyOfCmt5 Branch_1 \n             \\ \n           Commit4 - Commit5 - Commit6    Branch_2 \n \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"################################################## \nSquash \n################################################## \n \n# Starting branch state for squashing \n# Right now we're checked out on Commit 3 of Branch 1 \n \nCommit1 - Commit2 - *Commit3              Branch_1 \n             \\ \n           Commit4 - Commit5 - Commit6    Branch_2 \n \n$ git merge Branch_2 --squash \n \nCommit1 - Commit2 - *Commit3              Branch_1 \n           \\                     ^^    \n            \\        All that stuff below         \n             \\       goes up here            \n          [Commit4 - Commit5 - Commit6]   Branch_2 \n \n# Ending branch state after merge with squash \n# Right now we're checked out on 456Squash \n \nCommit1 - Commit2 - Commit3 - *456Squash  Branch_1 \n             \\ \n           Commit4 - Commit5 - Commit6    Branch_2 \n")),(0,a.kt)("h2",{id:"diff"},"diff"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// diff commit \n$ git diff --name-only <commit_1>..<commit_2>\n\n// diff branch\n$ git diff master..cn_feature\n$ git diff <branch_1>..<branch_2>\n")),(0,a.kt)("h2",{id:"git-update-index"},"git-update-index"),(0,a.kt)("p",null,"La commande git update-index permet de manipuler l\u2019index d\u2019un d\xe9p\xf4t Git.\nElle est particuli\xe8rement utile pour supprimer des fichiers de l\u2019index afin qu\u2019ils ne soient plus suivis par Git."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git-update-index \u2013skip-worktree app/config/mds/client/parameters.yml \n")),(0,a.kt)("p",null,"--skip-worktree: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ Cette option permet de demander \xe0 Git de pr\xe9tendre que la version du fichier dans l\u2019espace de travail est \xe0 jour afin de lire \xe0 la place le contenu de la version de l\u2019index.\n+ C\u2019est g\xe9n\xe9ralement cette option que l\u2019on souhaite utiliser, lorsque par exemple on modifie manuellement un fichier de configuration par d\xe9faut et que l\u2019on ne souhaite pas suivre ces modifications.\n+ L\u2019option `--no-skip-worktree permet` de suivre \xe0 nouveau les modifications.\n")),(0,a.kt)("p",null,"--assume-unchanged: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ Cette option para\xeet se rapprocher de la pr\xe9c\xe9dente. En effet une fois activ\xe9e sur un fichier les modifications sur ce dernier ne seront plus suivis par Git.\n+ En r\xe9alit\xe9 la finalit\xe9 de cette option est diff\xe9rente. Elle indique \xe0 Git que le d\xe9veloppeur promet que le fichier ne sera pas odifi\xe9 et que Git n\u2019a pas besoin de v\xe9rifier son contenu. Cela est utile sur les tr\xe8s gros projets o\xf9 le syst\xe8me de fichiers peut \xeatre lent afin d\u2019\xe9viter des op\xe9rations de lecture sur le disque.\n+ L\xe0 aussi l\u2019option inverse --no-assume-unchanged permet d\u2019indiquer \xe0 Git de suivre \xe0 nouveau les modifications sur le fichier.\n")),(0,a.kt)("h2",{id:"add"},"add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git add -A\n")),(0,a.kt)("h2",{id:"commit"},"commit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git commit -m "done something"\n')),(0,a.kt)("h2",{id:"push"},"push"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ git checkout master\n$ git add .\n$ git commit -m "Eden added"\n$ git push origin master\n\n$ git push origin branch\n// With a new branch created, the \u2013set-upstream switch must be run the first time a push is performed. \n// This step tells the new branch which remote repository to use every time it synchronizes its commit history.\n// github@branch/c/remote/push (new-branch)\n$ git checkout -b new-branch\n$ git push \u2013-set-upstream origin new-branch\n\n$ git add .\n$ git commit -m "Eden added"\n$ git push origin\n')),(0,a.kt)("h2",{id:"pull"},"pull"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git checkout master\n$ git pull origin master \n\n$ git switch -c <new_branch>\n\n// how-to-pull-a-branch-from-origin\n$ git checkout -b branchname == git switch -c branchname\n$ git pull origin branchname == git fetch origin branchname && git merge branchname\n")),(0,a.kt)("h2",{id:"status"},"status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// show some modifications\n$ git status\n")),(0,a.kt)("h2",{id:"git-fetch-vs-git-pull"},"git fetch vs git pull"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"git fetch is the command that tells your local git to retrieve the latest meta-data info from the original")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Git fetch is a safer alternative because it pulls in all the commits from your remote but doesn't make any changes to your local file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Git fetch \u662f\u4e00\u79cd\u66f4\u5b89\u5168\u7684\u9009\u62e9\uff0c\u56e0\u4e3a\u5b83\u4f1a\u4ece\u8fdc\u7a0b\u63d0\u53d6\u6240\u6709\u63d0\u4ea4\uff0c\u4f46\u4e0d\u4f1a\u5bf9\u672c\u5730\u6587\u4ef6\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002 Git fetch \u547d\u4ee4\u67e5\u770b\u8fdc\u7a0b\u7684\u6240\u6709\u66f4\u6539\uff0c\u800c\u65e0\u9700\u5e94\u7528\u5b83\u4eec\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Git pull \u662f\u4e00\u4e2a\u66f4\u9ad8\u7ea7\u7684\u64cd\u4f5c\uff0c\u5c06\u5f15\u5165\u66f4\u6539\u5e76\u7acb\u5373\u5c06\u5b83\u4eec\u5e94\u7528\u5230\u60a8\u5f53\u524d\u7b7e\u51fa\u7684\u5206\u652f\u3002"))),(0,a.kt)("h2",{id:"upstream-and-downstream"},"Upstream and Downstream"),(0,a.kt)("p",null,"The term upstream and downstream refers to the repository. Generally, ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," is from where you clone the repository, and ",(0,a.kt)("inlineCode",{parentName:"p"},"downstream")," is any project that integrates your work with other works."),(0,a.kt)("p",null,"the ",(0,a.kt)("inlineCode",{parentName:"p"},"downstream repo")," will be pulled from the ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream repository"),". Data will flow downstream naturally."),(0,a.kt)("p",null,"The git ",(0,a.kt)("inlineCode",{parentName:"p"},"set-upstream")," allows you to set the default remote branch for your current local branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git branch -vv \n// set the master branch as the default remote branch\n$ git push --set-upstream origin master == git push -u <remote> <branch>\n\n// To push the changes and set the remote branch as default, run the below command:\n$ git push --set-upstream origin master  \n")),(0,a.kt)("h2",{id:"git-push---set-upstream-vs-git-branch---set-upstream-to"},"git push ",(0,a.kt)("inlineCode",{parentName:"h2"},"--set-upstream")," vs git branch ",(0,a.kt)("inlineCode",{parentName:"h2"},"--set-upstream-to")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The git branch command has ",(0,a.kt)("inlineCode",{parentName:"li"},"--set-upstream-to"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"$ git branch --set-upstream-to origin/master // to set the current branch's upstream to be origin's master."))),(0,a.kt)("li",{parentName:"ul"},"The git push command has ",(0,a.kt)("inlineCode",{parentName:"li"},"--set-upstream"))),(0,a.kt)("h2",{id:"git-fetch---all-vs-git-pull---all"},"git fetch --all vs git pull --all"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"git fetch is the command that tells your local git to retrieve the latest meta-data info from the original"),(0,a.kt)("li",{parentName:"ul"},"git pull on the other hand does that AND brings (copy) those changes from the remote rep //sitory",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"$ git pull --all //Fetch all remotes.")))),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.javatpoint.com/git-upstream-and-downstream"},"https://www.javatpoint.com/git-upstream-and-downstream"))))}u.isMDXComponent=!0}}]);