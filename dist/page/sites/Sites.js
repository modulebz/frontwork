function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { DefaultProps } from './IProps';
export default class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

}

_defineProperty(Sites, "defaultProps", void 0);

Sites.defaultProps = DefaultProps;