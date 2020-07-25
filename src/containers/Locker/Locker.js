import React from 'react'
import LockerDashboard from '../../components/LockerDashbord/LockerDashboard'
import LockerSideNav from '../../components/LockerSideNav/LockerSideNav'
import './Locker.css';
import { BrowserRouter as Routes, useParams } from 'react-router-dom';

function Locker() {
    const lockerId = useParams().lockerId;
    console.log(lockerId);
    return (
        <div className="Locker_Dash">
            <LockerSideNav />
            <Routes>
                {lockerId === 'accounts' && <LockerDashboard />}
                {lockerId === 'create' && "create new password"}
            </Routes>
        </div>
    )
}

export default Locker
