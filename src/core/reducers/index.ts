import {combineReducers} from 'redux';
import balanceReducer from './balanceReducer';
import coinsReducer from './coinsReducer';

const rootReducer = combineReducers({
  balance: balanceReducer,
  coins: coinsReducer,
});

export default rootReducer;
