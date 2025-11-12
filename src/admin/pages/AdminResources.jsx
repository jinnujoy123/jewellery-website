import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/AdminHeader'
import { toast, ToastContainer } from 'react-toastify'
import { adminAddProductAPI, deleteEmployeeAPI, getAllEmployeesAPI, getAllProductsAPI, getAllUsersAPI, registerAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
import { ProductContext } from '../../context/ProductContext'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdminResources() {
  const [products,setProducts]=useState(true)
  const [addProduct,setAddProduct]=useState(false)
  const [usersList,setUsersList]=useState(false)
  const [employeeList,setEmployeeList]=useState(false)
const [productDetails,setProductDetails]=useState({title:"",description:"",category:"",price:"",discountPrice:"",stock:"",image:""})
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [allProducts,setAllProducts]=useState([])
   const { allProducts,getAllProducts} = useContext(ProductContext);
  const [allUsers,setAllUsers]=useState([])
  const [allEmployees,setAllEmployees]=useState([])
  const [open,setOpen]=useState(false)
  const [employeeDetails,setEmployeeDetails]=useState({username:"",email:"",password: "",role:"employee"})
   const navigate= useNavigate()

  // console.log(allProducts);
 console.log(allUsers);
 
  useEffect(()=>{
    if(products==true){
    getAllProducts()
    }else if(usersList==true){
        getAllUsers()
    }else if(employeeList==true){
        getAllEmployees()
    }
  },[products,usersList,employeeList])

  const handleUploadImage = (e) => {
   
    const file = e.target.files[0];
    console.log(file);
    
    if (file) {
      setImage(file);

  setProductDetails({ ...productDetails, image: file });
      // create preview
      const previewUrl = URL.createObjectURL(file);
      console.log(previewUrl);
      
      setPreview(previewUrl);
    }
  }

  const handleReset=()=>{
  setProductDetails({
      title:"",description:"",category:"",price:"",discountPrice:"",stock:"",image:"" })
setPreview("")
}

 const handleProductSubmit=async()=>{
      const {title,description,category,price,discountPrice,stock,image}=productDetails
      console.log(productDetails);
      if(!title || !description || !category || !price || !discountPrice || !stock ||!image){
      toast.info("Please fill the form completely!!!")
      }else{
         if(sessionStorage.getItem("token")){
            const token=sessionStorage.getItem("token")
            const reqHeader={
          "Authorization":`Bearer ${token}`
        }
        const reqBody=new FormData()


        // append:reqBody.append(key,value)
       
        
  reqBody.append("title", title);
  reqBody.append("description", description);
  reqBody.append("category", category);
  reqBody.append("price", price);
  reqBody.append("discountPrice", discountPrice);
  reqBody.append("stock", stock); 
  reqBody.append("image", image);

       
        try{
          const result=await adminAddProductAPI(reqBody,reqHeader)
       
          if(result.status==401){
            toast.warning(result.response.data)
            // clear all field
            handleReset()
          }else if(result.status==200){
            toast.success("Book added successfully")
             // clear all field
            handleReset()
          }else{
            toast.error("something went wrong!!!")
            handleReset()
          }
          
        }
            catch(err){
              console.log("Something went wrong",err);
              
            }
      }
    }
  }


    const getAllUsers=async()=>{
      const token=sessionStorage.getItem("token")
    const reqHeader={
              "Authorization":`Bearer ${token}`
            }
            try{
              const result=await getAllUsersAPI(reqHeader)
              console.log(result.data);
              
              if(result.status==200){
                setAllUsers(result.data)
              }else{
                console.log(result);
                
              }
            }catch(err){
              console.log(err);
              
            }
  }
// console.log(employeeDetails);

  const handleAddEmployee=async()=>{
     console.log("inside handleregister");
        const {username,email,password,role}=employeeDetails
        if(!username || !email || !password ||!role){
          toast.info("Please fill the form completely!!")
        }else{
            // toast.success("Proceed to API call")
            try{
              
              console.log(employeeDetails);
              
              const result=await registerAPI(employeeDetails)
              console.log(result);
              if(result.status==200){
                toast.success("Registered successfully!!! Please Login")
                setEmployeeDetails({username:"",email:"",password: "",role:"employee"})
                navigate('/login')
              }else if(result.status==409){
                toast.warning(result.response.data)
                 setEmployeeDetails({username:"",email:"",password: "",role:"employee"})
                navigate('/login')
              }else{
                 toast.error("Something went wrong")
               setEmployeeDetails({username:"",email:"",password: "",role:"employee"})
              }
              
            }catch(err){
              console.log(err)
            }
  }
}
 const getAllEmployees=async()=>{
      const token=sessionStorage.getItem("token")
    const reqHeader={
              "Authorization":`Bearer ${token}`
            }
            try{
              const result=await getAllEmployeesAPI(reqHeader)
              console.log(result.data);
              
              if(result.status==200){
                setAllEmployees(result.data)
              }else{
                console.log(result);
                
              }
            }catch(err){
              console.log(err);
              
            }
  }

  const deleteEmployee=async(id)=>{
      const token=sessionStorage.getItem("token")
    const reqHeader={
              "Authorization":`Bearer ${token}`
            }
            try{
              const result=await deleteEmployeeAPI(id,reqHeader)
             
              
              if(result.status==200){
                getAllEmployees()
              }else{
                console.log(result);
                
              }
            }catch(err){
              console.log(err);
              
            }
  }

const handleCancel=()=>{
  setEmployeeDetails({username:"",email:"",password: "",role:"employee"})
  setOpen(false)
}
  return (
    <div>
     <AdminHeader/>
      <div className="" style={{paddingTop:'0px'}}>
        <div className="md:grid grid-cols-5">
          <div className="col-span-1 bg-blue-100 min-h-screen">
            <Sidebar/>
          </div>
          <div className="col-span-4"style={{paddingTop:'120px'}} >
        <h1>Resource Overview & Management</h1>
        <div className="flex justify-center ">
              <button className= {products ? 'p-3 border-b border-pink-900 text-pink-900':'p-3 ' } onClick={()=>{setProducts(true);setAddProduct(false);setUsersList(false);setEmployeeList(false)}}>Products</button>
              <button className= {addProduct ? 'p-3 border-b border-pink-900 text-pink-900':'p-3' }  onClick={()=>{setProducts(false);setAddProduct(true);setUsersList(false);setEmployeeList(false)}}>Add Product</button>
               <button className= {employeeList ? 'p-3 border-b border-pink-900 text-pink-900':'p-3' }  onClick={()=>{setEmployeeList(true);setUsersList(false);setProducts(false);setAddProduct(false)}}>Employees</button>
              <button className= {usersList ? 'p-3 border-b border-pink-900 text-pink-900':'p-3' }  onClick={()=>{setUsersList(true);setProducts(false);setAddProduct(false);setEmployeeList(false)}}>Users</button>
            </div>
           {
            products && 
            <div className=" md:grid grid-cols-4 p-10 gap-x-4 gap-y-8">
        {
          allProducts?.length>0 ?
          allProducts?.map(item=>(
            <div key={item._id} className=" shadow bg-gray-200 overflow-hidden flex flex-col justify-between pb-5" >
               <Link to={'/collection/:id/view'}> <img src={`${SERVERURL}/uploads/${item.image}`} alt="image" width={'100%'} height={'200px'} className=' object-cover  transition-transform duration-500 hover:scale-106'/></Link>
            <div className="p-3 text-center ">
              <Link to={'/collection/:id/view'} className='hover:underline hover:text-gray-700' >
                <h4 className=' font-bold'>{item.title}</h4>
              </Link>
                <h4 className='py-3'>Rs. <span className='line-through text-gray-500'>{item.price}</span>  {item.discountPrice}</h4>
                <h4 className="pb-8">Quantity :<span className="fold-bold text-blue-800"> {item.stock}</span></h4>

                <Link 
    to={`/books/${item?._id}/view`} 
    className='btn text-white text-xl py-4 px-8 rounded-xl mt-auto   inline-block '
  >
    View
  </Link>

             
            </div>
        </div>
          ))
          :
          <div className="">
            <p>No products added</p>
          </div>
        }
    
            </div>
           }
          

           {
           addProduct &&

            <div className="p-10">
              <div className="bg-gray-200 p-8 md:grid grid-cols-2 mt-10 w-full gap-x-10">
                 <div className="">
                   <div className="mb-3">
                      <input type="text" value={productDetails.title} onChange={e=>setProductDetails({...productDetails,title:e.target.value})} name="" id="" placeholder='Title' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                    </div>
                    <div className="mb-3">
                      <input type="text" value={productDetails.category} onChange={e=>setProductDetails({...productDetails,category:e.target.value})}  name="" id="" placeholder='Category' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                    </div>
                   
                    <div className="mb-3">
                      <input type="text" value={productDetails.price} onChange={e=>setProductDetails({...productDetails,price:e.target.value})}  name="" id="" placeholder='Price' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                    </div>
                     <div className="mb-3">
                      <input type="text" value={productDetails.discountPrice} onChange={e=>setProductDetails({...productDetails,discountPrice:e.target.value})}  name="" id="" placeholder='DiscountPrice' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                    </div>
                    <div className="mb-3">
                      <input type="text" value={productDetails.stock} onChange={e=>setProductDetails({...productDetails,stock:e.target.value})}  name="" id="" placeholder='Stock' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                    </div>
                  
                   <div className="mb-3">
                      <textarea type="text" value={productDetails.description} onChange={e=>setProductDetails({...productDetails,description:e.target.value})}  name="" id="" placeholder='Description'  rows={3} cols={3}  className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                    </div>
                 </div>
                  <div className="mb-3 flex flex-col justify-center items-center mt-10">
                             <label htmlFor="productImage">
                  
                             <input onChange={e=>handleUploadImage(e)} type="file" id='productImage' className='hidden'/>
                             {!preview ?
                              <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" width={"200px"} height={'200px'} alt="book" />
                            :
                            <img src={preview} width={"200px"} height={'200px'} alt="product" />
                            }
                             </label>
                             <div className="p-3 w-full flex md:justify-center mt-4">
                 <button onClick={handleReset} className='py-2 px-3 rounded bg-yellow-600 text-white'>
                Reset
              </button>
               <button onClick={handleProductSubmit}  className='py-2 px-3 rounded bg-green-600 text-white ms-3'>
                Submit
              </button>
              </div>
                  </div>
              </div>
            </div>
           
           }

            {
            usersList &&
            <div className="md:grid grid-cols-3 py-5 gap-5">
             {
              allUsers?.length>0 ?
              allUsers?.map(user=>(
                   <div key={user._id} className="rounded shadow flex justify-center mx-2 items-center">
                  <img src="https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png" alt="user" style={{width:'60px',height:'60px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
                  <div className=" text-pink-900 p-5">
                    <h3 className='text-2xl capitalize'>{user.username}</h3>
                    <h3 className='text-blue-800 py-2'>{user.email}</h3>
                  

                  </div>
              </div>
              ))
              :
              <div className="">
                <p className='text-red-700 text-2xl'>No users!!!</p>
              </div>
             }

             
            </div>
           }
           {
            employeeList &&

             <div className="">
               <div className="text-end px-5">
                 <Link onClick={()=>setOpen(true)} className='btn text-white text-md p-4 rounded-xl my-5 inline-block ' >+ Add Employee</Link>
               </div>
                <div className="md:grid grid-cols-3 py-5 gap-5">
             {
              allEmployees?.length>0 ?
              allEmployees?.map(user=>(
                   <div key={user._id} className="rounded shadow flex justify-between mx-2 item-center p-5">
                  <img src="https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png" alt="user" style={{width:'30px',height:'30px',borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
                  <div className=" text-pink-900 px-2">
                    <h3 className='text-xl capitalize'>{user.username}</h3>
                    <h3 className='text-blue-800 py-2'>{user.email}</h3>
                    <h3 className='text-gray-400 text-sm py-2'>ID : {user._id}</h3>              

                  </div>
                
                    <FontAwesomeIcon onClick={()=>deleteEmployee(user._id)} icon={faTrash} className='text-red-800 cursor-pointer'/>
                  
              </div>
              ))
              :
              <div className="">
                <p className='text-red-700 text-2xl py-10 text-center'>No employees!!!</p>
              </div>
             }

             
            </div>
             </div>
           
           
           }
                  </div>
          </div>
        </div>
        {
          open && 
           <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-96 mt-20">
        <form >
        <h3 className="text-lg font-semibold py-5 text-center">Add New Staff</h3>
          <label className="block mb-2 text-sm">Name</label>
          <input value={employeeDetails.username} onChange={e=>setEmployeeDetails({...employeeDetails,username:e.target.value})} 
            type="text"
            name="username"
           
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <label className="block mb-2 text-sm">Email</label>
          <input  value={employeeDetails.email} onChange={e=>setEmployeeDetails({...employeeDetails,email:e.target.value})} 
            type="email"
            name="email"
      
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <label className="block mb-2 text-sm">Password</label>
          <input  value={employeeDetails.password} onChange={e=>setEmployeeDetails({...employeeDetails,password:e.target.value})} 
            type="password"
            name="password"
   
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <label className="block mb-2 text-sm">Role</label>
          <select
            name="role" value={employeeDetails.role}
         onClick={e=>setEmployeeDetails({...employeeDetails,role:e.target.value})} 
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="employee">Employee</option>
          </select>

         

          <div className="flex justify-end gap-2">
            <button
              type="button"
             onClick={handleCancel}
              className="px-3 py-2 border rounded text-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
            onClick={handleAddEmployee}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >Add
             
            </button>
          </div>
        </form>
      </div>
    </div>
        }
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
      <Footer/>

    </div>
  )
}

export default AdminResources

