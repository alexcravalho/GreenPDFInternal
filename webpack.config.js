const path = require('path');

const src = path.join(__dirname, '/client/src');
const dist = path.join(__dirname, '/client/src/dist');

module.exports = {

  mode: 'development',
  entry: {
    app: `${src}/index.tsx`,
  },
  output: {
    filename: 'bundle.js',
    path: dist,
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }
    ]
  },
  optimization: {
    concatenateModules: true
  }
};
