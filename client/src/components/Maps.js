import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { Container } from 'semantic-ui-react';
import { GOOGLE_MAP_URL } from '../config/key';

const MapWithMarker = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ data }) => (
  <Container>
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 37.850033, lng: -92.6500523 }}
    >
      {data.map(({ place_id, formatted_address, geometry: { location } }) => (
        <Marker key={place_id} title={formatted_address} position={location} />
      ))}
    </GoogleMap>
  </Container>
));

export default MapWithMarker;
