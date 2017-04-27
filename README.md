# Critical CSS Boilerplate
There’s a lot of information about the CriticalCSS technique out there—[how it works](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) and [why it is so rad](https://www.filamentgroup.com/lab/performance-rwd.html)—and disparate [tools to help with the process](https://github.com/addyosmani/critical).

// todo: write more about why critical css is good here

### Generating CriticalCSS

Build your project with webpack using:

```shell
npm run build
```
This project is using a [webpack wrapper plugin](https://github.com/nrwl/webpack-plugin-critical) for the [Critical](https://github.com/addyosmani/critical) library developed by Addy Osami.

It is instantiated in the webpack.config under plugins:
```
  plugins: [
    new critical.CriticalPlugin({
      src: 'index.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: 'index.html'
    }),
    new critical.CriticalPlugin({
      src: 'category.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: 'category.html'
    }),
    new critical.CriticalPlugin({
      src: 'article.html',
      base: path.resolve(__dirname),
      inline: true,
      minify: true,
      dest: 'article.html'
    })
   ]
```
Note that each entry point will need to be added to generate the Critical CSS.   The webpack wrapper only takes strings for `src` and `dest`.
