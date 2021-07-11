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

  return (
    <div>
      <ItemHeader title={'earphones'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {productList.map((earphone) => {
          return <ItemBox key={earphone.id} item={earphone} />
        })}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Earphones
