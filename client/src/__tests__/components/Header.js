import React from 'react';
import { shallow } from 'enzyme';
import { Link, Menu } from 'semantic-ui-react';
import Header from '../../components/Header';
import Search from '../../components/Search';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<Header />);
});

describe('Header Component', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should render a Menu component', () => {
    expect(enzymeWrapper.find(Menu).length).toBe(1);
  });

  it('should render 4 menu items', () => {
    expect(enzymeWrapper.find(Menu.Item).length).toBe(4);
  });

  it('should render the Search component', () => {
    expect(enzymeWrapper.find(Search).length).toBe(1);
  });
});
