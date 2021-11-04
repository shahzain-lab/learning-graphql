import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="user--links">
            <NavLink to="/user/overview" className=" navLinks" >Overview</NavLink>
            <NavLink to="/user/repos" className=" navLinks">Repositories</NavLink>
        </div>
    )
}

export default Nav
