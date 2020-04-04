import React from 'react';

export const Actions = props => {
  const options = [
    'Add',
    'Connect',
    'Edit',
    'remove'
  ]

  return (
    <div id='actions'>
      {options.map(item => (
        <button
          key={ item }
          id='item'
          onClick={ props.triggerSelectedAction }>
            { item }
        </button>
      ))}
    </div>
  )
}