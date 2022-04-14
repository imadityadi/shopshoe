import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Filter.css'

const Filter = () => {

return (
    <div 
      className='filter_wrapper'>
      <NavBar/>
      <div className="section_row">
      <Sidebar/>
      <ProductGrid/>
      </div>
    </div>
  )
}

export default Filter