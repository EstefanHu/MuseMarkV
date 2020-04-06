import React, { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export const Story = () => {
  useEffect(() => {

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