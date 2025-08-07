---

title: evasion
descripton: orsted c2 evasion
---

### General

`evasion` allows you to evade AMSI and ETW in your current process with indirect syscalls.

```
[Session 9: haroun@DESKTOP-DU89UIV] » evasion --help

Evasion AMSI/ETW and unhook ntdll with indirect syscall

Usage:
  evasion [flags]

Flags:
  -h, --help     display help

Sub Commands:
  amsi  Evade AMSI using indirect syscall
  etw   Evade ETW using indirect syscall
```

It requires you to load the `evasion` dll with `load-module evasion`

### AMSI

`evasion` allows you to evade AMSI with different methods (last one still not supported)

```
[Session 9: haroun@DESKTOP-DU89UIV] » evasion amsi --help

Evade AMSI using indirect syscall

Usage:
  amsi [flags] method

Args:
  method  string    The number of the method used to patch AMSI
 - 1 - Will patch beginning of AmsiScanBuffer in amsi.dll with indirect syscall
 - 2 - Will patch a je to jne of AmsiScanBuffer in amsi.dll with indirect syscall
 - 3 - Will patch AmsiOpenSession Context in amsi.dll with indirect syscall
 - 4 - Will patch beginning of AmsiOpenSession in amsi.dll with indirect syscall
 - 5 - Will patch a je to jne of AmsiOpenSession in amsi.dll with indirect syscall
 - 6 - Will patch a je to jne of AmsiScanString in amsi.dll with indirect syscall
 - 7 - Will patch Amsi by tampering clr.dll with indirect syscall
 - 8 - Will patch AmsiScanBuffer by placing HardwareBreakpoint

Flags:
  -h, --help     display help
```

For example

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » evasion amsi 1
```


### ETW

`evasion` allows you to evade ETW with different methods (last one still not supported)

```
[Session 11: haroun@DESKTOP-DU89UIV] » evasion etw --help

Evade ETW using indirect syscall

Usage:
  etw [flags] method

Args:
  method  string    The number of the method used to patch ETW
 - 1 - Will patch EtwpEventWriteFull in ntdll.dll with indirect syscall
 - 2 - Will patch EtwEventWrite, EtwEventWriteFull EtwEventWriteEx in ntdll with indirect syscall
 - 3 - Will patch EtwEventWrite, EtwEventWriteEx in advapi32.dll with indirect syscall
 - 4 - Will patch NtTraceEvent in ntdll.dll with indirect syscall
 - 5 - Will patch EtwpEventWriteFull by placing HardwareBreakpoint

Flags:
  -h, --help     display help
```

For example

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » evasion etw 2
```

### Future Work on evasion

Evasion is a very interesting module that I plan to keep updating with time.
