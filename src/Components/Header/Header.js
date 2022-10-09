import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=''>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Service</Link>
        </nav>
    );
};

export default Header;