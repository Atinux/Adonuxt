'use strict'

const { Command } = require('@adonisjs/ace')

class NuxtBuild extends Command {
  /**
   * Command signature required by ace.
   *
   * @return {string}
   */
  static get signature () {
    return `nuxt:build { -a --analyze : Analyze JS Bundle }`
  }

  /**
   * Command description.
   *
   * @return {string}
   */
  static get description () {
    return 'Build your Nuxt app'
  }
  /**
   * Method called when command is executed. This method will
   * require all files from the migrations directory
   * and execute all pending schema files.
   *
   * @param  {object}   args
   *
   * @return {void}
   */
  handle (args, flags) {
    const Config = use('Config')
    const Nuxt = require('../src/Nuxt')

    new Nuxt({
      ...Config.get('nuxt'),
      dev: false, // Force dev: false to build for production
      build: {
        analyze: !!flags.analyze
      }
    }).build()
  }

}

module.exports = NuxtBuild
