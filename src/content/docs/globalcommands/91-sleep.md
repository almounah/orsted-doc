---

title: sleep
description: orsted c2 sleep
---

### General

`sleep` simply allows you to change the interval in which an `orsted-beacon` checks in.

It is only available when interacting with a Session.


```
[Session 6: haroun@DESKTOP-DU89UIV] » sleep --help

Change Sleep of beacon

Usage:
  sleep [flags] interval

Args:
  interval  string    sleep in millisecond

Flags:
  -h, --help     display help
```

For example

```powershell
[Session 6: haroun@DESKTOP-DU89UIV] » sleep 100
```

PS: It is recommended to NOT go down to `sleep 0` to avoid the server crashing.
