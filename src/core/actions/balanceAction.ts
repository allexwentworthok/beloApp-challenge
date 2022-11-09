import * as type from './types';

/**
 * It returns an object with a type property and a payload property
 * @param {object} [payload] - The data that you want to pass to the reducer.
 */
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
