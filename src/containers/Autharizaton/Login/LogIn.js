import React, { useContext, useState } from 'react';
import Input from '../../../shared/UIcomponents/Input/Input';
import Auth from '../Auth/Auth';
import './LogIn.css';
import { useFormHook } from '../../../shared/hooks/form-hooks';
import Button from '../../../shared/UIcomponents/Buttons/Button';
import { VALIDATION_EMAIL, VALIDATION_MINLENGTH } from '../../../shared/util/Validation';
import { AuthContext } from '../../../shared/context/auth-context';
import { useHistory } from 'react-router-dom';
import BackDrop from '../../../shared/UIcomponents/Backdrop/BackDrop';
import ModalEtc from '../../../shared/UIcomponents/Models/Modal_etc/Modal_etc';

const LogIn = props => {
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const history = useHistory();
    const { state, onInputChange } = useFormHook(
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

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const inputs = {
            email: state.inputs.email.value,
            password: state.inputs.password.value
        }
        try {
            const res = await fetch("http://localhost:5000/user/login", {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const resData = await res.json();
            if (!res.ok) {
                throw new Error(resData.message);
            }
            login(resData.user.id, resData.token);
            history.replace('/locker/accounts');

        }
        catch (err) {
            setError(err.message);
            console.log(err);
        }
    }

    const onErrorClose = () => {
        setError(null);
    }

    return (
        <Auth>
            {error && <React.Fragment>
                <BackDrop onClose={onErrorClose} />
                <ModalEtc title="Error Occured" message={error} onClose={onErrorClose} />
            </React.Fragment>}
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