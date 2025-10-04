import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sidebar'

function AdminCareers() {
  const [jobRoles,setJobRoles]=useState(true)
  const [applicant,setApplicant]=useState(false)
  return (
    <div>
      <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-4"style={{paddingTop:'100px'}} >
        <h1>Careers</h1>
            <div className="flex justify-center ">
              <button className= {jobRoles ? 'p-3 border-b border-pink-900 text-pink-900':'p-3 ' } onClick={()=>{setJobRoles(true);setApplicant(false)}}>Job Roles</button>
              <button className= {applicant ? 'p-3 border-b border-pink-900 text-pink-900':'p-3' }  onClick={()=>{setJobRoles(false);setApplicant(true)}}>View Applicants</button>
            </div>
            {
              jobRoles &&
              <div className="py-10">
                <div className="flex justify-center items-center">
                   <div className=" rounded shadow p-5 w-full md:w-200">
            <div className="flex justify-between">
              <h3 className='text-xl text-blue-900'>Digital Marketing Specialist</h3>
              <Link className='bg-red-700 text-white p-2' >Delete<FontAwesomeIcon icon={faTrash}/></Link>
            </div>
            <div className="flex flex-col">
              <p>Salary : Rs. 20000/- </p>
              <p>Location: Kochi</p>
              <p>Requirements : </p>
              <p>Description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. At aliquid dolore mollitia, voluptate dignissimos ducimus enim, ea dolorum alias est natus sequi exercitationem veritatis corrupti numquam nisi ut sunt saepe.</p>
            </div>
                   </div>
                 </div>
              </div>
            }
            {applicant &&
            <h1>Applicant details</h1>
            }
                  </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default AdminCareers
