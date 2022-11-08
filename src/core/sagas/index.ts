import {all} from 'redux-saga/effects';
import coinsSagas from './coinsSagas';
import balanceSagas from './balanceSagas';

export default function* rootSaga() {
  yield all([coinsSagas(), balanceSagas()]);
}
