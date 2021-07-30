import React from 'react'
import ItemHeader from '../components/ItemHeader'
import ItemBox from '../components/ItemBox'
import Category from '../components/Category'
import FooterBanner from '../components/FooterBanner'

const Speakers = ({speakers}) => {
  

  return (
    <div>
      <ItemHeader title={'speakers'} />
      <section className='cc-container'>
        {/* A VERY DYNAMIC SECTION. ITEMBOX IS A DYNAMIC COMPONENT ITS DATA MUST CHANGE DEPENDING ON ITS PROPS */}
        {speakers.map((speaker) => {
          return <ItemBox key={speaker.id} product={speaker} />
        })}
      </section>
      <Category />
      <FooterBanner />
    </div>
  )
}

export default Speakers
