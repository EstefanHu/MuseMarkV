import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaDotCircle } from 'react-icons/fa';

export const Abstract = () => {
  let { id } = useParams();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [route, setRoute] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/story/' + id)
      .then(res => res.json())
      .then(res => {
        setTitle(res.title);
        setDescription(res.description);
        setRoute(res.route);
      })
      .catch(console.errors);

  }, []);

  return (
    <section
      className='container'
    >
      <h1>{title}</h1>
      <h1>{description}</h1>
      {route.map(item => {
        if (item.type === 'node') {
          return (
            <article
              key={item._id}
              className='storynode__card'
            >
              <h1>{ item.name }</h1>
              <div dangerouslySetInnerHTML={{__html: item.sanitizedHtml }}></div>
            </article>
          )
        } else {
          return <FaDotCircle key={item._id} />
        }
      })}
    </section>
  )
}