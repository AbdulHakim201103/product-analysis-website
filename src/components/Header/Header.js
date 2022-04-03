import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navber container'>
            <Link className='nav-link' to='/home'>HOME</Link>
            <Link className='nav-link' to='/reviews'>REVIEWS</Link>
            <Link className='nav-link' to='/dashboard'>DASHBOARD</Link>
            <Link className='nav-link' to='/blogs'>BLOGS</Link>
            <Link className='nav-link' to='/about'>ABOUT</Link>
        </nav>
    );
};

export default Header;