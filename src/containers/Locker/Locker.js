import React, { Suspense } from 'react'
import LockerSideNav from '../../components/LockerSideNav/LockerSideNav';
import './Locker.css';
import { BrowserRouter as Routes, useParams } from 'react-router-dom';

const LockerDashboard = React.lazy(() => import('../../components/LockerDashbord/LockerDashboard'));
const CreatePassword = React.lazy(() => import('../../components/CreatePassword/CreatePassword'));

function Locker() {
    const lockerId = useParams().lockerId;
    return (
        <div className="Locker_Dash">
            <LockerSideNav />
            <Suspense fallback={<div></div>}>
            <Routes>
                {lockerId === 'accounts' && <LockerDashboard />}
                {lockerId === 'create' && <CreatePassword />}
            </Routes>
            </Suspense>
        </div>
    )
}

export default Locker
