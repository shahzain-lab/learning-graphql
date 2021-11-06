import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/AppContext';


const Search = () => {
    const [search, setSearch] = useState('');
    const { dispatch } = useContext(GlobalContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'SEARCH_INPUT_VALUE', payload: search });
        setSearch('');
    }


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    }

    return (
        <form className="searchBox" onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleSearch} placeholder="Search username..." />
            <button disabled={search ? false : true}>Search</button>
        </form>
    )
}

export default Search
