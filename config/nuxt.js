'use strict'

const Helpers = use('Helpers')

module.exports = {
  /**
   * Define the workspace of your nuxt.js application.
   *
   * https://nuxtjs.org/api/configuration-rootdir
   */
  rootDir: Helpers.appRoot(),

  /**
   * Define the source directory of your nuxt.js application.
   *
   * https://nuxtjs.org/api/configuration-srcdir
   */
  srcDir: Helpers.appRoot('resources/nuxt'),

  /**
   * Define the dist directory for your Nuxt.js application.
   *
   * https://nuxtjs.org/api/configuration-builddir
   */
  buildDir: Helpers.tmpPath('nuxt'),

  /**
   * Nuxt.js let you define all default meta for your application.
   *
   * https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Adonuxt',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' },
    ],
    link: [
    ],
  },

  /**
   * Nuxt.js uses its own component to show a progress bar between the routes.
   * You can customize it, disable it or create your own component.
   *
   * https://nuxtjs.org/api/configuration-loading
   */
  loading: { color: '#744d82' },

  /**
   * Modules are Nuxt.js extensions which can extendit's core
   * functionality and add endless integrations.
   *
   * https://nuxtjs.org/api/configuration-modules
   */
  modules: [
  ],

  /**
   * Nuxt.js lets you customize the webpack configuration
   * for building your web application as you want.
   *
   * https://nuxtjs.org/api/configuration-build
   */
  build: {
  },
}
