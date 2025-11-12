
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
import AdminCollections from './admin/pages/AdminResources'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'
import Pnf from './pages/Pnf'
import EmployeeDashboard from './staff/pages/EmployeeDashboard'
import EmployeeProducts from './staff/pages/EmployeeProducts'
import SalesData from './admin/pages/SalesData'

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

 <Route path='/employee-dashboard' element={loading?<Preloader/>:<EmployeeDashboard/>}/>
 <Route path='/employees/products' element={<EmployeeProducts/>}/>


        <Route path='/admin-dashboard' element={loading?<Preloader/>:<AdminDashboard/>}/>
        <Route path='/admin-collections' element={<AdminCollections/>} />
        <Route path='/admin-settings' element={<AdminSettings/>} /> 
        <Route path='/admin-careers' element={<AdminCareers/>} />
        <Route path='/admin-sales' element={<SalesData/>} />
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
    </>
  )
}

export default App
