import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input/Input';
import Button from '../Buttons/Button';
import './Modal_Acc.css';

const Data = [
    {
        id: "a1",
        website: "Google",
        websiteIcon: "Link",
        userEmail: "Saurabh@gmail.com",
        userName: null,
        password: "something"
    },
    {
        id: "a2",
        website: "Facebook",
        websiteIcon: "Link2",
        userEmail: "saurabh@facebook.com",
        userName: "liocat",
        password: "something"
    },
    {
        id: "a3",
        website: "Google",
        websiteIcon: "Link",
        userEmail: "Saurabh@gmail.com",
        userName: null,
        password: "something"
    },
    {
        id: "a4",
        website: "Facebook",
        websiteIcon: "Link2",
        userEmail: "saurabh@facebook.com",
        userName: "liocat",
        password: "something"
    }, {
        id: "a5",
        website: "Google",
        websiteIcon: "Link",
        userEmail: "Saurabh@gmail.com",
        userName: null,
        password: "something"
    },
    {
        id: "a6",
        website: "Facebook",
        websiteIcon: "Link2",
        userEmail: "saurabh@facebook.com",
        userName: "liocat",
        password: "something"
    }
]

function ModalACC(props) {
    const { id, email, website } = props;
    const [password, setPassword] = useState(null);
    const [userName, setUserName] = useState(null);
    useEffect(() => {
        const response = Data.filter(acc => id === acc.id);
        console.log(response);
        setPassword(response[0].password);
        setUserName(response[0].userName);
    }, [id])
    // fetch

    const ModalItem = (<div className="Modal_ACC">
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
                        value={email}
                        errorNULL
                        onInput={() => {}}
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
                        errorNULL
                        onInput={() => {}}
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
                        onInput={() => {}}
                     />
                </div>
            </div>
            <div className="Modal_Acc_Button">
                <Button half onClick={props.onClose}>Go Back</Button>
                <Button half border>Update</Button>
                <Button half border>Delete</Button>
            </div>
        </React.Fragment>}
    </div>);
    return ReactDOM.createPortal(ModalItem, document.getElementById("Modal_Acc"));
}

export default ModalACC;
