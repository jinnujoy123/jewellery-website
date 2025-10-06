import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import Sidebar from '../components/Sidebar'
import { faSalesforce } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

function AdminDashboard() {
  return (
    <div>
     <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5 ">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-4"style={{paddingTop:'100px'}} >
        <h1>Welcome to Dashboard</h1>
         <div className="md:grid grid-cols-3 p-5 gap-5">
          <div className="bg-yellow-500 flex items-center text-white p-5 rounded">
            <FontAwesomeIcon icon={faSalesforce}/>
            <div className='px-3 text-xl font-bold text-center'>
              <h3 >Total Sales</h3>
              <h3 >1000 +</h3>
            </div>
          </div>
           <div className="bg-green-700 flex items-center text-white p-5 rounded">
            <FontAwesomeIcon icon={faUsers}/>
            <div className='px-3 text-xl font-bold text-center'>
              <h3 >Total Users</h3>
              <h3 >1000 +</h3>
            </div>
          </div>
           <div className="bg-blue-900 flex items-center text-white p-5 rounded">
            <FontAwesomeIcon icon={faUser}/>
            <div className='px-3 text-xl font-bold text-center'>
              <h3 >Total Employees</h3>
              <h3 >1000 +</h3>
            </div>
          </div>
         </div>
                  </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AdminDashboard
