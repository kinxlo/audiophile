import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import Header from '../components/Header'
import Category from '../components/Category'
import Banner from '../components/Banner'
import FooterBanner from '../components/FooterBanner'

// the home page component
const Home = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
      <Header />
      <Category />
      {/* the banner component takes a props containing the products */}
      <Banner products={products} />
      {/* <FooterBanner /> */}
    </>
  )
}

export default Home
