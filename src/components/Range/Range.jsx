import React from 'react'

import './Range.css'

const Range = ({onChange, value}) => {
    
  return (
    <div className="slidecontainer">
    <input
        value={value}
        onChange={onChange}
        type="range" min="1000" max="100000" className="slider" id="myRange"/>
  </div>
  )
}

export default Range