import React from 'react'

import ItemHeader from '../components/ItemHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'

const Headphones = ({ headphones }) => {

  return (
    <div>
      <ItemHeader title={'Headphones'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {headphones.map((headphone) => {
          return <ItemBox key={headphone.id} product={headphone} />
        })}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Headphones
