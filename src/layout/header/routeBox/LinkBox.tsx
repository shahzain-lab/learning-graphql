import React from 'react';
import Search from '../seachBox/search';
import './style.css'

const LinkBox = () => {
    return (
        <div>
            <div className="linkBox">
                <a href="#user">User</a>
                <a href="#oranization">Organization</a>
            </div>
            <Search />
        </div>
    )
}

export default LinkBox
