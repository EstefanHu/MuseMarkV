import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Node } from './node';
import { Turn } from './turn';

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

    return () => {
      
    }
  }, [id]);

  return (
    <section
      className='container'
    >
      <h1 className='abstract__title'>{title}</h1>
      <p className='abstract__description'>{description}</p>
      {route.map(item => {
        if (item.type === 'node') {
          return (
            <Node
              key={ item._id }
              item={ item }
            />
          )
        } else {
          return (
            <Turn
              key={ item._id }
            />
          )
        }
      })}
    </section>
  )
}