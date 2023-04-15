const path = require('path');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },
};
