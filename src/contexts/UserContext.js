import React, { createContext, useReducer } from 'react'
import { UserReducer } from './Reducers/UserReducer'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, [
    {
      id: 1,
      item: {},
      quantity: 1,
    }
  ])

  return (
    <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider
