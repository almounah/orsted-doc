---
title: Installation 
description: How to deploy and install
---

## Requirement

You need to have:

- `go`  I am using `go version go1.23.5 linux/amd64`. Install the latest version [https://go.dev/doc/install](https://go.dev/doc/install)
- `gcc` to compile Linux `.so`
- `x86_64-w64-mingw32-gcc` to compile windows `.dll`

```bash
sudo apt install gcc-mingw-w64  
```


PS: 

If you want to re-compile protobuf (not needed to run orsted) you need to install 

```bash
sudo apt install protoc-gen-go-grpc
sudo apt install protoc-gen-go
```

## Compiling

It should be pretty straight forward to compile Orsted C2.

Just `cd` into the root directory and run:

```bash
./compile.sh all
```

This will compile the `orsted-server` and `orsted-client` and all the modules for linux and windows.


## Running the server and the client

You can then start the server (need `sudo` to listen on 443 and 80 later)

```bash
sudo ./orsted-server
```

The server will then start on `0.0.0.0:50051`.

```bash
└──╼ $ sudo ./orsted-server run
[sudo] password for parrot:
2025/09/02 10:40:46 INFO [Starting Orsted Server on 0.0.0.0:50051]
2025/09/02 10:40:46 INFO [Unmarshelling Profile Config]
2025/09/02 10:40:46 INFO [Registering Orsted RPC Server]
2025/09/02 10:40:46 INFO [Registering Orsted Notification Server]
```

Then you can start the client to connect to the client

```bash
└──╼ $ ./orsted-client

                                 @@@@@@@
                             @@@@@@@@@@@@@
                            @@@@@@@@@@@@@@@
            @@             @@@@@@@@@@@@@@@@@@@@@@
            @@            @@@@@@@@@@@@@@@@@@@@@@@@
            @@          @@@@@@@@@@@@@@@@@@@@@@@@@@@
           @@@      @@@@@@@@@@@@@@       @@@@@@@@@@@@@@@ @@@
          @@@      @@@@@@@@@@@@@  @@@@@       @@@@@@@@@@@@
        @@@@      @@@@@@@@@@@@   @@@@@@@@@@
       @@@@  @   @@@@@@@@@     @@@@@@@@@@@@@@@
        @@@ @@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@  @@    @@@@@@@@@@@@@@@@@@@@@   @@@@@@@@
       @@@@@@@@@@@@          @@@@@@@@@@         @@@@@
        @@@@@@@@@@@@@@@@@@                        @@@@
          @@@@@@@@@@@@@@@@@    @                    @@
             @@@    @@@@@@@  @@@                     @@
               @    @@@@@@   @@@
                  @@@@@@      @@@@@
                  @@@@@@       @@@@@@@@
                  @@@@@@@@@   @@@
                      @@@@@@@@@@
                             @@

Connection Worked
orsted-client »
```


## Notes on Compilation

### The compile script

You can use the compile script to compile components individually

```bash
└──╼ $ ./compile.sh

Usage: ./compile.sh <command> [options]

Commands:
  single <linux|windows> <module>   Compile a single module
  server-client                     Compile Orsted server and client
  all                               Compile everything except protobuf
  protobuf                          Compile protobuf files
  help                              Show this help message

Examples:
  ./compile.sh single linux cat
  ./compile.sh single windows psexec
  ./compile.sh server-client
  ./compile.sh all
  ./compile.sh protobuf
```

### Some notes on compiling the Beacon

The standard and recommended way to compile the beacon is to use the `generate` command (See the `Global Commands > generate`)

Currently the resulting beacon, if run as a standalone will output logging and debugging symbols to stdout (specially when you load a module, I plan to clean that part).

However, the standard way is to use any loader you have to run the beacon, thus hiding the console and having no stdout.

If you want to run the beacon standalone (no recommended ofc without a proper loader), and you want to have no output, there is some tricks you can use, like extracting the beacon compile command from the client code and adding `-H=windowsgui` to `ldflags`.


