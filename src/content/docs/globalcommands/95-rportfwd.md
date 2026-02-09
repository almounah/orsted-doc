---

title: rportfwd
description: orsted c2 rever port forwarding
---

### General

The `rportfwd` command is available in all orsted C2 menu.

It allows to implement reverse port forwarding natively through `orsted-beacon` or a chain of `orsted-beacon`.

```
orsted-client » rportfwd

Command related to ligolo rportfwd. It works closely with autoroute command

Usage:
  rportfwd [flags]

Flags:
  -h, --help     display help

Sub Commands:
  add     Add rportfwd
  delete  delete route subnet. If route subnet becomes empty, delete route on the fly.
  list    list rportfwd
```

You have an `orsted-beacon` on the windows machine. You want to ping the linux one.

### rportfwd add

You can add an rportfwd by interacting with a beacon, then running the add command.

```
orsted-client » rportfwd add --help

Add rportfwd

Usage:
  add [flags]

Flags:
  -h, --help             display help
  -l, --local  string    Local Address to Port Forward. Ex 127.0.0.1:4444
  -r, --remote string    Remote Address to Port Forward. Ex. 0.0.0.0:8000
```

For example, you can

```bash
orsted-client » session interact 73
[Session 73: haroun@DESKTOP-DU89UIV] » rportfwd add --local 127.0.0.1:8001 --remote 127.0.0.1:4455
Reverse Port Forward Added Successfully
```

where:

- `127.0.0.1:8001` is the local address on the attacker server
- `127.0.0.1:4455` is the remote address on the beacon

This functionality works on a chain of `orsted-beacon` too, regardless of the OS or the transport Type.

You can add multiple reverse port forward on the same `orsted-beacon`.

Behind the scene a ligolo-ng "autoroute" object is create on the server. It can even be used later to autoroute !

All the traffic on `127.0.0.1:4455` on the beacon will be tunnelled to `127.0.0.1:8001` on the attacker server.


### rportfwd list

You can list all the rportfwd. It will also show you the route.

```bash
orsted-client » rportfwd list
```

The result will be something like

```
[Session 73: haroun@DESKTOP-DU89UIV] » rportfwd list
+----------+-----------+--------+---------------------------------+
| ROUTE ID | BEACON ID | SUBNET |   RPORTFWD (LOCAL <-> REMOTE)   |
+----------+-----------+--------+---------------------------------+
|        1 |        73 |        | 127.0.0.1:8001<->127.0.0.1:4455 |
+----------+-----------+--------+---------------------------------+
```

This can be done from anywhere in `orsted-client`

### Autoroute delete

You can delete a reverse port forward by giving the Beacon ID (and not Route ID) as well as the remote address.

```bash
[Session 74: haroun@DESKTOP-DU89UIV] » rportfwd delete 74 127.0.0.1:4455
```

If the SUBNET is empty for a specific route as well as the RPORTWD, the `tun` will be deleted, you may need to wait 1 min to be able to ligolo again (in very few edge cases).
