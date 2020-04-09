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
          onClick={() => {
            if (props.action !== item) {
              props.triggerAction(item);
            } else {
              props.triggerAction(null);
            }
        }}>
          { item }
        </button>
      ))}
    </div>
  )
}