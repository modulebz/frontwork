import * as React from "react";
import YandexTurbo from "../YandexTurbo";
import RAccordion from "../accordion/views/react";

export default class RYandexTurbo extends YandexTurbo {
    wrap : HTMLDivElement;
    render(){
        return(
            <div ref={(i)=>this.wrap = i} >
                <div>
                    <div>Тут список блоков, которые можно добавить</div>
                </div>
                <div>
                    <div>Тут список добавленных блоков
                    <RAccordion position={5}/>
                    </div>
                </div>
            </div>
        )
    }
}
