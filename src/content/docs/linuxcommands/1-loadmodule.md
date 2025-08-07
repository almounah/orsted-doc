---

title: load-module
description: orsted c2 load-module
---

### General


`load-module` allows you to load a SO into the beacon without writing it on disk.

A lot of functionalities won't work unless you load the required SO.

```
[Session 9: haroun@DESKTOP-DU89UIV] » load-module --help

load-module

Usage:
  load-module [flags] module

Args:
  module  string    module to load

Flags:
  -h, --help     display help
```


The Path to look for modules is defined in `./data/clientconf.toml`

```toml
...
LinuxModulePath = "./tools/compiled-modules/linux/"
...
```

For example to load `./tools/compiled-modules/linux/ls.so` you can use

```powershell
[Session 9: haroun@DESKTOP-DU89UIV] » load-module ls
[Session 9: haroun@DESKTOP-DU89UIV] » load-module run
```
