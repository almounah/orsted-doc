---

title: cat
description: orsted c2 cat
---

### General

`cat` allows you to cat files.

```
[Session 9: haroun@DESKTOP-DU89UIV] » cat --help

cat ascii file less than 10 MB

Usage:
  cat [flags] [path...]

Args:
  path  string list    path to list

Flags:
  -h, --help     display help
```

It requires the file to be an ASCII file less than 10 MB (Otherwise use the `download` command)

It requires you to load the `cat` SO with `load-module cat`.

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » cat /etc/passwd
```
