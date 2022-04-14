import React,{createContext, useState} from 'react'

export const ProductContext = createContext({
    data: [],
    handleData: () => {}
})


const ProductContextProvider = ({children}) => {
  const [data, setData] = useState([])
  const handleData = (data) => {
      setData(data)
  }
  return (
    <ProductContext.Provider value={{data: data, handleData: handleData}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider