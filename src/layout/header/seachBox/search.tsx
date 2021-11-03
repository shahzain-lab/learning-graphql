import React, { useState } from 'react';
import './style.css'


const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    }
    return (
        <div className="searchBox">
            <input type="text" value={search} onChange={handleSearch} placeholder="Search..." />
        </div>
    )
}

export default Search
