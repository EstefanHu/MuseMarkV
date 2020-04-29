import React, { useState, useEffect, useContext } from 'react';
import { StoryContext } from '../../../../context';

import Loading from '../../layout/loading';
import { Link } from 'react-router-dom';

export const Stories = props => {
  const { setStory } = useContext(StoryContext);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/story/library', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => setStories(res))
      .catch(console.error);
  }, []);

  return stories ? (
    <>
      {stories.map(item => (
        <article
          key={item._id}
          className='dashboard__item'
        >
          <span className='dashboard__item--header'>
            <p></p>
            <p></p>
          </span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <span className='dashboard__item--actions'>
            <Link
              to='/app/create'
              onClick={() => setStory({
                'id': item._id,
                'title': item.title,
                'description': item.description,
                'route': item.route
              })}
            >Update</Link>
            {/* <Link
              to={`/app/abstract/${item._id}`}
            >Abstract</Link> */} 
            {/* TODO: add back for beta */}
            <button
              onClick={() => {
                props.toggleIsDeleting()
                props.setId(item._id)
              }}
            >
              Delete
            </button>
          </span>
        </article>
      ))}
    </>
  ) : (
      <Loading />
    )
}