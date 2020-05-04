import React, {
  useContext
} from 'react';

import { StoryContext } from '../../../context';
import { withRouter } from 'react-router-dom';

import { FiPlusSquare } from 'react-icons/fi';
import { FaRegSave, FaRegDotCircle } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdModeEdit } from 'react-icons/md';

export const Toolbar = withRouter(props => {
  const { story, setStory } = useContext(StoryContext)

  const createStory = () => {
    setStory(null);
    props.history.push('/app/create');
  }

  const saveStory = () => {
    if (story === null ||
      story.title === '' ||
      story.description === '')
      return alert('You seem to be missing a pitch');
    if (story.route.length === 0)
      return alert('There seems to be no story nodes');

    fetch('http://localhost:4000/story/create', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": story.id,
        "title": story.title,
        "description": story.description,
        "genre": story.genre,
        "location": story.route[0].coordinates,
        "route": story.route
      })
    })
      .then(res => res.json())
      .catch(console.error);

    setStory(null);
    props.history.push('/app/home');
  }

  const setAction = action => {
    sessionStorage.setItem('action', action);
  }

  return (
    <nav id='toolbar' className='topNav'>
      <h1 className='logo'>:M</h1>
      <span>
        {story === null ? (
          <FiPlusSquare
            className='toolbar__icons'
            onClick={createStory}
          />
        ) : (
            <>
              <GoLocation
                className='toolbar__icons'
                onClick={() => setAction('node')}
              />
              <FaRegDotCircle
                className='toolbar__icons'
                onClick={() => setAction('turn')}
              />
              <RiDeleteBin2Line
                className='toolbar__icons'
                onClick={() => setAction('remove')}
              />
              <MdModeEdit
                className='toolbar__icons'
                onClick={() => setAction('edit')}
              />
              <FaRegSave
                className='toolbar__icons'
                onClick={saveStory}
              />
            </>
          )
        }
      </span>
    </nav >
  )
});