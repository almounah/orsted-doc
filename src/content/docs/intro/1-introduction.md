---
title: Introduction
description: An introduction of Orsted C2
---

## What is Orsted C2 ?

Orsted C2 is a command an control framework I made for educational purposes.

It consists of many `orsted-beacons` that communicates with each other and to the main `orsted-server`. An operator can interact with the `orsted-beacon` using the `orsted-client`.


## Some Features

- **By design Automatic Sandbox deception**

If the Operator don't interact with the beacon, no malicious DLL/SO will be send to the session. From an automatic Sandbox pov, the `orsted-beacon` is just a client querying a server.

- **Windows Evasion Modules**

Multiple ways to evade AMSI and ETW using indirect syscalls.

- **Pivot and native Ligolo-ng support**

It is possible to pivot and chains `orsted-beacon` together regardless of their transport protocol or the OS they are deployed on. 

`Ligolo-ng` is natively supported (not by embedding ligolo executable) - see `autoroute (ligolo-ng)` section.

- **Granular Inline-clr and In-Memory powershell execution**

Taken from `go-clr` package it is possible to execute dotnet assemblies inline of the process.

- **Tab completion and help for the `orsted-client`**

`orsted-client` was made using `grumble` go package. For any command, you can add `--help` after and get help.

The `Tab` is enabled and allow autocompletion.

- **Many more stuff**

## Important Notes

`Orsted` was a project I did for fun on my own personal free time (I am not a redteamer but a humble pentester)

It is still not in a stable release. Feel free to test it in a legal scope, but _spoiler alert_ don't be surprised if you find some bugs.

Some missing features might come later. Mainly

- orsted is now designed to be used by a single operator. Mutliple operator can still be used but is not user friendly yet (you will get notifed of other operator work)
- smb support for windows
- Syscall Unhooking via `superdeye` package
- DNS listener
- `orsted-beacon` authentication and authorization
