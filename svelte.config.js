//-> needed for svelte vscode
const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
      data: '@import \'src/styles/variables.scss\';'
    }
  })
}
