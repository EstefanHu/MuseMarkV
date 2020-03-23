import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Item from './item';

const Nav = () => {
    const navItems = [
        'Dashboard',
        'Community',
        'Profile',
        'Settings'
    ]

    const [menu, setMenu] = useState('');
    const [navTitles, setNavTitles] = useState([]);
    const [readMore, setReadMore] = useState('');

    const openMenu = () => {
        menu.style.width = '17rem';
        for (let i = 0; i < navTitles.length; i++) {
            navTitles[i].style.display = 'block';
            setTimeout(() => {
                navTitles[i].children[0].style.opacity = '1';
            }, 150);
        }
        readMore.style.color = 'grey';
    }
    
    const closeMenu = () => {
        menu.style.width = 'calc(4rem + 50px)';
        for (let i = 0; i < navTitles.length; i++) {
            navTitles[i].style.display = 'hidden';
            navTitles[i].children[0].style.opacity = '0';
        }
        readMore.style.color = 'white';
    }

    useEffect(() => {
        setMenu(document.querySelector('nav'));
        setNavTitles(document.querySelectorAll('.nav__name'));
        setReadMore(document.getElementById('more'));
    }, []);
    
    return (
        <nav
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            <h1>M</h1>
            <ul>
                {navItems.map(item => (
                    <Item name={ item } key={ item }/>
                ))}
            </ul>
            <Link to='/more' id='more'>
                Learn More
            </Link>
        </nav>
    )
}

export default Nav;