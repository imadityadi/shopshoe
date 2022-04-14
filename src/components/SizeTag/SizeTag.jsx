import React from "react"
import "./SizeTag.css"

const SizeTag = ({ defaultChecked, value = 30, onChange }) => {
  return (
    <label className="container">
      <input checked={defaultChecked} type="checkbox" value={value} onChange={onChange} />
      <span className="checkmark">{value}</span>
    </label>
  )
}

export default SizeTag
