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
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
};