import axios from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {ENV} from '../config/envs';
import {ResponseGenerator} from '../../interfaces/interfaces';
import {
  GET_BALANCE,
  GET_BALANCE_FAILURE,
  GET_BALANCE_SUCCESS,
} from '../actions/types';

const getBalance = async () => {
  try {
    const response = await axios.get(`${ENV.URL_API}/`);
    return response;
  } catch (error) {
    throw error;
  }
};

function* balanceWorker() {
  try {
    const response: ResponseGenerator = yield call(getBalance);
    yield put({type: GET_BALANCE_SUCCESS, payload: response.data});
  } catch {
    yield put({type: GET_BALANCE_FAILURE});
  }
}

export default function* balanceSaga() {
  yield takeLatest(GET_BALANCE, balanceWorker);
}
