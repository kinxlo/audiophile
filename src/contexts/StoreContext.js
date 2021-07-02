import React, { useState, createContext, useEffect } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({children}) => {
  // the array of data to hold the json data provided
  const [data, setData] = useState([])

  //get jason data using the fetch api
  const fetchPackages = async () => {
    try {
      const response = await fetch(`/data.json`)
      const products = await response.json()
      console.log(products)
      setData(products)
    } catch (error) {
      console.log(error)
    }
  }

  // access data once, when the component (App) renders
  useEffect(() => {
    fetchPackages()
  }, [])

  return (
    <StoreContext.Provider value={data}>{children}</StoreContext.Provider>
  )
}

export default StoreContextProvider
