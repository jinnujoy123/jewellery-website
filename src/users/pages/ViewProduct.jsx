import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {  viewProductsAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import SERVERURL from '../../services/serverURL'

function ViewProduct() {
  const [open,setOpen]=useState(false)
const [product,setProduct]=useState({})
  const {id} = useParams()

  useEffect(()=>{
      viewProductDetails()
  },[])


  

const viewProductDetails = async ()=>{
  const token = sessionStorage.getItem("token")
  if(token){
    const reqHeader={
      "Authorization":`Bearer ${token}`
    }
    try{
        const result=await viewProductsAPI(id,reqHeader)
        if(result.status==200){
          setProduct(result.data)
          // console.log(result.data);
          
        }else if(result.response.status==401){
          toast.warning(result.response.data)
        }
    }catch(err){
      console.log(err);
      
    }
  }
}
// console.log(product);
  return (
    <div>
      <Header/>
   <div className=""style={{paddingTop:'100px'}} >
     <div className="md:pt-10">
     
  <h1 className='pt-5'>{product.title}</h1>
<div className="md:grid grid-cols-2  pb-10">
  <div className=" flex justify-center items-center" >
  <img src={`${SERVERURL}/uploads/${product.image}`}
                      alt={product.title} style={{height:'500px'}} />
  </div>
<div className="px-10 md:px-0 md:pe-10">

  <h3 className='text-blue-900 py-4'>Rs. {product.discountPrice} /-</h3>
  <p className='text-sm text-gray-500 pb-5'>Tax included. Shipping calculated at checkout.</p>
  <p>Description : <span className='text-gray-600'>{product.description}</span></p>
  <div className="flex justify-around w-full py-10">
    <button className='rounded shadow p-2 bg-stone-200 text-pink-900 hover:bg-stone-300'>Add to wishlist</button>
    <button className='rounded shadow p-2 bg-stone-200 text-pink-900 hover:bg-stone-300'>Add to Cart</button>
  </div>
<h3 className='text-xl text-pink-900'>Reviews</h3>
<div className="flex justify-start items-center py-5">
  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover'}}/>
<p className='ps-3 text-'>Maria Sam</p> 
</div>

  <p className='text-gray-600 '>"Lorem ipsum dolor maiores nostrum delectus ut laborum eligendi pariatur maxime sed aliquid repellat rerum sit amet consectetur ...."</p>
    <div className="text-end">
       <button onClick={()=>setOpen(true)} className='rounded shadow p-2 bg-stone-200 text-pink-900 hover:bg-stone-300'>View more...</button> 
    </div>


</div>

</div>
     </div>
   </div>
   {
   open && 
  <div className="relative z-10" onClick={()=>setOpen(false)}>
          <div className="bg-gray-500/75 fixed inset-0 ">
          <div className="flex justify-center items-center md:min-h-screen rounded ">
             <div className="bg-white rounded md:w-250 w-100" >
            <div className="flex justify-end  text-white p-3 rounded-t " style={{backgroundColor:'#4e093b'}}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
<div className="p-5">
  <h3 className='font-bold text-xl'>Top reviews</h3>
  <div className="flex justify-start items-center py-5">
  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
<p className='ps-3 text-'>Maria Sam</p> 
</div>

  <p className='text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores totam in ab est voluptates porro ratione incidunt numquam earum accusamus ex excepturi ad eaque, error odio reiciendis, aliquam iure.</p>
   <div className="flex justify-start items-center py-5">
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover'}}/>
<p className='ps-3 text-'>Kiran Max</p> 
</div>

  <p className='text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores totam in ab est voluptates porro ratione incidunt numquam earum accusamus ex excepturi ad eaque, error odio reiciendis, aliquam iure.</p>

 <h3 className='font-bold text-xl py-5'>Reviews with Images</h3>

 <div className="md:grid grid-cols-3">
  <img src="https://nithilah.com/cdn/shop/articles/Nithilah_Wedding_Jewellery.jpg?v=1698207408&width=540" alt="image" style={{width:'80%',height:'140px',objectFit:'cover',objectPosition:'center'}} />
   <img src="https://cdnmedia-breeze.vaibhavjewellers.com/media/webp_image/catalog/product/cache/30d09bf8af51e4fea389519968dfdb4b/image/278013183/bridal-majesty-gold-lakshmi-temple-haram-124mhofb13694.webp" alt="image" style={{width:'80%',height:'140px',objectFit:'cover',objectPosition:'center'}} />
 </div>

</div>
              </div>
              </div>
              </div>
        
         
          </div>
   }
   <Footer/>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </div>
  )
}

export default ViewProduct
