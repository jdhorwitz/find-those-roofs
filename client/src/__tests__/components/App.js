import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import App from '../../components/App';

let enzymeWrapper;

beforeEach(() => {
  let mockStore = configureStore();
  enzymeWrapper = shallow(<App />, { context: { store: mockStore() } });
});

describe('App Component', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });
});
