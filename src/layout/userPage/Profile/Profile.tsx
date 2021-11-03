import React from 'react';
import Nav from '../Nav/Nav';
import UserDetail from '../userDetail/UserDetail';
import Pinned from '../userStats/PinnedRepo/Pinned';
import './style.css'

const Profile = () => {

    return (
        <div className="profile">
            <UserDetail />
            <div className="profile--stats">
                <Nav />
                <Pinned />
            </div>
        </div>
    )
}

export default Profile
