import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function AdminSettings() {
  return (
    <div>
      <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-4 px-5"style={{paddingTop:'100px'}} >
        <h3 className='text-2xl py-5 text-pink-900'>Settings</h3>
           <div className="md:grid grid-cols-4">
            <div className="col-span-1 flex flex-col">
        
                      
                         <Link to={'/admin-dashboard'} className='m-2'>General
                         </Link>
                    <Link to={'/admin-dashboard'} className='m-2'>Login & Security
                         </Link>
                         <Link to={'/admin-dashboard'} className='m-2'>Users
                         </Link>
                    <Link to={'/admin-dashboard'} className='m-2'>Billing
                         </Link>
                       

            </div>
            <div className="col-span-1">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique neque deleniti minus possimus, maiores, autem minima animi aliquam tenetur id ad. Necessitatibus, perferendis tempora? Exercitationem incidunt totam cum delectus a!</p>
            </div>
            <div className="col-span-2 px-5 mx-5">
              <form action="" className='rounded shadow p-5 flex flex-col'>
                <div className="flex justify-between items-center py-5">
                  <img src='https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg' style={{width:'50px',height:'50px',borderRadius:'50%'}} alt='admin profile' />

                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faTrash} className='text-red-700'/>
                    <Link className='p-2 text-blue-900 '><FontAwesomeIcon icon={faUpload}/>Upload</Link>
                  </div>
                </div>
               <input type="text" placeholder='Name' className='p-2 rounded shadow w-full m-2'/>
               <input type="text" placeholder='Email ID' className='p-2 rounded shadow w-full m-2'/>
               <input type="text" placeholder='Phone' className='p-2 rounded shadow w-full m-2'/>
               <div className="flex">
                 <Link to={''} className='text-white bg-yellow-600 text-xl p-2 rounded my-5 mx-1 inline-block w-full text-center'>Reset</Link>
                 <Link to={''} className='text-white bg-green-700 text-xl p-2 rounded my-5 mx-1 inline-block w-full text-center'>Update</Link>
               </div>
              </form>
            </div>
           </div>
                  </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AdminSettings
