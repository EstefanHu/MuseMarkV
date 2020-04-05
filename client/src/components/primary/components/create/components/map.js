import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

import '../create.css';
import { Actions } from './actions';
import { StoryPoints } from './storyPoints';
import { StoryRoute } from './storyRoute';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });

  const [coords, setCoords] = useState([]);
  const [action, setAction] = useState();

  const interact = e => {
    switch (action) {
      case 'Add':
        setCoords([...coords, e.lngLat]);
        setAction(null);
        break;
      case 'Edit':
        console.log('Edit');
        break;
      case 'Connect':
        console.log('Connect');
        break;
      case 'Delete':
        console.log('Delete');
        break;
    }
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
        <StoryPoints coords={ coords } />
        <StoryRoute coords={ coords } />
      </ReactMapGl>
      <Actions triggerAction={ chosenAction => setAction(chosenAction) } />
    </>
  )
}