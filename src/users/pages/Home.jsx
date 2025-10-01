import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Header/>
    <div className=""style={{paddingTop:'80px'}}>
       
          <img src="/public/landing.jpg" alt="image" width={'100%'} className='h-screen object-cover md:block hidden' />
          <img src="/public/mobile_landing.jpg" alt="image" width={'100%'} className='md:hidden h-screen object-cover '/>


          <div className="p-10 md:px-20 text-center">
            <h1>Our Premium Collections</h1>
            <div className="md:grid grid-cols-4 gap-3">
              <div className=""><img src="/public/IMG_6853.webp" alt="img1"  height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_4656.webp" alt="img2" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_2069.webp" alt="img3" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/img3.jpg" alt="img4" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_6853.webp" alt="img1"  height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_4656.webp" alt="img2" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_2069.webp" alt="img3" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/img3.jpg" alt="img4" width={'100%'} height={'400px'} className='mb-10'/></div>
              </div> 
              <Link to={'/all-collections'} className='btn text-white text-xl p-4 rounded-xl my-5 inline-block ' >Explore more..</Link>

          </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
