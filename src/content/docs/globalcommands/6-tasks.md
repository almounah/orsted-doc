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
  export  export the task result to a file
  list    list current sessions
  search  search for task among all tasks
  view    print the output of a session
```

Mainly, everytime you send a command to the `orsted-server`, it is saved in the database in the form of a task. When an `orsted-beacon` replies to a `task`, the `task` gets updated with the corresponding response.


### Task List 

You can list all the `task` of a specific session.

For example to list the `task` of session 8

```bash
orsted-client » task list 8
```

The result might be something like

```
orsted-client » task list 8
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
orsted-client » task view 30
```


### Task export

In some engagement, it would be interesting to include the output of a task in a report.

For that the export subcommand allows you save the output of a task in a file by using `task export <TaskID> <FILE>`

```bash
orsted-client » task export 564 /tmp/loot
Response written to /tmp/loot
```


### Task search

In big engagement you sometimes need to go back to look at the results of some tasks. To easily find the task ID, the search command can be used.

The search is case sensitive.


```bash
[Session 5: student@WS01] » task search whoam
+--------+-----------+-----------+----------------------------------+
| TASKID | SESSIONID |   STATE   |             COMMAND              |
+--------+-----------+-----------+----------------------------------+
|    189 |        19 | completed | powercliff exec whoami /all      |
|    193 |        19 | completed | token whoami                     |
|    197 |        19 | completed | token whoami                     |
+--------+-----------+-----------+----------------------------------+
```

