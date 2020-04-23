import React, { useState, useEffect, useContext } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

import { StoryContext } from '../../../../context';

export const Story = props => {
  const {story} = useContext(StoryContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (story) {
      const tracker = document.getElementById('storytracker');
      const opentracker = () => {
        setIsOpen(isOpen => !isOpen);
        tracker.classList.toggle('storytracker--open');
      }
      document.getElementById('storytracker__header')
        .addEventListener('click', opentracker);

      return () => {
        document.getElementById('storytracker__header')
          .removeEventListener('click', opentracker);
      }
    }
  }, [story]);

  return (
    <section id='storytracker' className='storytracker'>
      <span id='storytracker__header'>
        {!isOpen ? (
          <IoIosArrowDown className='storytracker__icon' />
        ) : (
          <IoIosArrowUp className='storytracker__icon' />
        )}
        <h1>Story Nodes</h1>
        <span id='storytracker__header--count'><p>{ story.route.length }</p></span>
      </span>
      {story.route.map(node => (
        <article key={node.position} className='storytracker__node'>
          {node.type === 'node' ? (
            <>
              <MdLocationOn className='storytracker__icon--node storytracker__icon' />
              <div className='storytracker__node--title' onClick={() => props.editNode(node)} >
                {node.name ? (
                  <h2>{node.name}</h2>
                ):(
                  <h2>ERROR: No Name</h2>
                )}
              </div>
            </>
          ) : (
            <>
              <FaDotCircle className='storytracker__icon--turn storytracker__icon' />
              <div className='storytracker__node--title'>
                <h2>---Path Turn---</h2>
              </div>
            </>
          )}
        </article>
      ))}
    </section>
  )
}