import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function Wishlist() {
  return (
    <div>
        <Header/>
     <div className="flex flex-col justify-center items-center" style={{paddingTop:'100px'}}>
      <div className="pt-0 md:pt-20 text-center ">
        <h3 className='text-3xl text-red-800'>Your wishlist is empty !!!</h3>
        <img src="https://rashailagro.in/static/media/empty_cart.459c22ce539b0c34c3ce.gif" alt="empty_cart"  className='h-60 w-100 py-5'/>
      </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Wishlist
