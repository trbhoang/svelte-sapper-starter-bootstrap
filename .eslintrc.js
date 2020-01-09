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
    /**
     * If using a preprocessor, apply setting to ignore style tags
     * with the lang attribute set otherwise linting will fail. (lang="scss")
     *
     * The eslint-plugin-svelte docs were outdated.
     * Sample with correct option can be located within test/samples.
     *
     * WORKING EXAMPLE
     * 'svelte3/ignore-styles': attributes => attributes.foo && attributes.foo.includes('bar')
     * 'svelte3/ignore-styles': attributes => attributes.lang && attributes.lang.includes('scss')
     *
     * DOCS
     * https://github.com/sveltejs/eslint-plugin-svelte3#svelte3ignore-styles
     * https://github.com/sveltejs/eslint-plugin-svelte3/tree/master/test/samples
     */
  }
}
