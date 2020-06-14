import * as React from 'react'
import {IState} from './IState'
import {IProps,DefaultProps} from './IProps'
import Block from "../block/Block";

export default class Accordion extends Block<IProps,IState> {
    static defaultProps : IProps;
    constructor(props:IProps){
        super(props);
        console.log(this.state)
        this.state = {
            position : props.position
        }
    }
}
Accordion.defaultProps = DefaultProps;
