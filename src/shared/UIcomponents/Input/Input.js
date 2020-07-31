import React, { useReducer, useEffect, useState, useCallback } from 'react';
import './Input.css'
import { validate } from '../../util/Validation';
import { ReactComponent as Icon } from '../../../images/icons/content_copy.svg';
import { ReactComponent as See } from '../../../images/icons/visibility_on.svg';
import { ReactComponent as NotSee } from '../../../images/icons/visibility_off.svg';

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
    const [notSee, setNotSee] = useState(false);
    const [type, setType] = useState(props.type);
    
    const onChangeHandler = (event) => {
        let val = event.target.value;
        if (props.id === 'email' || props.id === 'password')
            val = event.target.value.replace(" ", '');
        dispatch({ type: 'InputChange', value: val, validators: props.validators });
    }

    const OnTouchHandler = () => {
        dispatch({ type: 'isTouched' });
    }

    const onSeeHandler = useCallback(() => {
        setType('text');
        setNotSee(true);
    }, [])
    const onNotSeeHandler = useCallback(() => {
        setType(props.type);
        setNotSee(false);
    }, [props.type])

    const onCopyHandler = useCallback(() => {
        const item = document.getElementById(props.id);
        item.select();
        item.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }, [props.id])

    const { id, onInput} = props;

    useEffect(() => {
        onInput(id, state.value, state.isValid);
    }
    , [id, state.value, state.isValid, onInput]);

    const Element = props.element === 'input' ?
        <input
            type={type}
            id={props.id}
            onChange={onChangeHandler}
            onBlur={OnTouchHandler}
            disabled={props.disabled}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}
            value={state.value} /> :
        <textarea
            type={type}
            id={props.id}
            disabled={props.disabled}
            onChange={OnTouchHandler}
            onBlur={OnTouchHandler}
            placeholder={props.placeholder}
            value={state.value} />
    return (
        <div className="Input__div">
            <label htmlFor={props.id}>{props.label}{props.optional && "  *(Optional)"}</label>
            {props.AddOns ? <div className="InputEle">
                {Element}
                {props.copy && <Icon onClick={onCopyHandler} />}
            </div> :
                <div className="Normal_input">
                    {Element}
                    {notSee && <NotSee onClick={onNotSeeHandler}/>}
                    {!notSee && props.see && <See onClick={onSeeHandler}/>}
                </div>}
            {!props.errorNULL && <p className="Input__error">{!state.isValid && state.isTouched && props.errorText}</p>}
        </div>
    );
};

export default Input;
