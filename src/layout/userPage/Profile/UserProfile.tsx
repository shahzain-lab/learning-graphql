import { Outlet } from 'react-router-dom';
import LinkBox from '../../header/routeBox/LinkBox';
import Nav from '../Nav/Nav';
import UserDetail from '../userDetail/UserDetail';

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
