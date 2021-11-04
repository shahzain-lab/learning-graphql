import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import LinkBox from '../../header/routeBox/LinkBox';
import Nav from '../Nav/Nav';
import UserDetail from '../userDetail/UserDetail';
import Pinned from '../userStats/PinnedRepo/Pinned';
import Repositories from '../userStats/Repo/Repositories';

const UserProfile = () => {

    return (
        <>
            <LinkBox />
            <div className="profile">
                <UserDetail />
                <div className="profile--stats">
                    <Nav />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserProfile
