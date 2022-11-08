import * as type from './types';

export const getBalance = (payload?: object) => ({
  type: type.GET_BALANCE,
  ...payload,
});

export const getBalanceSuccess = (payload?: object) => ({
  type: type.GET_BALANCE_SUCCESS,
  ...payload,
});

export const getBalanceFailure = (payload?: object) => ({
  type: type.GET_BALANCE_FAILURE,
  ...payload,
});
