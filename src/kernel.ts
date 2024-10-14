import { HelpCommand, Kernel, ListLoader } from '@adonisjs/ace'
import { HTTPProxy } from './commands/http_proxy.js'

const kernel = Kernel.create()

kernel.addLoader(new ListLoader([HelpCommand, HTTPProxy]))

kernel.defineFlag('help', {
  type: 'boolean',
  alias: 'h',
  description:
    'Display help for the given command. When no command is given display help for the list command',
})

kernel.defineFlag('env', {
  type: 'string',
  description: 'The environment the command should run under',
})

kernel.defineFlag('ansi', {
  type: 'boolean',
  showNegatedVariantInHelp: true,
  description: 'Enable/disable colorful output',
})

kernel.on('ansi', (_, $kernel, options) => {
  if (options.flags.ansi === false) {
    $kernel.ui.switchMode('silent')
  }

  if (options.flags.ansi === true) {
    $kernel.ui.switchMode('normal')
  }
})

kernel.on('help', async (command, $kernel, options) => {
  options.args.unshift(command.commandName)

  await new HelpCommand($kernel, options, kernel.ui, kernel.prompt).exec()

  return true
})

export { kernel }
