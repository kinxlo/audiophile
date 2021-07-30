import React from 'react'
import ItemHeader from '../components/ItemHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'

const Earphones = ({ earphones }) => {
  return (
    <div>
      <ItemHeader title={'earphones'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {earphones.map((earphone) => {
          return <ItemBox key={earphone.id} product={earphone} />
        })}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Earphones
