import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Footer from './components/Footer'
import Details from './pages/Details'
import CheckoutForm from './pages/CheckoutForm'

import './App.scss'
import { ProductsContext } from './contexts/ProductsContext'

function App() {
  const { products } = useContext(ProductsContext)

  // !using this functions outside of a reducer and without calling the dispatch method seems like bad practice to me...
  // !but this is the only way i find i could implement this functions...

  const headphones = products.filter((product) => {
    return product.category === 'headphones'
  })

  const speakers = products.filter((product) => {
    return product.category === 'speakers'
  })

  const earphones = products.filter((product) => {
    return product.category === 'earphones'
  })

  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/headphones'>
          <Headphones headphones={headphones} />
        </Route>
        <Route path='/speakers'>
          <Speakers speakers={speakers} />
        </Route>
        <Route path='/earphones'>
          <Earphones earphones={earphones} />
        </Route>

        <Route path='/details/:slug'>
          <Details products={products} />
        </Route>
        <Route path='/checkout'>
          <CheckoutForm />
        </Route>
        {/* a better structure */}
      </Switch>
      {/* <Footer /> */}
    </div>
  )
}

export default App
