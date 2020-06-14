function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import Content from "../Content";
import { Route, Routes } from "react-router-dom";
import { G } from "../../../config/global";
import RSites from "../../../page/sites/views/react";
import { EAppPages } from "../../../enum/EAppPages";
import RHello from "../../../page/hello/views/react";
export default class RContent extends Content {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "wrap", void 0);
  }

  render() {
    var _this = this;

    console.log(G.makeAppUrl('sites'));
    return /*#__PURE__*/React.createElement("div", {
      ref: function (i) {
        return _this.wrap = i;
      }
    }, this.props.children, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
      path: G.makeAppUrl(),
      element: /*#__PURE__*/React.createElement(RHello, null)
    }), /*#__PURE__*/React.createElement(Route, {
      path: G.makeAppUrl(EAppPages[EAppPages.sites] + "/*"),
      element: /*#__PURE__*/React.createElement(RSites, null)
    })));
  }

}