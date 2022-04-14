import React from 'react'

import './Checkbox.css'


const Checkbox = ({label,value, onChange}) => {
  return (
    <label className='checkcontainer'>
        {label}
        <input type="checkbox" value={value} onChange={onChange} />
        <span className="pointcheckmark"></span>
    </label>
  )
}

export default Checkbox