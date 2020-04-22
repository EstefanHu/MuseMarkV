import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Write = props => {
  const [name, setName] = useState(props.tempNode.name);
  const [markdown, setMarkdown] = useState(props.tempNode.markdown);
  const [longitude, setLongitude] = useState(props.tempNode.coordinates[0]);
  const [latitude, setLatitude] = useState(props.tempNode.coordinates[1]);

  useEffect(() => {
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
    if (name === '') return alert('Story Nodes must have a name')

    const newNode = {
      "type": props.tempNode.type,
      "position": props.tempNode.position,
      "name": name,
      "markdown": markdown,
      "coordinates": [longitude, latitude]
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
            value={ name }
            onChange={e => setName(e.target.value)}
            placeholder='Create a Name for this Node'
          />
          <span className='storyNode__horizontal'>
            <span>
              <label>Longitude</label>
              <input
                className='storyNode__input'
                type='text'
                value={ longitude }
                onChange={e => setLongitude(e.target.value)}
                placeholder={ props.tempNode.coordinates[0] }
                disabled
              />
            </span>
            <span>
              <label>Latitude</label>
              <input
                className='storyNode__input'
                type='text'
                value={ latitude }
                onChange={e => setLatitude(e.target.value)}
                placeholder={ props.tempNode.coordinates[1] }
                disabled
              />
            </span>
          </span>
          <label>Content of Story Node</label>
          <textarea
            className='storyNode__input'
            type='text'
            value={ markdown }
            onChange={e => setMarkdown(e.target.value)}
            placeholder='Story Markdown'
          />
          <span className='storyNode__horizontal'>
            <input className='plotNode' type='submit' value='Plot Node' />
            <button className='cancelNode' onClick={() => {props.toggleIsWriting()}}>Cancel</button>
          </span>
        </form>
          <a href='https://www.markdownguide.org/' target='_blank'>What is Markdown?</a>
      </div>
    </div>
  )
}