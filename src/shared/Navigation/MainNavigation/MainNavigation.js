import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLinks/NavLinks'
import './MainNavigation.css';

const MainNavigation = () => {
    return (
        // place for the sidebar & backdrop
        <MainHeader>
            <div className="Main-Navigation">
                {/* <div> for button </div> */}
                <h2 className="main-navigation__title">PASSLOCK</h2>
                <nav className="main-navigation__links">
                    <NavLinks />
                </nav>
            </div>
        </MainHeader>
    )
}

export default MainNavigation
