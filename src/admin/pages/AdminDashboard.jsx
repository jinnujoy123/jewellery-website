import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import Sidebar from '../components/Sidebar'
import { faSalesforce } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { getAdminSalesAPI } from '../../services/allAPI'
import { ProductContext } from "../../context/ProductContext";

import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import SERVERURL from '../../services/serverURL'


function AdminDashboard() {
   const [sales,setSales]=useState([])
  const { allProducts} = useContext(ProductContext);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [showLowStockModal, setShowLowStockModal] = useState(false);

  useEffect(()=>{
    getAllSales()

  },[])
  useEffect(() => {
  
    const low = allProducts?.filter(
      (p) => (p.stockQty ?? p.stock ?? 0) <= LOW_STOCK_THRESHOLD
    );
  
    setLowStockProducts(low);
  }, [allProducts]);
const LOW_STOCK_THRESHOLD = 3;
  const search=""
      const getAllSales=async()=>{
       const token=sessionStorage.getItem("token")
           const reqHeader={
                     "Authorization":`Bearer ${token}`
                   }
                   try{
                     const result=await getAdminSalesAPI(search,reqHeader)
                                         
                     if(result.status==200){
                       setSales(result.data)
                       console.log((result.data));
                       
                        
                     }else{
                       console.log(result);
                       
                     }
                   }catch(err){
                     console.log(err);
                     
                   }
      }
      console.log(sales);
      // console.log(allProducts);
 const toLocalDay = (dt) => {
    const d = new Date(dt);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // 2️⃣ Aggregate sales by day
  const map = {};
  sales.forEach((s) => {
    const day = toLocalDay(s.createdAt || s.updatedAt || new Date());
    const amount = Number(s.totalAmount ?? s.total ?? 0);
    if (!map[day]) map[day] = { revenue: 0, count: 0 };
    map[day].revenue += amount;
    map[day].count += 1;
  });

  // 3️⃣ Convert map to array for chart
  const chartData = Object.entries(map)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, vals]) => ({
      date,
      revenue: vals.revenue,
      count: vals.count,
    }));

  // 4️⃣ Handle empty data
  if (chartData.length === 0) {
    return <div style={{ padding: 12 }}>No sales data available.</div>;
  }



    
      const today = new Date().toDateString();
      
      const todaysSales = sales.filter(
        (sale) => new Date(sale.createdAt).toDateString() === today
      );
      const todaysRevenue = todaysSales.reduce((sum, sale) => sum + (sale.totalAmount || 0), 0)

      // Group sales by staff name
const staffPerformance = {};

sales.forEach((sale) => {
  const name = sale.employeeName || "Unknown";
  if (!staffPerformance[name]) {
    staffPerformance[name] = { totalSales: 0, totalRevenue: 0 };
  }
  staffPerformance[name].totalSales += 1;
  staffPerformance[name].totalRevenue += sale.totalAmount;
});

// Convert to array and sort by totalRevenue
const topStaff = Object.entries(staffPerformance)
  .map(([name, data]) => ({ name, ...data }))
  .sort((a, b) => b.totalRevenue - a.totalRevenue);

