import { Route, Routes } from 'react-router-dom';

// components
import Home from '../components/Home';
import OrgProfile from '../layout/organizationPage/OrgProfile/OrgProfile';
import UserProfile from '../layout/userPage/Profile/UserProfile';
import TopRepos from '../layout/userPage/userStats/TopRepos/TopRepos';
import Repositories from '../layout/userPage/userStats/Repo/Repositories';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserProfile />}>
                <Route path="/user/overview" element={<TopRepos />} />
                <Route path="/user/repos" element={<Repositories />} />
            </Route>
            <Route path="/organization" element={<OrgProfile />} />
        </Routes>
    )
}

export default AppRoutes
