'use strict';

// Webpack dependencies
var path = require('path');
var webpack = require('webpack');

// Path definitions
var buildRoot = path.resolve(__dirname, '../../');

// CriticalCSS Plugins
var critical = require('webpack-plugin-critical');

// Environment flags
var build = process.env.NODE_ENV === 'build';
var isProduction = process.argv.indexOf('-p') !== -1;
var isHot = process.argv.indexOf('--hot') !== -1;

// Plugins
var plugins = [
];

// Define webpack bundles
var webpackBundles = {
	index: [],
	article: [],
	category: []
};

// Main webpack config
module.exports = {

}