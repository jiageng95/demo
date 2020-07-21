const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
console.log(msgPath)
console.log(chalk.red(
    `  1Proper commit message format is required for automated changelog generation. Examples:\n\n`
))
console.error(chalk.bgRed.white(' ERROR '))