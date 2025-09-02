---
title: Architecture 
description: credits
---

### Why did I choose Go for this ?

I enjoy writing Go.

While aware of some of Go limitations due to the Go runtime, I decided to go through with this project to see what can be accomplished. 

I also wanted to smoothly integrate networking features like socks5 and ligolo-ng, which are technologies already available as Go packages.


### Components

Orsted components are pretty straight forward.

- `orsted-server` is the central server of the Framework
- `orsted-db` is the database (file) that store and track what is done
- `orsted-client` is the CLI that allow the operator to interact with the `orsted-server`
- `orsted-beacon` is the piece of software delivered to a victim

Here is a small diagram showcasing the components talking with each others.

![diagram](../../../assets/orsted-arch.png)

### Project and Directory structure

```
.
├── beacon
├── client
├── data
│   └── clientconf.toml
├── modules
│   ├── cat
│   ├── download
│   ├── evasion
│   ├── execute-assembly
│   ├── inline-clr
│   ├── ls
│   ├── powercliff
│   ├── procdump
│   ├── ps
│   ├── psexec
│   ├── run
│   ├── runas
│   ├── shell
│   └── token
├── profiles
├── protobuf
├── server
├── test
└── tools
    ├── compiled-modules
    │   ├── linux
    │   └── windows
    └── windows
        ├── dotnet
        └── ps1
```

- `beacon` contains the code for the beacon. It is compiled on the fly everytime a beacon is generated.

- `client` contains the code for the `orsted-client`.

- `data` is a directory meant to contain data for the client. It contains the `clientconf.toml`

```toml
# Data used for https listener certificate
DefaultHTTPSCert = "./data/cert.pem"
DefaultHTTPSKey = "./data/key.pem"

# Data used For grpc auth with the server
# TODO

# Windows Arsenal

## Path of the assembly you use during engagement (Rubeus, Seatbelt etc.)
NetAssemblyPath = "./tools/windows/dotnet/"

## Path of the PS1 Script you use during engagement
Ps1ScriptPath = "./tools/windows/ps1/"

## Path of the compiled windows DLL
WindowsModulePath = "./tools/compiled-modules/windows/"



# Linux Arsenal

## Path of the compiled linux so
LinuxModulePath = "./tools/compiled-modules/linux/"


# Command Info
LinuxCommands = ["back", "load-module", "sleep", "interact", "session", "task", "shell", "socks", "pivot", "download", "upload", "run", "ls", "autoroute", "cat"]
WindowsCommands = ["back", "load-module", "sleep", "interact", "session", "task", "shell", "socks", "inline-clr", "execute-assembly", "evasion", "run", "upload", "download", "pivot", "ps", "token", "runas", "ls", "autoroute", "procdump", "cat", "psexec", "powercliff"]
GlobalCommands = ["hoster", "socks", "listener", "generate", "session", "task", "interact", "autoroute"]

```


- `modules` contains all the code for DLL and SO to be loaded in the `orsted-beacon` at runtime

- `profiles` should contains the default profile embedded in the server at compile time (futur work to be done on this part) 

The default profile is

```json
{
    "endpoints": {
        "registerBeacon": "/MicrosoftUpdate/ShellEx/KB242742/32323",
        "socksMessage": "/MicrosoftUpdate/ShellEx/KB242742/avatar_9090.png",
        "autorouteMessage": "/MicrosoftUpdate/ShellEx/KB242742/mt.png",
        "beaconTaskRetrieve": "/MicrosoftUpdate/ShellEx/KB242742/health",
        "beaconTaskResultSend": "/MicrosoftUpdate/ShellEx/KB242742/medicalresults",
        "hostEndpoint": "/MicrosoftUpdate/ShellEx/KB242742/host/"
    },
    "domain": "10.0.2.7",
    "port": "80",
    "interval": 2000,
    "jitter": 500,
    "headersHttp": {
        "User-Agent": "mozilla",
        "Origin": "https://google.com"
    }
}
```

The `headersHttp` are not used still. Only `endpoints` and `domain` (aka host header in HTTP, not the actual IP contacted) are parsed currently.

- `protobuf` is the protocol buffer definition of orsted C2

- `server` is the code of the `orsted-server`

- `test` should contains tests in the future

- `tools` contains all your arsenal (referenced in `./data/clientconf.toml`
