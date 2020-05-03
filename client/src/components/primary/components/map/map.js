import React, { useState, useContext } from 'react';
import ReactMapGl from 'react-map-gl';
import { LocationContext } from '../../../../context';

export const Map = props => {
  const { lng, lat } = useContext(LocationContext);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
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

      </ReactMapGl>
    </div>
  )
}