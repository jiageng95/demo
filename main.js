const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()
chalk.level = 1
const commitRE = /^(revert: )?(feat|fix|update|release|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
if (!commitRE.test(msg)) {
  console.log()
  console.log(`${chalk.bgRed.white(' ERROR ')} ${chalk.red(
    `提交不规范, 亲人两行泪\n\n`
  )}`)
}