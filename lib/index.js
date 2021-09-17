#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var list_1 = require("./list");
var add_1 = require("./add");
var markDone_1 = require("./markDone");
var clear_1 = require("./clear");
commander_1.program
    .command('list')
    .description('List all the TODO tasks')
    .action(list_1.list);
commander_1.program
    .command('add <task>')
    .description('Add new TODO task')
    .action(add_1.add);
commander_1.program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone_1.markDone);
commander_1.program
    .command('clear')
    .description('Clears the list')
    .option('-t, --tasks <tasks...>', 'The tasks to clear. If not specificed, all tasks will be cleared.')
    .action(clear_1.clear);
commander_1.program.parse();
