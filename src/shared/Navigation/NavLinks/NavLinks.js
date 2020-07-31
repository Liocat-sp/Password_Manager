import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import './NavLinks.css'
import { AuthContext } from '../../context/auth-context';

const NavLinks = (props) => {
    const {isLoggedIn, logOut} = useContext(AuthContext);
    const history = useHistory();

    const logout = () => {
        logOut();
        history.push('/');
    }

    return (
        <ul className="nav-links">
            <li>
                <NavLink exact to="/" onClick={() => {props.onClose && props.onClose.click()}} >Home</NavLink>
            </li>
            <li>
                <NavLink to={`/locker/accounts`} onClick={() => {props.onClose && props.onClose.click()}} isActive={(match,location) => location.pathname.includes('locker')}>Locker</NavLink>
            </li>
            {!isLoggedIn && <li>
                <NavLink to="/auth/login" onClick={() => {props.onClose && props.onClose.click()}} isActive={(match,location) => location.pathname.includes('login') || location.pathname.includes('signup') }>LogIn</NavLink>
            </li>}
            {isLoggedIn && <li>
                <p onClick={logout}>Logout</p></li>}
        </ul>
    )
};

export default NavLinks;


