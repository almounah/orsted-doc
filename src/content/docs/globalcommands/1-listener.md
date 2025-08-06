---
title: listener
description: orsted c2 listener
---

### General

The `listener` command is only available from the main menu of the orsted client.

```
orsted-client » listener

Commands related to the listener

Usage:
  listener [flags]

Flags:
  -h, --help     display help

Sub Commands:
  list   list current listener
  start  Start the listener
  stop   Stop and Delete a listener
```

Listeners only support HTTP or HTTPS in the latest orsted version. Other protocol support may come soon.

### Start a Listener

You can start a listener

For example:

```bash
orsted-client » listener start http 0.0.0.0 80
```

The machine on which `orsted-server` is running will start the listener.

### Stop a Listener

You can stop a listener by giving it the `Id` of the listener.

```bash
orsted-client » listener stop -i 2
```

All the `orsted-beacon` having a path to the listener might die.


### List Listeners

You can list the listeners

```bash
orsted-client » listener list
```

