---

title: upload
description: orsted c2 upload
---

### General

`upload` allows you to upload files.

```
[Session 9: haroun@DESKTOP-DU89UIV] » upload --help

upload file from server to beacon

Usage:
  upload [flags] filetoupload remotepath

Args:
  filetoupload  string    file to upload
  remotepath    string    remote path

Flags:
  -h, --help     display help
```

It does not require you to load a SO (may change in the futur)

Example:

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » upload /tmp/r.py r2.py
```

This will upload the local file `/tmp/r.py` of the `orsted-server` (not the `orsted-client`) to the `r2.py`
