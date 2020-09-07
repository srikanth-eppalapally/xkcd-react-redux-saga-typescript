import createReducer from "../createReducer";
import { ComicsActionTypes, Action, IComic } from "../../model/model";
import { ComicsReducerType } from "../Comics/reducers";


export interface ComicReducerType {
    comicDetails: IComic,
    loading: boolean,
}
const defaultState: ComicReducerType = {
    comicDetails: {},
    loading: true
}



export const comicReducer = createReducer<ComicReducerType>(defaultState, {

    [ComicsActionTypes.FETCH_COMICS_ERROR](state: ComicReducerType, action: Action<any>) {

        return {
            ...state,
            loading: false,
        };
    },

    [ComicsActionTypes.SUCCESS_COMIC_DETAILS](state: ComicReducerType, action: Action<any>) {
        
        return {
            ...state,
            loading: false,
            comicDetails: action.payload
        };
    },
    [ComicsActionTypes.ON_UPDATE_VOTES](state: ComicReducerType, action: Action<any>) {
        return {
            ...state,
            votes: action.payload
        };
    },
});
