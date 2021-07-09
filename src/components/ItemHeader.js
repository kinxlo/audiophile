import React from 'react'
import Navbar from './Navbar'
import '../style/Item_header.scss'

const ItemHeader = (props) => {
  
  return (
    <>
      <header className='item-header'>
        <Navbar />
        <h1>{props.title}</h1>
      </header>
    </>
  )
}

export default ItemHeader
