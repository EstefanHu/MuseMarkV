import React from 'react';

const Actions = () => {
  const options = [
    'Add',
    'Connect',
    'Edit',
    'remove'
  ]

  return (
    <div id='actions'>
      {options.map(item => (
        <button id='item'>{ item }</button>
      ))}
    </div>
  )
}

export default Actions;