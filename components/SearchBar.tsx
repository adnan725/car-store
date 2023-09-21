'use client'

import React, { useState } from 'react'
import { SearchManufecturer } from '.'

const SearchBar = () => {

    const handleSearch = () => {}
    const [manufacturer, setmanufacturer] = useState('')

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufecturer 
              manufacturer={manufacturer}
              setManufacturer={setmanufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar