module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON( "package.json" ),
		baseurl: process.env.baseurl || 'http://localhost:8080',
		csspath: require( "path" ).resolve( "css/" )
	});

	grunt.loadTasks( "tasks" );

	grunt.registerTask( "critical", [
		"criticalcss",
		"cssmin:critical"
	]);
};