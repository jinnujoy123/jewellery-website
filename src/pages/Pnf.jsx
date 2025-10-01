import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className=' flex flex-col justify-center items-center h-screen ' style={{backgroundColor:'rgb(230, 221, 221)'}}>
      <img src="https://cdn.svgator.com/images/2024/04/cat-revenge-animation-404-page.gif" alt="error" width={'150px'} height={'150px'}R style={{borderRadius:'50%'}}/>
     <h1 className='mt-5 '>Sorry we couldn't find that page.</h1>
     <Link to={'/'} className='btn text-white text-xl p-4 rounded-xl  inline-block ' >Back to Home</Link>
    </div>
  )
}

export default Pnf
