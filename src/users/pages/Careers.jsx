import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare, faXmark} from '@fortawesome/free-solid-svg-icons'

function Careers() {
   const [modalStatus,setModalStatus]=useState(false)
  return (
    <div>
      <Header/>
   <div className="pb-10"style={{paddingTop:'100px'}} >
     <div className="md:pt-10 ">
     <h1>Current Openings</h1>
     <div className="flex justify-center items-center pb-5 w-full">
      <input type="text" placeholder='Search by Job Title' className='p-2 rounded shadow'/>
      <button className="bg-green-700 text-white p-2">Search</button></div>   
     </div>
     <div className="flex justify-center items-center">
       <div className=" rounded shadow p-5 w-full md:w-200">
        <div className="flex justify-between">
          <h3 className='text-xl text-blue-900'>Digital Marketing Specialist</h3>
           <button onClick={()=>setModalStatus(true)} className='bg-blue-900 text-white p-2 w-25'>
                   Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
        </div>
        <div className="flex flex-col">
          <p>Job Type : Full-time</p>
          <p>Salary : Rs. 25000-30000/month </p>
          <p>Location: Kochi</p>
          <p>Requirements : </p>
          <p>Description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. At aliquid dolore mollitia, voluptate dignissimos ducimus enim, ea dolorum alias est natus sequi exercitationem veritatis corrupti numquam nisi ut sunt saepe.</p>
        </div>
       </div>
     </div>
   </div>
      {/* modal */}
         {
           modalStatus &&
               <div className="relative z-10" >
                   <div className="bg-gray-500/75 fixed inset-0 ">
                   <div className="flex justify-center items-center md:min-h-screen rounded">
         
           <div className="bg-white rounded md:w-150 w-100" >
             <div className="flex justify-between items-center  text-white p-3 rounded-t" style={{backgroundColor:'#4e093b'}}>
               <h3>Application Form</h3>
               <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark} />
             </div>
         
           <div className="relative p-5">
             <div className="grid grid-cols-2 gap-2">
               <div className="mb-3">
                 <input type="text" name="" id="" placeholder='Full Name' className='p-2 border rounded placeholder-text-gray-400 text-black w-full '/>
               </div>
               <div className="mb-3">
                 <input type="text" name="" id="" placeholder='Qualification' className='p-2 border rounded placeholder-text-gray-400 text-black w-full'/>
               </div>
               <div className="mb-3">
                 <input type="text" name="" id="" placeholder='Email ID' className='p-2 border rounded placeholder-text-gray-400 text-black w-full '/>
               </div>
               <div className="mb-3">
                 <input type="text" name="" id="" placeholder='Phone' className='p-2 border rounded placeholder-text-gray-400 text-black w-full'/>
               </div>
               <div className="mb-3 col-span-2">
                 <textarea placeholder='Cover Letter'  className='p-2 border rounded placeholder-text-gray-400 text-black w-full'></textarea>
               </div>
               <div className="mb-3 col-span-2">
                 <label htmlFor="">Resume</label>
                 <input type="file" className='p-2 border rounded  w-full file:bg-gray-400 file:p-2 file:text-white file:rounded'/>
               </div>
               </div>
               {/* modal footer */}
               <div className="w-full flex justify-end">
                 <button className='py-2 px-3 rounded bg-gray-600 text-white'>
                   Reset
                 </button>
                  <button className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>
                   Submit
                 </button>
               </div>
               </div>  
         
       
         </div>
                   </div>
                   </div>
               </div>
         }
   <Footer/>
    </div>
  )
}

export default Careers
