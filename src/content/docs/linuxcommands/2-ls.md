---

title: ls
description: orsted c2 ls
---

### General

`ls` allows you to list the file in the directory using native go code.

```
[Session 2: haroun@DESKTOP-DU89UIV] » ls --help

List file in a directory

Usage:
  ls [flags] [path...]

Args:
  path  string list    path to list

Flags:
  -h, --help     display help
```

It requires you to ALWAYS give a path (empty does not work, you need to use `.` for current directory)

It requires you to load the `ls` SO with `load-module ls`.

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » ls .
[Session 9: haroun@DESKTOP-DU89UIV] » ls /home
```
