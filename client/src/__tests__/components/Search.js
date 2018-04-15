import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Search } from 'semantic-ui-react';
import SearchBox from '../../components/Search';

let enzymeWrapper;

beforeEach(() => {
  let mockStore = configureStore();
  enzymeWrapper = shallow(<SearchBox />, { context: { store: mockStore() } });
});

describe('Search Component', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should render with empty results and value', () => {
    expect(enzymeWrapper.state().isLoading).toBeFalsy();
    expect(enzymeWrapper.state().results).toBeFalsy();
    expect(enzymeWrapper.state().value).toBeFalsy();
  });
});
