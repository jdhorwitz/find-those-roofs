import { combineReducers } from 'redux';
import geoLocationReducer from './geoLocationReducer';

export default combineReducers({
  geo: geoLocationReducer,
});
