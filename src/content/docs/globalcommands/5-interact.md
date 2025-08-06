---

title: interact
description: orsted c2 session
---

### General

The `interact` command is available in all orsted C2 menu.

It allows to interact with an `orsted-beacon`.

The design is inspired from how `ligolo-ng` UX operates.

When a Beacon initiate a Session with the `orsted-server`, you will get a notification.

```
orsted-client »
Beacon From 192.168.122.76 - DESKTOP-DU89UIV - DESKTOP-DU89UIV\haroun - windows
```

By clicking any button on the keyboard, the notification will disappear.

You can then write `interact` to see a list of session then select the one to interact with.

```bash
orsted-client » interact
? Specify a session :  [Use arrows to move, type to filter]
  1 - DESKTOP-DU89UIV\haroun@DESKTOP-DU89UIV - 192.168.122.76
  2 - DESKTOP-DU89UIV\haroun@DESKTOP-DU89UIV - 192.168.122.76
  3 - DESKTOP-DU89UIV\haroun@DESKTOP-DU89UIV - 192.168.122.76
> 4 - haroun@DESKTOP-DU89UIV - 172.25.157.137
  5 - DESKTOP-DU89UIV\haroun@DESKTOP-DU89UIV - 192.168.122.76
  6 - DESKTOP-DU89UIV\haroun@DESKTOP-DU89UIV - 192.168.122.76
```
