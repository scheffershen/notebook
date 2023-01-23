How-to-Create-Your-Own-Git-Server
=================================

## Managing SSH Keys

you can simply upload their public key to the Git server. 

## How the Process Works

## Creating the `Git` User

Create the Git user with the `adduser` command:

	$ adduser git

Now that you have created the git user, you can assume the role by using the `su` command:
	
	$ su git

Now, create the `.ssh` directory at git user home directory,

	$ mkdir .ssh

Next, make the directory only accessible by the git user:

	$ chmod 700 .ssh

Now you have an `.ssh` directory to hold your `authorized_keys` file, which is used to authenticate login requests. 

	$ touch .ssh/authorized_keys

adjust the privileges to make the file accessible only to the git user:

	$ chmod 600 .ssh/authorized_keys

Now, you have the directory and file necessary to set up the SSH logins.

But before we move on, make sure that the `git` group is allowed to authenticate this way.

You can do that by [editing your SSH configuration](##editing-your-SSH-configuration) and adding `git` to the acceptable groups listed in the configuration file.

## editing-your-SSH-configuration

1. This command will start the process of generating your keys:

	$ ssh-keygen -t rsa // == $ ssh-keygen

The keys are saved, by default, in the `~/.ssh` directory.

	$cd ~/.ssh

Your keys will be saved as `id_rsa` (private key) and `id_rsa.pub` (public key).

3. Managing the SSH Service

The easiest way to do so is to restart the SSH service itself:

	$ service sshd restart

## Uploading Keys to the Git User

Copy the SSH public key that you noted earlier to the /home/git/.ssh/authorized_keys file.

	$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDf5cRRsoT0W3VkdSXuMW4eOxH/8mhdL1Jqu0mjaWT5JGdR0Zn/IreGQfBpx/nmnLZpIxmlc8ujGyc4Afoxghb6bICyMlVetLYPewHYDZd5cOmcRyvZIldmgBV9CB9EajWscH0RsMNCEt7YKqqMj01bR6KaalwH/EZB//d6Zf/oXD/urqYBh+m5oqzH8J7owsDH85NuIuhafPtROvbxXOIgwYdkfmT/KVV0+HnszrareUTudlMTiV0lJ7CVgfwT1ZvC7yiDjIk739v3QRv/+/GiDFxYBmhyc/85rl0Jt9IIvCbFd1/PDXj+4tk9iTqRRTWnm4464GYJ87Qa4xiqTPC212SEzB0WVF3MWc8fvQCIJb9b6HDkN+BKIQvx64lsm7Aapzzp1y4e02hpHfowh599GcDNfuXTEp3VJCFK0296YfIDH9OYjVioBXxJDWi4abzdOd8OLNqf7de9JdiPanR1h+mBXHver1fqoHRLxucwg7uv4HlAjtUYdiG0CThUg7c= universalmedica\yishen@MOBILUM111" >> /home/git/.ssh/authorized_keys

	$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDf2sUwZVnYqNHJRrxBf0NniKo3EvtGK0QNJ5vKX+SwxvOvUh32Umfq/QZ6bS5n/hnpQr/O95zPzwvc4PWVwKcTOeQxfZAc4ZWdPDOT06RCouRKiY0+eFAcYbl5gszJiDj/gmbiuk5siiWKswpcOcSfjI7vmfV7v2URj7Hoj9/7GghQZApGdOSFKjNq+vKnJMDj/YgNRT8h3/AxBrUgOfHSTN+lB4DmDAXjgGxXex+UV3tXUc979f6cDdMY6XgaE5JXkqoKw3yLvEDRfdVxouDYAlXL+k1EP1TXv48cWrp5llr5dr5Y7SyNUSvRd8WUOsA/6zYXSZFsvWgDzllapO6b/L6gVYOLlf3esvNUXJnf5LVoXOu4ZyZ6z7Y/+lvTjg7WU+IFrSj0+9F0lVjh3I2vd6vIN7EsZkwPwEZ+3V16H0zJQO3cSFa3wZmNhWO1P4dU86GG/AwAe+GMDhixwqv8EgAGwIj9xbvsy/638DgLt4So0RLtpDTler82VXXRr38= universalmedica\femman@MOBILUM96" > /home/git/.ssh/authorized_keys

	$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDsiQs6OwR7B6qWgHxcZix7mPTulnCFRHRtBhVqXMenwaGiJ9ndaw05YXR6jsGlMlelH/injig+cwCpqM3V/Gp/Sv+h286DDPB5+RmkclmMr7zXHzA9bmLgCe4l30VA+Hd661maLMLOZrb7YSGb6hUozzr8KhhybOKISrh3lYelCpAU2LyWj0S48N69L958gsz556i40JDDIAb5vnNEiBJZ8DEx+eYBAVIj1GbzEwYcl/Gp03JbWzrrJEWXQugeFntp+ttt4Qa0azn7liDCS+VXBmRVV3dYHFGs+n1VxwB9Dd4RJdX/g6GB7hVfYBYZyFDa19xCLfLP/0vptvUXmGUjM4vvmWl3qk4Dq3gdU2tEt5PfuRsfUmRdBN8ASEITidJ3/MIAX5D0ABT3w6zS44j6eHFM8ktfcHTJatT3ljwOnmijXNx3jOjmyYpKyxr9cWOc5lomzDlARd3Rv1Z341Ri1kLGxiq3obzjPki45f5uP/O1MHGYsOd34XXybDYuKus= universalmedica\lstass@MOBILUM152" > /home/git/.ssh/authorized_keys

	echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcAHjKMYuGFv0qNI6il1u1BM4l97GEXbLoTEQKMlKmavVK4lqkMACsmBr8KEs6xTOvAFdPSyND2FjQz3sZAatcJNnwRzDf5wXOtEZ4tHbIm9Xba9t2YZpfq3xlYK1oGq+tpInf+veUZlFuA7nMRSucebToIlU5MoWWm8h6Q5lCIjlI5fLCHa4nahHQryACuupVB807WUJZkmHTxC2y1LzWesg/LoHRSJbHNdE+3BUj0GZxng9rSEDwmCjpbZ5/3HpbGXvfLW6lqlqZslwOlOPiqAnJMlOo0txFCBwReYijXBJfzJ8wLLWI8lcJYCVYej9opB+JPZRiVwAcsHuQIAVYeUjiNmxLbawY3m9WfUnepeg/GJGbdH25Hc0RnArB61w0Ys4eQE6wfCVcTwIhdINBXy//jES0LP3li6hNp78+X/Wjk/nQwYeKoZFTYUbOuNjf9RDzRxEn/suq00Znan+WRQmjKS9sBNOFl3ERI+P5Jk21n3Ow9Ibbg80/U5baFlc= universalmedica\sqiu@MOBILUM78" > /home/git/.ssh/authorized_keys

	$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAhiM/opnl9vvft/vIAiE8bhKgbdys5NF6SYxx2GpkZZiQ1RSdb8lJ359nZYCK8YgWm+DNcKn03v5QrY1RlecKb+DT+LnQWNupuazOIJC0rmBxr/Do6j8cFLvTPtWw1rx/XQijbt/jMVvp/CUHIy/mslaIv5+NseNYXFQ6hnpTPau0y8zlJvxNvsluwC7SC533RgjBFVnLoCSqWwpeLT1le01vzFGBHoL05P8cXRmeWdyf12p1JsiwbIE8dKIIzrlIzgXF7xV+5cEqip7rgqOUBUCmjEMginXgYxuxEEWgu6e28GyFurea0XjbqJBRgzCgrm8rBD596NDkXC6zJSIEeQ== david" >> /home/git/.ssh/authorized_keys
	
	$ echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDAiB5MSQfw+Dr7UKN1cbHxHtiETdL0uM+s/ctDcdLzsGOod8KQvTx+l18M8ej4tU3l0z+uJw/bZ1LonvFTjFvuZJ3BhJVoJoP3wz1dj+s3eFlpgu+y6aRhKpfvAgPKdKP8c4Uw6RWxcU4MgZDHRCqCwZ0N0Mhm/PcA20un0kT1zcPMG0ViYGL1rroUL49AzOfl3tQSE+eab0Va0JNGj9zO1M/W4Es6Py+YdZwHm624t78jdFcaYLbKtT+TJOFDuabVnY9K2MPTKLWO2pwAPEGHcEYgCN9pUpdwKGsM72KhuW/eGLOvhb6Sm4saZfgi8aP2SAx47yPOsQiBCU7lAi5gOWmnC0hVmEFv+NTzLtKI8zpl92IQ1dC3YM8B6BmoD5kg8o4DY9j1r3HkB5pDz6bILXMEFQJtpiHRhUlIyFjxzcEhnMZ5yzVt6xth7qSdmBUUcLuyGe4EdWVVFlSd/mDX6/RHFyHOxWdN0zsIUIq70O2fyPFqzg/Y3x+qXEvmJa0= universalmedica\qlefor@MOBILUM109" >> /home/git/.ssh/authorized_keys

============

	$ echo "sssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCP4AiHVZzBXIaYrkBCAUWfEAnYruRfCEIwzXuBeSHnuXC2yz+Q92xqur7YXNTcvIzb75qCrFDg0yNZzzABa8eJDBqkCbMK2gufsYkpiTcNmYI6LEJGBHfz2QoVFIOXndiEDF42mIDXKJi7lcqDBKRJIZCaYAwP3UR2ZV9/oJ4Vg5F21PjnjJAsXC71mxsH9RfSQL7F5vedH7HFwP1AvqmLRpjwvMWY2I8ZhyC0MAZqsMCcB94AS0sz7KkP9nbUPCcZI+8iqLRvcLlpTqg1VWfJoOrU5yO513KPvwc/k58PbnLK+3AugGxV3kbwcr+YrEH6buNcf3a3A584Sekmoqq8yXsbU++n+d7L71AHZk5YAnPWAhGARNiGqWo8DqZvzt6us3vcZmUi9SdjiYT3oiqu6VQPBsHyY2wRcveB+zVtDAmNRhRJRQQazv1egBjqzknGN+oatGIs0U/DIcym6KJDiOG9JExeRVZew5muMLDydYUrQNiqg6ETmeMJMbfa+L6LK3rp1ZmPQfIH7fdiDGYEUdy0d+9XYzBsodsrx2cuPXihSD6zm3hvCHtMwBk9jhGcr4Qllgb1DveLY8WuxZZ35G+ibLBGqiVNhqipwRNnkVk4rG6U6dOHtu/cckuzwZn5cxmvJTg8XTRzIYIhv7688esDbCzyP+JE0GP59hWEfw== baptiste.vignaud.tic@gmail.com" >> /home/git/.ssh/authorized_keys	

## SSH: one authorized_keys for multiple service accounts

You can use the `AuthorizedKeysFile` directive in `/etc/ssh/sshd_config` to do this. The defaut location is `.ssh/authorized_keys` but you could use something which contained an absolute path e.g.

	AuthorizedKeysFile /home/git/.ssh/authorized_keys /home/git/.ssh/authorized_keys2

## Add an SSH-Enabled User

Add the new user to the list of allowed users in the `/etc/ssh/sshd_config` file on your instance, by editing the AllowUsers parameter, as shown in the following example:

```
AllowUsers git adminum
```

	$ chown -R git:git /home/git/.ssh

## Creating the “Bare” Git Repositories

	$ mkdir mutualise-medica-source.git
	$ cd mutualise-medica-source.git

	$ mkdir mutualise-medica-source_v2.git
	$ cd mutualise-medica-source_v2.git

Once inside the directory, create a `bare` Git repository:

	$ git init --bare

## Add Your Remote Repository

So far, you have created a git user account, a bare repository in the directory of your choice, and you have SSH key authentication set up for the git user.

Now, you just need to make your local Git installation aware of the new repository:

	$ mkdir 000_mutualise-medica-source.com_git
	$ cd 000_mutualise-medica-source.com_git
	$ git init
	$ git remote add origin git@178.32.75.104:/home/git/mutualise-medica-source.git


	$ mkdir 000_mutualise-medica-source.com_v2_git
	$ cd 000_mutualise-medica-source.com_v2_git
	$ git init
	$ git remote add origin git@178.32.75.104:/home/git/mutualise-medica-source_v2.git 

in remote git server	

	$ git remote add origin /home/git/mutualise-medica-source.git
