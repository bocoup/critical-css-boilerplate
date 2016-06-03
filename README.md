# Critical CSS Boilerplate
There’s a lot of information about the CriticalCSS technique out there—[how it works](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) and [why it is so rad](https://www.filamentgroup.com/lab/performance-rwd.html)—and disparate [tools to help with the process](https://github.com/addyosmani/critical).

What we haven’t seen much of was an isolated demo of CriticalCSS in action—a minimal, functional example of a seamless CriticalCSS setup—done in a way that provides a clear path to fully automated CriticalCSS generation and inclusion.

That’s our goal for this repo.

Currently, this project assumes very little about development environment and nothing about deployment strategy—it is using Grunt for the CSS generation and minification, a relatively minimal PHP function for inclusion, and _nothing_ in the way of a path to deployment.

Ultimately, this repository will contain multiple examples of the CriticalCSS approach, with clear documentation and example code for various languages and deployment strategies.

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

Additional configuration options are documented at [https://www.npmjs.com/package/grunt-criticalcss](https://www.npmjs.com/package/grunt-criticalcss).