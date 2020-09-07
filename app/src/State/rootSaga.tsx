import { all } from 'redux-saga/effects';
import comicsSagas from './Comics/sagas';
import comicSagas from './Comic/sagas';

export default function* rootSaga() {
  yield all([
    ...comicsSagas,
    ...comicSagas
  ]);
}