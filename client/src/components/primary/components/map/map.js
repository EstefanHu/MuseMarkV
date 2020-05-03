import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import { Route } from 'react-router-dom';

import { Create } from './create';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: props.lat,
    longitude: props.lng,
    width: '100vw',
    height: '100vh',
    zoom: 14
  });

  return (
    <div
      id='mapboxView'
    >
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={props.apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
        onClick={() => console.log('hello')}
      >

        <Route path='/app/create' component={Create} />

      </ReactMapGl>
    </div>
  )
}