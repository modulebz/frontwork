function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { DefaultProps } from './IProps';
import Block from "../block/Block";
export default class Accordion extends Block {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = {
      position: props.position
    };
  }

}

_defineProperty(Accordion, "defaultProps", void 0);

Accordion.defaultProps = DefaultProps;