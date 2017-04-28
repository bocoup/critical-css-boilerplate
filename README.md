# Critical CSS Boilerplate
There’s a lot of information about the CriticalCSS technique out there—[how it works](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) and [why it is so rad](https://www.filamentgroup.com/lab/performance-rwd.html)—and disparate [tools to help with the process](https://github.com/addyosmani/critical).

// todo: write more about why critical css is good here

## Getting Started

To run this project locally, spin up a development server using the following command:

```shell
$ php -S localhost:9000
```

### Generating CriticalCSS

Build your project with webpack using:

```shell
npm run build
```

This project is using webpack to bundle the JS and CSS files and Gulp to generate the css.
The gulp plugin used to generate CriticalCSS is called [Penthouse](https://www.npmjs.com/package/gulp-penthouse).

The criticalCss task for gulp looks like the following:
```
  gulp.task('critical-css-index', function () {
    return gulp.src('./static/css/index-full.css')
      .pipe(criticalCss({
        out: 'home.css',
        url: 'http://localhost:9000',
        width: 1300,
        height: 900,
        strict: true,
        userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }))
      .pipe(gulp.dest('./static/css/critical/'));
  });

```
