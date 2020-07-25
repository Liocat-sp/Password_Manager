import React from 'react';
import ReactDOM from 'react-dom'
import Input from '../Input/Input';
import { useFormHook } from '../../hooks/form-hooks';
import Button from '../Buttons/Button';
import { VALIDATION_REQUIRE, VALIDATION_EMAIL, VALIDATION_MINLENGTH } from '../../util/Validation';
import './Modal.css';

function Modal(props) {
    const { onInputChange, setFormData, state } = useFormHook({
        website: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        userName: {
            value: '',
            isValid: true
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const ModelItem = (<div className='Modal'>
        <div className='Modal_title'>
            <h2>{props.title}</h2>
        </div>
        <form className="Modal_form">
            <Input
                id="website"
                element="input"
                label="Website"
                AddOns
                onInput={onInputChange}
                validators={[VALIDATION_REQUIRE()]}
                errorText="Please enter valid website name"
                type="text" />
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
                onInput={onInputChange}
                validators={[]}
                type="text" />
            <Input id="password"
                element="input"
                label="Password"
                AddOns
                onInput={onInputChange}
                validators={[VALIDATION_MINLENGTH(8)]}
                errorText="Please Enter Valid Password(Min length 8)."
                type="password" />
        </form>
        <div className="Modal_Buttons">
            <Button disabled={!state.isValid} half>Done</Button>
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
