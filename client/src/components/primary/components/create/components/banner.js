import React, { useContext } from 'react';
import { PitchContext } from '../../../../../context';

export const Banner = () => {
  const { pitch } = useContext(PitchContext);

  return (
    <div className='pitchbanner'>
      <h1>{ pitch.title }</h1>
    </div>
  )
}