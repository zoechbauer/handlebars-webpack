// TODO  use app.js as collection of links to modules
// TODO use hash names

const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader']
};

let config = {
  entry: './app/assets/scripts/app.js',
  plugins: pages,
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
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      cssConfig
    ]
  }
};

if (currentTask === 'dev') {
  config.mode = 'development';
  cssConfig.use.unshift('style-loader');
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  };
  config.devServer = {
    before: function(app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true
  };
}

if (currentTask === 'build') {
  config.mode = 'production';
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'docs')
  };
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  );
}

module.exports = config;
