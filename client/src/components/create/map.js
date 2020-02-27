import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import MapLayer from './mapLayer';

const MapContainer = props => {
  const Map = ReactMapboxGl({
    accessToken: props.apikey,
  });

  return (
    <Map
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[props.longitude, props.latitude]}
      zoom={[14]}
    >
      <MapLayer
        longitude={ props.longitude }
        latitude={ props.latitude }
      />
    </Map>
  )
}

export default MapContainer;