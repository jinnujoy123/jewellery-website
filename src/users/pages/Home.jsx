import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Header/>
    <div className=""style={{padding:'80px 0px'}}>
       
          <img src="/public/landing.jpg" alt="image" width={'100%'} className='h-screen object-cover md:block hidden' />
          <img src="/public/mobile_landing.jpg" alt="image" width={'100%'} className='md:hidden h-screen object-cover '/>


          <div className="p-10 md:px-20 text-center">
            <h1>Our Premium Collections</h1>
            <div className="md:grid grid-cols-4 gap-3">
              <div className=""><img src="/public/IMG_6853.webp" alt="img1"  height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_4656.webp" alt="img2" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_2069.webp" alt="img3" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/img3.jpg" alt="img4" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_6853.webp" alt="img1"  height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_4656.webp" alt="img2" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/IMG_2069.webp" alt="img3" width={'100%'} height={'400px'} className='mb-10'/></div>
              <div className=""><img src="/public/img3.jpg" alt="img4" width={'100%'} height={'400px'} className='mb-10'/></div>
              </div> 
              <Link to={'/all-collections'} className='btn text-white text-xl p-4 rounded-xl my-5 inline-block ' >Explore more..</Link>

          </div>
    <div className="">
      <h1>Testimonials</h1>
      <div className="md:grid grid-cols-3 gap-10 px-5 md:px-30 ">
        <div className="flex flex-col justify-start items-center mb-5 p-5 shadow rounded  " >
  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
<p className='ps-3 text-pink-800 py-5'>Maria Sam</p> 

  <p className='text-gray-600 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores totam in ab est voluptates porro ratione incidunt</p>
        </div>
        <div className="flex flex-col justify-start items-center mb-5 p-5 shadow rounded  " >
  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
<p className='ps-3 text-pink-800 py-5'>Maria Sam</p> 

  <p className='text-gray-600 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores totam in ab est voluptates porro ratione incidunt</p>
        </div>
        <div className="flex flex-col justify-start items-center mb-5 p-5 shadow rounded  " >
  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" style={{width:'80px',height:'80px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
<p className='ps-3 text-pink-800 py-5'>Maria Sam</p> 

  <p className='text-gray-600 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores totam in ab est voluptates porro ratione incidunt</p>
        </div>
      </div>
    </div>
    <div className="mt-5">
      <h1>About us</h1>
      <div className="md:grid grid-cols-2 md:px-30 px-5">
        <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae repellat illum harum distinctio quas, dolorum neque hic modi reiciendis similique assumenda impedit laboriosam expedita nesciunt dignissimos, aspernatur at nam! <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta, enim cupiditate itaque dolores magni quas nobis! Modi veritatis omnis, praesentium iusto odit alias aperiam maiores quo eum delectus quisquam.</p>
        <img src="/public/landingpage.jpg" alt="about_img" style={{width:'100%',height:'250px',objectFit:'cover',objectPosition:'top'}} className='px-5 mt-10 md:mt-0'/>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
