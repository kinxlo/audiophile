import React, { createContext, useEffect, useState, useReducer } from 'react'
// import { ProductReducer } from './Reducers/ProductReducer'

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  // the array of data to hold the json data provided

  const [products, setProduct] = useState([])
  // const [products, dispatch] = useReducer(ProductReducer, [])

  //get json data locally using the fetch api
  const getProducts = async () => {
    try {
      const response = await fetch(`/data.json`)
      const items = await response.json()
      // dispatch({ type: 'GET_DATA', payload: items })
      setProduct(items)
    } catch (error) {
      console.log(error)
    }
  }

  // access data once, when the component (App) renders
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
