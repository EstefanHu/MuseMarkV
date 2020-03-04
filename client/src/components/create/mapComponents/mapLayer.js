import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

const MapLayer = props => {
    const test = () => {
        console.log('Testing');
    }

    const testLayer = e => {
        // const layer = document.getElementById('marker');
        console.log(e.lngLat);
    }

    return (
        <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'marker-15'}}
            onClick={testLayer}
            className='layer'
        >
            <Feature 
                coordinates={[props.longitude, props.latitude]}
                onClick={test}
            />
        </Layer>
    )
}

export default MapLayer;