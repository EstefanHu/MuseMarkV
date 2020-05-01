import React, { useState, useEffect } from 'react';

export const Toolbar = () => {
  const [isWriting, setIsWriting] = useState(false);

  return (
    <nav id='toolbar' className='topNav'>
      <h1 className='logo'>:M</h1>
      {isWriting ? (
        <h1>Creating</h1>
      ) : (
          <button
            onClick={() => setIsWriting(isWriting => !isWriting)}
          >Create Story</button>
        )
      }
    </nav >
  )
}