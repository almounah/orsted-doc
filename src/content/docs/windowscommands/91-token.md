---

title: token
descripton: orsted c2 token
---

### General

`token` allows you to manipulate token inside your processes. 

It uses Native Indirect Syscall with little to no windows API at all.

```
[Session 9: haroun@DESKTOP-DU89UIV] » token --help

Token manipulation

Usage:
  token [flags]

Flags:
  -h, --help     display help

Sub Commands:
  make      Make and apply a new token
  rev2self  Revert to original identity
  steal     Steal Token
  whoami    Return information about Process and Thread token
```

It requires you to load the `token` dll with `load-module token`


### whoami

You can use whoami to get the current process and thread token privilege.

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » token whoami
```



### make

You can make a token by specifying the `logontype` (default is 9)

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » token make --logontype 2 administrator administrator
```

PS: Don't forget you can use `<TAB>` and ```token make --help``` if needed.


### steal

You can steal other processes token by providing the PID

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » token steal 8882
```

### Rev2self

You can revert to your original identity using

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » token rev2self
```
