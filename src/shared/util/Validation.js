const VALIDATION_TYPE_EMAIL = 'EMAIL';
const VALIDATION_TYPE_REQUIRE = 'REQUIRE';
const VALIDATION_MIN = 'MIN-LENGTH';
const VALIDATION_MAX = 'MAX-LENGTH';

export const VALIDATION_EMAIL = () => ({type: VALIDATION_TYPE_EMAIL});
export const VALIDATION_MINLENGTH = (val) => ({type: VALIDATION_MIN, val: val});
export const VALIDATION_MAXLENGTH = (val) => ({type: VALIDATION_MAX, val: val });
export const VALIDATION_REQUIRE = () => ({type: VALIDATION_TYPE_REQUIRE});

export const validate = (value, validators) => {
    let isValid = true;
    for(const validate of validators) {
        if(validate.type === VALIDATION_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0; 
        }
        else if(validate.type === VALIDATION_MAX) {
            isValid = isValid && value.trim().lenght <= validate.val;
        }
        else if(validate.type === VALIDATION_MIN) {
            isValid = isValid && value.trim().length >= validate.val; 
        }
        else if(validate.type === VALIDATION_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
    }
    return isValid;
}