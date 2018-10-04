"use strict";

exports.__esModule = true;
exports.rawConvert = rawConvert;
exports.default = convert;

var _h2xPluginJsx = _interopRequireDefault(require("h2x-plugin-jsx"));

exports.jsx = _h2xPluginJsx.default;

var _path = _interopRequireDefault(require("path"));

var _svgo = _interopRequireDefault(require("./plugins/svgo"));

var _h2x = _interopRequireDefault(require("./plugins/h2x"));

var _prettier = _interopRequireDefault(require("./plugins/prettier"));

var _transform = _interopRequireDefault(require("./plugins/transform"));

var _wrapIntoComponent = _interopRequireDefault(require("./transforms/wrapIntoComponent"));

exports.wrapIntoComponent = _wrapIntoComponent.default;

var _rename = require("./transforms/rename");

var _stripAttribute = _interopRequireDefault(require("./h2x/stripAttribute"));

exports.stripAttribute = _stripAttribute.default;

var _emSize = _interopRequireDefault(require("./h2x/emSize"));

exports.emSize = _emSize.default;

var _expandProps = _interopRequireDefault(require("./h2x/expandProps"));

exports.expandProps = _expandProps.default;

var _svgRef = _interopRequireDefault(require("./h2x/svgRef"));

exports.svgRef = _svgRef.default;

var _replaceAttrValue = _interopRequireDefault(require("./h2x/replaceAttrValue"));

exports.replaceAttrValue = _replaceAttrValue.default;

var _removeComments = _interopRequireDefault(require("./h2x/removeComments"));

exports.removeComments = _removeComments.default;

var _removeStyle = _interopRequireDefault(require("./h2x/removeStyle"));

exports.removeStyle = _removeStyle.default;

var _configToOptions = _interopRequireDefault(require("./configToOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function expandState(state) {
  const componentName = (0, _rename.pascalCase)(_path.default.parse(state.filePath).name);
  return _extends({}, state, {
    componentName
  });
}

function rawConvert(_x, _x2, _x3) {
  return _rawConvert.apply(this, arguments);
}

function _rawConvert() {
  _rawConvert = _asyncToGenerator(function* (code, options, state) {
    state = expandState(state);
    let result = code;
    result = options.svgo ? yield (0, _svgo.default)(result, options.svgo, state) : result;
    result = yield (0, _h2x.default)(result, options.h2x, state);
    result = yield (0, _transform.default)(result, {
      transform: options.template
    }, state);
    result = options.prettier ? yield (0, _prettier.default)(result, options.prettier, state) : result;
    return result;
  });
  return _rawConvert.apply(this, arguments);
}

function convert(_x4) {
  return _convert.apply(this, arguments);
}

function _convert() {
  _convert = _asyncToGenerator(function* (code, _ref = {}, initialState = {}) {
    let _ref$componentName = _ref.componentName,
        componentName = _ref$componentName === void 0 ? 'SvgComponent' : _ref$componentName,
        config = _objectWithoutProperties(_ref, ["componentName"]);

    return rawConvert(code, (0, _configToOptions.default)(config), _extends({}, initialState, {
      filePath: componentName
    }));
  });
  return _convert.apply(this, arguments);
}