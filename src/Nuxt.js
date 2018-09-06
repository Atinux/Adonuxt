'use strict'

const { Builder } = require('nuxt-edge')
const { Nuxt } = require('nuxt-edge/dist/nuxt-start')

class NuxtService {
  constructor (config) {
    this._config = this._computeConfig(config)
    this._app = new Nuxt(this._config)
  }

  render ({ auth, request, response, session, }) {
    response.implicitEnd = false
    request.request.auth = auth
    request.request.session = session

    this._app.render(request.request, response.response)
  }

  build () {
    new Builder(this._app).build()
  }

  _computeConfig (config) {
    const defaultConfig = {
      build: {
        dev: process.env.NODE_ENV !== 'production',
        analyze: {
          analyzerMode: 'static',
          generateStatsFile: true,
          statsFilename: 'webpack-stats.json',
        },
      },
      splitChunks: {
        pages: false,
      },
    }

    return { ...defaultConfig, ...config }
  }
}

module.exports = NuxtService
