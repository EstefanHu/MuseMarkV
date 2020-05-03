import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  })

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