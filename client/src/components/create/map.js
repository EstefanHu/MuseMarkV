import React from 'react';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

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
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[props.longitude, props.latitude]} />
      </Layer>
    </Map>
  )
}

export default MapContainer;