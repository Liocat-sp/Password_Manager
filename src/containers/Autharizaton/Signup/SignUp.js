import React from 'react';
import Auth from '../Auth/Auth';
import Input from '../../../shared/UIcomponents/Input/Input';
import { useFormHook } from '../../../shared/hooks/form-hooks';
import { VALIDATION_REQUIRE, VALIDATION_EMAIL, VALIDATION_MINLENGTH } from '../../../shared/util/Validation';
import Button from '../../../shared/UIcomponents/Buttons/Button';
import './SignUp.css';

function SidnUp() {
    const { state, onInputChange } = useFormHook(
        {
            name: {
                value: '',
                isVallid: false
            },
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
            <h1 className="Auth-Login__pg">Signup</h1>
            <form className="Auth-Signup">
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    validators={[VALIDATION_REQUIRE()]}
                    onInput={onInputChange}
                    placeholder="Your Name"
                    errorText="Please enter your Name."
                />
                <Input
                    id="email"
                    element="input"
                    type="text"
                    label="Email"
                    validators={[VALIDATION_REQUIRE(), VALIDATION_EMAIL()]}
                    onInput={onInputChange}
                    placeholder="Your Email"
                    errorText="Please enter valid Email." />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    see
                    validators={[VALIDATION_MINLENGTH(8)]}
                    onInput={onInputChange}
                    placeholder="Your Password"
                    errorText="Please enter valid Password(length>=8)."
                />
            </form>
            <div className="Auth-signup-button">
                <Button disabled={!state.isValid} onClick={onSubmitHandler}>Signup</Button>
                <Button to="/auth/login" border>Have An Account</Button>
            </div>

        </Auth>
    )
;}

export default SidnUp
