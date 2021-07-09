import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'
import ItemHeader from '../components/ItemHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'

const Earphones = () => {
  const { products } = useContext(StoreContext)

  const productList = products.filter((product) => {
    return product.category === 'earphones'
  })

  // console.log(productList);

  const earphones = productList.map((earphone) => {
    return <ItemBox key={earphone.id} item={earphone} />
  })

  return (
    <div>
      <ItemHeader title = {'earphones'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {/* <ItemBox />
        <ItemBox />
        <ItemBox /> */}
        {earphones}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Earphones
