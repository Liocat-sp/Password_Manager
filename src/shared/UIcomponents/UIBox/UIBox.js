import React, { useState } from 'react'
import './UIBox.css'
import ModalACC from '../Models/Modal_ACC/Modal_ACC';
import BackDrop from '../Backdrop/BackDrop';
import ModalEtc from '../Models/Modal_etc/Modal_etc';

function UIBox(props) {
    const [AccModal, setAccModal] = useState(false);
    const [Alert, setAlert] = useState(false);
    const [AlertContent, setAlertContent] = useState({id: props.id, title: "", message: ""});
    function onAccClickHandler() {
        setAccModal(true);
    }
    function onAccCloseHandler() {
        setAccModal(false)
    }
    function onAlertOpen() {
        setAlert(true);
    }
    function onAlertClose() {
        setAlert(false);
    }
    return (
        <React.Fragment>
            {AccModal && (
                <React.Fragment>
                    <BackDrop onClose={onAccCloseHandler} />
                    <ModalACC
                        id={props.id}
                        website={props.website}
                        email={props.Email}
                        onClose={onAccCloseHandler}
                        Alert={onAlertOpen}
                        setAlert={setAlertContent} />
                </React.Fragment>
            )} {Alert && (
                <React.Fragment>
                    <BackDrop onClose={onAlertClose} />
                    <ModalEtc
                    ren={props.ren} 
                    onClose={onAlertClose} 
                    id={AlertContent.id} 
                    title={AlertContent.title} 
                    message={AlertContent.message} />
                </React.Fragment>
            )}
            <div className="ACC_Box" onClick={onAccClickHandler}>
                <div className="ACC_Logo">
                    <img src={props.Icon} alt={props.website}></img>
                </div>
                <div className="ACC_Content">
                    <h3>{props.website}</h3>
                    <p>{props.Email.length > 17 ? props.Email.slice(0,16)+".." : props.Email }</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UIBox
