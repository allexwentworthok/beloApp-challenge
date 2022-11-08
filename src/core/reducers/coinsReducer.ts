import * as types from '../actions/types';

const initialStates = {
  coins: [],
  error: null,
  loadind: true,
};

export default function coinsReducer(state = initialStates, action: any) {
  switch (action.type) {
    case types.GET_COINS:
      return {
        ...state,
        coins: [],
        error: null,
        loadind: true,
      };
    case types.GET_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        error: null,
        loadind: false,
      };
    case types.GET_COINS_FAILURE:
      return {
        ...state,
        coins: [],
        error: action.payload,
        loadind: false,
      };
    default:
      return state;
  }
}
