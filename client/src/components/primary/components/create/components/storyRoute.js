import React, { useContext } from 'react';
import { Source, Layer } from 'react-map-gl';

import { StoryContext } from '../../../../../context';

export const StoryRoute = props => {
  const {story} = useContext(StoryContext);

  return (
    <>
      {story.route.map((node, index) => (
        story.route[index + 1] &&
        <Source type='geojson' 
          key={node.position}
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
      ))}
    </>
  )
}