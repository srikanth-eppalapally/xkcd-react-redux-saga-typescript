
export enum ComicsActionTypes {
    FETCH_COMICS = "@@comics/FETCH_COMICS",
    FETCH_COMICS_SUCCESS = '@@comics/FETCH_COMICS_SUCCESS',
    FETCH_COMICS_ERROR = '@@comics/FETCH_COMICS_ERROR',
    FETCH_COMIC_DETAILS = '@@comic/FETCH_COMIC_DETAILS',
    SUCCESS_COMIC_DETAILS = '@@comic/SUCCESS_COMIC_DETAILS',
    ERROR_COMIC_DETAILS = '@@comic/ERROR_COMIC_DETAILS',
    ON_UPDATE_VOTES = '@@comic/ON_UPDATE_VOTES',
    ON_FETCH_UPDATE_VOTES = '@@comic/ON_FETCH_UPDATE_VOTES'
};


export interface Action<T> {
    type: ComicsActionTypes;
    payload: T;
}

export interface IComic {
    num?: number;
    alt?: string;
    img?: string;
    day?: string;
    year?: string;
    month?: string;
    safe_title?: string;
    title?: string;
    transcript?: string;
    votes?: number;
}