'use strict'

const { join } = require('path')

module.exports = async function (cli) {
  await cli.makeConfig('nuxt.js', join(__dirname, './config/nuxt.js'))
    .catch(() => {})
  cli.command.completed('create', 'config/nuxt.js')

  await cli.copy(join(__dirname, 'template'), join(cli.helpers.resourcesPath('nuxt')))
    .catch(() => {})
  cli.command.completed('create', 'resources/nuxt/')
}
