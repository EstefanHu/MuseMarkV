import React, { useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import Actions from './actions';

const MapContainer = props => {
  const [selectedLayer, setSelectedLayer] = useState('');
  const Map = ReactMapboxGl({
    accessToken: props.apikey,
  });

  const interact = (_, e) => {
    console.log(e.lngLat.wrap());
  }

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
      onClick={interact}
    >
      <Marker
        coordinates={[ props.longitude, props.latitude]}
        anchor='bottom'
      >
        <h1>Test</h1>
      </Marker>
    </Map>
  )
}

export default MapContainer;