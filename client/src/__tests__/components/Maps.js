import React from 'react';
import { shallow } from 'enzyme';
import { Container } from 'semantic-ui-react';
import { GoogleMap } from 'react-google-maps';
import Maps from '../../components/Maps';
import data from './testData.json';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<Maps data={data} />);
});

describe('List Component', () => {
  it('should render itself and all subcomponents', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });
});
