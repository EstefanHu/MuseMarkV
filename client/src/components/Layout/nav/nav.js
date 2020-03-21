import React from 'react';
import { Link } from 'react-router-dom';

import Item from './item';

const Nav = () => {
    const navItems = [
        'Dashboard',
        'Community',
        'Profile',
        'Settings'
    ]
    
    return (
        <nav>
            <h1>Muse</h1>
            <ul>
                {navItems.map(item => (
                    <Item name={ item } />
                ))}
            </ul>
            <Link to='/more' id='more'>
                Learn More
            </Link>
        </nav>
    )
}

export default Nav;