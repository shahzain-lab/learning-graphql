import { Route, Routes } from 'react-router-dom';

// components
import UserProfile from '../layout/Profile/UserProfile';
import TopRepos from '../layout/userStats/TopRepos/TopRepos';
import Repositories from '../layout/userStats/Repo/Repositories';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserProfile />}>
                <Route path="/overview" element={<TopRepos />} />
                <Route path="/repos" element={<Repositories />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
