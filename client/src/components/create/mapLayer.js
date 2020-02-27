import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

const MapLayer = props => {
    const test = () => {
        console.log('Testing');
    }

    return (
        <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15'}}>
            <Feature 
                coordinates={[props.longitude, props.latitude]}
                onClick={test}
            />
        </Layer>
    )
}

export default MapLayer;