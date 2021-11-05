import { NavLink } from "react-router-dom"
import { BsBook } from 'react-icons/bs';
import { ImBook } from 'react-icons/im';

const Nav = () => {
    return (
        <div className="user--links">
            <NavLink to="/user/overview" className=" navLinks" ><BsBook /> Overview</NavLink>
            <NavLink to="/user/repos" className=" navLinks"><ImBook /> Repositories</NavLink>
        </div>
    )
}

export default Nav
