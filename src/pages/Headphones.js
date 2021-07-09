import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'

import ItemHeader from '../components/ItemHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'

const Headphones = () => {
  const { products } = useContext(StoreContext)

  const productList = products.filter((product) => {
    return product.category === 'headphones'
  })

  // console.log(productList);

  const headphones = productList.map((headphone) => {
    return <ItemBox key={headphone.id} item={headphone} />
  })

  return (
    <div>
      <ItemHeader title = {'Headphones'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {/* <ItemBox productOne={productList[0]} />
        <ItemBox productTwo={productList[1]} />
        <ItemBox productThree={productList[1]} /> */}
        {headphones}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Headphones
