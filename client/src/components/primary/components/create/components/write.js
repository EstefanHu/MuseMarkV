import React, { useState, useEffect } from 'react';

export const Write = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [longitude, setLongitude] = useState(props.lng);
  const [latitude, setLatitude] = useState(props.lat);

  useEffect(props => {
    document.getElementById('write__modal--close').addEventListener('click',() => {
      props.modal.style.display = 'none';
    });
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    console.log('submitted');
  }

  return (
    <div className='modal' id='write__modal'>
      <div className='modal-content' id='storypoint__form'>
        <span className='close' id='write__modal--close'>&times;</span>
        <h1>Add Node to Story</h1>
        <form onSubmit={ handleSubmit } >
          <input
            className='storypoint__input'
            type='text'
            value={ title }
            onChange={e => setTitle(e.target.value)}
            placeholder='Title Node'
          />
          <input
            className='storypoint__input'
            type='text'
            value={ content }
            onChange={e => setContent(e.target.value)}
            placeholder='Content'
          />
          <input type='submit' value='Create Node' />
        </form>
      </div>
    </div>
  )
}