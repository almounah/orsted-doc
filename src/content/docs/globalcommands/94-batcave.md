---

title: batcave
description: orsted c2 batcave
---

### General

`batcave` allows you to search and install tools that can be used during engagements.

The project is inspired from the famous Sliver Armory.

```
[Session 1: RudeusGreyrat@WK01] » batcave --help

Commands related to the batcave

Usage:
  batcave [flags]

Flags:
  -h, --help     display help

Sub Commands:
  authenticate  authenticate to the API. Token is stored in client process memory.
  install       list current listener
  search        Search for batgadget and batbundle
  update        Repoll the batcave with any potential new batgadget or config
```

Batcave URL can be found here [https://github.com/orgs/exploration-batcave/repositories](https://github.com/orgs/exploration-batcave/repositories)

It consists of widely available opensource tools having types (exe, ps1, dotnet etc) called `batgadget` built using github actions. To ease installation, a `batbundle` regroups multiple `batgadget`.

In case you require a specific tool to be added kindly open an issue here [Batcave](https://github.com/exploration-batcave/batcave/tree/main)

### Batcave and Autocompletion

You will benefit of autocompletion using batcave in other `orsted` modules. For example for `execute-assembly` by pressing `<TAB>` you will see the list of compatible batgadget that can be used.

![example](/orsted-doc/autocompletebatcave.gif)

You can still use tools not in the batcave, but you need to download them manually, copy them to right path and write their name without autocompletion in the command.

### Batcave Search

You can search for gadgets and bundles.

```
[Session 1: RudeusGreyrat@WK01] » batcave search --help

Search for batgadget and batbundle

Usage:
  search [flags] param

Args:
  param  string    String to Search for

Flags:
  -h, --help     display help
```

For example:

```powershell
[Session 1: RudeusGreyrat@WK01] » batcave search re

╔═══════════════════════════════════╗
║         BatGadget Items           ║
╚═══════════════════════════════════╝
  • ThreatCheck
  • SQLRecon

═══════════════════════════════════

╔═══════════════════════════════════╗
║         BatBundle Items           ║
╚═══════════════════════════════════╝
  • recon ->-> [SharpView SQLRecon Seatbelt SharpUp PowerView]
```

### Installation

You can install gadget previously found with search using

```
[Session 1: RudeusGreyrat@WK01] » batcave install --help

list current listener

Usage:
  install [flags] batType name

Args:
  batType  string    batgadget or batbundle to install
  name     string    Name of the batgadget or batbundle

Flags:
  -h, --help     display help
```

For example:

```powershell
[Session 1: RudeusGreyrat@WK01] » batcave install batgadget SQLRecon
Downloading BatGadget SQLRecon ...
[Session 1: RudeusGreyrat@WK01] » batcave install batbundle privesc
Downloading BatGadget SharpUp ...
Downloading BatGadget PrivescCheck ...
```

Depending on the type of the badgadget, it will be installed either in:

- `NetAssemblyPath = "./tools/windows/dotnet/"` defined in `data/clientconf.toml` if the type is `dotnet`
- `Ps1ScriptPath = "./tools/windows/ps1/"` defined in `data/clientconf.toml` if the type is `ps1`
- `ExePath = "./tools/windows/exe/"` defined in `data/clientconf.toml` if the type is `exe`


### Updating Batcave

To be sure you have the latest batcave or to refresh your current installation of batcave, you can use:

```
[Session 1: RudeusGreyrat@WK01] » batcave update --help

Repoll the batcave with any potential new batgadget or config

Usage:
  update [flags]

Flags:
  -h, --help     display help
```

### Authentication

As the `batcave` is hosted in github, you have the possibility to authenticate with a Github PAT. This is totally optional as the batcave is publically available in Github. Adding authentication can help you circumvent Github API rate limiting when encountered. 

```powershell
[Session 1: RudeusGreyrat@WK01] » batcave authenticate
Enter Github API Token:
Token saved in client process memory
```

If you restart `orsted-client`, authentication will be needed again.

