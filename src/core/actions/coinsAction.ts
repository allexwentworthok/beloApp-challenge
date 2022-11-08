import * as type from './types';

export const getCoins = (payload?: object) => ({
  type: type.GET_COINS,
  ...payload,
});

export const getCoinsSuccess = (payload?: object) => ({
  type: type.GET_COINS_SUCCESS,
  ...payload,
});

export const getCoinsFailure = (payload?: object) => ({
  type: type.GET_COINS_FAILURE,
  ...payload,
});
