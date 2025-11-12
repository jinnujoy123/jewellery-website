// guest user

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// register API - called by Auth component when register btn clicked
// content type : "application/json (no headers passed)"
export const registerAPI = async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login API
export const loginAPI = async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// googleLogin API
export const googleLoginAPI = async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}
// ------------authorized user------------------

// get-products
export const userGetAllProductsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user/products`,{},reqHeader)
}
// view product
export const viewProductsAPI = async(productId,reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/products/${productId}/view`,{},reqHeader)
}
// ---------------admin-----------------------

// add-product
export const adminAddProductAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/admin/add-product`,reqBody,reqHeader)
}

// get-products
export const getAllProductsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-products`,{},reqHeader)
}

// list users
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-users`,{},reqHeader)
}

// list users
export const getAllEmployeesAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-employees`,{},reqHeader)
}

export const getAdminSalesAPI = async (search,reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/admin-sales/?search=${search}`, {},reqHeader)  
};
 //delete employee  
export const deleteEmployeeAPI = async (id,reqHeader) => {
  return await commonAPI("DELETE", `${SERVERURL}/employees/delete/${id}`, {} , reqHeader)  
};

// staff--------------------------------------------------------------------------------------

export const getStaffDashboardAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/employee-dashboard`, {},reqHeader)  
};

// get staff products

export const employeeGetAllProductsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/employees/products`,{},reqHeader)
}

// Create sale (employee)
export const createSaleAPI = async (reqBody,reqHeader) => {
  return await commonAPI("POST",`${SERVERURL}/sales`, reqBody, reqHeader)}

// get sales history

export const getAllSalesAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/all-sales`, {},reqHeader)  
};
  
