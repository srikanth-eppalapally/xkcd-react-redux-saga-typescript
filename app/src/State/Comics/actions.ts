import { ComicsActionTypes } from '../../model/model';

export const fetchComics = (numbers?: any) => {
    return {
        type: ComicsActionTypes.FETCH_COMICS,
        numbers
    }
};