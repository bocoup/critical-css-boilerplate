module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON( "package.json" ),
		// The following line sets a variable baseURL for production/local development environments:
		baseurl: process.env.baseurl || 'http://localhost:8080',
		// Capture the path to the CSS directory for the sake of both tasks:
		csspath: require( "path" ).resolve( "css/" )
	});

	grunt.loadTasks( "tasks" );

	grunt.registerTask( "critical", [
		"criticalcss",
		"cssmin:critical"
	]);
};