"use strict";

exports.__esModule = true;
exports.default = void 0;

const componentsToList = components => [...components].filter(component => component !== 'Svg').join(', ');

const logUnsupportedComponents = components => {
  if (!components.size) return '';
  return `
// SVGR has dropped some elements not supported by react-native-svg: ${componentsToList(components)}
`;
};

var _default = (opts = {}) => (code, state) => {
  const _state$reactNativeSvg = state.reactNativeSvgReplacedComponents,
        reactNativeSvgReplacedComponents = _state$reactNativeSvg === void 0 ? new Set() : _state$reactNativeSvg,
        _state$unsupportedCom = state.unsupportedComponents,
        unsupportedComponents = _state$unsupportedCom === void 0 ? new Set() : _state$unsupportedCom;
  let props = '';

  if (opts.expandProps && opts.ref) {
    props = '{svgRef, ...props}';
  } else if (opts.expandProps) {
    props = 'props';
  } else if (opts.ref) {
    props = '{svgRef}';
  }

  return `import React from 'react'
  import Svg, { ${componentsToList(reactNativeSvgReplacedComponents)} } from 'react-native-svg';
  ${logUnsupportedComponents(unsupportedComponents)}


  const ${state.componentName} = (${props}) => ${code}

  export default ${state.componentName}`;
};

exports.default = _default;