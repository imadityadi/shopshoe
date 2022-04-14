import React from 'react'
import './ProductCard.css'

const ProductCard = ({shoe}) => {
  return (
    <div className='card_wrapper'>
        <div className="heading_col">
            <span>{shoe['Description'].substring(0, 12)+ '...'}</span>
            <span>{shoe['Product Name']}</span>
        </div>
        <div className="image_container">
            <img src={shoe['Images'][0]} alt="" />
        </div>
        <div className="price_photos">
            <div className="price_container">
                <span className='price_title'>Price</span>
                <span>{shoe['Sale Price']}</span>
            </div>
            <div className="showcase">
                    <img src={shoe['Images'][1]} alt="" className="other_image" />
                    <img src={shoe['Images'][2]} alt="" className="other_image" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard