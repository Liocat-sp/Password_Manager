import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import Input from '../../Input/Input';
import Button from '../../Buttons/Button';
import './Modal_Acc.css';
import { AuthContext } from '../../../context/auth-context';

function ModalACC(props) {
    const { isLoggedIn, userId, token } = useContext(AuthContext);
    const { id, email, website } = props;
    const [password, setPassword] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const data = async () => {
            if (isLoggedIn) {
                try {
                    const res = await fetch(`http://localhost:5000/locker/acc/${id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": 'application/json',
                            "Authorization": "Bearer " + token
                        }
                    })
                    const resData = await res.json();
                    if (!res.ok) {
                        throw new Error(resData.message);
                    }
                    console.log(resData);
                    setPassword(resData.account.password);
                    setUserName(resData.account.userName);
                }
                catch (error) {
                    props.setAlert(prev => { return { ...prev, title: "Error Occured", message: error.message } });
                    console.log(error);
                }
            }
        }
        data();
    }, [id, userId, isLoggedIn, token, props])
    // fetch by inputs Search Feature.
    function onDeleteHandler() {
        props.setAlert(prev => { return { ...prev, title: "Delete Warning", message: "Do you want to delete.This can't be undone." } });
        props.onClose();
        props.Alert();
    }

    const ModalItem = (<div className="Modal_ACC">
        {!isLoggedIn && <div style={{ color: '#fa4d4d', with: "90%", margin: "0 auto" }}>
            All details feature is disabled for trial virsion. Please Login to use app completely
            </div>}
        {password && <React.Fragment><h2>{website}</h2>
            <div className="Modal_Acc_content">
                <div className="Modal_Acc_divs">
                    <h3>Email: </h3>
                    <Input
                        id="email"
                        element="input"
                        type="text"
                        AddOns
                        copy
                        validators={[]}
                        value={email}
                        errorNULL
                        onInput={() => { }}
                    />
                </div>
                {userName && <div className="Modal_Acc_divs">
                    <h3>Username: </h3>
                    <Input
                        id="username"
                        element="input"
                        type="text"
                        value={userName}
                        AddOns
                        copy
                        validators={[]}
                        errorNULL
                        onInput={() => { }}
                    />
                </div>}
                <div className="Modal_Acc_divs">
                    <h3>Password: </h3>
                    <Input
                        id="password"
                        element="input"
                        type="text"
                        value={password}
                        AddOns
                        copy
                        errorNULL
                        validators={[]}
                        onInput={() => { }}
                    />
                </div>
            </div>
            <div className="Modal_Acc_Button">
                <Button half onClick={props.onClose}>Go Back</Button>
                <Button half border onClick={onDeleteHandler}>Delete</Button>
            </div>
        </React.Fragment>}
    </div>);
    return ReactDOM.createPortal(ModalItem, document.getElementById("Modal_Acc"));
}

export default ModalACC;
