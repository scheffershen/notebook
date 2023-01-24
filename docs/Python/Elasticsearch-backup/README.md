---
sidebar_position: 1
title: README
---

## Backup and restore scripts for Elastic Search

These python scripts were written with the following in mind:
* Must work on our production system (so python + requests and not much else)
* Must take all the settings and mappings
* Must put it all in one file for easy backup
* One-liners with simple config

## How to backup

Choose your index, e.g. "myindex". Currently only does one index at a time, but there's nothing to stop you calling it more than once :-)

Make sure your user has permission to write to the current working directory (you can do this in your home dir no problems).

If Elastic Search is running on your local machine and the default port (9200), you can just run it like this:

    $ python backup.py myindex

If you need a different host, you can do this:

    $ python backup.py myindex eshost

If you also need a different port, you can do this:

    $ python backup.py myindex eshost esport

This will generate a file called (myindex).esbackup. You only need this file - its all contained.

## How to restore

Copy the (myindex).esbackup to whatever server you want to run it on.

Options are the same as for the backup script. To restore on default host:

    $ python restore.py myindex

Non default host:

    $ python restore.py myindex eshost

Non default port too:

    $ python restore.py myindex eshost esport

## Testing

We've tested this with our ES setup and its good for us. If there's any problems or improvements, please submit a pull request!

Please do not submit patches to make it "more pythonic".

## License

MIT License, see LICENSE
