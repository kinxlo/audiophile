import React, { useContext } from 'react'
import ItemHeader from '../components/ItemHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'
import { StoreContext } from '../contexts/StoreContext'

const Speakers = () => {
  const { products } = useContext(StoreContext)

  const productList = products.filter((product) => {
    return product.category === 'speakers'
  })

  // console.log(productList);

  return (
    <div>
      <ItemHeader title={'speakers'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {productList.map((speaker) => {
          return <ItemBox key={speaker.id} item={speaker} />
        })}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Speakers
