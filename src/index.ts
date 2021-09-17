#! /usr/bin/env node

import { program } from 'commander';
import { list } from './list';
import { add } from './add';
import { markDone } from './markDone';
import { clear } from './clear';

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)


program
    .command('add <task>')
    .description('Add new TODO task')
    .action(add)


program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)



program
    .command('clear')
    .description('Clears the list')
    .option('-t, --tasks <tasks...>', 'The tasks to clear. If not specificed, all tasks will be cleared.')
    .action(clear)



program.parse()