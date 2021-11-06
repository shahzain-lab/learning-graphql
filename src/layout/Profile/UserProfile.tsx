import { Outlet } from 'react-router-dom';
import Search from '../seachBox/search';
import Nav from '../Nav/Nav';
import UserDetail from '../userDetail/UserDetail';

const UserProfile = () => {

    return (
        <>
            <Search />
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
