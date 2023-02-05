---
slug: SVN-changeLog-generator
---

SVN-changeLog-generator.md
==========================

## svn2cl

This is an xsl stylesheet for generating a classic GNU-style ChangeLog from a Subversion repository log. 

To generate a simple ChangeLog use (in your checked out directory)

	% svn2cl.sh

To generate the ChangeLog using a custom xslt processor, use something like:

	% svn log --xml --verbose | xsltproc svn2cl.xsl - > ChangeLog