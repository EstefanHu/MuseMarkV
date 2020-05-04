import React, { useState, useContext } from 'react';

import './create.css';
import { Pitch } from './pitch';
import { Write } from './write';
import { NodeContext } from '../../../../context';

export const Create = props => {
  const [pitch, setPitch] = useState(true);
  const { node, setNode } = useContext(NodeContext);

  return (
    <>
      {pitch &&
        <Pitch togglePitch={() => setPitch(pitch => !pitch)} />
      }
      {node !== null &&
        <Write
          setNode={node => setNode(!node)}
        />
      }
    </>
  )
}