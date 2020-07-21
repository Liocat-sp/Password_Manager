import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
    if (props.href) {
        return (
            <a href={props.href}>
                <button className={`button ${props.default && 'default'} ${props.border && 'border'}`}>
                    {props.children}

                </button>
            </a>
        );
    }
    else if (props.to) {
        return (
            <Link to={props.to}>
                <button className={`button ${props.default && 'default'} ${props.border && 'border'}`}>
                    {props.children}
                </button>
            </Link>);
    }
    else {
        return (
            <button
            disabled={props.disabled}
                className={`button ${props.default && 'default'} ${props.border && 'border'}`}
                onClick={props.onClick}>
                {props.children}
            </button>);
    }
};

export default Button
