import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, searchTerm, onChangeSearch}) => (
        <input className="search" onChange={(e) => onChangeSearch(e)} type="search" defaultValue={searchTerm} placeholder={placeholder} />
)