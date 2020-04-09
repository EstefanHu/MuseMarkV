import React from 'react';
import { Source, Layer } from 'react-map-gl';

export const StoryRoute = props => (
  <>
    {props.nodes.map((node, index) => (
      props.nodes[index + 1] &&
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
                node.coords,
                props.nodes[index + 1].coords
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