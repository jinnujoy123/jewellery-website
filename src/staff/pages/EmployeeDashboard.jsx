
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../../admin/components/AdminHeader'
import Footer from '../../components/Footer'
import EmployeeSidebar from '../components/EmployeeSidebar'
import { Link } from 'react-router-dom'
import { employeeGetAllProductsAPI, getAllSalesAPI } from '../../services/allAPI'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SERVERURL from '../../services/serverURL'
import { ProductContext } from '../../context/ProductContext'

function EmployeeDashboard() {
   const [data, setData] = useState({ totalSales: 0, pendingOrders: 0, lowStock: 0 });
 const [mySalesStatus,setMySaleStatus]=useState(true)
 const [orderStatus,setOrderStatus]=useState(false)
 const [allSales,setAllSales]=useState([])
 const [createSale,setCreateSale]=useState(false)
 const [downloaded, setDownloaded] = useState(false);
const [lowStockProducts, setLowStockProducts] = useState([]);
const [showLowStockModal, setShowLowStockModal] = useState(false);
const [showTodayOnly, setShowTodayOnly] = useState(false);
   const { allProducts,getAllProducts} = useContext(ProductContext);

useEffect(()=>{
  if(mySalesStatus){
    getAllSales()
  }

 },[mySalesStatus,orderStatus])

useEffect(() => {

  const low = allProducts?.filter(
    (p) => (p.stockQty ?? p.stock ?? 0) <= LOW_STOCK_THRESHOLD
  );

  setLowStockProducts(low);
}, [allProducts]);

const LOW_STOCK_THRESHOLD = 3;



const downloadInvoice = async (id) => {
  const sale = allSales.find((s) => s._id === id);
  if (!sale) {
    alert("Sale data not found!");
    return;
  }

  try {
    // Build a clean invoice HTML for this sale
    const content = `
      <div style="text-align:center; margin-bottom:20px;">
        <h1 style="color:#D4AF37; margin-bottom:0;">KANIKA</h1>
        <p style="margin:0; font-size:12px;">Sales Invoice</p>
        <hr style="margin-top:10px;"/>
      </div>

      <div style="margin-bottom:10px;">
        <strong>Invoice ID:</strong> ${sale._id.slice(-6).toUpperCase()}<br/>
        <strong>Date:</strong> ${new Date(sale.createdAt).toLocaleString()}<br/>
        <strong>EmployeeId:</strong> ${sale.employeeId || "Employee"}<br/>
        <strong>Customer:</strong> ${sale.customerName || "Walk-in"} ${
      sale.customerPhone ? `(${sale.customerPhone})` : ""
    }
      </div>

      <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:13px;">
        <thead>
          <tr style="background:#f5f5f5;">
            <th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">#</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Item</th>
            <th style="text-align:right; padding:8px; border-bottom:1px solid #ccc;">Qty</th>
            <th style="text-align:right; padding:8px; border-bottom:1px solid #ccc;">Price</th>
            <th style="text-align:right; padding:8px; border-bottom:1px solid #ccc;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${sale.items
            .map(
              (it, i) => `
            <tr>
              <td style="padding:6px;">${i + 1}</td>
              <td style="padding:6px;">${it.productName}</td>
              <td style="padding:6px; text-align:right;">${it.quantity}</td>
              <td style="padding:6px; text-align:right;">₹${it.price || it.subtotal / it.quantity}</td>
              <td style="padding:6px; text-align:right;">₹${it.subtotal}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>

      <div style="text-align:right; margin-top:15px; font-size:15px;">
        <strong>Total Amount: ₹${sale.totalAmount}</strong>
      </div>

      <hr style="margin-top:20px;"/>
      <div style="text-align:center; font-size:12px; color:#555;">
        Thank you for purchasing! Visit again...<br/>
        © ${new Date().getFullYear()} Kanika
      </div>
    `;

    // Insert content into the hidden template
    const container = document.getElementById("invoice-content");
    container.innerHTML = content;

    const wrapper = document.getElementById("invoice-template");
    wrapper.style.display = "block";

    // Wait a bit for fonts & layout to render
    await new Promise((r) => setTimeout(r, 100));

    // Capture this clean invoice area
    const canvas = await html2canvas(wrapper, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;
    const x = (pageWidth - imgWidth) / 2;
    const y = 20;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    pdf.save(`Invoice-${sale._id.slice(-6).toUpperCase()}.pdf`);

    // Hide the template again
    wrapper.style.display = "none";
    setDownloaded(true);
  } catch (err) {
    console.error("PDF generation failed:", err);
    alert("Something went wrong while creating the PDF.");
  }
};
const isSameDay = (d1, d2) => {
  const a = new Date(d1);
  const b = new Date(d2);
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
};

const filteredSales = showTodayOnly
  ? allSales.filter(sale => isSameDay(sale.createdAt, new Date()))
  : allSales;
 const getAllSales=async()=>{
  const token=sessionStorage.getItem("token")
      const reqHeader={
                "Authorization":`Bearer ${token}`
              }
              try{
                const result=await getAllSalesAPI(reqHeader)
                // console.log(result.data);
                
                if(result.status==200){
                  setAllSales(result.data)
                }else{
                  console.log(result);
                  
                }
              }catch(err){
                console.log(err);
                
              }
 }
const totalRevenue = allSales.reduce((sum, sale) => sum + (sale.totalAmount || 0), 0);

  return (
     <div>
     <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5 min-h-screen">
          <div className="col-span-1 bg-blue-100 flex flex-col justify-between">
            <EmployeeSidebar/>
          </div>
          <div className="col-span-4  bg-gray-200"style={{paddingTop:'100px'}} >
        <h3 className='text-xl'><marquee behavior="" direction="">Welcome to Dashboard</marquee></h3>
         <div className="md:grid grid-cols-4 p-5 gap-5 space-y-5 ">

          <div className="bg-stone-300 text-black flex flex items-center p-3 rounded h-30">
           
            <div className=' flex flex-col   px-3 text-xl font-bold text-center'>
              <h3 >Total Sales</h3>
              <h3 >{allSales?.length}</h3>
            </div>
          </div>
           <div className="bg-stone-300  text-dark flex flex items-center text-dark p-5 rounded h-30">
       
            <div className='px-3 text-xl font-bold text-center'>
              <h3 >Revenue</h3>
              <h3 >₹ {totalRevenue}</h3>
            </div>
          </div>
           <div className="bg-stone-300  text-dark flex items-center  p-5 rounded h-30">
          
            <div  onClick={() => setShowLowStockModal(true)} className='px-3 text-xl font-bold text-center'>
              <h3 >Low Stock</h3>
              <h3 >{lowStockProducts.length}</h3>
            </div>
          </div>
           <div className="bg-stone-300  text-dark flex flex items-center  p-5 rounded h-30">
           
            <div className='px-3 text-xl font-bold text-center'>
              <h3 >Pending Deliveries</h3>
              <h3 >1000 +</h3>
            </div>
          </div>
         </div>

 <div className="flex justify-center ">
              <button className= {mySalesStatus ? 'p-3 border-b border-pink-900 text-pink-900':'p-3 ' } onClick={()=>{setMySaleStatus(true);setOrderStatus(false);setCreateSale(false)}}>My Sales</button>
              <button className= {orderStatus ? 'p-3 border-b border-pink-900 text-pink-900':'p-3' }  onClick={()=>{setMySaleStatus(false);setOrderStatus(true);setCreateSale(false)}}>Pending Orders</button>
              <Link to={'/employees/products'}  className= {createSale ? 'p-3 border-b border-pink-900 text-pink-900':'p-3 font-bold' }  onClick={()=>{setCreateSale(true);setMySaleStatus(false);setOrderStatus(false)}}>Create Sale</Link>
  </div>

{/* Sales List Section */}
<div className="p-4 grid gap-4">

  <div className="flex items-center gap-3 my-3">
  <button
    className={`p-2 rounded ${!showTodayOnly ? 'border-b border-pink-900 text-pink-900' : ''}`}
    onClick={() => setShowTodayOnly(false)}
  >
    All
  </button>

  <button
    className={`p-2 rounded ${showTodayOnly ? 'border-b border-pink-900 text-pink-900' : ''}`}
    onClick={() => setShowTodayOnly(true)}
  >
    Today
  </button>

  <div className="text-sm text-gray-600 ml-4">
    Showing: {filteredSales.length} sale{filteredSales.length !== 1 ? 's' : ''}
  </div>
</div>

  {filteredSales?.length>0?
  filteredSales?.map((sale) => (
    <div
  key={sale._id}
  id={`invoice-${sale._id}`}
  style={{ background: "white", color: "black" }}
  className="rounded-xl p-4 border"
>
      {/* Header Row */}
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <div>
          <h3 className="text-pink-900 font-semibold">
            ₹ {sale.totalAmount}
          </h3>
          <p className="text-xs text-gray-500">
            {new Date(sale.createdAt).toLocaleString()}
          </p>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            sale.paymentMode === "cash"
              ? "bg-green-100 text-green-700"
              : sale.paymentMode === "upi"
              ? "bg-blue-100 text-blue-700"
              : "bg-purple-100 text-purple-700"
          }`}
        >
          {sale.paymentMode.toUpperCase()}
        </span>
      </div>

      {/* Customer info */}
      <div className="text-sm text-gray-700 mb-2">
        <span className="font-medium">Customer:</span>{" "}
        {sale.customerName || "Walk-in"}{" "}
        {sale.customerPhone && `(${sale.customerPhone})`}
      </div>

      {/* Items */}
      <div className="text-sm bg-gray-50 p-2 rounded-lg border">
        {sale.items?.length ? (
          <ul className="list-disc list-inside">
            {sale.items.map((it, i) => (
              <ul key={i}>
                <li >
                  {it.productName}
                </li>
                <li className='py-1'>Quantity : {it.quantity}</li>
                <li>Total : {it.subtotal}</li>
              </ul>
            ))}
          </ul>
        ) : (
          <p>No items</p>
        )}
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 mt-2 text-right">
        Sale ID: {sale._id.slice(-6).toUpperCase()}
      </div>
      <div className="flex justify-center items-center">
       <Link
  onClick={() => downloadInvoice(sale._id)}
  className="rounded shadow py-2 px-4 bg-stone-200 text-pink-900 hover:bg-white disabled:opacity-50"
>
  Invoice
</Link>
        

      </div>
    </div>
  )):
  <p>No sales</p>
}
</div>


        </div>
          </div>
        </div>
        {/* Hidden printable invoice template */}
<div
  id="invoice-template"
  style={{
    display: "none",
    width: "800px",
    padding: "40px",
    background: "#fff",
    color: "#000",
    fontFamily: "Arial, Helvetica, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
  }}
>
  <div id="invoice-content"></div>
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
                
                  {/* <button
                    className="px-3 py-1 text-sm bg-red-100 rounded"
                    onClick={async () => {
                   
                    }}
                  >
                    Reorder
                  </button> */}
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

export default EmployeeDashboard
