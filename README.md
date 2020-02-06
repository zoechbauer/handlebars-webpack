This is simply a working example of how to integrate the Handlebars templating solution into a typical webpack workflow.

# You Need webpack First!

Make sure you have webpack installed globally on your machine.

`npm install webpack -g`

For additional help see [the official webpack site](https://webpack.github.io/).

After cloning this repo and CD'ing into the project folder be sure to run `npm install`

Then, whenever you want to bundle everything up simply run `webpack`

## Celebrate.

# zoe's planned enhancements

These enhancements are used to become familiar with webpack and are developed under feature branch webpack-dev-server. I'll use the learned knowledge of Brad Schiff's Udemy travel-site course.

## What I still want to do

- use app.js as collection of links to modules
- use hash names instead of bundle.js and styles.css

## What I already committed

- changed folder structure
- webpacks creates production folder docs on npm run build
- clear production folder on build
- use separate folder for development and production
- use webpack for build & webpack-dev-server for development
- convert ES6 to ES2015 with babel
- extract css from bundle.js
- use native javascript **fetch api for http request**
