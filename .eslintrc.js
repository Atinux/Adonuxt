'use strict'

module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended'
  ],
  // add your custom rules here
  rules: {
    // ESLint rules
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-undef': 2,
    'no-unused-vars': 2,
    'eqeqeq': 2,
    'quotes': [
      0,
      'single'
    ],
    'strict': 0,
    'no-use-before-define': 0,
    'curly': [
      2,
      'multi-line'
    ],
    'no-shadow': 0,
    'new-cap': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'always',
        'named': 'always'
      }
    ],
    'space-before-blocks': [
      2,
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always'
      }
    ],
    'keyword-spacing': [
      2,
      {
        'before': true,
        'after': true
      }
    ]
  },
  globals: {
    'use': true
  }
}
