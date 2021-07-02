import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import Main from '../components/Main'
import Banner from '../components/Banner'
import FooterBanner from '../components/FooterBanner'

// the home page component
const Home = () => {
  return (
    <>
      <Header />
      <Category />
      <Banner />
      <Main />
      <FooterBanner />
    </>
  )
}

export default Home
