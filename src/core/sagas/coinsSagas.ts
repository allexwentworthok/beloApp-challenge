import axios from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {ENV} from '../config/envs';
import {ResponseGenerator} from '../../interfaces/interfaces';
import {
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE,
} from '../actions/types';
import {transformer} from '../helpers/transfomer';

const getCoinsFromApi = async () => {
  try {
    const response = await axios.get(
      `${ENV.URL_API}/simple/price?ids=${ENV.COINS}&vs_currencies=usd`,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

function* coinsWorker() {
  try {
    const response: ResponseGenerator = yield call(getCoinsFromApi);
    const dataFixed = transformer(response.data);
    yield put({type: GET_COINS_SUCCESS, payload: dataFixed});
  } catch {
    yield put({type: GET_COINS_FAILURE});
  }
}

export default function* coinsSaga() {
  yield takeLatest(GET_COINS, coinsWorker);
}
