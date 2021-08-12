import React from 'react'
// import { ProductsContext } from '../contexts/ProductsContext'
import Header from '../components/Header'
import Category from '../components/Category'
import Banner from '../components/Banner'
import FooterBanner from '../components/FooterBanner'

// the home page component
const Home = ({speakers, headphones, earphones}) => {
  // const { products } = useContext(ProductsContext)

  return (
    <>
      <Header headphones={headphones} />
      <Category />
      {/* the banner component takes a props containing the products */}
      <Banner speakers={speakers} earphones={earphones} />
      <FooterBanner />
    </>
  )
}

export default Home
