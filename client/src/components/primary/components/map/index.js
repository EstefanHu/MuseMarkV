import React, { useState, useEffect } from 'react';

import { Map } from './map';
import Loading from '../../layout/loading';

export const MapContainer = () => {
  const [api, setApi] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => setApi(res))
      .catch(console.error);
  }, []);

  return api ? (
    <Map apikey={api} />
  ) : (
      <Loading />
    )
}