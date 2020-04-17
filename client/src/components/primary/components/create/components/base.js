import React, { useState } from 'react';

export const Base = props => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [location, setLocation] = useState(props.location);

  const handleSubmit = e => {
    e.preventDefault();
    props.setInitial({
      "title": title,
      "description": description,
      "location": location
    });
    props.toggleBase();
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