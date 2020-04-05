import React from 'react';

export const Actions = props => {
  const options = [
    'Add',
    'Connect',
    'Edit',
    'Remove'
  ]

  return (
    <div id='actions'>
      {options.map(item => (
        <button
          key={ item }
          onClick={ () => props.triggerAction(item) }>
            { item }
        </button>
      ))}
    </div>
  )
}