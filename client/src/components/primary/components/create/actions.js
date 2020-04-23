import React from 'react';

export const Actions = props => {
  const options = [
    'Add Node',
    'Add Turn',
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
      <button
        onClick={() => props.saveStory()}
      >
        Save
      </button>
    </div>
  )
}