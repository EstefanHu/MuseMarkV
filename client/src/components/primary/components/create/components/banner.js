import React, { useContext } from 'react';
import { PitchContext } from '../../../../../context';

export const Banner = props => {
  const { pitch } = useContext(PitchContext);

  return (
    <div
      className='pitchbanner'
      onClick={() => props.togglePitch()}
    >
      <h1>{ pitch.title }</h1>
    </div>
  )
}