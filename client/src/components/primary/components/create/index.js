import React, { useState, useEffect } from 'react';

import './create.css';
import { Map } from './map';
import { Pitch } from './pitch';
import Loading from '../../layout/loading';

export const Create = props => {
  const [api, setApi] = useState('');
  const [pitch, setPitch] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => {
        setApi(res)
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {api !== '' ? (
        <Map
          apikey={api}
          togglePitch={() => setPitch(pitch => !pitch)}
        />
      ) : (
          <Loading />
        )}
      {pitch &&
        <Pitch togglePitch={() => setPitch(pitch => !pitch)} />
      }
    </>
  )
}