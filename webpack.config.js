const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
  resolve: { extensions: ['.js', '.jsx'] },
  entry: `${APP_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(),
  ],
};

module.exports = config;
