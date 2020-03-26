const path = require('path');

const src = path.join(__dirname, '/client/src');
const dist = path.join(__dirname, '/client/src/dist');

module.exports = {

  mode: 'development',
  devtool: "source-map",
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
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        exclude: [
          /node_modules/,
          /logo.jpg/
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  }
};
