import { useReducer, useCallback } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUTCHANGE':
            let formisValid = true;
            for(const inputId in state.inputs) {
                if (!inputId) {
                    continue;
                }
                if (inputId === action.id) {
                    formisValid = formisValid && action.isValid ;
                }
                else {
                    formisValid = formisValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.id]: { value: action.value, isValid: action.isValid }
                },
                isValid: formisValid
            }

        case 'SETDATA': return {
            inputs: action.value,
            isValid: action.isValid
        }
        default: return {
            ...state
        }
    }
};

export const useFormHook = (initialState, isinitialValid) => {
    const [state, dispatch] = useReducer(reducer, { inputs: initialState, isValid: isinitialValid });

    const onInputChange = useCallback((id, value, isValid) => {
        dispatch({ id: id, type: 'INPUTCHANGE', value: value, isValid: isValid })
    }, []);

    const setFormData = useCallback((value, isValid) => dispatch({ type: 'SETDATA', inputs: value, isValid: isValid }), []);

    return { state, onInputChange, setFormData }
}


