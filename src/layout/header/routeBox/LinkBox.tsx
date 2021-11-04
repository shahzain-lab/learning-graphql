import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../seachBox/search';

const LinkBox = () => {
    return (
        <>
            <div className="page--links">
                <NavLink to="/user" className=" navLinks">User</NavLink>
                <NavLink to="/organization" className=" navLinks">Organization</NavLink>
            </div>
            <Search />
        </>
    )
}

export default LinkBox
