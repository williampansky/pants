var path = require('path');

module.exports = {
  entry: './themes/pDev/static/babel/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./themes/pDev/static/babel')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
