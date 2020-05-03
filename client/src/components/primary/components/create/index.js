import React, { useState } from 'react';

import './create.css';
import { Pitch } from './pitch';
import { Write } from './write';

export const Create = props => {
  const [pitch, setPitch] = useState(true);
  const [isWriting, setIsWriting] = useState(false);

  return (
    <>
      
      {pitch &&
        <Pitch togglePitch={() => setPitch(pitch => !pitch)} />
      }
      {isWriting &&
        <Write
          toggleIsWriting={() => setIsWriting(isWriting => !isWriting)}
        />
      }
    </>
  )
}