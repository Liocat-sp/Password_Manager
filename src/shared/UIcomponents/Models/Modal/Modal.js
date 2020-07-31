import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import Input from '../../Input/Input';
import { useFormHook } from '../../../hooks/form-hooks';
import Button from '../../Buttons/Button';
import { VALIDATION_REQUIRE, VALIDATION_EMAIL, VALIDATION_MINLENGTH } from '../../../util/Validation';
import './Modal.css';
import Axios from 'axios';
import { AuthContext } from '../../../context/auth-context';

function Modal(props) {
    const { isLoggedIn, userId, token } = useContext(AuthContext);
    const { onInputChange, state } = useFormHook({
        website: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        userName: {
            value: null,
            isValid: true
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const onSubmitHandler = async () => {
        const image = state.inputs.website.value;
        try {
            const response = await Axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=:${image}`);
            if(!response){
                throw new Error("Can not create account.");
            }
            if (response.status === 200 || response.data.length > 0) {
                const newAcc = {
                    website: response.data[0].name,
                    websiteUrl: response.data[0].domain,
                    logoUrl: response.data[0].logo,
                    email: state.inputs.email.value,
                    userName: state.inputs.userName.value || null,
                    password: state.inputs.password.value,
                    creator: userId
            }
                if (isLoggedIn) {
                    try {
                        const res = await fetch(`${process.env.REACT_APP_BACKEND}/locker/new`, {
                            method: "POST",
                            body: JSON.stringify(newAcc),
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + token
                            }
                        });
                        const resdata = await res.json();
                        if (!res.ok) {
                            throw new Error(res.message);
                        }
                        if (resdata) {
                            props.onNew(prev => {
                                const arr = [...prev];
                                arr.push(resdata.newAcc.Acc);
                                return arr;
                            });
                            props.onCancle();
                        }
                    }
                    catch (error) {
                        props.onError(error.message);
                        props.onCancle();
                    }
                }
                else {
                    const Acc = newAcc;
                    Acc.id = Math.floor(Math.random() * 1000000);
                    props.onNew(prev => {
                        const arr = [...prev];
                        arr.push(Acc);
                        return arr;
                    });
                    props.onCancle();
                }

            }
            else{
                console.log("something went wrong.");
            }
        }
        catch (err) {
            props.onError(err.message);                        
            props.onCancle();
        }

    }

    // const onRequestHandler = useCallback((value) => {
    //     if (value) {
    //         console.log(value)
    //         const response = Axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=:${value}`);
    //         console.log(response);
    //     }
    // }, []);

    const ModelItem = (<div className='Modal'>
        <div className='Modal_title'>
            <h2>{props.title}</h2>
        </div>
        <form className="Modal_form">
            {/* <div className="SearchField"> */}
            <Input
                id="website"
                element="input"
                label="Website"
                AddOns
                onInput={onInputChange}
                // onRequest={onRequestHandler}
                validators={[VALIDATION_REQUIRE()]}
                errorText="Please enter valid website name"
                type="text" />
            {/* <div className="dropDown">
                    <p>samsung</p>
                    <p>apple</p>
                </div> 
            </div>*/}
            <Input
                id="email"
                element="input"
                label="Email"
                AddOns
                onInput={onInputChange}
                validators={[VALIDATION_EMAIL()]}
                errorText="Please enter the correct Email."
                type="text" />
            <Input
                id="username"
                element="input"
                label="Username"
                optional={true}
                AddOns
                isValid={true}
                onInput={onInputChange}
                validators={[]}
                type="text" />
            <Input id="password"
                element="input"
                label="Password"
                onInput={onInputChange}
                see
                validators={[VALIDATION_MINLENGTH(8)]}
                errorText="Please Enter Valid Password(Min length 8)."
                type="password" />
        </form>
        <div className="Modal_Buttons">
            <Button disabled={!state.isValid} half onClick={onSubmitHandler}>Done</Button>
            <Button half border onClick={props.onCancle}>Cancel</Button>
        </div>
    </div>
    );

    return ReactDOM.createPortal(ModelItem, document.getElementById("Modal"));
}

function ModalBox(props) {
    return (
        <Modal {...props} />
    );
}

export default ModalBox;
