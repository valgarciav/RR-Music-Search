import { useState } from 'react'
import React from 'react';
import './searchbar.css'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form className="search-form" onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="search here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input className="btn-search" type="submit" />

        </form>
    )
}

export default SearchBar