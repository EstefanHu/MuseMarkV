import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

import '../create.css';
import { Actions } from './actions';
import { Story } from './story';
import { StoryPoints } from './storyPoints';
import { StoryRoute } from './storyRoute';
import { Write } from './write';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });
  const [coords, setCoords] = useState([]);
  const [tempCoords, setTempCoords] = useState(null);
  const [action, setAction] = useState(null);
  const [isWriting, setIsWriting] = useState(false);

  const interact = e => {
    switch (action) {
      case 'Add':
        console.log(e.lngLat);
        setTempCoords(e.lngLat);
        setCoords([...coords, e.lngLat]);
        toggleIsWriting();
        break;
      case 'Edit':
        console.log('Edit');
        break;
      case 'Connect':
        console.log('Connect');
        break;
      case 'Remove':
        console.log('Remove');
        break;
      default:
    }
    setAction(null);
  }

  const toggleIsWriting = () => {
    setIsWriting(isWriting => !isWriting);
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
      <Story />
      {isWriting && <Write coords={ tempCoords } toggleIsWriting={ toggleIsWriting }/>}
    </>
  )
}