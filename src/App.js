import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Footer from './components/Footer'
import './App.scss'
// import Header from './components/Header'
import Details from './pages/Details'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/headphones' component={Headphones} exact />
        <Route path='/speakers' component={Speakers} />
        <Route path='/earphones' component={Earphones} />
        <Route path='/details/:slug' component={Details} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App

