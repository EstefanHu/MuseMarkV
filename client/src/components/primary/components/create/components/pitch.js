import React, { useState, useContext } from 'react';

import { PitchContext } from '../../../../../context';

export const Pitch = props => {
  const { pitch, setPitch } = useContext(PitchContext);
  const [title, setTitle] = useState(initial.title);
  const [description, setDescription] = useState(initial.description);
  const [location, setLocation] = useState(initial.location);

  const handleSubmit = e => {
    e.preventDefault();
    setInitial({
      "title": "Testing",
      "Description": "",
      "location": []
    });
    props.togglePitch();
  }

  return (
    <div className='modal'>
      <div className='modal-content' id='storyNode__form'>
        <h1>Initialize Story</h1>
        <form onSubmit={ handleSubmit }>
          <input
            className='storyNode__input' //TODO: Updated className name for repeated CSS tags.
            type='text'
            value={ title }
            onChange={e => setTitle(e.target.value)}
            placeholder='Title the Story'
          />
          <input
            className='storyNode__input'
            type='text'
            value={ description }
            onChange={e => setDescription(e.target.value)}
            placeholder='Describe the Story'
          />
          <input
            className='storyNode__input'
            type='text'
            value={ location }
            onChange={e => setLocation(e.target.value)}
            placeholder='Initial Location'
          />
          <span className='storyNode__horizontal'>
            <input className='plotNode' type='submit' value='Start Story' />
            <button className='cancelNode'>Cancel</button>
          </span>
        </form>
      </div>
    </div>
  )
}