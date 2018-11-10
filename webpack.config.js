const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.jsx?$/],
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: path.resolve(__dirname, '/node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            compact: true,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};


