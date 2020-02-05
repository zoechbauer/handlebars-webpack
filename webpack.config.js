// TODO active: change folder structure, use js classes, output-dir=docs
// TODO install and configure webpack-dev-server
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

let pages = fse
  .readdirSync('./app')
  .filter(file => file.endsWith('.html'))
  .map(
    page =>
      new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`
      })
  );

module.exports = {
  entry: './app/assets/scripts/app.js',
  plugins: pages,
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main-bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/i,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              helperDirs: path.resolve(
                __dirname,
                './app/assets/scripts/modules'
              )
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
