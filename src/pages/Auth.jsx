import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Auth({register}) {

  const [userDetails,setUserDetails]=useState({username:"",email:"",password: ""})

  console.log(userDetails);
  
  const navigate= useNavigate()

  const handleRegister=async()=>{
    console.log("inside handleregister");
    const {username,email,password}=userDetails
    if(!username || !email || !password){
      toast.info("Please fill the form completely!!")
    }else{
        // toast.success("Proceed to API call")
        try{
          const result=await registerAPI(userDetails)
          console.log(result);
          if(result.status==200){
            toast.success("Registered successfully!!! Please Login")
            setUserDetails({username:"",email:"",password: ""})
            navigate('/login')
          }else if(result.status==409){
            toast.warning(result.response.data)
             setUserDetails({username:"",email:"",password: ""})
            navigate('/login')
          }else{
             toast.error("Something went wrong")
           setUserDetails({username:"",email:"",password: ""})
          }
          
        }catch(err){
          console.log(err)
        }
    }
  }

   const handleLogin=async()=>{
    const {email,password}=userDetails
     if( !email || !password){
      toast.info("Please fill the form completely!!")
    }else{
        // toast.success("Proceed to API call")
        try{
          const result=await loginAPI(userDetails)
          console.log(userDetails);
          
          console.log(result);
          if(result.status==200){
            toast.success("Login successful!!!")
            sessionStorage.setItem("user",JSON.stringify(result.data.user))
            sessionStorage.setItem("token",result.data.token)
           setTimeout(()=>{
            console.log(result.data);
            
                 if(result.data.user.role=='admin'){
                  navigate('/admin-dashboard')
            }else if(result.data.user.role=='employee'){
                navigate('/employee-dashboard')
            }else{
                navigate('/')
            }
           },2500)
          }else if(result.status==401){
           toast.warning(result.response.data)
           setUserDetails({username:"",email:"",password: ""})
          }else if(result.status==404){
            // console.log(result);
            toast.warning(result.response.data)
           setUserDetails({username:"",email:"",password: ""})
          }else{
             toast.error("Something went wrong")
           setUserDetails({username:"",email:"",password: ""})
          }
          
        }catch(err){
          console.log(err)
        }

  }}

  const handleGoogleLogin =async(credentialResponse)=>{
  const credential=credentialResponse.credential
  const details=jwtDecode(credential)
  console.log(details);
  try{
    const result=await googleLoginAPI({username:details.name,email:details.email,password:'googlepswd',profile:details.picture})
  console.log(result);
  if(result.status==200){
            toast.success("Login successful!!!")
            sessionStorage.setItem("user",JSON.stringify(result.data.user))
            sessionStorage.setItem("token",result.data.token)
           setTimeout(()=>{
                 if(result.data.user.role=='admin'){
                  navigate('/admin-dashboard')
            }else if(result.data.user.role=='employee'){
                navigate('/employee-dashboard')
            }else{
                navigate('/')
            }
           },2500)
          }else{
             toast.error("Something went wrong")
           
          }
  }catch(err){
    console.log(err);
    
  }
  
}



  return (
    <div className='bg-[url(https://img.freepik.com/premium-photo/gold-jewelry-accessories-marble_1195984-10263.jpg)] h-screen flex justify-center items-center bg-cover '>
      <div className="max-h-screen flex flex-col bg-white p-3 pb-10 rounded-lg shadow justify-center items-center w-80 md:w-80">
     {!register ?
     <h3 className='py-4 text-xl ' >Login</h3>
     : <h3 className='py-4 text-xl '>Register</h3>
    }
    {
    register &&
    <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})}  type="text" placeholder='Username' className='p-2 rounded shadow w-full mb-2'/>
    }
    <input value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder='Email ID' className='p-2 rounded shadow w-full mb-2'/>
    <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}  type="password" placeholder='Password' className='p-2 rounded shadow w-full mb-2'/>

  {!register &&
      <Link className=' text-sm text-blue-600 underline text-start w-full'>Forgot password?
    </Link>
  } 
    
  

 {!register ?
   
   <div className="w-full">
     <Link onClick={handleLogin}  className='text-white bg-blue-600 text-xl p-2 rounded mt-5 inline-block w-full text-center'>Login</Link>

     
    {/* google Authentication */}

<div className="text-center my-2 text-white">
  {!register && <p className='text-center'>or</p>}
  {!register && 
  <div className="mb-5 flex justify-center w-full">


    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    handleGoogleLogin(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed')
  }}
/>

  </div>
  }
</div>
     <p className='text-sm text-blue-600  text-start w-full'>Are you A New User?<Link to={'/register'} className='underline'> Register</Link></p>
   </div>
   
   :  

   <div className="w-full">    
     <Link onClick={handleRegister} className='text-white bg-blue-600 text-xl p-2 rounded my-5 inline-block w-full text-center'>Register</Link>
     <p className='text-sm text-blue-600  text-start w-full'>Already A User?<Link to={'/login'} className='underline'>Login</Link></p>
   </div>
   
  }
    </div>



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

export default Auth
