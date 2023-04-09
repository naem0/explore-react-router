import React from 'react';
import './Nav.css'
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <Link to ="/">Friend</Link>
            <Link to ="/home">Home</Link>
            <Link to ="/app">App</Link>
            <Outlet></Outlet>
        </nav>
    );
};

export default Nav;