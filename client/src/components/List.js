import React from 'react';
import { Header, List, Container, Divider } from 'semantic-ui-react';
import _ from 'lodash';

const ListResults = ({ data }) => (
  <Container textAlign="center">
    <Divider hidden />
    <Header inverted block as="h2">
      Locations With Rooftops!!!!
    </Header>
    {_.isEmpty(data) ? (
      <Header as="h2">
        No Results Found (I bet you blew past your Google API quota!
      </Header>
    ) : (
      <List divided animated selection celled size="big">
        {data.map(
          ({
            place_id,
            formatted_address,
            geometry: {
              location: { lat, lng },
            },
          }) => (
            <List.Item key={place_id}>
              <List.Content
                style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
              >
                <List.Header>{formatted_address}</List.Header>
                <br />
                Latitude: {lat} Longitude: {lng}
              </List.Content>
            </List.Item>
          ),
        )}
      </List>
    )}
  </Container>
);

export default ListResults;
