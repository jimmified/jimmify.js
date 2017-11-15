const path = require('path');

module.exports = function (options={}) {
  return {
      entry: './src/main',
      output: {
          path: path.join(__dirname, 'dist'),
          filename: 'jimmify.js',
          library: 'Jimmy',
          libraryTarget: 'umd'
      },

      module: {
          rules: [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  exclude: /node_modules/
              }
          ]
      }
  }
};