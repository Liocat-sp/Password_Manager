import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Buttons/Button';
import './Modal_etc.css'
import { AuthContext } from '../../../context/auth-context';

function ModalEtc(props) {
    const { isLoggedIn, token } = useContext(AuthContext);
    const [err, setErr] = useState(null);
    const onOkHendler = async () => {
        if (props.id && isLoggedIn && !err) {
            try {
                const res = await fetch(`http://localhost:5000/locker/acc/${props.id}`, {
                    method: "DELETE",
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const resData = await res.json();
                if (!res.ok) {
                    console.log(resData);
                    throw new Error("Something went wrong. Deletion Failed.");
                }
                props.ren(prev => !prev);
            }
            catch (err) {
                setErr(err.message);
                console.log(err);
            }
            console.log("delete " + props.id);
        }
        else {
            if(err) {
                setErr(null);
            }
            props.onClose();
        }
    }
    const onCancleHandler = () => {
        if(err) {
            setErr(null);
        }
        props.onClose();
    }
    const content = (
        <div className="Alert">
            <div className="Alert_title">
                <h2>{!err && props.title}{err && "Error Occured"}</h2>
            </div>
            <div className="Alert_message">
                <p>{!err && props.message}{err && err}</p>
            </div>
            <div className="Alert_button">
                <Button half onClick={onOkHendler}>ok</Button>
                {props.id && <Button half border onClick={onCancleHandler}>Cancle</Button>}
            </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById("Alert"));
}

export default ModalEtc;
