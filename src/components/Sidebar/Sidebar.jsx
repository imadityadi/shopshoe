import React, { useState , useContext,useEffect} from "react"
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import { ProductContext } from "../../context/ProductContextProvider"
import Checkbox from "../Checkbox/Checkbox"
import Range from "../Range/Range"
import shoeData from "../../data/shoesdata.json"

import "./Sidebar.css"
import SizeTag from "../SizeTag/SizeTag"

const Sidebar = () => {
  const [showContent, setShowContent] = useState(false)
  const [selectedCategory, setselectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState(2500)
  const [selectedSize, setSelectedSize] = useState(null)
  const {data, handleData } = useContext(ProductContext)
  const shoeSizes = [30, 32, 35, 40, 28, 41]

  const sortByCategory = () => {
    let tempProducts = shoeData.filter(
      shoe => shoe.category === selectedCategory
    )
    handleData(tempProducts)
  }

  const debounce = (cb, delay = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer)
      timer = setTimeout(() => {
            cb(...args)
        }, delay);
    }
 }
  const sortByPrice = ( price) => {
      let filtered = data.filter((shoe) => shoe['Sale Price'] < price)
      if(filtered.length <= 1 && price > 2500){
          handleData(shoeData)
      }else {
          handleData(filtered)
        }

  }
  

  const sortBySize = () => {
        let filtered = data.filter((shoe) => shoe['size'] === Number(selectedSize))
      if(!selectedSize || data.length <= 0){
        handleData(shoeData)
    }else {
        handleData(filtered)
      }
  } 

  const handlePriceChange = debounce((e) => {
    sortByPrice(e.target.value)
  })

  const handleSizeChange = (e) => {
    if(selectedSize === e.target.value) {
        setSelectedSize(null)
    }else {
        setSelectedSize(e.target.value)
    }

    sortBySize()
  }

  console.log(selectedSize)
  
  useEffect(() => {
      if(!selectedCategory)return handleData(shoeData.slice(0, 100))
    sortByCategory()
  }, [selectedCategory])
  

  return (
    <div className="sidebar_wrapper">
      <div className="expandable_tab">
        <span>Categories</span>
        {!showContent ? (
          <FiChevronDown
            onClick={() => setShowContent(!showContent)}
            className="toggleicon"
            size={25}
            color="#131413ff"
          />
        ) : (
          <FiChevronUp
            onClick={() => setShowContent(!showContent)}
            className="toggleicon"
            size={25}
            color="#131413ff"
          />
        )}
      </div>
      <div className={showContent ? "expanded_content" : "content"}>
        <Checkbox
          value={selectedCategory}
          onChange={() => setselectedCategory("Flip-Flops")}
          label="Flip-Flops"
        />
        <Checkbox
          value={selectedCategory}
          onChange={() => setselectedCategory("Sneakers")}
          label="Sneakers"
        />
        <Checkbox
          value={selectedCategory}
          onChange={() => setselectedCategory("Lace-up-shoes")}
          label="Lace-up-shoes"
        />
        <Checkbox
          value={selectedCategory}
          onChange={() => setselectedCategory("Shoe-Accesories")}
          label="Shoe-Accesories"
        />
      </div>
      <div className="range_slider">
          Price Range
          <span className="price_range_label">{`1000$ to ${priceRange}$`}</span>
        <Range 
            value={priceRange}
            onChange={(e) => {setPriceRange(e.target.value); handlePriceChange(e)}}
            />
      </div>
      <div className="sizecontainer">
          {
              shoeSizes.sort().map((size, index) => (
                <SizeTag 
                    key={index}
                    onChange={handleSizeChange}
                    value={size} />
              ))
          }
      </div>
    </div>
  )
}

export default Sidebar
