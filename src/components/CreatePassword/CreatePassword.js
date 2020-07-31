import React, { useRef, useState } from 'react';
import './CreatePassword.css';
import Button from '../../shared/UIcomponents/Buttons/Button';
import { ReactComponent as Copy } from '../../images/icons/content_copy.svg'

function CreatePassword() {
    const number = useRef();
    const upper = useRef();
    const lower = useRef();
    const result = useRef();
    const [newPassword, setNewPassword] = useState('');
    const [isNumberChecked, setisNumberChecked] = useState(true);
    const [isUpperChecked, setisUpperChecked] = useState(true);
    const [isLowerChecked, setisLowerChecked] = useState(true);
    const types = {
        number: randomnumber,
        upper: randomUpper,
        lower: randomLower
    }
    function randomnumber() {
        return (String.fromCharCode(Math.floor(Math.random() * 9) + 49));
    }
    function randomUpper() {
        return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }
    function randomLower() {
        return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    }
    const generate = () => {
        let password = '';
        let isPossible = number.current.checked + upper.current.checked + lower.current.checked;
        let type = [{ number: number.current.checked }, { upper: upper.current.checked }, { lower: lower.current.checked }];
        if (isPossible === 0) {
            return '';
        }
        type = type.filter(item => Object.values(item)[0]);
        console.log(type);
        for (let i = 0; i < 15; i++) {
            type.forEach(type => {
                password += types[Object.keys(type)[0]]();
            })
        }
        setNewPassword(password.slice(0, 15));
        console.log(newPassword);
    }
    function copypassword(){
        const textArea = document.createElement('textarea');
        if(result.current.innerText === '') 
        return;
        textArea.value = result.current.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        textArea.remove();
        alert("Password is Copied.");
    }
    return (
        <div className="CreatePassword">
            <h1>Create New Password</h1>
            <div className="content">
                <div className="generated">
                    <span ref={result} className="generated_Password">{newPassword}</span>
                    <Copy className="icon" onClick={copypassword}/>
                </div>
                <div className='CreatePassword_settings'>
                    <div>
                        <label htmlFor="number">Include Numbers</label>
                        <input ref={number} type="checkbox" id="number" onChange={() => setisNumberChecked(prev => !prev)} checked={isNumberChecked} className="check" />
                    </div>
                    <div>
                        <label htmlFor="upperCase">Include UpperCase</label>
                        <input ref={upper} type="checkbox" id="upperCase" onChange={() => setisUpperChecked(prev => !prev)} checked={isUpperChecked} className="check" />
                    </div>
                    <div>
                        <label htmlFor="lowerCase">Include LowerCase</label>
                        <input ref={lower} type="checkbox" id="lowerCase" onChange={() => setisLowerChecked(prev => !prev)} checked={isLowerChecked} className="check" />
                    </div>
                </div>
                <div className="CreatePassword_button">
                    <Button onClick={generate} >Generate</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePassword
