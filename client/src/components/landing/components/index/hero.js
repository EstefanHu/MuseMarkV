import React from 'react';

export const Hero = () => {
  return(
    <video className='video-bg' autoPlay muted loop>
      <source src='./video/hero.mp4' type='video/mp4' />
    </video>
  )
}