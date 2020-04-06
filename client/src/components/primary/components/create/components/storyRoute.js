import React, { useState, useEffect } from 'react';
import { Source, Layer } from 'react-map-gl';

export const StoryRoute = props => {
  const [storyNode, setStoryNodes] = useState([]);

  return (
    <Source type='geojson' data={{
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": storyNode
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
}