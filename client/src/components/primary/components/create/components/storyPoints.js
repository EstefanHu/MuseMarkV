import React from 'react';
import { Marker } from 'react-map-gl';

export const StoryPoints = props => (
  <>
  {props.coords.map(point => (
    <Marker key={props.coords[point]} latitude={point[1]} longitude={point[0]}>
      <h1>POINT!!</h1>
    </Marker>
  ))}
  </>
)