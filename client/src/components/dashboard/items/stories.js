import React, { useState, useEffect } from 'react';

import Story from './story';

const Stories = () => {
  const [storiesMade, setStoriesMade] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/stories/' + 1)
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => setStoriesMade(res))
      .catch(console.error);
  }, []);

  return(
    <>
      Stories
    </>
  )
}

export default Stories;