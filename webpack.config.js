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
    index: './app/homepage/index.js',
    article: './app/article/index.js',
    category: './app/category/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
    new critical.CriticalPlugin({
      src: 'index.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: 'index.html'
    }),
    new critical.CriticalPlugin({
      src: 'category.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: 'category.html'
    }),
    new critical.CriticalPlugin({
      src: 'article.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: 'article.html'
    }),
    new ExtractTextPlugin('css/[name].css')
  ]
}