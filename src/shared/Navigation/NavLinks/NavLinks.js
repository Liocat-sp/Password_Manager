import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/locker">Locker</NavLink>
            </li>
            <li>
                <NavLink to="/auth/login">LogIn</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;


