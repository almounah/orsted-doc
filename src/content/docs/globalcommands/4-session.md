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
  list  list current sessions
  tree  tree print the sessions
```

### List Session

You can list session.

```bash
orsted-client » session list
```

The result will be

```
orsted-client » session list
+----+----------------+-----------------+------------------------+-----------+---------+------+
| ID |       IP       |    HOSTNAME     |          USER          | INTEGRITY |   OS    | POL  |
+----+----------------+-----------------+------------------------+-----------+---------+------+
|  1 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows | 1265 |
|  2 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows |    0 |
|  3 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows |    1 |
|  4 | 172.25.157.137 | DESKTOP-DU89UIV | haroun                 | TODO      | linux   |    1 |
|  5 | 192.168.122.76 | DESKTOP-DU89UIV | DESKTOP-DU89UIV\haroun | TODO      | windows |    2 |
+----+----------------+-----------------+------------------------+-----------+---------+------+
```

You see the POL, the Proof of Life as well as the session ID.


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
