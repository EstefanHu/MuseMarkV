import React, { useState } from 'react';

const Item = props => {
  const [isShown, setIsShown] = useState(false);

  return (
    <li
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span className='nav__open'>
        <img src={ './icons/'+ props.name + '.png'} alt='icon' />
        <span className='nav__name'>
          <h2>{ props.name }</h2>
        </span>
      </span>
      {isShown && (
        <div className='nav__hover'>
          <p>{ props.name }</p>
        </div>
      )}
    </li>
  )
}

export default Item;