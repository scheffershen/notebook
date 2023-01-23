---
sidebar_position: 4
slug: How-To-Set-Up-Sudo-and-SSH-Keys-on-Ubuntu-14.04
---

How To Set Up Sudo and SSH Keys on Ubuntu 14.04
===============================================

## Step 1 — Create the RSA Key Pair

The first step is to create a key pair on the client machine:

    $ ssh-keygen
    $ cat /root/.ssh/id_rsa.pub # authorized_keys

This generates a private key, id_rsa, and a public key, id_rsa.pub, in the .ssh directory of the localuser's home directory.

Note: If you leave the passphrase blank, you will be able to use the private key for authentication without entering a passphrase. If you enter a passphrase, you will need both the private key and the passphrase to log in. 

## Step 2 — Copy the Public Key to Ubuntu Server

After generating an SSH key pair, you will want to copy your public key to your server. 

    $ mkdir -p ~/.ssh
    $ chmod 700 .ssh

    $ echo public_key_string >> ~/.ssh/authorized_keys

## Step 3 — Authenticate to Ubuntu Server Using SSH Keys

    $ ssh vm01@37.187.165.154

## chmod Examples:

    $ chmod 600 file # owner can read and write
    $ chmod 700 file # owner can read, write and execute
    
    $ chmod 666 file # all can read and write
    $ chmod 777 file # all can read, write and execute