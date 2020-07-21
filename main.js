const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()
const commitRE = /^(revert: )?(feat|fix|update|release|docs|style|refactor|build)(\(.+\))?: .{1,50}/
chalk.level = 1
if (!commitRE.test(msg)) {
  console.log()
  console.log(`${chalk.bgRed.white(' ERROR ')} ${chalk.red(
    `invalid commit message format.`
  )}\n\n` + chalk.red(
    `Please submit the correct message format. Examples:\n\n`) +
    `    ${chalk.green(`feat: 添加 /views/login`)}\n` +
    `    or\n` +
    `    ${chalk.green(`fix: 修复 xxxBUG`)}\n` +
    `    or\n` +
    `    ${chalk.green(`update: 修改 /views/login`)}\n\n` +
    chalk.red(`See https://shimo.im/docs/uJRXiSTYx2UhfVG5/  for more details.\n`)
  )
  process.exit(1)
}