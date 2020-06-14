import * as React from 'react'
import {IState} from './IState'
import {IProps,DefaultProps} from './IProps'

export default class Content extends React.Component<IProps,IState> {
    static defaultProps : IProps;
    constructor(props:IProps){
        super(props);
        this.state = {};
    }
}
Content.defaultProps = DefaultProps;
