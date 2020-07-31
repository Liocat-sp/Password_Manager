import React, { useState, useEffect, useContext } from 'react'
import UIBox from '../../shared/UIcomponents/UIBox/UIBox'
import './LockerDashboard.css';
import Button from '../../shared/UIcomponents/Buttons/Button';
import ModalBox from '../../shared/UIcomponents/Models/Modal/Modal';
import BackDrop from '../../shared/UIcomponents/Backdrop/BackDrop';
import { ReactComponent as AddIcon } from '../../images/icons/add.svg';
import { AuthContext } from '../../shared/context/auth-context';
import ModalEtc from '../../shared/UIcomponents/Models/Modal_etc/Modal_etc';

function LockerDashboard() {
    const [ModelOpen, setModalOpen] = useState();
    const {isLoggedIn, userId, token} = useContext(AuthContext);
    const [Accounts, setAccounts] = useState([]);
    const [ren, setren] = useState(false);
    const [error, setError]  = useState(null); 

    const onModelHandler = () => {
        setModalOpen(true);
    }
    const onModalCloseHandler = () => {
        setModalOpen(false);
    }
    useEffect(() => {
        const getdata = async () => {
            if(isLoggedIn){
                try{
                    const res = await fetch(`${process.env.REACT_APP_BACKEND}/locker/${userId}`,{ 
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": "Bearer " + token
                        }
                    });
                    const resData = await res.json();
                    if(!res.ok){
                        throw new Error(resData.message);
                    }
                    setAccounts(resData.accounts);
                }
                catch(error) {
                    setError(error.message);
                    setAccounts([]);
                }
            }
        }
        getdata();
    }, [isLoggedIn, userId, token, ren]);

    const errorClose = () => {
        setError(null);
    }
    return (
        <React.Fragment>
            {
                    error && <React.Fragment>
                    <BackDrop onClose={onModalCloseHandler} />
                         <ModalEtc title="Error Occured" message={error} onClose={errorClose} />
                         </React.Fragment>
            }
            {ModelOpen && (
                <React.Fragment>
                    <BackDrop onClose={onModalCloseHandler} />
                    <ModalBox onCancle={onModalCloseHandler} onNew={setAccounts} onError={setError} title={"Add Account"} />
                </React.Fragment>
            )}
            <div className="Locker-App">
                <div className="Locker-App__Top">
                    <Button onClick={onModelHandler} half>
                        <div className="svgBtn">
                            <AddIcon />
                            <p> New</p>
                        </div>
                    </Button>
                </div>
                <div className="Locker-App__Main">
                    {Accounts.length > 0 ? Accounts.map(Acc => {
                        return (
                            <UIBox
                                ren={setren}
                                key={Acc.id}
                                id={Acc.id}
                                website={Acc.website}
                                Icon={Acc.logoUrl}
                                Email={Acc.email} />)
                    }) : <div>No Accounts Available, Please add one.</div>}
                </div>
                <div className="DashF"><a href="https://clearbit.com">Logos provided by Clearbit</a></div>
            </div>
        </React.Fragment>
    )
}

export default LockerDashboard
