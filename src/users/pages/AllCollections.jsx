import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function AllCollections() {
 const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Necklaces", "Bangles", "Bridal", "Earrings", "Rings"];
  return (
    <div>
   <Header/>
   <div className=""style={{paddingTop:'100px'}} >
     <div className="md:pt-10 md:px-20">
      <h1>Collections</h1>
      <h3 className='font-bold text-xl  px-10'>Categories</h3>
      {/* <div className="flex flex-wrap py-10 px-10 gap-4">
        <Link  className='rounded-2xl shadow border border-pink-900 text-pink-900 p-2 inline-block'>All</Link>
         <Link  className='rounded-2xl shadow border border-pink-900 text-pink-900 p-2 inline-block'>Necklaces</Link>
          <Link className='rounded-2xl shadow border border-pink-900 text-pink-900 p-2 inline-block'>Bangles</Link>
           <Link className=' rounded-2xl shadow border border-pink-900 text-pink-900 p-2 inline-block'>Bridal</Link>
            <Link className='rounded-2xl shadow border border-pink-900 text-pink-900 p-2 inline-block'>Earrings</Link>
             <Link className='rounded-2xl shadow border border-pink-900 text-pink-900 p-2 inline-block'>Rings</Link>
      </div> */}
       <div className="flex flex-wrap gap-4 p-5">
      {categories.map((item) => (
        <Link
          key={item}
          onClick={() => setActiveCategory(item)}
          className={`rounded-2xl shadow border border-pink-900 px-4 py-2 
            ${activeCategory === item ? "bg-pink-900 text-white" : "text-pink-900"}
            hover:bg-pink-900 hover:text-white
          `}
        >{item}</Link>
      ))}
    </div>
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
     </div>
   </div>
   <Footer/>
    </div>
  )
}

export default AllCollections
