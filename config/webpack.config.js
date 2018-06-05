const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcDir = path.resolve(__dirname, '../src');
const imgDir = path.resolve(srcDir, 'style/images');

const isProduction = process.env.NODE_ENV === 'production';

const browsers = ['Firefox ESR', 'IE 11', 'Android >= 5.0', 'Safari >= 9'];

const babelOptions = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers
      },
      modules: false
    }],
    '@babel/preset-stage-3',
    '@babel/preset-react'
  ],
  plugins: [],
  generatorOpts: {
    asciiUnsaf1e: true
  }
};

const definePluginOptions = {
  'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
};

module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: srcDir,
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    publicPath: '/',
    jsonpFunction: 'sdelanoWebpackJsonp'
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', '.']
  },
  performance: {
    hints: false
  },
  plugins: [
    new ExtractTextPlugin('style.[chunkhash].css'),
    new HtmlWebpackPlugin({
      template: path.resolve(srcDir, 'index.html'),
      filename: 'index.html'
    }),
    new webpack.DefinePlugin(definePluginOptions)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        },
        exclude: {
          test: /node_modules/,
          exclude: /webpack-dev-server\/client/
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                import: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers
                  }),
                  require('css-mqpacker')
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [imgDir],
                functions: require('./sass-helpers')
              }
            },
            'import-glob-loader'
          ]
        })
      },
      { test: /\.svg$/, use: ['file-loader?name=style/images/[name].[ext]', 'svgo-loader'] },
      { test: /\.(png|jpg|jpeg|gif)$/, issuer: /\.scss$/, use: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(otf|ttf|woff|woff2|eot)$/, use: 'file-loader?name=style/fonts/[name].[ext]' }
    ]
  },
  stats: {
    assets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: {
      index: '/index.html'
    },
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }
};
