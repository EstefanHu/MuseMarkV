import React, { useState, useEffect } from 'react';
import { Source, Layer } from 'react-map-gl';

export const StoryRoute = props => {
  const [coords, setCoords] = useState();
  useEffect(() => {
    for (let i = 0; i < props.nodes.length; i++) {
      setCoords(coords => [...coords, props.nodes[i].coords]);
    }
  }, [props]);
  return (
    <Source type='geojson' data={{
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": coords
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