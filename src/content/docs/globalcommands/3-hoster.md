---

title: hoster
description: orsted c2 hoster
---

### General

The `hoster` command is only available from the main menu of the orsted client.

It allows to host files for all listener.

```
orsted-client » hoster

commands related to hosting and unhosting files

Usage:
  hoster [flags]

Flags:
  -h, --help     display help

Sub Commands:
  host    command to host a file - currently on all listeners
  unhost  command to unhost a file - currently on all listeners
  view    command to view all hosted file - each is hosted on all listeners
```

### Host a File

You can host a file for all listeners.

To host a generated `main_http.exe` you can use

```bash
orsted-client » hoster host /home/parrot/Desktop/orsted/main_http.exe hostedfile.exe
```

### View Hosted Files

You can view all hosted files.

```bash
orsted-client » hoster view
```

It will return all the hosted file path.

```
orsted-client » hoster view
+-------------------------------------------------------+
|                 HOSTED FILE ENDPOINTS                 |
+-------------------------------------------------------+
| /MicrosoftUpdate/ShellEx/KB242742/host/hostedfile.exe |
+-------------------------------------------------------+
```

### Unhost a file

You can unhost a file by giving the filename to the `unhost` command.

```bash
orsted-client » hoster unhost hostedfile.exe
```

