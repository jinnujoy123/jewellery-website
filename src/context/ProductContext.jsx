// src/context/ProductContext.jsx
import React, { createContext, useState, useEffect, useCallback } from "react";
import { getAllProductsAPI } from "../services/allAPI";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
   const [error, setError] = useState(null);

  useEffect(()=>{
getAllProducts()
  },[])

  const getAllProducts = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const reqHeader = { Authorization: `Bearer ${token}` };
        const result = await getAllProductsAPI(reqHeader);
  
        if (result?.status === 200) {
          setAllProducts(result.data || []);
        } else if (result?.status === 401) {
          setError(result.response?.data || "Unauthorized");
        } else {
          setError("Something went wrong!");
        }
      } catch (err) {
        console.log("getAllProducts error:", err);
        setError("Something went wrong!");
      }
    };
  


  return (
    <ProductContext.Provider
      value={{ allProducts, setAllProducts,getAllProducts}}
    >
      {children}
    </ProductContext.Provider>
  );
};
