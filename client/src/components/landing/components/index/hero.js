import React from 'react';

export const Hero = () => {
  return(
    <section className='videoHero'>
      <video className='video-bg' autoPlay muted loop>
        <source src='./video/hero.mp4' type='video/mp4' />
      </video>
    </section>
  )
}