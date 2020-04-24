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

    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState('');
    const [navTitles, setNavTitles] = useState([]);
    const [readMore, setReadMore] = useState('');

    const openMenu = () => {
        setIsOpen(true);
        menu.style.width = '17rem';
        for (let i = 0; i < navTitles.length; i++) {
            navTitles[i].style.display = 'block';
            setTimeout(() => {
                if (menu.style.width === '17rem') {
                    navTitles[i].children[0].style.opacity = '1';
                }
            }, 150);
        }
        readMore.style.color = 'grey';
    }

    const closeMenu = () => {
        setIsOpen(false);
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
            className='primaryNav'
        >
            <div id='nav__logo'>
                {isOpen
                    ? <h3>Project:Muse</h3>
                    : <h3>:M</h3>
                }
            </div>
            <ul>
                {navItems.map(item => (
                    <Item name={item} key={item} />
                ))}
            </ul>
            <Link to='/more' id='more'>
                Learn More
            </Link>
        </nav>
    )
}

export default Nav;