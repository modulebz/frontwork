function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import FrontWork from "../FrontWork";
import RHeader from "../../blocks/header/views/react";
import RContent from "../../blocks/content/views/react";
import { G } from "../../config/global";
export default class RFrontWork extends FrontWork {
  constructor(props) {
    super(props);

    _defineProperty(this, "wrap", void 0);

    G.app = this;
  }

  render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      ref: function (i) {
        return _this.wrap = i;
      }
    }, /*#__PURE__*/React.createElement(RHeader, null), /*#__PURE__*/React.createElement(RContent, null));
  }

}