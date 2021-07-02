import React from 'react'
import Home from '../pages/Home'
import Category from '../components/Category'
import { Switch, Route } from 'react-router-dom'
import FooterBanner from './FooterBanner'

function Main() {
  return (
    <>
      <Category />
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
      <FooterBanner />
    </>
  )
}

export default Main
