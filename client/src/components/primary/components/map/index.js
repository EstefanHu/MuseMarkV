import React, { useState, useEffect, useContext } from 'react';

import { Map } from './map';
import Loading from '../../layout/loading';
import { LocationContext } from '../../../../context';

export const MapContainer = () => {
  const { lng, lat } = useContext(LocationContext);
  const [api, setApi] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => setApi(res))
      .catch(console.error);
  }, []);

  return api && lng && lat ? (
    <Map apikey={api} lng={lng} lat={lat} />
  ) : (
      <Loading />
    )
}