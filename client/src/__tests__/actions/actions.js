import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchMock from 'fetch-mock';
import { fetchLocations } from '../../actions/index';
import { FETCH_LOCATIONS } from '../../actions/types';
import data from '../components/testData.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

describe('actions test', () => {
  it('should dispatch a fetchLocations action', () => {
    mock.onGet('/api/locations').reply(200, {
      response: data,
    });

    const store = mockStore({});

    expect(store.getActions().length).toBe(0);

    store.dispatch(fetchLocations()).then(() => {
      let actions = store.getActions()[0];
      expect(actions.type).toBe(FETCH_LOCATIONS);
      expect(actions.payload.response).toEqual(data);
    });
  });
});
