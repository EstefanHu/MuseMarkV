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
          key={item._id}
          className='dashboard__item'
        >
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <span>
            <Link
              to={`/app/story/${ item._id }`}
            >View</Link>
            <Link
              to={`/app/nodes/${ item._id }`}
            >Nodes</Link>
            <Link
              to={`/app/statistics/${ item._id }`}
            >Stats</Link>
          </span>
        </article>
      ))}
    </>
  ) : (
    <Loading />
  )
}