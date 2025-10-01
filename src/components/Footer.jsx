import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='text-white/80 px-10 pb-15 gap-10 md:grid grid-cols-4 ' style={{backgroundColor:'#4e093b'}} >
      <div className="flex flex-col pt-15">
        <h2 >SHOP</h2>
     <Link>All</Link>
     <Link>Necklaces</Link>
     <Link>Bangles</Link>
     <Link>Earrings</Link>
     <Link>Rings</Link>
     <Link>Antique</Link>
      </div>
<div className="pt-15">
  <h2 >ABOUT US</h2>
  <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni repudiandae nostrum aut vitae magnam ab aperiam modi</p>
</div>
<div className="flex flex-col pt-15">
  <h2>INFORMATION</h2>
  <Link>Contact us</Link>
  <Link>Terms of sevice</Link>
  <Link>Privacy policy</Link>
  <Link>Help desk</Link>
</div>
<div className="pt-15">
  <h2>STAY UPDATE</h2>
  <p>Be the first one to know about events , new content , products and offers.</p>
  <Link className='text-gray-200 py-4 inline-block underline'>Subscribe to our newsletter <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
  <div className="flex text-white">
    <h3 className='me-2'>FOLLOW US : </h3>
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
  )
}

export default Footer
