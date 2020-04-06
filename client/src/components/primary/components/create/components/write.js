import React, { useState, useEffect } from 'react';

export const Write = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [longitude, setLongitude] = useState(props.lng);
  const [latitude, setLatitude] = useState(props.lat);

  useEffect(() => {
    const modal = document.getElementById('write__modal');
    document.getElementById('write__modal--close').addEventListener('click',() => {
      modal.style.display = 'none';
    });
    document.getElementById('cancelNode').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    console.log('submitted');
  }

  return (
    <div className='modal' id='write__modal'>
      <div className='modal-content' id='storyNode__form'>
        <span className='close' id='write__modal--close'>&times;</span>
        <h1>Add Node to Story</h1>
        <form onSubmit={ handleSubmit } >
          <label>Title for Story Node</label>
          <input
            className='storyNode__input'
            type='text'
            value={ title }
            onChange={e => setTitle(e.target.value)}
            placeholder='Create a Title for this Node'
          />
          <label>Longitude</label>
          <input
            className='storyNode__input'
            type='text'
            value={ longitude }
            onChange={e => setLongitude(e.target.value)}
            placeholder={ props.lng }
          />
          <label>Latitude</label>
          <input
            className='storyNode__input'
            type='text'
            value={ latitude }
            onChange={e => setLatitude(e.target.value)}
            placeholder={ props.lat }
          />
          <label>Content of Story Node</label>
          <textarea
            className='storyNode__input'
            type='text'
            value={ content }
            onChange={e => setContent(e.target.value)}
            placeholder='Content'
          />
          <span className='storyNode__horizontal'>
            <input id='createNode' type='submit' value='Create Node' />
            <button id='cancelNode'>Cancel</button>
          </span>
        </form>
      </div>
    </div>
  )
}