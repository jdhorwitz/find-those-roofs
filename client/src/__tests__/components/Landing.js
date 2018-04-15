import React from 'react';
import { shallow } from 'enzyme';
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Landing from '../../components/Landing';

let enzymeWrapper;

beforeEach(() => {
  enzymeWrapper = shallow(<Landing />);
});

describe('Landing Component', () => {
  it('should render itself', () => {
    expect(enzymeWrapper.exists()).toBeTruthy();
  });

  it('should render one Container element', () => {
    expect(enzymeWrapper.find(Container).length).toBe(1);
  });

  it('should render 3 Header components', () => {
    expect(enzymeWrapper.find(Header).length).toBe(3);
  });

  it('should render 2 Buttons', () => {
    expect(enzymeWrapper.find(Button).length).toBe(2);
  });

  it('should have 2 Link components', () => {
    expect(enzymeWrapper.find(Link).length).toBe(2);
  });
});
