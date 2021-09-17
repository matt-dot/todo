const conf = new (require('conf'))()
const chalk = require('chalk')



const todoList = conf.get('todo-list')

function list () {
    if (todoList && todoList.length && todoList !== null) {
        // Tasks present
        console.log(chalk.blue.bold('Task in green are done. Tasks in red are not done'))
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                ) 
            } else {
                console.log(
                    chalk.redBright(`${index}. ${task.text}`)
                ) 
            }
        }) 
    } else {
        // Tasks not present
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
  
}

module.exports = list
