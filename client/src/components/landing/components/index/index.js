import React, { useState } from 'react';

import { Hero } from './hero';
import { Contact } from './contact';
import { Nav } from './nav';
import Register from './register';

export const Index = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <Hero />
      <Contact />
      <section className='landing__nav'>
        <span className='landing__nav--title'>
          <h1>Project<br/>:Muse</h1>
        </span>
        <Nav />
      </section>
      {isRegistering &&
        <Register
          toggleRegister={() => setIsRegistering(isRegistering => !isRegistering)}
        />
      }
    </>
  )
}