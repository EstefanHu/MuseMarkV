import React from 'react';
import { Marker } from 'react-map-gl';
import { MdLocationOn } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

export const StoryNodes = props => {
  return (
    <>
      {props.plottedNodes.map(node => (
        node.type === 'node' ? (
          <Marker
            key={node.position}
            latitude={node.coords[1]}
            longitude={node.coords[0]}
            offsetLeft={-25}
            offsetTop={-47}
          >
            <MdLocationOn
              className='map__icon'
              onClick={() => props.engageNode(node.position)}
            />
          </Marker>
        ) : (
          <Marker
            key={node.position}
            latitude={node.coords[1]}
            longitude={node.coords[0]}
            offsetLeft={-6.5}
            offsetTop={-8}
          >
            <FaDotCircle
              className='map__icon--turn'
              onClick={() => props.engageNode(node.position)}
            />
          </Marker>
        )
      ))}
    </>
  )
}