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
      {navItems.map(item => (
        <Link
          key={item}
          to={'/app/' + item.toLowerCase()}
        >
          <img
            src={require('./icons/' + item + '.png')}
            alt=''
          />
        </Link>
      ))}
    </nav>
  )
}