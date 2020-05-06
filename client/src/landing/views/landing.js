import React from 'react';

import { LandingContent } from '../components/landingcontent';

export const Index = () => {
  return (
    <main id='landingContainer'>
      <div
        className='parallax__layer parallax__back'
      >
        <h1
          id='hero__text'
        >Project<br />:Muse</h1>
      </div>

      <LandingContent />
    </main>
  )
}