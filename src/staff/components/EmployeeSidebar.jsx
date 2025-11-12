import { faGear, faGem, faGraduationCap, faHistory, faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeSidebar() {
  return (
    <div>
      <div>
      <div className='bg-blue-100 text-dark py-30 flex flex-col justify-center items-center'>
      <div className="text-center">
        <img src='https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg' style={{width:'100px',height:'100px',borderRadius:'50%'}} alt='admin profile' />
         
      
          <p className='text-xl py-4'>Employee Name</p>
      </div>
        <div className="flex flex-col px-5 ">
          <div className=" mt-3">
         
            <Link to={'/employee-dashboard'}>
              <FontAwesomeIcon icon={faHome} className='mx-2'/>
            </Link>
            <label htmlFor="Home">Dashboard</label>
          </div>
          <div className="mt-3 ">
            
            <Link to={'/employees-products'}>
              <FontAwesomeIcon icon={faGem} className='mx-2'/>
            </Link>
            <label htmlFor="resources">Products</label>
          </div>
          <div className="mt-3">

          <Link to={''}>
              <FontAwesomeIcon icon={faUsers} className='mx-2'/>
            </Link>
            <label htmlFor="Careers">Orders</label>
          </div>
          <div className="mt-3">  
           
            <Link>
              <FontAwesomeIcon icon={faGraduationCap} className='mx-2'/>
            </Link>
            <label htmlFor="Careers">Create Sale</label>
          </div>
          <div className="mt-3">

            <Link to={''}>
              <FontAwesomeIcon icon={faHistory} className='mx-2'/>
            </Link>
            <label htmlFor="Careers">My Sale</label>
          </div>
          <div className="mt-3">
           
            <Link to={''}>
              <FontAwesomeIcon icon={faGear} className='mx-2' />
            </Link>
            <label htmlFor="Settings">Settings</label>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default EmployeeSidebar
