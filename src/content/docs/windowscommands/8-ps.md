---

title: ps
descripton: orsted c2 ps
---

### General

`ps` allows you to see current running processes.

It uses Native Indirect Syscall with little to no windows API at all.

```
[Session 9: haroun@DESKTOP-DU89UIV] » ps --help

list running processes

Usage:
  ps [flags]

Flags:
  -h, --help     display help
```

It requires you to load the `ps` DLL with `load-module ps`.

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » ps
```
