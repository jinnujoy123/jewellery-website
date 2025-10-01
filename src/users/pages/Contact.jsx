import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,  faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <Header/>
      <div className="md:grid grid-cols-2 px-10 md:px-60" style={{paddingTop:'100px'}}>
        <div className="md:pt-20 ">
          <h3 className='text-2xl pb-10' style={{color:'#4e093b'}}>Get in Touch with us</h3>
           <div className="flex flex-col ">
         <p>
           <FontAwesomeIcon icon={faEnvelope} /> kanika@gmail.com 
         </p> <br />
           <p>
             <FontAwesomeIcon icon={faPhone} /> 9845676786
           </p>
    <h3 className='py-7'>FOLLOW US : </h3>
    <div className="flex text-2xl pb-4">
      <Link>
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link>
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link>
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
    </div>
  </div>
        </div>
        <div className="md:pt-20 ">
             <h3 className='text-2xl pb-10 pt-10 md:pt-0' style={{color:'#4e093b'}}>Send us a Message</h3>
          <form action="" className='rounded shadow w-100 p-3'>

          <input type="text" placeholder='Name' className='p-2 rounded shadow w-full mb-2'/>
          <input type="text" placeholder='Email Id' className='p-2 rounded shadow w-full mb-2'/>
          <textarea name="" id="" placeholder='Message' className='p-2 rounded shadow w-full mb-2' rows={5}></textarea>
          <Link  className='btn text-white text-xl py-2 w-full rounded my-5 inline-block text-center' >Send</Link>
          </form>
        </div>
       </div>
        <div className="md:grid grid-cols-2 px-10 md:px-60 md:py-10">
          <div className="text-center p-10">
            <div className="flex">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="ms-4">
                <p>Kanika Building</p>
                <p>Main Street ,</p>
                <p>AKG Road</p>
                <p>Ernakulam, Kerala</p>
              </div>
            </div>
          </div>  

        <div className="w-full p-10 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.063586248478!2d76.30459832354099!3d10.011606622837963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0590621175%3A0x31a7773875d3f172!2sPress%20Club%20Colony%2C%20Edappally%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682024!5e0!3m2!1sen!2sin!4v1758771212945!5m2!1sen!2sin" width="100%" height="200px"  allowfullscreen="" loading="lazy" style={{border:'0'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        </div>
     
      <Footer/>
      
    </>
  )
}

export default Contact
