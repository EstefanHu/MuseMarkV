import React, { useState, useEffect }from 'react';

import './create.css';
import { Map } from './components/map';
import Loading from '../../layout/loading';

export const Create = props => {
  const [latitude, setLatitude] = useState(47.655548);
  const [longitude, setLongitude] = useState(-122.303200);
  const [api, setApi] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => setApi(res))
      .catch(console.error);
  }, []);

  // TODO: update to functional component
  // For Centering map on Geolocated space of user
  // geoLocate(times) {
  //   navigator.geolocation
  //     .getCurrentPosition(position => {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     this.setState({
  //       latitude: latitude,
  //       longitude: longitude,
  //     });
  //   }, error => {
  //     if (error.code === 3) {
  //       if (times === 5) {
  //         console.log('Recursion failed...');
  //       }
  //       console.log('Recurring...\n');
  //       this.geoLocate(times + 1);
  //     } else {
  //       console.log(error);
  //     }
  //   }, { timeout: 2000 });
  // }

  return (
    <>
      {api !== '' ? (
        <Map longitude={ longitude } latitude={ latitude } apikey={ api } />
      ) : (
        <Loading />
      )}
    </>
  )
}