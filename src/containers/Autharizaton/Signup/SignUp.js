import React, { useState } from 'react';
import Auth from '../Auth/Auth';
import Input from '../../../shared/UIcomponents/Input/Input';
import { useFormHook } from '../../../shared/hooks/form-hooks';
import { VALIDATION_REQUIRE, VALIDATION_EMAIL, VALIDATION_MINLENGTH } from '../../../shared/util/Validation';
import Button from '../../../shared/UIcomponents/Buttons/Button';
import './SignUp.css';
import { useHistory } from 'react-router-dom';
import BackDrop from '../../../shared/UIcomponents/Backdrop/BackDrop';
import ModalEtc from '../../../shared/UIcomponents/Models/Modal_etc/Modal_etc';
import Loader from '../../../shared/UIcomponents/Loader/Loader';

function SidnUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();
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

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await fetch(`${process.env.REACT_APP_BACKEND}/user/signup`, {
                method: "POST",
                body: JSON.stringify({ name: state.inputs.name.value, email: state.inputs.email.value, password: state.inputs.password.value }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const resData = await res.json()
            if (!res.ok) {
                throw new Error(resData.message);
            }
            setIsLoading(false);
            history.replace('/auth/login');
        }
        catch (error) {
            setError(error.message);
        }
    }
    const onErrorClosed = () => {
        setError(null);
    }
    return (
        <React.Fragment>
            {isLoading && <React.Fragment>
                <BackDrop />
                <div className="LoadingDiv"> <Loader /> </div>
            </React.Fragment>}
            {error && <React.Fragment>
                <BackDrop onClose={onErrorClosed} />
                <ModalEtc title="Error Occured" message={error} onClose={onErrorClosed} />
            </React.Fragment>}
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
        </React.Fragment>
    )
        ;
}

export default SidnUp;