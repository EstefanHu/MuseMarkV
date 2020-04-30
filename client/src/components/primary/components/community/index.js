import React, { useState, useEffect } from 'react';

export const Community = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/story/community', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => setStories(res))
      .catch(console.error);
  }, []);

  return (
    <section className='container'>
      {stories.map(item => (
        <article
          key={item._id}
          className='storycard'
        >
          <span className='storycard--header'>
            <p></p>
            <p></p>
          </span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <span className='storycard--actions'>
            
          </span>
        </article>
      ))}
    </section>
      )
}