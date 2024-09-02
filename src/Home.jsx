import React from 'react'
import Navbar from './components/navbar/Navbar'
import Product from './components/product/Product'

const Home = () => {
  return (
    <div>
        <Navbar>
            <Product/>
        </Navbar>
    </div>
  )
}

export default Home