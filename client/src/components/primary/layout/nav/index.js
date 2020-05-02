import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdDashboard,
  MdSettings
} from 'react-icons/md';
import { RiCommunityLine } from 'react-icons/ri';

export const Nav = () => (
  <nav className='primaryNav'>
    <Link to='/app/dashboard' >
      <MdDashboard className='primaryIcon' />
    </Link>
    <Link to='/app/community'>
      <RiCommunityLine className='primaryIcon' />
    </Link>
    <Link to='/app/settings'>
      <MdSettings className='primaryIcon' />
    </Link>
  </nav>
)