var gulp = require('gulp');

var criticalCss = require('gulp-penthouse');

gulp.task('critical-css-home', function () {
    return gulp.src('./static/css/home.css')
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

gulp.task('critical-css-article', function () {
    return gulp.src('./static/css/article.css')
        .pipe(criticalCss({
            out: 'article.css',
            url: 'http://localhost:9000/article.php',
            width: 1300,
            height: 900,
            strict: true,
            userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }))
        .pipe(gulp.dest('./static/css/critical/'));
});

gulp.task('critical-css-category', function () {
    return gulp.src('./static/css/category.css')
        .pipe(criticalCss({
            out: 'category.css',
            url: 'http://localhost:9000/category.php',
            width: 1300,
            height: 900,
            strict: true,
            userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }))
        .pipe(gulp.dest('./static/css/critical/'));
});

gulp.task('default', ['critical-css-home','critical-css-article', 'critical-css-category']);
