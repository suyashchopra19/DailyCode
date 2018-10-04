"use strict";

exports.__esModule = true;
exports.default = exports.rename = void 0;

var _fs = _interopRequireDefault(require("mz/fs"));

var _path = _interopRequireDefault(require("path"));

var _outputFileSync = _interopRequireDefault(require("output-file-sync"));

var _util = require("./util");

var _rename = require("../transforms/rename");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const rename = (relative, {
  ext = 'js'
} = {}) => {
  const relativePath = _path.default.parse(relative);

  relativePath.ext = `.${ext}`;
  relativePath.name = (0, _rename.pascalCase)(relativePath.name);
  relativePath.base = null;
  return _path.default.format(relativePath);
};

exports.rename = rename;

function dirCommand(_x, _x2, _x3) {
  return _dirCommand.apply(this, arguments);
}

function _dirCommand() {
  _dirCommand = _asyncToGenerator(function* (program, filenames, opts) {
    function write(_x4, _x5) {
      return _write.apply(this, arguments);
    }

    function _write() {
      _write = _asyncToGenerator(function* (src, relative) {
        if (!(0, _util.isCompilableExtension)(relative)) return false;
        relative = rename(relative, opts);

        const dest = _path.default.join(program.outDir, relative);

        const code = yield (0, _util.convertFile)(src, opts, {
          filePath: dest
        });
        (0, _outputFileSync.default)(dest, code);
        console.log(`${src} -> ${dest}`);
        return true;
      });
      return _write.apply(this, arguments);
    }

    function handle(_x6) {
      return _handle.apply(this, arguments);
    }

    function _handle() {
      _handle = _asyncToGenerator(function* (filename) {
        if (!(yield _fs.default.exists(filename))) return;
        const stat = yield _fs.default.stat(filename);

        if (stat.isDirectory(filename)) {
          const dirname = filename;
          const files = yield (0, _util.readdir)(dirname);
          yield Promise.all(files.map(
          /*#__PURE__*/
          function () {
            var _ref = _asyncToGenerator(function* (_filename) {
              const relative = _path.default.relative(dirname, _filename);

              return write(_filename, relative);
            });

            return function (_x7) {
              return _ref.apply(this, arguments);
            };
          }()));
        } else {
          yield write(filename, filename);
        }
      });
      return _handle.apply(this, arguments);
    }

    yield Promise.all(filenames.map(handle));
  });
  return _dirCommand.apply(this, arguments);
}

var _default = dirCommand;
exports.default = _default;