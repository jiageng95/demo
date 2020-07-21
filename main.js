const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
console.log(msgPath, msg)
console.log(chalk.red(
    `  1Proper commit message format is required for automated changelog generation. Examples:\n\n`
))
console.error(chalk.bgRed.white(' ERROR '))