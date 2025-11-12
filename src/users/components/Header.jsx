
import { faBars, faCartShopping, faHeart,  faPowerOff,  faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'



function Header() {
   const [isOpen, setIsOpen] = useState(false);
    const [token,SetToken] =useState("")
    const [userDp,setUserDp]=useState("")
    const navigate=useNavigate()

    useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      SetToken(token)
      const user=JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile) 
      // console.log(user.profile);
      }
  },[token])

  
  const logout=()=>{
    sessionStorage.clear()
    SetToken("")
    setUserDp(false)
    navigate('/')
  }

  return (
    <>
      <div className="fixed w-full z-10">
        <div className="flex justify-between items-center text-white px-5 " style={{backgroundColor:'#4e093b',height:'80px'}}>
        
            <div className="flex justify-between items-center">
              <img src="/public/8847ae85-3c5d-4016-885e-842d3358fe3e.png" alt="logo" style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                <h6 className='text-2xl md:text-3xl italic ps-5'>Kanika</h6>
            </div>
        
            <div className="flex items-center justify-evenly w-50 text-lg md:text-xl">
             <Link to={'/wishlist'}>
               <FontAwesomeIcon icon={faHeart} className='text-red-700'/>
             </Link>
             <Link to={'/cart'}>
               <FontAwesomeIcon icon={faCartShopping} />
             </Link>
             {!token?
              <Link  to={'/login'}> <button  className=' p-2 btn  rounded border border-white'><FontAwesomeIcon icon={faUser} className='me-1'/>Login</button></Link>
             :
             <Link className='py-1 px-2 rounded-2xl  flex items-center justify-center' >
                <Link to={'/profile'}><img width={'40px'} height={'40px'} className='me-4' style={{borderRadius:'50%'}} src={userDp==""?"https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png":userDp.startsWith("https://lh3.googleusercontent.com/")?userDp: "https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png"} alt="" /></Link>
                <FontAwesomeIcon onClick={logout} icon={faPowerOff} />             
             </Link>
             }
               {/* Mobile Hamburger Button */}
          <div className="md:hidden  text-white text-end text-white ">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
            </div>
        </div>
         

            <nav className='font-bold'>
            <div className={isOpen ? "md:hidden flex flex-col space-y-4 p-4 text-center text-white " : "hidden md:flex justify-center space-x-8 py-2  items-center"} style={isOpen ?{backgroundColor:'#4e093b',color:'white'} :{color:'#4e093b',backgroundColor:'rgb(230, 221, 221)'}} >
            <Link to="/">HOME</Link>
            <Link to="/all-collections">COLLECTIONS</Link>
            <Link to="/careers">CAREERS</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/contact">CONTACT</Link>
          </div>              
          </nav>
      </div>
    </>
  )
}

export default Header
