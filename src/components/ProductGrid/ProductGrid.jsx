import React,{useContext, useEffect} from 'react'


import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'
import shoesData from '../../data/shoesdata.json'
import {ProductContext} from '../../context/ProductContextProvider'
const ProductGrid = () => {
  const {data, handleData} = useContext(ProductContext)

  useEffect(() => {
    handleData(shoesData.slice(0, 100).sort((a, b) => a['Sale Price'] - b['Sale Price']))
  }, [])
  

  return (
    <div className='grid_wrapper'>
      {
        data.map((shoe, i) => (
          <ProductCard  shoe={shoe} key={`${shoe['Product Name']}${i}`} />
        ))
      }
    </div>
  )
}

export default ProductGrid