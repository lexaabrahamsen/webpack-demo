const path = require('path');

module.exports = {
  // entry: './src/index.js', // example from webpack docs
  entry: "./client/src/index.js",

  output: {
    // filename: 'main.js', // example from webpack docs
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist') // example from webpack docs
    path: path.resolve(__dirname, './client/dist')
  },
  module: {
    rules: [{
      test: /\.txt$/, use: 'bable-loader'
    }]
  },
  mode: 'production'
};
