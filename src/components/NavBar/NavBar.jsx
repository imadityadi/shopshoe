import React from 'react'
import SearchInput from '../SearchBox/SearchInput'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='nav_wrapper'>
        <div className="logo_container">
            Shoe.
        </div>
        <div className="search_container">
        <SearchInput/>

        </div>
    </div>
  )
}

export default NavBar

