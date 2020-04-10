import React, { useState } from 'react';

import { Nav } from './nav';
import { Hero } from './hero';
import { What } from './what';
import { Me } from './me';
import { Contact } from './contact';
import Register from './register';

export const Index = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <Nav
        toggleRegister={() => setIsRegistering(isRegistering => !isRegistering)}
      />
      <Hero />
      <What />
      <Me />
      <Contact />
      {isRegistering &&
        <Register
          toggleRegister={() => setIsRegistering(isRegistering => !isRegistering)}
        />
      }
    </>
  )
}