const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

module.exports = {
  context: srcDir,
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', '.']
  }
};
