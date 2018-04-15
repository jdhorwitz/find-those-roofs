import reducer from '../../reducers/geoLocationReducer';
import { FETCH_LOCATIONS } from '../../actions/types';
import data from '../components/testData.json';

describe('geoLocationReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it('should handle FETCH_LOCATIONS', () => {
    expect(
      reducer([], {
        type: FETCH_LOCATIONS,
        payload: data,
      }),
    ).toEqual(data);
  });
});
