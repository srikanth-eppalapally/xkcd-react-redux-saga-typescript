
import { combineReducers } from "redux";

import { comicsReducer, ComicsReducerType } from "./Comics/reducers";
import { ComicReducerType, comicReducer } from "./Comic/reducers";

export interface RootState {
	comicsState: ComicsReducerType;
	comicState: ComicReducerType
}

export default () =>
	combineReducers({
		comicsState: comicsReducer,
		comicState: comicReducer
	});
