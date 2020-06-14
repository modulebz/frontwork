function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';
import { G } from "../../../config/global";
import { EAppPages } from "../../../enum/EAppPages";
export default class RHeader extends Header {
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
    }, /*#__PURE__*/React.createElement(Link, {
      to: G.makeAppUrl()
    }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement(Link, {
      to: G.makeAppUrl(EAppPages[EAppPages.sites])
    }, "\u0421\u0430\u0439\u0442\u044B"));
  }

}