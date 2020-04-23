import React, { useContext } from 'react';
import { StoryContext } from '../../../../context';

export const Banner = props => {
  const { story } = useContext(StoryContext);

  return story ? (
    <div
      className='pitchbanner'
      onClick={() => props.togglePitch()}
    >
      <h1>{ story.title }</h1>
    </div>
  ) : (<></>)
}