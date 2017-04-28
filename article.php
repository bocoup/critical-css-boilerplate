<?php include( "functions/criticalcss.php" ); ?>
<!DOCTYPE html>
	<html dir="ltr" lang="en-US">
	<head>
		<meta charset="UTF-8">
		<?php load_critical_css( "article" ); ?>
	</head>
	<body>
		<h1>Hello there</h1>

		<p>This page doesn’t have a CriticalCSS file associated with it, but uses the same loading pattern as all the other pages. In the event that a CriticalCSS file isn’t available for a page with a given slug, the full stylesheet is loaded as usual.</p>

		<p>This page can be added to the CriticalCSS pattern by adding a new entry in <code>/tasks/criticalcss.js</code>.</p>
	</body>
</html>