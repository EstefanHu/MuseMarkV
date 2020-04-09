import React, { useState, useEffect } from 'react';

export const Write = props => {
  const [title, setTitle] = useState(props.tempNode.title);
  const [content, setContent] = useState(props.tempNode.content);
  const [longitude, setLongitude] = useState(props.tempNode.coords[0]);
  const [latitude, setLatitude] = useState(props.tempNode.coords[1]);

  useEffect(()=> {
    const modal = document.getElementById('writeModal');
    const modalToggle = e => {
      if (e.target === modal) {
        props.toggleIsWriting();
      }
    }
    modal.addEventListener('click', modalToggle);

    return (() => {
      modal.removeEventListener('click', modalToggle);
    });
  });

  const handleSubmit = e => {
    e.preventDefault();
    const newNode = {
      "type": 'node',
      "position": props.tempNode.position,
      "title": title,
      "content": content,
      "coords": [longitude, latitude]
    }
    props.updateStory(newNode);
    props.toggleIsWriting();
  }

  return (
    <div className='modal' id='writeModal'>
      <div className='modal-content' id='storyNode__form'>
        <span className='close' onClick={() => {props.toggleIsWriting()}}>&times;</span>
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
            placeholder={ props.tempNode.coords[0] }
            disabled
          />
          <label>Latitude</label>
          <input
            className='storyNode__input'
            type='text'
            value={ latitude }
            onChange={e => setLatitude(e.target.value)}
            placeholder={ props.tempNode.coords[1] }
            disabled
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
            <input className='plotNode' type='submit' value='Plot Node' />
            <button className='cancelNode' onClick={() => {props.toggleIsWriting()}}>Cancel</button>
          </span>
        </form>
      </div>
    </div>
  )
}