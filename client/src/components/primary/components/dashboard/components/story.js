import React from 'react';
import { Link } from 'react-router-dom';

const Story = props => {
  return (
    <Link
      to={'/app/story/' + props.id }
      className='dashboard__item'
    >
      <article>
        <h1>{ props.title }</h1>
      </article>
    </Link>
  )
}

export default Story;