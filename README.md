# Critical CSS Boilerplate

A bit of grunt, a bit of CSS, all helping you be faster.


## Getting Started
To run this project locally, spin up a development server using the following command:

```shell
$ php -S localhost:8080
```

### Generating CriticalCSS

`grunt critical` will generate CriticalCSS files for each of the pages listed in `/tasks/criticalcss.js`—currently the “home” and the “category” pages. It will then minify the results in place.

#### Dissecting `criticalcss.js`

The CriticalCSS Grunt task itself is relatively uncomplicated. 

```javascript
grunt.config( "criticalcss", {
  PAGENAME: {
    options: {
      outputfile: "<%=csspath%>/critical/PAGENAME.css",
      filename: "<%=csspath%>/styles.css",
      url: "<%=baseurl%>/PATH/TO/PAGE?nocritical"
    }
  }
}
```

Each page is a configurable object, containing the following:

*`outputfile`*
The desired path for the output; here, in a “critical” subdirectory inside the CSS directory. Like any generated CSS, this should be .`gitignore`’d.

*`filename`*
The local path to the full stylesheet.

*`url`*
The URL for the page. `baseurl`, seen here, is provided by `Gruntfile.js` and should be set to either a local development URL or the remote URL, depending on the task’s current context. The `?nocritical` query string is required so that the page used to generate the CriticalCSS doesn’t _contain_ CriticalCSS—otherwise the results of the generation would be the same every time the task is run, rather than relying on the full stylesheet for necessary styles.