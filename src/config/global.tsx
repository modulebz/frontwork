import RFrontWork from "../front_work/views/react";

export class G {
    static app : RFrontWork
    static makeAppUrl = (x:string=''):string => {
        return G.app.props.app_url+x;
    }
}
