import { FETCH_LOCATIONS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return action.payload || false;
    default:
      return state;
  }
}
