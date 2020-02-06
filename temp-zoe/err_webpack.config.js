// TODO  use app.js as collection of links to modules
// TODO  use separate folder for development and production
// TODO  clear production folder on build
// TODO  use webpack-dev-server on npm run dev

const currentTask = process.env.npm_lifecylce_event;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fse = require('fs-extra');

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.beforeRun.tapAsync('MyCustomBeforeRunPlugin', function(
      compiler,
      callback
    ) {
      // debugger
      console.dir(compiler.options);
      callback();
    });

    // compiler.hooks.done.tap('copy images', () => {
    //   fse.copySync('./app/assets/images', './docs/assets/images');
    // });
  }
}

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
  console.log('currentTask', currentTask);
  console.log('config', config);
}

if (currentTask === 'build') {
  config.mode = 'production';
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'docs')
  };
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile());
  console.log('currentTask', currentTask);
  console.log('config', config);
}

module.exports = config;
