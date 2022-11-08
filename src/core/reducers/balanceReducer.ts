import * as types from '../actions/types';

const initialStates = {
  initialBalance: [],
  error: null,
  loadind: true,
};

export default function balanceReducer(state = initialStates, action: any) {
  switch (action.type) {
    case types.GET_BALANCE:
      return {
        ...state,
        initialBalance: [],
        error: null,
        loadind: true,
      };
    case types.GET_BALANCE_SUCCESS:
      return {
        ...state,
        initialBalance: action.payload,
        error: null,
        loadind: false,
      };
    case types.GET_BALANCE_FAILURE:
      return {
        ...state,
        initialBalance: [],
        error: action.payload,
        loadind: false,
      };
    default:
      return state;
  }
}
