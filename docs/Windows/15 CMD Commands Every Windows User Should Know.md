40 CMD Commands Every Windows User Should Know
=============================================

Date: 06/2014
link: http://www.makeuseof.com/tag/15-cmd-commands-every-windows-user-know/
https://www.youtube.com/watch?v=Jfvg3CS1X3A

## ipconfig

    $ ipconfig 
        - Connection-specific DNS Suffix:
        - IPv4 Address:
        - Default Gateway:
    $ ipconfig /all
        - DNS Servers:
        - Physical Address
    $ ipconfig /all | findstr DNS
    
    $ ipconfig /release
    
    $ ipconfig /renew #can force your Windows PC into asking for a new IP address, 
    $ ipconfig /renew "Wi-Fi"
    
    $ ipconfig /displaydns
    $ ipconfig /displaydns | clip #copy output of that command to your clipbord

    $ ipconfig /flushdns  #to refresh your DNS address.

## nslookup

    $ nslookup networkchuck.com
    $ nslookup networkchuck.coffee 8.8.8.8

    $ nslookup -type=mx networkchuck.com
    $ nslookup -type=txt networkchuck.com
    $ nslookup -type=ptr networkchuck.com

## cls: Clean your screen

## getmac

    $ getmac /v

## powercfg

    $ powercfg /energy #can be used to build a detailed power consumption report for your PC,

    $ powercfg /hibernate on #and `powercfg /hibernate off` to manage hibernation

    $ powercfg /a #to view the power-saving states currently available on your PC.

    $ powercfg /devicequery s1_supported # which displays a list of devices on your computer that support connected standby.
    
    $ Powercfg /lastwake #will show you what device last woke your PC from a sleep state

Windows 8 added `powercfg /batteryreport`, which provides a detailed analysis of battery use,

## assoc

Most files in Windows are associated with a specific program that is assigned to open the file by default. 

    $ assoc .mp4=VLC.vlc

## chkdsk

    $ chkdsk /f #find them
    $ chkdsk /r #repair them

## sfc: System File Checker

System File Checker is an automatic scan and repair tool that focuses on Windows system files. You will need to run the command prompt with administrator privileges and enter the command 

    $ sfc /scannow

## DISM: deployment image servicing and management

    $ DISM /Online /Cleanup-Image /CheckHealth 

    $ DISM /Online /Cleanup-Image /ScankHealth 

    $ DISM /Online /Cleanup-Image /RestoreHealth 

## tasklist

The `tasklist` command can be used to provide a current list of all tasks running on your PC

    $ tasklist | findstr script

    $ tasklist -v
    $ tasklist -svc

## taskkill

You can force stop a program using `taskkill -im` followed by the executable’s name,     

or `taskkill -pid` followed by the process ID.   

    $ taskkill /f /pid 20184

## netsh

    $ netsh wlan show wlanreport

    $ netsh interface shwo interface | findstr "IP Address"
    $ netsh interface shwo interface | findstr "DNS Server"

    $ netsh advfirewall set allprofiles state off #turn off windows firewall
    $ netsh advfirewall set allprofiles state on

## ping

    $ ping -t #keep going ping

## tracert

    $ tracert google.com

    $ tracert -d #to speed it up

## netstat

Entering the command `netstat -an` will provide you with a list of currently open ports and related IP addresses.

    $ netstat -af

    $ netstat -o

    $ netstat -e -t 5

## route

    $ route print

    # route add 192.168.40.0 mask 255.255.255.0 10.7.1.44 # allowing us to customize the way our computer reaches certain networks

    # route delete 192.168.40.0

## shutdown

As of Windows 8/8.1 there is now a shutdown command

    $ shutdown /r /o

    $ shutdown /r /fw /f /t

## systeminfo

## driverquery -v

Drivers remain among the most important software installed on a PC

 so its good to have access to a list of what’s on your PC.

## fc

File compare, This command can be used to identify differences in text between two files

    fc /l "C:\Program Files (x86)\example1.doc" "C:\Program Files (x86)\example2.doc"

## Pathping

Like ping, you use this command by typing `pathping` followed by the IP address,

## Recovery Image

    $ recimg ???

## windows-command-prompt-commands-pdf

http://www.makeuseof.com/tag/windows-command-prompt-commands-pdf/