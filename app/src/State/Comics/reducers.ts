
import createReducer from "../createReducer";
import { ComicsActionTypes, Action } from "../../model/model";


export interface ComicsReducerType {
    comics: any[];
    loading: boolean;
    currentComic: number;
    error?: string;
}
const defaultState: ComicsReducerType = {
    comics: [],
    currentComic: 0,
    loading: false,
    error: undefined,
}



export const comicsReducer = createReducer<ComicsReducerType>(defaultState, {

    [ComicsActionTypes.FETCH_COMICS](state: ComicsReducerType, action: Action<any>) {
        return {
            ...state,
            loading: true,
        };
    },

    [ComicsActionTypes.FETCH_COMICS_ERROR](state: ComicsReducerType, action: Action<any>) {

        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    },

    [ComicsActionTypes.FETCH_COMICS_SUCCESS](state: ComicsReducerType, action: Action<any>) {

        return {
            ...state,
            loading: false,
            comics: action.payload.comics,
            currentComic: action.payload.currentComic
        };
    },
});
