import React, { useState, useRef } from 'react'
import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLinks/NavLinks'
import './MainNavigation.css';

const MainNavigation = () => {
    const closebtn = useRef();
    const [menueBtn, setmenueBtn] = useState(false);
    return (
        // place for the sidebar & backdrop
        <MainHeader>
            <div className="Main-Navigation">
                <h2 className="main-navigation__title">PASSLOCK</h2>
                <nav className="main-navigation__links">
                    <NavLinks />
                </nav>
                <div className="menue">
                    <span ref={closebtn} className={`hamburger ${menueBtn && 'active'}`} onClick={() => setmenueBtn(prev => !prev)}></span>
                </div>
                {menueBtn && <NavLinks onClose={closebtn.current} />}
            </div>
        </MainHeader>
    )
}

export default MainNavigation
