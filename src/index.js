import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './contexts/ProductsContext'
import UserContextProvider from './contexts/UserContext'

ReactDOM.render(
  <UserContextProvider>
    <ProductsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
)
