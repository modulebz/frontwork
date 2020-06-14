function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import Sites from "../Sites";
export default class RSites extends Sites {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "wrap", void 0);
  }

  render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      ref: function (i) {
        return _this.wrap = i;
      }
    }, this.props.children);
  }

}