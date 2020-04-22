import React, { useState, useEffect } from 'react';

import Loading from '../../../layout/loading';
import { Link } from 'react-router-dom';

export const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/story/library/' + 1) // TODO: Change "1" to userId
      .then(res => res.json())
      .then(res => setStories(res))
      .catch(console.error);
  }, []);

  return stories ? (
    <>
      {stories.map(item => (
        <article
          key={item.id}
          className='dashboard__item'
        >
          <Link
            to={`/app/story/${ item.id }`}
          >Read More</Link>
        </article>
      ))}
    </>
  ) : (
    <Loading />
  )
}