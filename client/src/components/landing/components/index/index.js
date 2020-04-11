import React, { useState } from 'react';

import { Hero } from './hero';
import { Contact } from './contact';
import { Body } from './body';
import { Nav } from './nav';
import Register from './register';

export const Index = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const callMenu = subject => {
    console.log(subject);
  }

  return (
    <>
      <Hero />
      <Contact />
      <Body />
      <section className='landing__nav'>
        <span className='landing__nav--title'>
          <h1>Project<br/>:Muse</h1>
        </span>
        <Nav callMenu={ callMenu } />
      </section>
      {isRegistering &&
        <Register
          toggleRegister={() => setIsRegistering(isRegistering => !isRegistering)}
        />
      }
    </>
  )
}