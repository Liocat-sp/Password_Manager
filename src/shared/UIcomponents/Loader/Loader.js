import React from 'react';
import './Loader.css'

function Loader(props) {
    return (
        <div className={`${props.notOver?'noOver' :'Load' }`}>
        <div className="loader"></div>
        </div>
    )
}

export default Loader;
