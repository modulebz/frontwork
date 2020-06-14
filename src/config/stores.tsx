import {combineReducers, createStore} from "redux";

/*
function crumbs(state : ICrumb[] = [],action : {type:EAppActions,crumbs:ICrumb[]}) {
    switch (action.type) {
        case EAppActions.SET_CRUMBS: return action.crumbs;
        default: return state;
    }
}
*/

const App = combineReducers({
    //crumbs
})
export const AppStore = createStore(App)
