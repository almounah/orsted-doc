---

title: task
description: orsted c2 task
---

### General

The `task` command is available in all orsted C2 menu.

It allows to see and interact with `tasks` sent to `orsted-beacon`.

```
orsted-client » task --help

Commands related to the beacon tasks

Usage:
  task [flags]

Flags:
  -h, --help     display help

Sub Commands:
  list  list current sessions
  view  print the output of a session
```

Mainly, everytime you send a command to the `orsted-server`, it is saved in the database in the form of a task. When an `orsted-beacon` replies to a `task`, the `task` gets updated with the corresponding response.


### Task List 

You can list all the `task` of a specific session.

For example to list the `task` of session 8

```bash
orsted-client » task list -s 8
```

The result might be something like

```
orsted-client » task list -s 8
+--------+-----------+-----------+----------------+
| TASKID | SESSIONID |   STATE   |    COMMAND     |
+--------+-----------+-----------+----------------+
|     29 |         8 | sent      | load-module ps |
|     30 |         8 | completed | ps             |
+--------+-----------+-----------+----------------+
```

### Task view

You can then view the result of a `task` by using the `taskid`

For example to view the output of Task 30

```bash
orsted-client » task view -t 30
```

