import { combineReducers } from 'redux';
import championsReducer from './championsReducer';
import winnersReducer from './winnersReducer';

export default combineReducers({
  champions: championsReducer,
  winners: winnersReducer,
});
