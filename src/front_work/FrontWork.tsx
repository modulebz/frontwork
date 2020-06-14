import * as React from 'react'
import {IState} from './IState'
import {IProps,DefaultProps} from './IProps'
import {G} from "../config/global";

export default class FrontWork extends React.Component<IProps,IState> {
    static defaultProps : IProps;
    constructor(props:IProps){
        super(props);
        this.state = {};
    }
}
FrontWork.defaultProps = DefaultProps;
