import axios from 'axios';
import { FETCH_LOCATIONS } from './types';

export const fetchLocations = () => async dispatch => {
  const response = await axios.get('/api/locations');
  dispatch({ type: FETCH_LOCATIONS, payload: response.data });
};
