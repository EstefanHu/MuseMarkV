import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import { Route } from 'react-router-dom';

import { Create } from './create';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: props.lat,
    longitude: props.lng - .01,
    width: '100vw',
    height: '100vh',
    zoom: 14
  });

  const engage = e => {
    const action = sessionStorage.getItem('action');
    if (action === null) return;

    switch (action) {
      case 'node':
        console.log('node');
        break;
      case 'turn':
        console.log('turn');
        break;
      case 'edit':
        console.log('edit');
        break;
      case 'remove':
        console.log('remove');
        break;
      default:
        break;
    }
    sessionStorage.removeItem('action');
  }

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
        onClick={engage}
      >

        <Route path='/app/create' component={Create} />

      </ReactMapGl>
    </div>
  )
}