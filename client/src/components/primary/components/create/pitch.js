import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { StoryContext } from '../../../../context';

export const Pitch = props => {
  const { story, setStory } = useContext(StoryContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  let history = useHistory();

  useEffect(() => {
    console.log(story);
    if (story === null) {
      setStory({
        "title": "",
        "description": "",
        "genre": "",
        "route": []
      });
    } else {
      setTitle(story.title);
      setDescription(story.description);
      setGenre(story.genre);
    }
  }, [story, setStory]);

  const handleSubmit = e => {
    e.preventDefault();
    setStory({
      "id": story._id,
      "title": title,
      "description": description,
      "genre": genre,
      "route": story.route
    });
    props.togglePitch();
  }

  const cancelStory = () => {
    setStory({ "route": [] });
    history.goBack();
  }

  return (
    <div className='modal'>
      <div className='modal-content' id='storyNode__form'>
        <h1>Create Story Pitch</h1>
        <form onSubmit={handleSubmit}>
          <input
            className='storyNode__input' //TODO: Updated className name for repeated CSS tags.
            type='text'
            value={title || ''}
            onChange={e => setTitle(e.target.value)}
            placeholder='Title the Story'
            required
          />
          <input
            className='storyNode__input'
            type='text'
            value={description || ''}
            onChange={e => setDescription(e.target.value)}
            placeholder='Describe the Story'
            required
          />
          <input
            className='storyNode__input'
            type='text'
            value={genre || ''}
            onChange={e => setGenre(e.target.value)}
            placeholder='Select Genre'
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