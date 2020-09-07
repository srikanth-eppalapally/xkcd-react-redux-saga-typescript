import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { ComicsActionTypes } from "../../model/model";
import { ComicsApi } from "../../api/ComicsApi";


const generateRandomNumbers = (min: number, max: number, length: number) => {
    const numbers: any = [];
    const _random = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    Array.apply(null, new Array(length)).reduce(function (previous: number) {
        var nextRandom;

        if (previous === min) {
            nextRandom = _random(min + 1, max);
        } else if (previous === max) {
            nextRandom = _random(min, max - 1);
        } else {
            if (_random(0, 1)) {
                nextRandom = _random(previous + 1, max);
            } else {
                nextRandom = _random(min, previous - 1);
            }
        }

        numbers.push(nextRandom);
        return nextRandom;
    }, _random(min, max));

    return numbers;
}


/**
 * @desc Business logic of effect.
 */
function* handleFetch(): Generator {

    const randomlist: number[] = generateRandomNumbers(100, 1000, 9);

    const responses: any = yield all(randomlist.map((num: number) => call(function* () {
        try {
            return yield call(new ComicsApi().onFetchComics, num)
        } catch (err) {
            if (err instanceof Error) {
                yield put({ type: ComicsActionTypes.FETCH_COMICS_ERROR, payload: err });
            } else {
                yield put({ type: ComicsActionTypes.FETCH_COMICS_ERROR, payload: 'Unknown Error' });
            }
            return { err }
        }
    })))
    yield put({
        type: ComicsActionTypes.FETCH_COMICS_SUCCESS, payload: {
            comics: responses.map((r: { data: any; }) => r.data)
        }
    });
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
    yield takeEvery(ComicsActionTypes.FETCH_COMICS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */

export default [
    fork(watchFetchRequest),
];
