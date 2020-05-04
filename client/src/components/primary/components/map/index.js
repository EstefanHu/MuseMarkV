import React, { useState, useContext } from 'react';
import ReactMapGl from 'react-map-gl';
import { Route } from 'react-router-dom';

import { Create } from './create';

import { StoryContext, NodeContext } from '../../../../context';

export const Map = props => {
  const { story, setStory } = useContext(StoryContext);
  const { setNode } = useContext(NodeContext);
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
        setNode({
          "type": "node",
          "position": story.route.length,
          "name": '',
          "markdown": '',
          "coordinates": e.lngLat
        })
        break;
      case 'turn':
        setStory({
          ...story,
          "route": [
            ...story.route,
            {
              "type": "turn",
              "position": story.route.length,
              "coordinates": e.lngLat
            }]
        });
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