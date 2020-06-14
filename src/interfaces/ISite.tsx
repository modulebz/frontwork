import {IPage} from "./IPage";

export interface ISite {
    id    : number
    title : string
    pages : IPage[]
}
