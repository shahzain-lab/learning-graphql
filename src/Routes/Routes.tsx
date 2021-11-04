import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import LinkBox from '../layout/header/routeBox/LinkBox'
import OrgProfile from '../layout/organizationPage/OrgProfile/OrgProfile'
import UserProfile from '../layout/userPage/Profile/UserProfile'
import Pinned from '../layout/userPage/userStats/PinnedRepo/Pinned'
import Repositories from '../layout/userPage/userStats/Repo/Repositories'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserProfile />}>
                <Route path="/user/overview" element={<Pinned />} />
                <Route path="/user/repos" element={<Repositories />} />
            </Route>
            <Route path="/organization" element={<OrgProfile />} />
        </Routes>
    )
}

export default AppRoutes
