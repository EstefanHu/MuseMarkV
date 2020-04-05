import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

import '../create.css';
import { Actions } from './actions';
import { LineString } from './lineString';
import { Example } from './example';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });

  const [coords, setCoords] = useState([]);

  const selectAction = action => {
    console.log('selected the ' + action + ' action');
  }

  const interact = e => {
    setCoords([...coords, e.lngLat]);
    console.log(coords);
  }

  return (
    <>
      <ReactMapGl
        {...viewport} 
        mapboxApiAccessToken={props.apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
        onClick={interact}
      >
        <LineString coords={ coords } />
        <Example longitude={viewport.longitude} latitude={viewport.latitude} />
      </ReactMapGl>
      <Actions triggerAction={ selectAction } />
    </>
  )
}