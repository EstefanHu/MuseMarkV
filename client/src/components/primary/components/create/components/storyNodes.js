import React from 'react';
import { Marker } from 'react-map-gl';
import { MdLocationOn } from 'react-icons/md';

export const StoryNodes = props => (
  <>
  {props.nodes.map(node => (
    <Marker key={node.position}
      latitude={node.coords[1]}
      longitude={node.coords[0]}
      offsetLeft={-25}
      offsetTop={-48}
    >
      <MdLocationOn className='map__icon' />
    </Marker>
  ))}
  </>
)