import React, { useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { CreateStoryContext } from '../../../../../contexts';

import { Actions } from './actions';

export const Map = props => {
  const [nodes, setNodes] = useState();
  const Map = ReactMapboxGl({
    accessToken: props.apikey,
  });

  const interact = (_, e) => {
    console.log(e.lngLat.wrap());
  }

  const selectAction = () => {
    console.log('selected an action');
  }

  return (
    <CreateStoryContext.Provider value={{nodes, setNodes}}>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{height: '100vh', width: '100vw'}}
        center={[props.longitude, props.latitude]}
        zoom={[14]}
        onClick={interact}
      >
        <Marker
          coordinates={[ props.longitude, props.latitude]}
          anchor='bottom'
        >
        </Marker>
      </Map>
      <Actions triggerSelectAction={ selectAction } />
    </CreateStoryContext.Provider>
  )
}