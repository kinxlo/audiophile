import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './contexts/ProductsContext'
import CartContextProvider from './contexts/CartContext'

ReactDOM.render(
  <CartContextProvider>
    <ProductsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsContextProvider>
  </CartContextProvider>,
  document.getElementById('root')
)
