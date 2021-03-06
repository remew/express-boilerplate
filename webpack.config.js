'use strict';
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: ['normalize.css', './browser/index.ts'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'build/public'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      title: 'express boilerplate',
      template: './browser/template/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
