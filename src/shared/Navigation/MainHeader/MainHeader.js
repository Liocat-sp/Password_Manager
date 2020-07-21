import React from 'react'
import './MainHeader.css';

const MainHeader = props => {
    return (
        <header className="Main-header">
            {props.children}
        </header>
    )
}

export default MainHeader;