import React, { useState } from 'react'
import './UIBox.css'
import ModalACC from '../Modal_ACC/Modal_ACC';
import BackDrop from '../Backdrop/BackDrop';

function UIBox(props) {
    const [AccModal, setAccModal] = useState(false);

    function onClickHandler() {
        setAccModal(true);
    }

    function onCloseHandler() {
        setAccModal(false)
    }
    return (
        <React.Fragment>
            {AccModal && (
                <React.Fragment>
                    <BackDrop onClose={onCloseHandler}/>
                    <ModalACC id={props.id} website={props.website} email={props.Email} onClose={onCloseHandler} />
                </React.Fragment>
            )}
            <div className="ACC_Box" onClick={onClickHandler}>
                <div className="ACC_Logo">
                    <img src="https://logo.clearbit.com/segment.com"></img>
                </div>
                <div className="ACC_Content">
                    <h3>{props.website}</h3>
                    <p>{props.Email}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UIBox
