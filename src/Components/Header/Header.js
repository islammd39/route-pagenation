import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=''>
            <Link to='/home'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/albums'>Albums</Link>
            <Link to='/service'>Service</Link>
        </nav>
    );
};

export default Header;