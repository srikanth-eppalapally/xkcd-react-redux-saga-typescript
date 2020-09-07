import { put, takeLatest, fork, call, select, takeEvery } from 'redux-saga/effects';
import { ComicsActionTypes, IComic } from '../../model/model';
import { ComicsApi } from '../../api/ComicsApi';



function* onComicDetais(action: { number: number; }) {
    const { comicsState } = yield select();
    const { comics } = comicsState;
    const { number } = action;
    const comic = comics.length ? comics.find((c: IComic) => comics.num === number) : null;
    if (comic) {
        yield put({ type: ComicsActionTypes.SUCCESS_COMIC_DETAILS, payload: comic });
    } else {
        try {
            const response = yield call(new ComicsApi().onFetchComics, number);
            yield put({ type: ComicsActionTypes.SUCCESS_COMIC_DETAILS, payload: response.data });

        } catch (error) {
            yield put({ type: ComicsActionTypes.ERROR_COMIC_DETAILS, payload: 'error' })
        }
    }

}

function* onFetchComicDetails() {
    yield takeLatest(ComicsActionTypes.FETCH_COMIC_DETAILS as any, onComicDetais);;
}

export default [
    fork(onFetchComicDetails)
];