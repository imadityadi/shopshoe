import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


import './SearchInput.css'


const SearchInput = () => {

  return (
    <div className='search_box'>
        <AiOutlineSearch size={20} color="#cccc" />
        <input type="text" className="search_input" />
    </div>
  )
}

export default SearchInput
