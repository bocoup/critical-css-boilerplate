module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-criticalcss" );

	grunt.config( "criticalcss", {
		home: {
			options: {
				outputfile: "<%=csspath%>/critical/home.css",
				filename: "<%=csspath%>/styles.css",
				url: "<%=baseurl%>"
			}
		}
	});
};
