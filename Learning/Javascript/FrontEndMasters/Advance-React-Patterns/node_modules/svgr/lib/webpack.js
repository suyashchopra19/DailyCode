"use strict";

exports.__esModule = true;
exports.svgrLoader = svgrLoader;
exports.default = void 0;

var _loaderUtils = require("loader-utils");

var _core = require("@babel/core");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function svgrLoader(source) {
  const callback = this.async();

  const _ref = (0, _loaderUtils.getOptions)(this) || {},
        _ref$babel = _ref.babel,
        babel = _ref$babel === void 0 ? true : _ref$babel,
        options = _objectWithoutProperties(_ref, ["babel"]);

  const readSvg = () => new Promise((resolve, reject) => {
    this.fs.readFile(this.resourcePath, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

  const exportMatches = source.match(/^module.exports\s*=\s*(.*)/);
  const previousExport = exportMatches ? exportMatches[1] : null;

  const pBabelTransform =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* (jsCode) {
      return new Promise((resolve, reject) => {
        (0, _core.transform)(jsCode, {
          babelrc: false,
          presets: ['@babel/preset-react', ['@babel/preset-env', {
            modules: false
          }]],
          plugins: ['@babel/plugin-transform-react-constant-elements', '@babel/plugin-proposal-object-rest-spread']
        }, (err, result) => {
          if (err) reject(err);else resolve(result.code);
        });
      });
    });

    return function pBabelTransform(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  readSvg().then(svg => (0, _.default)(svg, options, {
    webpack: {
      previousExport
    }
  })).then(jsCode => babel ? pBabelTransform(jsCode) : jsCode).then(result => callback(null, result)).catch(err => callback(err));
}

function svgrLoaderWithWarning(source) {
  /* eslint-disable no-console */
  console.warn('Using "svgr/lib/webpack" is deprecated and will be removed in v2. Please use "svgr/webpack" instead.');
  /* eslint-enable no-console */

  return svgrLoader.call(this, source);
}

var _default = svgrLoaderWithWarning;
exports.default = _default;