import React from 'react'
import HeadphoneHeader from '../components/headphones/HeaderphoneHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'

const Headphones = () => {
  return (
    <div>
      <HeadphoneHeader />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Headphones
