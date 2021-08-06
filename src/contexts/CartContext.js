import React, { createContext, useReducer, useEffect } from 'react'
import { CartReducer } from './Reducers/CartReducer'



export const CartContext = createContext()

const initialState = {
  loading: false,
  cart: [
    // {
    //   id: 1,
    //   name: 'Samsung Galaxy S7',
    //   price: 599.99,
    //   image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
    //   quantity: 1,
    // },
  ],
  total: 0,
  totalQuantity: 0,
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addItem = (item, e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL' })
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(() => {
    // console.log('hello')
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeAll, increase, decrease }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
