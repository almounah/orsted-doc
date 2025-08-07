---

title: help
description: orsted c2 help
---

### General

`help` allows you to see the manual of the commands. 

Don't hesitate to use it along with `<TAB>` to get help and autocompletion when needed.

For example, when I am interacting with a windows sessions, I can do:

```
[Session 6: haroun@DESKTOP-DU89UIV] » help

Client to orsted app

Commands:
  autoroute         Command related to ligolo routing
  back              back to no selected session
  cat               cat ascii file less than 10 MB
  clear             clear the screen
  download          download file from beacon to the server
  evasion           Evasion AMSI/ETW and unhook ntdll with indirect syscall
  execute-assembly  Load and Execute NET Assembly with donut
  exit              exit the shell
  help              use 'help [command]' for command help
  inline-clr        Load and Execute NET Assembly in Memory
  interact          interact with a session
  load-module       load-module
  ls                List file in a directory
  pivot             Commands related to the pivot
  powercliff        Powercliff, inline powershell with superdeye managed patched
  procdump          dump a process to a local file in the server
  ps                list running processes
  psexec            PsExec a binary on a host
  run               run a command
  runas             RunAs a process in go
  session           Commands related to the beacon sessions
  shell             start and interact with shell (not opsec)
  sleep             Change Sleep of beacon
  socks             Commands related to the socks
  task              Commands related to the beacon tasks
  token             Token manipulation
  upload            upload file from server to beacon
```

If I require help for `pivot` I can do:

```
[Session 6: haroun@DESKTOP-DU89UIV] » pivot --help

Commands related to the pivot

Usage:
  pivot [flags]

Flags:
  -h, --help     display help

Sub Commands:
  list   List pivot on as beacon
  start  Start the pivot on a specific beacon
  stop   Stop the pivot on a specific beacon
```

If I require help for `stop` subcommand I can do:

```
[Session 6: haroun@DESKTOP-DU89UIV] » pivot stop --help

Stop the pivot on a specific beacon

Usage:
  stop [flags] pivId

Args:
  pivId  string    Id of the pivot

Flags:
  -h, --help     display help
```
