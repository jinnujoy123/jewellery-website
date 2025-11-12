import React, { useEffect, useState } from 'react'
import { getAdminSalesAPI } from '../../services/allAPI'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'

function SalesData() {
    const [sales,setSales]=useState([])
    const [search,setSearch]=useState("")

    useEffect(()=>{
        getAllSales()
    },[search])

     const getAllSales=async()=>{
      const token=sessionStorage.getItem("token")
      console.log(token);     
           
          const reqHeader={
                    "Authorization":`Bearer ${token}`
                  }
                  console.log("search" ,search);
                  
                  try{
                    const result=await getAdminSalesAPI(search,reqHeader)
                    // console.log(result.data);
                    
                    if(result.status==200){
                      setSales(result.data)
                    }else{
                      console.log(result);
                      
                    }
                  }catch(err){
                    console.log(err);
                    
                  }
     }
    // console.log(sales);
    

     
  return (
    <div>
        <AdminHeader/>
      <div className="bg-white rounded-lg shadow-md p-5 mt-5" style={{paddingTop:'100px'}}>
  <div className="flex justify-between items-center m-4">
    <h3 className="text-lg font-semibold text-gray-800 ">Sales Details</h3>
    <input
      type="text" value={search} onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search by customer or staff..."
      className="border px-3 py-2 rounded text-sm w-60"
    />
  </div>

  <table className="w-full text-sm border-collapse my-10">
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-2 text-left">Date</th>
         <th className="border p-2 text-left">Invoice ID</th>
        <th className="border p-2 text-center">Item</th>
        <th className="border p-2 text-left">Customer</th>
        <th className="border p-2 text-right">Amount</th>
        <th className="border p-2 text-center">Payment</th>
        <th className="border p-2 text-left">Staff</th>
      </tr>
    </thead>
    <tbody>
      {sales.map((s) => (
        <tr key={s._id} className="hover:bg-gray-50">
          <td className="border p-2">{new Date(s.createdAt).toLocaleString()}</td>
          <td className="border p-2"> {s._id.slice(-6).toUpperCase()}</td>
         
      <td className="border p-2 w-80">
          {s.items?.map((item, index) => (
            <span key={index}>
               {item.productName}
            </span>
          ))
        }
        </td>
   
          <td className="border p-2 capitalize">{s.customerName || "Walk-in"}</td>
          <td className="border p-2 text-right">₹{s.totalAmount}</td>
          <td className="border p-2 text-center capitalize">{s.paymentMode}</td>
          <td className="border p-2 capitalize">{s.employeeName}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<Footer/>
    </div>
  )
}

export default SalesData
