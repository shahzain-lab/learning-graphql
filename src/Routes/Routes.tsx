import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import LinkBox from '../layout/header/routeBox/LinkBox'
import OrgProfile from '../layout/organizationPage/OrgProfile/OrgProfile'
import UserProfile from '../layout/userPage/Profile/UserProfile'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/organization" element={<OrgProfile />} />
        </Routes>
    )
}

export default AppRoutes
