'use strict';

// Webpack dependencies
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Path definitions
var buildRoot = path.resolve(__dirname, './');

// CriticalCSS Plugins
var critical = require('webpack-plugin-critical');

// Plugins
var plugins = [
];

// Main webpack config
module.exports = {
  entry: {
    home: './app/homepage/index.js',
    article: './app/article/index.js',
    category: './app/category/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'js/[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: buildRoot,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
  ]
}