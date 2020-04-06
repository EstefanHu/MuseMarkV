import React, { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export const Story = () => {
  useEffect(() => {
    const tracker = document.getElementById('storytracker');
    tracker.addEventListener('click', () => {
      tracker.style.height = 'fit-content';
    });
  }, []);

  return (
    <section id='storytracker'>
      <span id='storytracker__header'>
        <IoIosArrowDown className='storytracker__header--icon' />
        <h1>Story Nodes</h1>
        <span id='storytracker__header--count'><p>0</p></span>
      </span>
    </section>
  )
}