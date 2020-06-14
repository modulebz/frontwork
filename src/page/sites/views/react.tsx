import * as React from "react";
import Sites from "../Sites";
import {G} from "../../../config/global";
import {Link, Route, Routes} from "react-router-dom"
import {EAppPages} from "../../../enum/EAppPages";
import RYandexTurbo from "../../yandex_turbo/views/react";

export default class RSites extends Sites {
    wrap : HTMLDivElement;
    render(){
        return(
            <div ref={(i)=>this.wrap = i} >Тут будет список сайтов
                <Link to={G.makeAppUrl(EAppPages[EAppPages.sites]+'/yandex_turbo/1/')}>Яндекс турбо</Link>
                <Link to={G.makeAppUrl(EAppPages[EAppPages.sites]+'/html/1/')}>HTML страница</Link>
                <Routes>
                    <Route path={'/html/:id'} element={<div>Я html страница</div>}/>
                    <Route path={'/yandex_turbo/:id'} element={<RYandexTurbo/>}/>
                </Routes>
            </div>
        )
    }
}
