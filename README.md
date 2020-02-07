This is simply a working example of how to integrate the Handlebars templating solution into a typical webpack workflow.

# You Need webpack First!

Make sure you have webpack installed globally on your machine.

`npm install webpack -g`

For additional help see [the official webpack site](https://webpack.github.io/).

After cloning this repo and CD'ing into the project folder be sure to run `npm install`

Then, whenever you want to bundle everything up simply run `webpack`

## Celebrate.

# Some enhancements by zoe

This enhancements were used to become familiar with webpack and have been developed under feature branch webpack-dev-server. I'll used the learned knowledge of Brad Schiff's Udemy Course.

## committed changes

- changed folder structure
- webpacks creates production folder docs on npm run build
- clear production folder on build
- use separate folder for development and production
- use webpack for build & webpack-dev-server for development
- convert ES6 to ES2015 with babel
- extract css from bundle.js
- use native javascript **fetch api for http request**
- use hash names instead of bundle.js and styles.css (but the files are not minified)
- added normalize.css
- minify the css-file with cssnano
