"use strict";

exports.__esModule = true;
exports.convertFile = convertFile;
exports.exitError = exitError;
exports.readdirFilter = readdirFilter;
exports.isCompilableExtension = isCompilableExtension;

var _chalk = _interopRequireDefault(require("chalk"));

var _path = require("path");

var _fs = _interopRequireDefault(require("mz/fs"));

var _recursiveReaddir = _interopRequireDefault(require("recursive-readdir"));

exports.readdir = _recursiveReaddir.default;

var _ = require("../");

exports.rawConvert = _.rawConvert;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function convertFile(_x, _x2) {
  return _convertFile.apply(this, arguments);
}

function _convertFile() {
  _convertFile = _asyncToGenerator(function* (filePath, opts) {
    const code = yield _fs.default.readFile(filePath, 'utf-8');
    return (0, _.rawConvert)(code, opts, {
      filePath
    });
  });
  return _convertFile.apply(this, arguments);
}

function exitError(error) {
  console.error(_chalk.default.red(error));
  process.exit(1);
}

function readdirFilter(_x3) {
  return _readdirFilter.apply(this, arguments);
}

function _readdirFilter() {
  _readdirFilter = _asyncToGenerator(function* (dirname) {
    return (yield (0, _recursiveReaddir.default)(dirname)).filter(isCompilableExtension);
  });
  return _readdirFilter.apply(this, arguments);
}

const COMPILABLE_EXTENSIONS = ['.svg', '.SVG'];

function isCompilableExtension(filename) {
  const ext = (0, _path.extname)(filename);
  return COMPILABLE_EXTENSIONS.includes(ext);
}