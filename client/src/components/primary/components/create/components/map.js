import React, { useState } from 'react';
import ReactMapGl, { Source, Layer, Marker } from 'react-map-gl';

import '../create.css';
import { Actions } from './actions';
import { Example } from './example';

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 47.655548,
    longitude: -122.3032,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });

  const selectAction = action => {
    console.log('selected the ' + action + ' action');
  }

  return (
    <>
      <ReactMapGl
        {...viewport} 
        mapboxApiAccessToken={props.apikey}
        mapStyle='mapbox://styles/estefan074/ck002rku546481cnq4hc1buof'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Source type='geojson' data={geoData}>
          <Layer
            type='line'
            paint={{'line-width': 10, 'line-color': '#007cbf'}}
          />
        </Source>
        <Example longitude={viewport.longitude} latitude={viewport.latitude} />
      </ReactMapGl>
      <Actions triggerAction={ selectAction } />
    </>
  )
}

const geoData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.3093318939209,
            47.650558661252184
          ],
          [
            -122.30980396270753,
            47.65385429078146
          ],
          [
            -122.30499744415282,
            47.65012501030461
          ],
          [
            -122.30499744415282,
            47.655820005858786
          ],
          [
            -122.31482505798338,
            47.65605126159118
          ],
          [
            -122.30165004730223,
            47.65897077712389
          ],
          [
            -122.30031967163085,
            47.653998831175294
          ],
          [
            -122.30426788330077,
            47.650645391009625
          ],
          [
            -122.3032808303833,
            47.65532858402682
          ]
        ]
      }
    }
  ]
}