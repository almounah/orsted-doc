---

title: pivot
descripton: orsted c2 pivot
---

### General

`pivot` allows you to start a local listener, useful for pivoting.

```
[Session 9: haroun@DESKTOP-DU89UIV] » pivot --help

Commands related to the pivot

Usage:
  pivot [flags]

Flags:
  -h, --help     display help

Sub Commands:
  list   List pivot on as beacon
  start  Start the pivot on a specific beacon
  stop   Stop the pivot on a specific beacon
```

Only `tcp` pivot are supported. `SMB` support may come later.


### Start a pivot

You can start a tcp pivot by selecting a beacon and running

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » pivot start tcp 0.0.0.0:4444
```

The `orsted-beacon` will then listen on `0.0.0.0:4444`. Other `orsted-beacon` of type `tcp` (see -`generate`) can connect to the pivot.

### List pivots

You can list pivot using

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » pivot list
```

The result will be something like

```
[Session 9: haroun@DESKTOP-DU89UIV] » pivot list
+--------+-----------+---------+------------+
| TASKID | SESSIONID |  STATE  |  COMMAND   |
+--------+-----------+---------+------------+
|     83 |         9 | pending | pivot list |
+--------+-----------+---------+------------+
[Session 9: haroun@DESKTOP-DU89UIV] »
 >>> pivot list
 <<<
STDOUT --->
List of pivot:
--------------
--------------
Pivot 1: 0.0.0.0:4444 (tcp)
Pivot 2: 127.0.0.1:4455 (tcp)

STDERR --->

```

### Stop a pivot

You can stop a pivot by providing the pivot ID

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » pivot stop 1
```

All the beacon linked to the pivot will die.
