// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const imgDir = path.resolve(srcDir, 'style/images');
const browsers = ['Firefox ESR', 'IE 11', 'Android >= 5.0', 'Safari >= 9'];

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.resolve.modules.push(srcDir);
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
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
          functions: require('../config/sass-helpers')
        }
      },
      'import-glob-loader'
    ]
  });

  // Return the altered config
  return storybookBaseConfig;
};
