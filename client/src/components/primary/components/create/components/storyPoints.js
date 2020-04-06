import React from 'react';
import { Marker } from 'react-map-gl';
import { MdLocationOn } from 'react-icons/md';

export const StoryPoints = props => (
  <>
  {/* TODO: Change id to title of the work */}
  {props.coords.map((point, index) => (
    <Marker key={index} latitude={point[1]} longitude={point[0]}>
      <MdLocationOn />
    </Marker>
  ))}
  </>
)