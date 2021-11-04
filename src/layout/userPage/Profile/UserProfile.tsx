import React from 'react';
import LinkBox from '../../header/routeBox/LinkBox';
import Nav from '../Nav/Nav';
import UserDetail from '../userDetail/UserDetail';
import Pinned from '../userStats/PinnedRepo/Pinned';
import './style.css'

const UserProfile = () => {

    return (
        <>
            <LinkBox />
            <div className="profile">
                <UserDetail />
                <div className="profile--stats">
                    <Nav />
                    <Pinned />
                </div>
            </div>
        </>
    )
}

export default UserProfile
