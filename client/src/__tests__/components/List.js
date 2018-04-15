import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'semantic-ui-react';
import ListResults from '../../components/List';
import data from './testData.json';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<ListResults data={data} />);
});

describe('List Component', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should render one list item', () => {
    expect(enzymeWrapper.find(List.Item).length).toBe(1);
  });

  it('should render one List Header component', () => {
    expect(enzymeWrapper.find(List.Header).length).toBe(1);
  });

  it('should render one List Content component', () => {
    expect(enzymeWrapper.find(List.Content).length).toBe(1);
  });
});
