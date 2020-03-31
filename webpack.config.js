const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const src = path.join(__dirname, '/client/src');
const dist = path.join(__dirname, '/client/src/dist');

module.exports = {
  mode: 'development',
  entry: {
    app: `${src}/index.tsx`,
  },
  output: {
    filename: '[name].bundle.js',
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
        test: /\.(webp)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }
    ]
  },
  optimization: {
    concatenateModules: true,
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        material: {
          test: /[\\/]node_modules[\\/](@material-ui|material-ui)[\\/]/,
          name: 'vendor.material',
          enforce: true,
          priority: 90
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true
        }
      }
    }
  }
};