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
  const { story, setStory } = useContext(StoryContext);

  useEffect(() => {
    return () => {
      setStory(null);
    }
  });

  return (
    <>
      {story &&
        <section className='container'>
          <div
            id='storyPitch'
            onClick={() => setPitch(true)}
          >
            <p>{story.genre}</p>
            <h1>{story.title}</h1>
            <p>{story.description}</p>
          </div>
        </section>
      }
      {pitch &&
        <Pitch togglePitch={() => setPitch(pitch => !pitch)} />
      }
      {node !== null &&
        <Write toggleNode={() => setNode(null)} />
      }
    </>
  )
}