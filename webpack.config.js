var nodeExternals = require('webpack-node-externals')
var path = require('path')

const clientConfig = {
  entry: {
    'main': './src/client/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build', 'client')
  },
  target: 'web'
}

const serverConfig = {
  entry: {
    'main': './src/server/main.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  node: {
    __dirname: true,
    __filename: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build', 'server')
  },
  target: 'node'
}

module.exports = [
  clientConfig,
  serverConfig
]
