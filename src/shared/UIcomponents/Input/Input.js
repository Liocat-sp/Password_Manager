import React, { useReducer, useEffect } from 'react';
import './Input.css'
import { validate } from '../../util/Validation';

const reducer = (state, action) => {
    switch (action.type) {
        case 'InputChange': return {
            ...state,
            value: action.value,
            isValid: validate(action.value, action.validators)
        };
        case 'isTouched': return {
            ...state,
            isTouched: true
        };
        default: return state;
    }
}

function Input(props) {
    const [state, dispatch] = useReducer(reducer, { value: props.value || '', isValid: props.isValid || false, isTouched: props.isTouched || false });

    const onChangeHandler = (event) => {
        let val = event.target.value;
        if (props.id === 'email' || props.id === 'password')
            val = event.target.value.replace(" ", '');
        dispatch({ type: 'InputChange', value: val, validators: props.validators });
    }

    const OnTouchHandler = () => {
        dispatch({ type: 'isTouched'});
    }

    const { id, onInput } = props;

    useEffect(() => {
        onInput(id, state.value, state.isValid);
    }
        , [id, state.value, state.isValid, onInput]);

    const Element = props.element === 'input' ?
        <input
            type={props.type}
            id={props.id}
            onChange={onChangeHandler}
            onBlur={OnTouchHandler}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}
            value={state.value} /> :
        <textarea
            type={props.type}
            id={props.id}
            onChange={OnTouchHandler}
            onBlur={OnTouchHandler}
            placeholder={props.placeholder}
            value={state.value} />
    return (
        <div className="Input__div">
            <label htmlFor={props.id}>{props.label}</label>
            {Element}
            <p className="Input__error">{!state.isValid && state.isTouched && props.errorText}</p>
        </div>
    );
};

export default Input;
