const webpack = require('webpack')
const chalk = require('chalk')
const config = require('../config/webpack.config.dev')

const clearConsole = () => process.stdout.write('\x1bc')

const compiler = webpack(config)

compiler.watch({ aggregateTimeout: 300, poll: true }, (err, stats) => {

  clearConsole()

  const hasErrors = stats.hasErrors()
  const hasWarnings = stats.hasWarnings()

  if (!hasErrors && !hasWarnings) return console.log(chalk.green('[webpack] compiled successfully!\n'))

  const json = stats.toJson({}, true)
  const formattedErrors = json.errors.map(message => 'Error in ' + message )
  const formattedWarnings = json.warnings.map(message => 'Warning in ' + message )

  if (hasErrors) {
    console.log(chalk.red('Failed to compile.\n'))
    return formattedErrors.forEach(message => console.log(`${message}\n`) )
  }

  if (hasWarnings) {
    console.log(chalk.yellow('Compiled with warnings.\n'))
    return formattedWarnings.forEach(message => console.log(`${message}\n`) )
  }

})

compiler.plugin('invalid', () => {

  clearConsole()

  console.log(chalk.yellow('[webpack] compiling...'))

})

module.exports = compiler
