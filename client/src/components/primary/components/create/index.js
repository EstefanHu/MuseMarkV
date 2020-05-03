import React, { useState } from 'react';

import './create.css';
import { Map } from './map';
import { Pitch } from './pitch';

export const Create = props => {
  const [pitch, setPitch] = useState(true);

  return (
    <>
      <Map
        togglePitch={() => setPitch(pitch => !pitch)}
      />
      {pitch &&
        <Pitch togglePitch={() => setPitch(pitch => !pitch)} />
      }
    </>
  )
}