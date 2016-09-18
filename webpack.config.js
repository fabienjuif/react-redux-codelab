const path = require('path')
const webpack = require('webpack')

const dev = (process.env.NODE_ENV !== 'production')

function getEntrySources(sources) {
  if (dev) {
    sources.push('webpack-dev-server/client?http://localhost:3000')
    sources.push('webpack/hot/only-dev-server')
  }

  return sources
}

function getLoaders(loaders) {
  loaders.push('babel')

  return loaders
}

function getPlugins(plugins) {
  if (dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}

module.exports = {
  devtool: dev ? 'eval' : '',
  entry: {
    tvscrub: getEntrySources([
      './src',
    ]),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    root: [path.resolve('./src'), path.resolve('./src/components')],
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  plugins: getPlugins([]),
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: getLoaders([]),
    }, {
      test: /global\.scss/,
      loader: 'style!css!sass',
    }, {
      test: /\.s?css$/,
      exclude: [path.resolve('./node_modules'), /global\.scss/],
      loaders: [
        'style',
        'css?modules&localIdentName=[path]_[local]__[hash:base64:5]',
        'sass',
      ],
    }],
  },
}
