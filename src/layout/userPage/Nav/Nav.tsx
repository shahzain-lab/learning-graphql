import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="u__center--item">
            <NavLink to="/user" className="active navLinks">Overview</NavLink>
            <NavLink to="/user/repos" className="navLinks">Repositories</NavLink>
        </div>
    )
}

export default Nav
