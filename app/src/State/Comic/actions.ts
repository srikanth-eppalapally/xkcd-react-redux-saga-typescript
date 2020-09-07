import { ComicsActionTypes } from '../../model/model';

export const fetchComicDetails = (number?: any) => {
    return {
        type: ComicsActionTypes.FETCH_COMIC_DETAILS,
        number
    }
};

export const onUpdateVotes = (number?: any) => {
    return {
        type: ComicsActionTypes.ON_FETCH_UPDATE_VOTES,
        number
    }
};