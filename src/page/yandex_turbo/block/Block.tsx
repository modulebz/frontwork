import * as React from 'react'
import {IProps as IBlockProps,DefaultProps} from "./IProps";
import {IState as IBlockState} from "./IState";

export default class Block<IProps,IState> extends React.Component<IBlockProps,IBlockState> {
    static defaultProps ;
    constructor(p) {
        super(p);
        this.state = {
            position : p.position
        }
    }
    getValue = () =>{
        let s = this.state;
        return s.position;
    }

}
Block.defaultProps = DefaultProps;
