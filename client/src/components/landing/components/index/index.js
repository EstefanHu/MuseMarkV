import React, { useState } from 'react';

import { Hero } from './hero';
import { Contact } from './contact';
import { Body } from './body';
import { Nav } from './nav';

export const Index = () => {
  const [chosenSubject, setChosenSubject] = useState('');

  const setSubject = subject => {
    if (chosenSubject === subject) {
      setChosenSubject('');
    } else {
      setChosenSubject(subject)
    }
  }

  return (
    <>
      <Hero />
      <Contact />
      <Body subject={ chosenSubject } tabIndex='-1' />
      <section className='landing__nav'>
        <span className='landing__nav--title'>
          <h1>Project<br/>:Muse</h1>
        </span>
        <Nav setBody={subject => setSubject(subject)} />
      </section>
    </>
  )
}