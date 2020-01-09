module.exports = {
  plugins: [
    require('postcss-import')(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.svelte', './src/template.html'],
            extractors: [
              {
                extractor: class {
                  static extract(content) {
                    return content.match(/[a-zA-Z0-9-:_/]+/g) || []
                  }
                },
                extensions: ['svelte', 'html']
              }
            ],
            whitelist: []
          }),
          require('autoprefixer')(), // included with svelte-preprocess
          require('cssnano') // included with rollup-plugin-postcss
        ]
      : [])
  ]
}
