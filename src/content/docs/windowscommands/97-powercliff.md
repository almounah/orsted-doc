---

title: powercliff
descripton: orsted c2 powercliff
---

### General

`powercliff` allows you to run powershell in-memory with some disabled security options by indirect syscall patching.

```
[Session 11: haroun@DESKTOP-DU89UIV] » powercliff --help

Powercliff, inline powershell with superdeye managed patched

Usage:
  powercliff [flags]

Flags:
  -h, --help     display help

Sub Commands:
  exec              Exec a powershell cmd
  load              Load ps1 script to powershell
  start-powercliff  Load CLR, instantiate powershell and patch some stuff
```

It requires you to load the `powercliff` dll with `load-module powercliff`


### start-powercliff

`start-powercliff` will load the CLR, start a powershell via `System.Management.Automation.dll` and patch some security options.

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » powercliff start-powercliff
```

### load

You can load a ps1 script from `orsted-server` 

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » powercliff load PowerView.ps1
```

The Path to look for ps1 is defined in `./data/clientconf.toml`

```toml
...
Ps1ScriptPath = "./tools/windows/ps1/"
...
```

### exec

You can execute powershell command

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » powercliff exec whoami /all
```
