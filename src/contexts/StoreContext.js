import React, { useState, createContext, useEffect } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  // the array of data to hold the json data provided

  const [products, setProducts] = useState([])

  //get json data locally using the fetch api
  const getProducts = async () => {
    try {
      const response = await fetch(`/data.json`)
      const items = await response.json()
      setProducts(items)
    
    } catch (error) {
      console.log(error)
    }
  }

  // access data once, when the component (App) renders
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <StoreContext.Provider value={{ products }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
