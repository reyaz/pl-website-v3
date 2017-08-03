var path = require('path')

const clientConfig = {
  entry: './src/client/main.js',
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
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'build/client/')
  },
  target: 'web'
}

module.exports = [
  clientConfig
]
