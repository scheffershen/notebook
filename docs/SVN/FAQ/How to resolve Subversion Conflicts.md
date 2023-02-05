---
slug: How-to-resolve-Subversion-Conflicts
---

How to resolve Subversion Conflicts
===

https://ariejan.net/2007/07/04/how-to-resolve-subversion-conflicts/

date: 4 July, 2007

When you commit your changes, you’ll get an error message:

    $ svn commit -m "Updated README"
    Sending    README
    Transmitting file data .svn: Commit failed (details follow):
    svn: Out of date: '/myproject/README'

~ This is good. Subversion has detected that the file you want to commit has changed since you last updated it. Update the file to get it up-to-date again.

    $ svn update
    C   README
    Updated to revision 6.

1. Scrap your changes, and go with the current work from your colleague.

This is the easiest solution. All you have to do is revert the changes you made, and update your working copy:

    $ svn revert README
    Reverted 'README'
    $ svn update README
    At revision 6.


2. Keep your changes, and dump whatever your colleague did.

To check in your changes, copy your version over the original and tell Subversion you have resolved the conflict.

    $ cp README.mine README
    $ svn resolved README
    Resolved conflicted state of 'README'

3. Merge both version to a new version

Subversion won’t let you commit this file, so you’ll have to mark it as ‘resolved’ as we saw during option 2:

    $ svn resolved README
    Resolved conflicted state of 'README'