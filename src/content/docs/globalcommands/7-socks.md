---

title: socks
description: orsted c2 task
---

### General

The `socks` command is available in all orsted C2 menu. However it usage differs whether you are interacting with a Session (see `interact` command help) or no.

It allows to start and bind a local socks server that can be used with `proxychains` to socks traffic through an `orsted-beacon` or a chain of `orsted-beacon`.

```
orsted-client » socks --help

Commands related to the socks

Usage:
  socks [flags]

Flags:
  -h, --help     display help

Sub Commands:
  bind    bind socks to selected beacon
  start   Start the socks proxy locally
  unbind  unbind socks from selected beacon
```

### Socks Start

Starting the Socks server can be done from anywhere in `orsted-client`.

It will start the socks server on `orsted-server`.

For example to start the socks server on `0.0.0.0:9999`

```bash
orsted-client » socks start --ip 0.0.0.0 --port 9999
```

### Socks bind

To `bind` a session with the newly created socks server you need to interact with a session first using `interact`.

Then you can bind the session to the socks

```bash
[Session 8: haroun@DESKTOP-DU89UIV] » socks bind
```

You can then configure proxychains to talk with `0.0.0.0:9999`.

For example:

```
┌──[parrot@parrot]─[~]
└──╼ $ cat /etc/proxychains.conf
[ ... SNIP ... ]
socks5  0.0.0.0 9999


┌──[parrot@parrot]─[~]
└──╼ $ proxychains nc 127.0.0.1 445 -v
[proxychains] config file found: /etc/proxychains.conf
[proxychains] preloading /usr/lib/x86_64-linux-gnu/libproxychains.so.4
[proxychains] DLL init: proxychains-ng 4.16
[proxychains] Strict chain  ...  0.0.0.0:9999  ...  127.0.0.1:445  ...  OK
Connection to 127.0.0.1 445 port [tcp/microsoft-ds] succeeded!
```


### Socks unbind

On the same session, you can stop the binding with the current socks server using

```bash
[Session 8: haroun@DESKTOP-DU89UIV] » socks unbind
```
