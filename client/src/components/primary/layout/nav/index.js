import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const navItems = [
    'Dashboard',
    'Community',
    'Settings'
  ]

  return (
    <nav className='primaryNav'>
      <ul>
        {navItems.map(item => (
          <Link
            key={item}
            to={'/app/' + item.toLowerCase()}
          >
            <li>
              <img src={require('./icons/' + item  + '.png')} alt='' />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}