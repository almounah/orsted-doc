---

title: run
description: orsted c2 run
---

### General

`run` allows you to run commands.

It is not Opsec.

```
[Session 9: haroun@DESKTOP-DU89UIV] » run --help

run a command

Usage:
  run [flags] [command...]

Args:
  command  string list    command to run

Flags:
  -h, --help     display help
```

It requires you to load the `run` DLL with `load-module run`.

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » run powershell -c whoami /all
```

