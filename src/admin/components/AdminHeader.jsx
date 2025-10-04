import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <div>
      <div className="fixed w-full z-10">
        <div className="flex justify-between items-center text-white px-5 " style={{backgroundColor:'#4e093b',height:'80px'}}>
            <h6 className='text-2xl md:text-3xl italic'>Kanika</h6>
            <div className="flex items-center justify-evenly  text-lg md:text-xl">
             
             <Link className=' py-1 px-2 rounded-2xl btn' to={'/login'}>
               <FontAwesomeIcon icon={faPowerOff} />
               
             </Link>
          
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default AdminHeader
