/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  env: {
    es2022: true,
    browser: true,
    node: true,
  },

  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    withDefaults: true,
  },

  extends: [
    './.eslintrc-auto-import.json',

    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],

  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      extends: [
        'plugin:cypress/recommended'
      ]
    }

  ],

  parserOptions: {
    ecmaVersion: 'latest',
    // parser: '@typescript-eslint/parser',
    // sourceType: 'module',
  },

  ignorePatterns: ['docs', '.gitignore'],

  // https://eslint.org/docs/latest/rules/__rule_key__
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'eqeqeq': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-var': ['error'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': ['warn', 'always'],
  }
}
