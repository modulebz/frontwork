function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { DefaultProps } from "./IProps";
export default class Block extends React.Component {
  constructor(p) {
    var _this;

    super(p);
    _this = this;

    _defineProperty(this, "getValue", function () {
      let s = _this.state;
      return s.position;
    });

    this.state = {
      position: p.position
    };
  }

}

_defineProperty(Block, "defaultProps", void 0);

Block.defaultProps = DefaultProps;