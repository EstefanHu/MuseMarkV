import React from 'react';
import { Source, Layer } from 'react-map-gl';

export const StoryRoute = props => (
  <Source type='geojson' data={{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": props.coords
        }
      }
    ]
  }} >
    <Layer
      type='line'
      paint={{
        'line-width': 4,
        'line-color': '#007cbf'
      }}
    />
  </Source>
)