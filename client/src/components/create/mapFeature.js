import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';


const MapFeature = props => {
    return (
        <Feature coordinates={[props.longitude, props.latitude]} />
    )
}

export default MapFeature;