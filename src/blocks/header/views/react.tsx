import * as React from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';
import {G} from "../../../config/global";
import {EAppPages} from "../../../enum/EAppPages";

export default class RHeader extends Header {
    wrap : HTMLDivElement;
    render(){
        return(
            <div ref={(i)=>this.wrap = i} >
                <Link to={G.makeAppUrl()}>Главная</Link>
                <Link to={G.makeAppUrl(EAppPages[EAppPages.sites])}>Сайты</Link>
            </div>
        )
    }
}
