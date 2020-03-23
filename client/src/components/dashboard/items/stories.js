import React, { useState, useEffect } from 'react';

import Loading from '../../layout/loading';
import Story from './story';

const Stories = () => {
  const [storiesMade, setStoriesMade] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/stories/' + 1)
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => setStoriesMade(res))
      .then(console.log(storiesMade))
      .catch(console.error);
  }, []);

  return storiesMade ? (
    <>
      {console.log(storiesMade)}
    </>
  ) : (
    <Loading />
  )
}

export default Stories;