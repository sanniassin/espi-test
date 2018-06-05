const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

module.exports = {
  context: srcDir,
  resolve: {
    extensions: ['.js', '.scss', '.jpg', '.jpeg', '.png', '.gif', '.svg'],
    modules: ['node_modules', '.']
  }
};
