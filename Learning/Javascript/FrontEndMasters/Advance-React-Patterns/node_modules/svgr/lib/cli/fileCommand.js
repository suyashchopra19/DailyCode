"use strict";

exports.__esModule = true;
exports.default = void 0;

var _fs = _interopRequireDefault(require("mz/fs"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function fileCommand(_x, _x2, _x3) {
  return _fileCommand.apply(this, arguments);
}

function _fileCommand() {
  _fileCommand = _asyncToGenerator(function* (program, filenames, opts) {
    let conversions;

    function stdin() {
      conversions = [];
      let code = '';
      process.stdin.setEncoding('utf8');
      process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) code += chunk;
      });
      process.stdin.on('end', () => {
        conversions.push((0, _util.rawConvert)(code, opts, {
          filePath: 'svg-component'
        }));
        output();
      });
    }

    function output() {
      return _output.apply(this, arguments);
    }

    function _output() {
      _output = _asyncToGenerator(function* () {
        const results = yield Promise.all(conversions);
        process.stdout.write(`${results.join('\n\n')}\n`);
      });
      return _output.apply(this, arguments);
    }

    function walk() {
      return _walk.apply(this, arguments);
    }

    function _walk() {
      _walk = _asyncToGenerator(function* () {
        const _filenames = [];
        conversions = [];
        yield Promise.all(filenames.map(
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* (filename) {
            const stat = yield _fs.default.stat(filename);

            if (stat.isDirectory()) {
              const dirname = filename;
              (yield (0, _util.readdirFilter)(dirname)).forEach(_filename => {
                _filenames.push(_filename);
              });
            } else {
              _filenames.push(filename);
            }
          });

          return function (_x4) {
            return _ref.apply(this, arguments);
          };
        }()));

        _filenames.forEach(_filename => {
          conversions.push((0, _util.convertFile)(_filename, opts));
        });

        output();
      });
      return _walk.apply(this, arguments);
    }

    if (filenames.length === 0) stdin();else yield walk();
  });
  return _fileCommand.apply(this, arguments);
}

var _default = fileCommand;
exports.default = _default;