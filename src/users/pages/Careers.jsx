import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Careers() {
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
          <Link className='bg-blue-900 text-white p-2' >Apply<FontAwesomeIcon icon={faArrowRight}/></Link>
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
   <Footer/>
    </div>
  )
}

export default Careers
