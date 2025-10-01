import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
       <Header/>
   <div className=""style={{paddingTop:'100px'}} >
     <div className="md:pt-10 pb-10 ">
     <div className="flex justify-end items-center md:px-20">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'60px',height:'60px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
      <p className='text-xl text-pink-900 mx-2'>Maria Sam</p>
     </div>

    <h1> Your Orders </h1>

    <div className="px-5 w-full  flex flex-col justify-center items-center ">
      <div className="md:flex rounded shadow mb-3 ">
        <div className=""><img src="/public/bangles1.webp" alt="image" style={{height:'200px',width:'100%',objectFit:'cover'}}/></div>
        <div className="flex flex-col  p-5">
          <p className='text-xl py-3 italic'>Title</p>
          <p>Ordered on 29-9-2025</p>
          <p>Status : <span className='text-green-700'>Dispatched</span></p>
          <Link className='bg-green-800 text-white rounded p-2 my-2 w-50 text-center'>Track Order</Link>
        </div>
      </div>
      <div className="md:flex rounded shadow mb-3">
        <div className=""><img src="/public/IMG_2069.webp" alt="image" style={{height:'200px'}}/></div>
        <div className="flex flex-col  p-5 ">
          <p className='text-xl py-3 italic'>Title</p>
          <p>Ordered on 23-6-2025</p>
          <p>Status : <span className='text-green-700'>Delivered</span></p>
          <Link className='bg-green-800 text-white rounded p-2 my-2 w-50 text-center'>Track Order</Link>
        </div>
      </div>
    </div>
    

     </div>
   </div>
   <Footer/>
    </div>
  )
}

export default Profile
