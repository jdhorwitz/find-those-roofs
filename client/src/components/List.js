import React from 'react';
import { Image, List } from 'semantic-ui-react';

const ListExampleCelled = () => (
  <List
    celled
    style={{ textAlign: 'center', paddingRight: '10rem', paddingLeft: '10rem' }}
  >
    <List.Item>
      <List.Content>
        <List.Header>Ann Arbor</List.Header>
        Has A Roof!
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>San Francisco</List.Header>
        Has a Roof too!
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Toronto</List.Header>
        Roof too baby
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleCelled;
