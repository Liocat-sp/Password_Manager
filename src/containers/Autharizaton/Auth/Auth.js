import React from 'react';
import {ReactComponent as Authi} from '../../../images/hero image/auth.svg';
import './Auth.css';

const Auth = props => {
    return (
        <div className="Auth">
            <div className="Auth__hero">
                <Authi />
            </div>
            <div className="Auth__form">
                {props.children}
            </div>
        </div>
    )
}

export default Auth
