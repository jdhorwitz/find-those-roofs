import React from 'react';
import { Header, List, Container, Divider } from 'semantic-ui-react';

const ListExampleCelled = ({ data }) => (
  <Container textAlign="center">
    <Divider hidden />
    <Header inverted block as="h2">
      Locations With Rooftops!!!!
    </Header>
    <List divided animated selection celled size="big">
      {data.map(({ place_id, formatted_address, geometry: { location } }) => (
        <List.Item key={place_id}>
          <List.Content style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <List.Header>{formatted_address}</List.Header>
            <br />
            Latitude: {location.lat} Longitude: {location.lng}
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Container>
);

export default ListExampleCelled;
