# SDML Extension for Visual Studio Code

![SDML Logo Text](https://raw.githubusercontent.com/sdm-lang/.github/main/profile/horizontal-text.svg)

This extension, provides syntax support for the [Simple Domain Modeling Language](https://sdml.io) (SDML).

## Features

Syntax highlighting is provided, based upon the existing TextMate grammar in the [SDML.tmbundle](https://github.com/sdm-lang/SDML.tmbundle) repository.

![Syntax Highlighting](./images/vscode-highlighting.png)

Some of the TextMate bundle's snippets have been copied over as well.

The SDML command-line tool is integrated via the Terminal window. The available commands are:

* Draw Concept Diagram
* Draw Entity-Relationship Diagram
* Draw UML Class Diagram

## Known Issues

Does not yet support formal constraints.

## Installation

This can be directly installed from

* the Visual Studio [marketplace](https://marketplace.visualstudio.com/items?itemName=SimonJohnston.sdml)
* the Extensions View within VSCode, search for 'sdml'
* The command line: `code --install-extension SimonJohnston.sdml`
* or manually:

```bash
$ git clone https://github.com/sdm-lang/sdml-vscode.git
$ code --install-extension ./sdml-vscode
```

## License

This package is released under the Apache License, Version 2.0. See LICENSE file for details.

## Release Notes

### 0.2.1

* Fix: update README for 0.2.0

### 0.2.0

* Feature: add commands for drawing diagrams, accessible from the palette.
  * Commands only available when editing an SDML file.
  * Execute commands in a terminal window, this allows the user to learn the CLI.

![Drawing via Terminal](./images/vscode-draw-terminal.png)

* Feature: add settings for command-line executable name and default drawing format.

![Extension Settings](./images/vscode-settings.png)

### 0.1.0

Initial release.
