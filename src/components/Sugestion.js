import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Sugestion = ({ state }) => {
  return (
    <>
      <section className='cc-container suggestion-section'>
        <h2>you may also like</h2>
        <div className='suggestion-item-container'>
          {/* map throught the product quantity and output a list of jsx */}
          {state.others.map((product, index) => {
            return (
              <article key={index}>
                <div>
                  <img src={product.image.desktop} alt='logo' />
                </div>
                <h4>{product.name}</h4>
                <Link
                  to={{
                    pathname: `/details/${product.slug}`,
                    state: product.slug,
                  }}
                >
                  <Button />
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Sugestion
