import React from 'react';

export const Node = props => {
  return (
    <article className='storynode__card' >
      <h1>{ props.item.name }</h1>
      <div 
        dangerouslySetInnerHTML={
          {__html: props.item.sanitizedHtml }}
        className='storynode__html'
      >
      </div>
    </article>
  )
}