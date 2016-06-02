module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-contrib-cssmin" );

	grunt.config( "cssmin", {
		options: {
			banner: "/*! Built on: <%= grunt.template.today('yyyy-mm-dd') %> */"
		},
		critical: {
			expand: true,
			cwd: "<%=csspath%>",
			dest: "<%=csspath%>/critical/",
			src: '*'
		}
	});
};