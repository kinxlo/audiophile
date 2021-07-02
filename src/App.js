import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Footer from './components/Footer'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/headphones' component={Headphones} exact />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
