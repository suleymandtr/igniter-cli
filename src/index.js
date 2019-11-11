#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const yargs = require("yargs");
const files = require('./lib/files');

// Clear console
clear();

// Show project title
console.log(
    chalk.yellow(
        figlet.textSync('IGNITER CLI', { horizontalLayout: 'full' })
    )
)

const options = yargs
    .usage("Usage: commandName --parameter")
    .option("c", { alias: "create", describe: "Create page", type: "string" })
    .argv;

if (options.create) {
    files.createDistDirectory();
    files.createFile(options.create)
}