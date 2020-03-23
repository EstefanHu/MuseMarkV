import React, { useState, useEffect } from 'react';

import Loading from '../../layout/loading';
import Story from './story';

const Stories = () => {
  const [storiesMade, setStoriesMade] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/stories/' + 1)
      .then(res => res.json())
      .then(res => setStoriesMade(res))
      .catch(console.error);
  }, []);

  return storiesMade ? (
    <>
      {storiesMade.map(item => (
        <Story key={ item.id } id={ item.id } title={ item.title } />
      ))}
    </>
  ) : (
    <Loading />
  )
}

export default Stories;