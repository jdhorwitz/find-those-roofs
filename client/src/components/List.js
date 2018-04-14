import React from 'react';
import { List } from 'semantic-ui-react';

const ListExampleCelled = ({ data }) => (
  <List
    celled
    style={{ textAlign: 'center', paddingRight: '10rem', paddingLeft: '10rem' }}
  >
    {data.map(({ place_id, formatted_address, geometry: { location } }) => (
      <List.Item key={place_id}>
        <List.Content>
          <List.Header>{formatted_address}</List.Header>
          Latitude: {location.lat} Longitude: {location.lng}
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default ListExampleCelled;