// topStaff[0] will be your best performer


  return (
    <div>
     <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5 min-h-screen ">
          <div className="col-span-1  bg-blue-100 flex flex-col justify-between">
            <Sidebar/>
          </div>
          <div className="col-span-4"style={{paddingTop:'100px'}} >
        <h1>Welcome to Dashboard</h1>
         <div className="md:grid grid-cols-4 p-5 gap-5 space-y-5">
          <div className="bg-yellow-500 flex items-center text-white p-5 rounded h-30">
           
            <div className='px-3 text-xl  text-center'>
              <h3 >Total Sales</h3>
              <h3 >{sales?.length}</h3>
            </div>
          </div>
           <div className="bg-green-700 flex items-center text-white p-5 rounded h-30">
          
            <div className='px-3 text-xl text-center'>
              <h3 >Today's Revenue</h3>
              <h3 >{todaysRevenue}</h3>
            </div>
          </div>
           <div className="bg-blue-900 flex items-center text-white p-5 rounded h-30">
            
            <div className='px-3 text-xl text-center'>
              <h3 >Today's Sales</h3>
              <h3 >{todaysSales?.length}</h3>
            </div>
          </div>
          <div className="bg-yellow-900 flex items-center text-white p-5 rounded h-30">
         
            <div  onClick={() => setShowLowStockModal(true)} className='px-3 text-xl text-center'>
              <h3 >Low Stock</h3>
              <h3 >{lowStockProducts.length}</h3>
            </div>
          </div>
         </div> 

       

         <div style={{ width: "100%", height: 360 }} className='flex flex-col justify-center items-center'>


    
<div style={{ width: "100%", height: "100%" , padding: "1rem" }} className='flex flex-col justify-center items-center' >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "0.75rem",
          color: "#007bff",
          fontWeight: 600,
        }}
      >
        📊 Daily Revenue & Sales Count
      </h2>

      <ResponsiveContainer width="80%" height="85%" >
        <BarChart
          data={chartData}
          margin={{ top: 16, right: 30, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis
            yAxisId="left"
            label={{
              value: "Revenue (₹)",
              angle: -90,
              position: "insideLeft",
            }}
            tickFormatter={(v) =>
              v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v
            }
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Sales Count",
              angle: 90,
              position: "insideRight",
            }}
            allowDecimals={false}
          />

          <Tooltip
            formatter={(value, name) => {
              if (name === "Revenue (₹)" || name === "revenue") {
                return [`₹${Number(value).toLocaleString()}`, "Revenue (₹)"];
              }
              return [value, "Sales Count"];
            }}
          />
          <Legend />

          {/* Blue bar → Revenue */}
          <Bar
            yAxisId="left"
            dataKey="revenue"
            name="Revenue (₹)"
            barSize={28}
            fill="#007bff"
          />

          {/* Green bar → Sales Count */}
          <Bar
            yAxisId="right"
            dataKey="count"
            name="Sales Count"
            barSize={28}
            fill="#28a745"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    </div>

         {/* Top Performing Staff */}
<div className="bg-white p-5 rounded-lg shadow-md mt-6">
  <h3 className="text-lg font-semibold mb-3 text-[#D4AF37]">Top Performing Staff</h3>

    <div className="space-y-3">
  
        <div
        
          className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50"
          style={{
            borderLeft: `4px solid `,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold"
              style={{
                backgroundColor:   "#D4AF37" 
              }}
            >
             
            </div>
            <div>
              <div className="font-medium text-gray-800 capitalize"> {topStaff.length > 0 ? topStaff[0].name : "No data"}</div>
              <div className="text-xs text-gray-500">
                No. of sales :  {topStaff.length > 0 ? topStaff[0].totalSales : "No data"}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Revenue</div>
            <div className="text-base font-semibold text-gray-800">
              ₹  {topStaff.length > 0 ? topStaff[0].totalRevenue : "No data"}
            </div>
          </div>
        </div>
      
    </div>
  
</div>
<div className="bg-white p-4 rounded shadow mt-4">
 
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="border p-2">Name</th>
        <th className="border p-2 text-center">Sales Count</th>
        <th className="border p-2 text-right">Revenue (₹)</th>
      </tr>
    </thead>
    <tbody>
      {topStaff.slice(0, 5).map((s, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="border p-2 font-medium capitalize">{s.name}</td>
          <td className="border p-2 text-center">{s.totalSales}</td>
          <td className="border p-2 text-right text-[#D4AF37] font-semibold">
            ₹{s.totalRevenue.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<Link
  to="/admin-sales"
  className="text-[#D4AF37] text-xl  hover:underline inline-block my-5 px-4"
>
  View Detailed Sales Report →
</Link>

                  </div>
          </div>
        </div>

        {/* Low Stock Modal */}
{showLowStockModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Low Stock Items ({lowStockProducts.length})</h2>
        <div className="mt-4 flex justify-end">
        <button onClick={() => setShowLowStockModal(false)} className="px-4 py-2 rounded bg-stone-200 text-pink-900">Close</button>
      </div>
      </div>

      {lowStockProducts.length === 0 ? (
        <p className="text-gray-600">No low stock items at the moment.</p>
      ) : (
        <div className="space-y-3 max-h-80 overflow-auto">
          {lowStockProducts.map(prod => (
            <div key={prod._id} className="flex justify-between items-center p-3 border rounded">
              <div className='flex'>
                <img src={`${SERVERURL}/uploads/${prod.image}`} alt="" width={'50px'} height={'50px'} />
                <div className=" ms-2 font-medium">{prod.title || prod.name || prod.productName}</div>
                <div className="text-sm text-gray-500">{prod.sku ? `SKU: ${prod.sku}` : ''}</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-600">Stock: <span className="font-semibold">{prod.stockQty ?? prod.stock ?? 0}</span></div>
                {/* optional quick links */}
                <div className="mt-2 flex gap-2 justify-end">
                
                
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

     
    </div>
  </div>
)}
      <Footer/>
    </div>
  )
}

export default AdminDashboard
