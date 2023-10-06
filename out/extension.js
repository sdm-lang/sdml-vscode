"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
const child_process_1 = require("child_process");
const EXTENSION_SHORT_NAME = 'sdml';
const DEFAULT_EXECUTABLE_NAME = 'sdml';
const DEFAULT_TERMINAL_NAME = 'SDML Command-Line';
const DEFAULT_DRAWING_FORMAT = 'png';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    console.log(`Extension ${context.extension.id} is activating`);
    const drawConceptDiagramHandler = () => {
        execDrawSdmlDiagram('concepts');
        vscode.window.showInformationMessage('drawConceptDiagram done.');
    };
    context.subscriptions.push(vscode.commands.registerCommand(`${EXTENSION_SHORT_NAME}.drawConceptDiagram`, drawConceptDiagramHandler));
    const drawEntityDiagramHandler = () => {
        execDrawSdmlDiagram('entity-relationship');
        vscode.window.showInformationMessage('drawEntityDiagram done.');
    };
    context.subscriptions.push(vscode.commands.registerCommand(`${EXTENSION_SHORT_NAME}.drawEntityDiagram`, drawEntityDiagramHandler));
    const drawClassDiagramHandler = () => {
        execDrawSdmlDiagram('uml-class');
        vscode.window.showInformationMessage('drawClassDiagram done.');
    };
    context.subscriptions.push(vscode.commands.registerCommand(`${EXTENSION_SHORT_NAME}.drawClassDiagram`, drawClassDiagramHandler));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
function which(cmd) {
    const result = (0, child_process_1.spawnSync)('which', [cmd]);
    return result.stdout.toString().trim();
}
function execDrawSdmlDiagram(diagram) {
    const config = vscode.workspace.getConfiguration(EXTENSION_SHORT_NAME);
    const executable = config.get('command.executable', DEFAULT_EXECUTABLE_NAME);
    const executablePath = which(executable);
    if (executablePath !== "") {
        const format = config.get('drawing.defaultFormat', DEFAULT_DRAWING_FORMAT);
        let editor = vscode.window.activeTextEditor;
        if (editor !== undefined && editor.document.languageId === EXTENSION_SHORT_NAME) {
            const inputPath = editor.document.fileName;
            const basename = path.basename(inputPath, path.extname(inputPath));
            const outputPath = path.join(path.dirname(inputPath), `${basename}.${format}`);
            return execSdmlInTerminal(executablePath, [
                'draw', '--diagram', diagram,
                '--output-format', format,
                '--input-file', inputPath,
                '--output-file', outputPath
            ]);
        }
        else {
            console.error(`Should not have gotten here from a non-sdml editor`);
        }
    }
    else {
        console.error(`Could not find the executable named '${executable}'`);
    }
}
function execSdmlInTerminal(cmd, args) {
    const config = vscode.workspace.getConfiguration(EXTENSION_SHORT_NAME);
    const terminalName = config.get('command.terminalName', DEFAULT_TERMINAL_NAME);
    let terminal = vscode.window.terminals.find((t) => t.name === terminalName);
    if (terminal === undefined) {
        terminal = vscode.window.createTerminal(terminalName);
    }
    terminal.show(true);
    terminal.sendText(cmd + ' ' + args.join(' '));
}
//# sourceMappingURL=extension.js.map