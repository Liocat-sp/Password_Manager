import React from 'react'
import './LockerSideNav.css';
import { ReactComponent as Accounts} from '../../images/icons/accounts.svg';
import { ReactComponent as Key} from '../../images/icons/key.svg';
import { NavLink } from 'react-router-dom';

function LockerSideNav() {
    return (
        <div className="Side-Nav">
            <h3>Your Locker</h3>
            <ul>
                <li><NavLink className="side-Link" exact to="/locker/accounts"><div><Accounts/>Accounts</div></NavLink></li>
                <li><NavLink className="side-Link" exact to="/locker/create"><div><Key/>Create Password</div></NavLink></li>
            </ul>
            <div className="DashFooter"><a href="https://clearbit.com">Logos provided by Clearbit</a></div>
        </div>
    )
}

export default LockerSideNav
