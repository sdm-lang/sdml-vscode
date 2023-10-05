# SDML

This extension, provides syntax support for the [Simple Domain Modeling Language](https://sdml.io) (SDML).

## Features

Syntax highlighting is provided, based upon the existing TextMate grammar in the [SDML.tmbundle](https://github.com/sdm-lang/SDML.tmbundle) repository.

![Syntax Highlighting](./images/vscode-highlighting.png)

Some of the TextMate bundle's snippets have been copied over as well.

## Known Issues

Does not yet support formal constraints.

The SDML command-line tools is not integrated.

## Manual Installation

Find the extension folder for VSCode on your machine and use Git to clone a copy of this repository locally. Once copied you can restart VSCode to edit SDML files.

* Windows: `%USERPROFILE%\.vscode\extensions``
* macOS: `~/.vscode/extensions``
* Linux: `~/.vscode/extensions``

```bash
$ cd $HOME/.vscode/extensions
$ git clone https://github.com/sdm-lang/sdml-vscode.git
```

## Release Notes

### 0.1.0

Initial release.
