import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/AdminHeader'

function AdminCollections() {
  const [products,setProducts]=useState(true)
    const [users,setUsers]=useState(false)
  return (
    <div>
     <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-4"style={{paddingTop:'100px'}} >
        <h1>Collections</h1>
        <div className="flex justify-center ">
              <button className= {products ? 'p-3 border-b border-pink-900 text-pink-900':'p-3 ' } onClick={()=>{setProducts(true);setUsers(false)}}>Products</button>
              <button className= {users ? 'p-3 border-b border-pink-900 text-pink-900':'p-3' }  onClick={()=>{setProducts(false);setUsers(true)}}>Users</button>
            </div>
           {
            products && 
            <div className=" md:grid grid-cols-4 p-10 gap-x-4 gap-y-8">
        <div className=" shadow bg-gray-200 overflow-hidden" >
            <Link to={'/collection/:id/view'}> <img src="/public/IMG_4656.webp" alt="image" width={'100%'} height={'200px'} className=' object-cover  transition-transform duration-500 hover:scale-106'/></Link>
            <div className="p-3 text-center ">
              <Link to={'/collection/:id/view'} className='hover:underline hover:text-gray-700' >
                <h4>Haaram</h4>
              </Link>
                <h4>Rs. 1899</h4>
             
            </div>
        </div>
        <div className=" shadow bg-gray-200" >
            <img src="/public/IMG_1343.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Necklace</h4>
              <p>Rs. 999</p>
            </div>
        </div>
        <div className=" shadow bg-gray-200" >
            <img src="/public/bangles1.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Bangles</h4>
              <p>Rs. 599</p>
            </div>
        </div>
        <div className=" shadow bg-gray-200" >
            <img src="/public/earring1.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Earrings</h4>
              <p>Rs. 399</p>
            </div>
        </div>
         <div className=" shadow bg-gray-200" >
            <img src="/public/IMG_4656.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Bridal Combo</h4>
              <p>Rs. 1899</p>
            </div>
        </div>
        <div className=" shadow bg-gray-200" >
            <img src="/public/rind.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Ring</h4>
              <p>Rs. 299</p>
            </div>
        </div>
        <div className=" shadow bg-gray-200" >
            <img src="/public/bangle2.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Bangles</h4>
              <p>Rs. 890</p>
            </div>
        </div>
        <div className=" shadow bg-gray-200" >
            <img src="/public/earring2.webp" alt="image" width={'100%'} height={'200px'}/>
            <div className="p-3">
              <h4>Earrings</h4>
              <p>Rs. 450</p>
            </div>
        </div>
            </div>
           }
           {
            users &&
            <div className="md:grid grid-cols-3 py-5">
              <div className="rounded shadow flex justify-center mx-2 items-center">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'60px',height:'60px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
                  <div className=" text-pink-900 p-5">
                    <h3 className='text-2xl'>Maria Sam</h3>
                    <h3>maria@gmail.com</h3>
                    <Link className='btn  rounded shadow p-2 m-2 inline-block'>View</Link>

                  </div>
              </div>
              <div className="rounded shadow flex justify-center mx-2 items-center">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'60px',height:'60px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
                  <div className=" text-pink-900 p-5">
                    <h3 className='text-2xl'>Maria Sam</h3>
                    <h3>maria@gmail.com</h3>
                    <Link className='btn  rounded shadow p-2 m-2 inline-block'>View</Link>

                  </div>
              </div>
              <div className="rounded shadow flex justify-center mx-2 items-center">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'60px',height:'60px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
                  <div className=" text-pink-900 p-5">
                    <h3 className='text-2xl'>Maria Sam</h3>
                    <h3>maria@gmail.com</h3>
                    <Link className='btn  rounded shadow p-2 m-2 inline-block'>View</Link>

                  </div>
              </div>
            </div>
           }
                  </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AdminCollections

