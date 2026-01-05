---

title: session
description: orsted c2 session
---

### General

The `session` command is available in all orsted C2 menu.

It allows to view and list sessions.

```
orsted-client » session --help

Commands related to the beacon sessions

Usage:
  session [flags]

Flags:
  -h, --help     display help

Sub Commands:
  interact  provide another way to interact with session
  list      list current sessions
  stop      stop the session by sending stop task to beacon and marking beacon as stopped
  tree      tree print the sessions
```

### List Session

You can list session.

```bash
orsted-client » session list
```

The result will be

```
orsted-client » session list
+----+----------------+-----------------+------------------------+-----------+---------+------+--------+
| ID |       IP       |    HOSTNAME     |          USER          | INTEGRITY |   OS    | POL  | STATUS |
+----+----------------+-----------------+------------------------+-----------+---------+------+--------+
|  1 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows | 1265 | alive  |
|  2 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows |    0 | alive  |
|  3 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows |    1 | alive  |
|  4 | 172.25.157.137 | DESKTOP-DU89UIV | haroun                 | TODO      | linux   |    1 | alive  |
|  5 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows |    2 | alive  |
+----+----------------+-----------------+------------------------+-----------+---------+------+--------+
```

You see the POL, the Proof of Life as well as the session ID.

A session stays alive until it is stopped. You can use `session list --all` to list stopped and alive session.


### Session Tree

You see the sessions in a tree view by doing

```bash
orsted-client » session tree
```

The result will be

```
orsted-client » session tree
.
├── (http/windows) 1: haroun@192.168.122.76
└── (http/windows) 2: haroun@192.168.122.76
        ├── (tcp/windows) 3: haroun@192.168.122.76
        │       └── (tcp/linux) 4: haroun@172.25.157.137
        └── (tcp/windows) 5: haroun@192.168.122.76
```

This view is pretty handy to have a vision of the beacon chaining.

In the above output you see that:
- Session 2 is connected to the server via HTTP (the dot `.` represent the `orsted-server`)
- Session 3 and 5 are not talking to the `orsted-server` directly. They talk TCP to Session 2 that forward to te server.
- Session 4 is a nested linux session that talks TCP to Session 3 that forward to Session 2 that forward to Session 1. 


### Session Stop

You can stop a session with `session stop <ID>`

For example:

```bash
orsted-client » session stop 4
Stopped session 4
```

### Session Interact

It is possible to interact with a session through the session command.

```bash
orsted-client » session interact 4
[Session 4: student@WS01] »
```
