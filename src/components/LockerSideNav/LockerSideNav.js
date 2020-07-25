import React from 'react'
import './LockerSideNav.css';
import { NavLink } from 'react-router-dom';

function LockerSideNav() {
    return (
        <div className="Side-Nav">
            <h3>Your Locker</h3>
            <ul>
                <li><NavLink className="side-Link" exact to="/locker/accounts">Accounts</NavLink></li>
                <li><NavLink className="side-Link" exact to="/locker/create">Create Password</NavLink></li>
            </ul>
        </div>
    )
}

export default LockerSideNav
