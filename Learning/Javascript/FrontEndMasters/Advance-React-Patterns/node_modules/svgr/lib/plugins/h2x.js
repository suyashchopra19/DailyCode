"use strict";

exports.__esModule = true;
exports.default = void 0;

var _h2xCore = require("h2x-core");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (code, opts, state) => (0, _h2xCore.transform)(code, _extends({}, opts, {
  state
}));

exports.default = _default;