const path = require('path');

module.exports = {
  entry: {
    app: ['./app/entry.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
