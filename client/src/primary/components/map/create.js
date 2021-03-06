import React, { useContext } from 'react';
import { StoryContext, NodeContext } from '../../../context';
import { MdLocationOn } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';
import {
  Marker,
  Source,
  Layer
} from 'react-map-gl';

export const Create = () => {
  const { story, setStory } = useContext(StoryContext);
  const { setNode } = useContext(NodeContext);

  const engageNode = nodePosition => {
    const action = sessionStorage.getItem('action');
    if (action === 'remove') {
      story.route.splice(nodePosition, 1);
      for (let i = 0; i < story.route.length; i++) {
        story.route[i].position = i;
      }
      setStory({ ...story});
    } else if (action === 'edit') {
      let node = story.route[nodePosition];
      if (node.type === 'node') {
        setNode(node);
      }
    }
    sessionStorage.removeItem('action');
  }

  return story && (
    <>
      {story.route.map((node, index) => (
        <span
          key={node.position}
        >
          {node.type === 'node' ? (
            <Marker
              latitude={node.coordinates[1]}
              longitude={node.coordinates[0]}
              offsetLeft={-25}
              offsetTop={-47}
            >
              <MdLocationOn
                className='map__icon'
                onClick={() => engageNode(node.position)}
              />
            </Marker>
          ) : (
              <Marker
                latitude={node.coordinates[1]}
                longitude={node.coordinates[0]}
                offsetLeft={-6.5}
                offsetTop={-8}
              >
                <FaDotCircle
                  className='map__icon--turn'
                  onClick={() => engageNode(node.position)}
                />
              </Marker>
            )
          }

          {story.route[index + 1] &&
            <Source
              type='geojson'
              data={{
                "type": "FeatureCollection",
                "features": [
                  {
                    "type": "Feature",
                    "geometry": {
                      "type": "LineString",
                      "coordinates": [
                        node.coordinates,
                        story.route[index + 1].coordinates
                      ]
                    }
                  }
                ]
              }}>
              <Layer
                type='line'
                paint={{
                  'line-width': 3,
                  'line-color': '#007cbf',
                }}
              />
            </Source>
          }
        </span>
      ))}
    </>
  )
}