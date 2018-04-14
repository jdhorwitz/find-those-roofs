import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapWithMarker = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
  >
    {props.data.map(x => console.log(x))}
    {props.data.map(
      ({ place_id, formatted_address, geometry: { location } }) => (
        <Marker key={place_id} title={formatted_address} position={location} />
      ),
    )}
  </GoogleMap>
));

export default MapWithMarker;
