const fs = require('fs');
const path = require('path');
const Datauri = require('datauri');
const { types } = require('node-sass');
const imgSize = require('image-size');
const _ = require('lodash');

function fileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.R_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function getFullFilePath(filePath, includePaths) {
  if (!fileExists(filePath)) {
    if (_.isEmpty(includePaths)) {
      return null;
    }

    includePaths = includePaths.split(':');

    const fileDir = _.chain(includePaths)
      .uniq()
      .find((searchPath) => {
        const absolutePath = path.resolve(searchPath, filePath);
        return fileExists(absolutePath);
      })
      .value();

    if (fileDir) {
      return path.resolve(fileDir, filePath);
    }

    return null;
  }
  return filePath;
}

function encodeSvg(filePath) {
  const fileData = fs.readFileSync(filePath);

  return `data:image/svg+xml;charset=utf-8,${fileData}`
    .toString('utf-8')
    .replace(/"/g, '\'')
    .replace(/%/g, '%25')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/&/g, '%26')
    .replace(/#/g, '%23')
    .replace(/\s+/g, ' ');
}

module.exports = {
  'inline($image)': (image) => {
    let url;
    image = getFullFilePath(image.getValue(), this.options.includePaths);

    if (!image) {
      url = image;
    } else if (/\.svg$/i.test(image)) {
      url = encodeSvg(image);
    } else {
      url = new Datauri(image).content;
    }
    url = `url("${url}")`;
    return types.String(url);
  },
  'file-exists($file)': (file) => {
    file = getFullFilePath(file.getValue(), this.options.includePaths);
    return file ? types.Boolean.TRUE : types.Boolean.FALSE;
  },
  'image-size($file)': (file) => {
    file = getFullFilePath(file.getValue(), this.options.includePaths);
    const list = new types.List(2);
    const dimensions = imgSize(file);
    list.setValue(0, new types.Number(dimensions.width, 'px'));
    list.setValue(1, new types.Number(dimensions.height, 'px'));
    return list;
  },
  'pathjoin($paths...)': (args) => {
    const len = args.getLength();
    const paths = [];
    for (let i = 0; i < len; i++) {
      paths.push(args.getValue(i).getValue());
    }
    const result = path.join(...paths);
    return new types.String(result);
  },
  'extname($file)': (file) => {
    return new types.String(path.extname(file.getValue()));
  },
  'dirname($file)': (file) => {
    return new types.String(path.dirname(file.getValue()));
  },
  'basename($args...)': (args) => {
    const len = Math.min(args.getLength(), 2);
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(args.getValue(i).getValue());
    }
    result = path.basename(...result);
    return new types.String(result);
  }
};
