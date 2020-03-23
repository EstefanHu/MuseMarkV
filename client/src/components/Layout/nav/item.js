import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <Link
      to={'/app/' + props.name.toLowerCase() }
    >
      <li>
        <span className='nav__open'>
          <img src={ require('./icons/'+ props.name + '.png')} alt='' />
          <span className='nav__name'>
            <h2>{ props.name }</h2>
          </span>
        </span>
      </li>
    </Link>
  )
}

export default Item;