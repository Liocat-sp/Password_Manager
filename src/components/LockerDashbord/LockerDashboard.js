import React, { useState } from 'react'
import UIBox from '../../shared/UIcomponents/UIBox/UIBox'
import './LockerDashboard.css';
import Button from '../../shared/UIcomponents/Buttons/Button';
import ModalBox from '../../shared/UIcomponents/Modal/Modal';
import BackDrop from '../../shared/UIcomponents/Backdrop/BackDrop';
import { ReactComponent as AddIcon } from '../../images/icons/add.svg';

const Data = [
    {
        id: "a1",
        website: "Google",
        websiteIcon: "Link",
        userEmail: "Saurabh@gmail.com",
        userName: null,
        password: "something"
    },
    {
        id: "a2",
        website: "Facebook",
        websiteIcon: "Link2",
        userEmail: "saurabh@facebook.com",
        userName: "liocat",
        password: "something"
    },
    {
        id: "a3",
        website: "Google",
        websiteIcon: "Link",
        userEmail: "Saurabh@gmail.com",
        userName: null,
        password: "something"
    },
    {
        id: "a4",
        website: "Facebook",
        websiteIcon: "Link2",
        userEmail: "saurabh@facebook.com",
        userName: "liocat",
        password: "something"
    }, {
        id: "a5",
        website: "Google",
        websiteIcon: "Link",
        userEmail: "Saurabh@gmail.com",
        userName: null,
        password: "something"
    },
    {
        id: "a6",
        website: "Facebook",
        websiteIcon: "Link2",
        userEmail: "saurabh@facebook.com",
        userName: "liocat",
        password: "something"
    }
]

function LockerDashboard() {
    const [ModelOpen, setModalOpen] = useState();
    const onModelHandler = () => {
        setModalOpen(true);
    }
    const onModalCloseHandler = () => {
        setModalOpen(false);
    }
    return (
        <React.Fragment>
            {ModelOpen && (
                <React.Fragment>
                    <BackDrop onClose={onModalCloseHandler} />
                    <ModalBox onCancle={onModalCloseHandler} title={"Add Account"} />
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
                    {Data.map(Acc => {
                        return (
                            <UIBox
                                key={Acc.id}
                                id={Acc.id}
                                website={Acc.website}
                                Icon={Acc.websiteIcon}
                                Email={Acc.userEmail} />)
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default LockerDashboard
