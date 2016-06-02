<?php
	function load_critical_css($slug = false) {
		$output = '';

		// Are we in our local dev environment?
		$localDev = $_SERVER['SERVER_NAME'] == 'localhost';

		// Use the minified full CSS if we’re in production:
		$css = 'css/' . ($localDev ? 'styles.css' : 'styles.min.css');

		// If no page slug was given, just load the stylesheet appropriate to the current dev environment.
		if ($slug === false) {
			print '<link rel="stylesheet" type="text/css" href="'. $css .'">';
			return false;
		}

		// Get the CriticalCSS file for a given page slug, to match the names assigned in /tasks/criticalcss.js:
		$criticalCssPath = 'css/critical/' . $slug . '.css';

		// Get the contents of the CriticalCSS file:
		$critical = @file_get_contents($criticalCssPath);

		// Make sure the generated file isn’t empty:
		$criticalCssNotEmpty = $critical !== false && strlen($critical) !== 0;

		// If the file isn’t empty and we’re not opting out of CriticalCSS behavior—either because the cache is primed or because we’re explicitly avoiding it—we’ll be using the contents of the CriticalCSS file.
		$useCriticalCss = $criticalCssNotEmpty && (
			!isset($_COOKIE['stylesCached']) || isset($_GET['nocritical'])
		);

		if ($useCriticalCss) {
			// Serve the critical styles inline.
			$output = '<style>';
			$output .= $critical;
			$output .= '</style>';

			// Load a small snippet of JavaScript that allows us to asynchronously load our full stylesheet:
			$output .= '<script>';
			$output .= '  window.enhance = {};';
			$output .= '  !function(){function e(e,n,t){function o(){for(var n,r=0;r<d.length;r++)d[r].href&&d[r].href.indexOf(e)>-1&&(n=!0);n?i.media=t||"all":setTimeout(o)}var i=window.document.createElement("link"),r=n||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",r.parentNode.insertBefore(i,r),o(),i}window.enhance.loadCSS=e}();';

			// Asynchronously load said full stylesheet:
			$output .= '  window.enhance.loadCSS( "' . $css . '" );';

			// Since it will be faster to fetch the stylesheet from the cache on subsequent pageviews, set a cookie as a proxy for the primed cache:
			$output .= "  document.cookie = 'stylesCached=true; expires=0; path=/';";
			$output .= '</script>';
		} else {
			$output = '<link rel="stylesheet" type="text/css" href="'. $css .'">';
		}
		print $output;
	}
?>