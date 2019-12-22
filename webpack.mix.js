const mix = require('laravel-mix')
const path = require('path')
const cssImport = require('postcss-import')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

Mix.listen('configReady', config => {
  const scssRule = config.module.rules.find(r => r.test.toString() === /\.scss$/.toString())
  const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader').options
  scssOptions.implementation = require('sass')
  scssOptions.fiber = require('fibers')
  // scssOptions.data = '@import "./resources/scss/variables.scss";'

  const sassRule = config.module.rules.find(r => r.test.toString() === /\.sass$/.toString())
  const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader').options
  sassOptions.implementation = require('sass')
  sassOptions.fiber = require('fibers')
  // sassOptions.data = '@import "./resources/scss/variables.scss"'
})

mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    cssImport(),
  ])
  .webpackConfig({
    plugins: [
      new VuetifyLoaderPlugin
    ],
    output: {
      chunkFilename: 'js/[name].js?id=[chunkhash]'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js',
        '@': path.resolve('resources/js'),
      },
    },
    module: {
      rules: [{
        test: /\.pug$/,
        oneOf: [{
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        }, {
          use: ['raw-loader', 'pug-plain-loader']
        }]
      }]
    }
  })
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  })
  .version()
  .sourceMaps()
