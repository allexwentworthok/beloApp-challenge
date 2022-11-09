import * as type from './types';

/**
 * It returns an object with a type property and any other properties that are passed in
 * @param {object} [payload] - This is the data that you want to pass to the reducer.
 */
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
