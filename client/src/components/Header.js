import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Segment } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/list"
            name="list"
            active={activeItem === 'list'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="map"
            name="map"
            active={activeItem === 'map'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment />
      </div>
    );
  }
}
