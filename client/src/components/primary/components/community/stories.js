import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../../layout/loading';

export const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/story/community', {
      credentials: 'include'
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
          className='storycard'
        >
          <span className='storycard--header'>
            <p>{item.genre} by {item.author}</p>
            <p></p>
          </span>
          <h1>{item.title}</h1>
          <p
            className='storycard__description'
          >{item.description}</p>
          <span className='storycard--actions'>
            <Link
              to='/app/more'
            >
              Read More
            </Link>
          </span>
        </article>
      ))}
    </>
  ) : (
      <Loading />
    )
}