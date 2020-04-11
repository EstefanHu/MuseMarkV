import React, { useState } from 'react';

import { Nav } from './nav';
import { Hero } from './hero';
import Register from './register';

export const Index = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <Hero />
      {isRegistering &&
        <Register
          toggleRegister={() => setIsRegistering(isRegistering => !isRegistering)}
        />
      }
    </>
  )
}