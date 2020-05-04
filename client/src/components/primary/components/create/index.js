import React, { useState, useEffect, useContext } from 'react';

import './create.css';
import { Pitch } from './pitch';
import { Write } from './write';
import {
  StoryContext,
  NodeContext
} from '../../../../context';

export const Create = props => {
  const [pitch, setPitch] = useState(true);
  const { node, setNode } = useContext(NodeContext);
  const { setStory } = useContext(StoryContext);

  useEffect(() => {
    return () => {
      setStory(null);
    }
  }, [])

  return (
    <>
      {pitch &&
        <Pitch togglePitch={() => setPitch(pitch => !pitch)} />
      }
      {node !== null &&
        <Write toggleNode={() => setNode(null)}/>
      }
    </>
  )
}