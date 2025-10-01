
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './users/pages/Home'
import AllCollections from './users/pages/AllCollections'
import Preloader from './components/Preloader'
import Auth from './pages/Auth'
import Profile from './users/pages/Profile'
import ViewProduct from './users/pages/ViewProduct'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Wishlist from './users/pages/Wishlist'
import Cart from './users/pages/Cart'

import AdminDashboard from './admin/pages/AdminDashboard'
import AdminCollections from './admin/pages/AdminCollections'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'
import Pnf from './pages/Pnf'
function App() {

const [loading,setLoading]=useState(true)
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[])
  return (
    <>
      <Routes>
       <Route path='/' element={loading?<Preloader/>:<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
     <Route path='/register' element={<Auth register/>}/>
     <Route path='/all-collections' element={<AllCollections/>}/>
     <Route path='/collection/:id/view' element={<ViewProduct/>}/>
      <Route path='/profile' element={<Profile/>}/>
       <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<Pnf/>}/>
        <Route path='/admin-dashboard' element={loading?<Preloader/>:<AdminDashboard/>}/>
        <Route path='/admin-collections' element={<AdminCollections/>} />
        <Route path='/admin-settings' element={<AdminSettings/>} /> 
        <Route path='/admin-careers' element={<AdminCareers/>} />
      </Routes>
    </>
  )
}

export default App
