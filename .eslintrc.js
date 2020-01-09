module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    semi: [1, 'never'],
    quotes: [1, 'single']
  },
  settings: {
    'svelte3/ignore-styles': attributes =>
      attributes.lang && attributes.lang.includes('scss')
  }
}
