import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function Cart() {
  return (
    <div>
     <Header/>
     <div className="flex flex-col justify-center items-center" style={{paddingTop:'100px'}}>
      <div className="pt-0 md:pt-20 text-center ">
        <h3 className='text-3xl text-red-800'>Your Cart is empty !!!</h3>
        <img src="https://cdn.dribbble.com/userupload/23000951/file/original-51162083f8d27d9af7c6c0a19b9116ba.gif" alt="empty_cart"  className='h-60 w-100 py-5'/>
      </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Cart
