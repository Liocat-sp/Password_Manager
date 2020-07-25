import React from 'react';
import Input from '../../../shared/UIcomponents/Input/Input';
import Auth from '../Auth/Auth';
import './LogIn.css';
import { useFormHook } from '../../../shared/hooks/form-hooks';
import Button from '../../../shared/UIcomponents/Buttons/Button';
import { VALIDATION_EMAIL, VALIDATION_MINLENGTH } from '../../../shared/util/Validation';

const LogIn = props => {
    const {state, onInputChange} = useFormHook(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(state.inputs);
    }

    return (
        <Auth>
            <h1 className="Auth-Login__pg">Login</h1>
            <form className="Auth-Login">
                <Input
                    id="email"
                    element="input"
                    type="text"
                    label="Email"
                    validators={[VALIDATION_EMAIL()]}
                    onInput={onInputChange}
                    autocomplete="username"
                    placeholder="Your Email"
                    errorText="Please enter valid Email" />
                <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    onInput={onInputChange}
                    validators={[VALIDATION_MINLENGTH(8)]}
                    autocomplete="current-password"
                    placeholder="Your Password"
                    see
                    errorText="Please enter correct password" />
            </form>
            <div className="Auth-Login__Button">
                <Button onClick={onSubmitHandler} disabled={!state.isValid}>Login</Button>
                <Button to='/auth/signup' border>Create An Acccount</Button>
            </div>
        </Auth>
    )
}

export default LogIn;