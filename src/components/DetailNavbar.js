import React from 'react'
import Navbar from './Navbar'

const DetailNavbar = () => {
  // just a little style to modify the navbar
  const navbar = {
    backgroundColor: 'black',
  }

  return (
    <div style={navbar}>
      <Navbar />
    </div>
  )
}

export default DetailNavbar
