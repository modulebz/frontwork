import {EPageType} from "../enum/EPageType";

export interface IPage {
    id    : number,
    site  : number,
    type  : EPageType
    title : string,
    url   : string,
}
