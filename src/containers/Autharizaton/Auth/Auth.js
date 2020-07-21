import React from 'react';
import './Auth.css'

const Auth = props => {
    return (
        <div className="Auth">
            <div className="Auth__hero">  
            </div>
            <div className="Auth__form">
                {props.children}
            </div>
        </div>
    )
}

export default Auth
