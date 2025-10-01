
import { faBars, faCartShopping, faHeart,  faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Header() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed w-full">
        <div className="flex justify-between items-center text-white px-5 " style={{backgroundColor:'#4e093b',height:'80px'}}>
            <h6 className='text-2xl md:text-3xl italic'>Kanika</h6>
            <div className="flex items-center justify-evenly w-50 text-lg md:text-xl">
             <Link to={'/wishlist'}>
               <FontAwesomeIcon icon={faHeart} className='text-red-700'/>
             </Link>
             <Link to={'/cart'}>
               <FontAwesomeIcon icon={faCartShopping} />
             </Link>
             <Link className='border border-white py-1 px-2 rounded-2xl hover:bg-white/50 hover:text-pink-900' to={'/login'}>
               <FontAwesomeIcon icon={faUser} />
               Login
             </Link>
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
            <Link to="/orders">ORDERS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
              
            </nav>
      </div>
    </>
  )
}

export default Header
