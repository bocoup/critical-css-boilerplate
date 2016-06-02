<?php
	function load_critical_css($slug = false) {
		$output = '';
		if ($slug === false) {
			return;
		}
		// get path to critical css for defined slug
		$criticalCssPath = 'css/critical/' . $slug . '.css';
		// load the critical css for this part of the site
		$critical = @file_get_contents($criticalCssPath);
		// check to see if it is empty
		$criticalCssNotEmpty = $critical !== false && strlen($critical) !== 0;
		// determine if we can/should use critical css
		$useCriticalCss = $criticalCssNotEmpty && (
			!isset($_COOKIE['stylesCached']) || isset($_GET['nocritical'])
		);
		// ascertain if we are in local dev or not
		$localDev = $_SERVER['SERVER_NAME'] == 'localhost';
		// serve the correct file depending on our environment
		$css = 'css/' . ($localDev ? 'styles.css' : 'styles.min.css');
		// serve up critical css if we need it
		if ($useCriticalCss) {
			$output = '<style>';
			$output .= $critical;
			$output .= '</style>';
			$output .= '<script>';
			$output .= '  window.enhance = {};';
			$output .= '  !function(){function e(e,n,t){function o(){for(var n,r=0;r<d.length;r++)d[r].href&&d[r].href.indexOf(e)>-1&&(n=!0);n?i.media=t||"all":setTimeout(o)}var i=window.document.createElement("link"),r=n||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",r.parentNode.insertBefore(i,r),o(),i}window.enhance.loadCSS=e}();';
			$output .= '  window.enhance.loadCSS( "' . $css . '" );';
			$output .= "  document.cookie = 'stylesCached=true; expires=0; path=/';";
			$output .= '</script>';
		} else {
			$output = '<link rel="stylesheet" type="text/css" href="'. $css .'">';
		}
		echo $output;
	}
?>