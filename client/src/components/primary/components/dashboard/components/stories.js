import React, { useState, useEffect, useContext } from 'react';
import { StoryContext } from '../../../../../context';

import Loading from '../../../layout/loading';
import { Link } from 'react-router-dom';

export const Stories = () => {
  const {setStory} = useContext(StoryContext);
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
              to='/app/create'
              onClick={() => setStory({
                'title': item.title,
                'description': item.description,
                'nodes': item.route
              })}
            >Review</Link>
            <Link
              to={`/app/abstract/${ item._id }`}
            >Abstract</Link>
            <Link
              to={`/app/statistics/${ item._id }`}
            >Statistics</Link>
          </span>
        </article>
      ))}
    </>
  ) : (
    <Loading />
  )
}