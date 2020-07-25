import React from 'react'
import './BackDrop.css';


function BackDrop(props) {
    return (
        <div className="BackDrop" onClick={props.onClose}></div>
    )
}

export default BackDrop
