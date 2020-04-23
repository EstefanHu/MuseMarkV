import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PitchContext } from '../../../../../context';

export const Pitch = props => {
  const { pitch, setPitch } = useContext(PitchContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  let history = useHistory();

  useEffect(() => {
    if (pitch === null) {
      setPitch({
        "title": "",
        "description": ""
      });
    } else {
      setTitle(pitch.title);
      setDescription(pitch.description);
    }
  }, [pitch, setPitch]);

  const handleSubmit = e => {
    e.preventDefault();
    setPitch({
      "title": title,
      "description": description,
    });
    props.togglePitch();
  }

  const cancelStory = () => {
    setPitch(null);
    history.goBack();
  }

  return (
    <div className='modal'>
      <div className='modal-content' id='storyNode__form'>
        <h1>Create Story Pitch</h1>
        <form onSubmit={ handleSubmit }>
          <input
            className='storyNode__input' //TODO: Updated className name for repeated CSS tags.
            type='text'
            value={ title }
            onChange={e => setTitle(e.target.value)}
            placeholder='Title the Story'
            required
          />
          <input
            className='storyNode__input'
            type='text'
            value={ description }
            onChange={e => setDescription(e.target.value)}
            placeholder='Describe the Story'
            required
          />
          <span className='storyNode__horizontal'>
            <input className='plotNode' type='submit' value='Save Pitch' />
            <button
              className='cancelNode'
              type='button'
              onClick={cancelStory}
            >Cancel Story</button>
          </span>
        </form>
      </div>
    </div>
  )
}