import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div className='bg-[url(https://img.freepik.com/premium-photo/gold-jewelry-accessories-marble_1195984-10263.jpg)] h-screen flex justify-center items-center bg-cover '>
      <div className="max-h-screen flex flex-col bg-white p-3 pb-10 rounded-lg shadow justify-center items-center w-80 md:w-80">
     {!register ?
     <h3 className='py-4 text-xl ' >Login</h3>
     : <h3 className='py-4 text-xl '>Register</h3>
    }
    {
    register &&
    <input type="text" placeholder='Name' className='p-2 rounded shadow w-full mb-2'/>
    }
    <input type="text" placeholder='Email ID' className='p-2 rounded shadow w-full mb-2'/>
    <input type="password" placeholder='Password' className='p-2 rounded shadow w-full mb-2'/>

  {!register &&
      <Link className=' text-sm text-blue-600 underline text-start w-full'>Forgot password?
    </Link>
  }
  
    
   {!register ?
   
   <div className="w-full">
     <Link to={''} className='text-white bg-blue-600 text-xl p-2 rounded my-5 inline-block w-full text-center'>Login</Link>
     <p className='text-sm text-blue-600  text-start w-full'>Are you A New User?<Link to={'/register'} className='underline'> Register</Link></p>
   </div>
   
   :

   <div className="w-full">
     <Link className='text-white bg-blue-600 text-xl p-2 rounded my-5 inline-block w-full text-center'>Register</Link>
     <p className='text-sm text-blue-600  text-start w-full'>Already A User?<Link to={'/login'} className='underline'>Login</Link></p>
   </div>
   
  }
    </div>
    </div>
  )
}

export default Auth
