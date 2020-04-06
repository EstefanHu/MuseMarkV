import React, { useState, useEffect } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowUp
} from 'react-icons/io';

export const Story = props => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const tracker = document.getElementById('storytracker');
    document.getElementById('storytracker__header').addEventListener('click', () => {
      tracker.classList.toggle('storytracker--open');
      setIsOpen(isOpen => !isOpen);
    });
  }, []);

  return (
    <section id='storytracker' className='storytracker'>
      <span id='storytracker__header'>
        {!isOpen ? (
          <IoIosArrowDown className='storytracker__header--icon' />
        ) : (
          <IoIosArrowUp className='storytracker__header--icon' />
        )}
        <h1>Story Nodes</h1>
        <span id='storytracker__header--count'><p>{ props.nodes.length }</p></span>
      </span>
      {props.nodes.map(node => (
        <article key={node.title}>
          <h2>{node.title}</h2>
        </article>
      ))}
    </section>
  )
}