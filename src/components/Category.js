import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import '../style/Category.scss'

const Category = () => {
  return (
    <section className='cc-container category'>
      <div className='card'>
        <img
          className='category-img'
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-headphones_b8wfhj.png'
          alt='headphone'
        />
        <div className='mask'>
          <div className='category-text'>
            <h1>headphones</h1>
            <Link to='/'>
              shop <FaChevronRight className='icon' />
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <img
          className='category-img'
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-speakers_whorvg.png'
          alt='headphones'
        />
        <div className='mask'>
          <div className='category-text'>
            <h1>Speakers</h1>
            <Link to='/'>
              shop <FaChevronRight className='icon' />
            </Link>
          </div>
        </div>
      </div>
      <div className='card'>
        <img
          className='category-img'
          src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1624958944/audiophile/assets/shared/desktop/image-earphones_ycsg3n.png'
          alt='headphones'
        />
        <div className='mask'>
          <div className='category-text'>
            <h1>Earphones</h1>
            <Link to='/'>
              shop <FaChevronRight className='icon' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
