import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/Footer";
import {createSaleAPI } from "../../services/allAPI";
import AdminHeader from "../../admin/components/AdminHeader";
import EmployeeSidebar from "../components/EmployeeSidebar";
import { Link } from "react-router-dom";
import SERVERURL from "../../services/serverURL";
import { ProductContext } from "../../context/ProductContext";

function EmployeeProducts() {
  // UI state
  const [activeCategory, setActiveCategory] = useState("All");
  const [sellProduct, setSellProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [paymentMode, setPaymentMode] = useState("cash");
  const [customer, setCustomer] = useState({ name: "", phone: "" });
  const [saving, setSaving] = useState(false);
     const { allProducts,getAllProducts} = useContext(ProductContext);

  useEffect(() => {
    getAllProducts();
  }, []);
  const categories = ["All", "Necklace", "Bangles", "Bridal", "Earrings", "Rings"];


  // const getAllProducts = async () => {
  //   try {
  //     const token = sessionStorage.getItem("token");
  //     const reqHeader = { Authorization: `Bearer ${token}` };
  //     const result = await employeeGetAllProductsAPI(reqHeader);

  //     if (result?.status === 200) {
  //       setAllProducts(result.data || []);
  //     } else if (result?.status === 401) {
  //       toast.warning(result.response?.data || "Unauthorized");
  //     } else {
  //       toast.error("Something went wrong!");
  //     }
  //   } catch (err) {
  //     console.error("getAllProducts error:", err);
  //     toast.error("Something went wrong!");
  //   }
  // };

 
  const openSellModal = (p) => {
    const currentStock = Number(p?.stock ?? 0);
    if (currentStock <= 0) return toast.warn("Out of stock");
    setSellProduct(p);
    setQty(1);
    setPaymentMode("cash");
    setCustomer({ name: "", phone: "" });
  };

  const closeSellModal = () => setSellProduct(null);

  const handleQty = (v) => {
    const val = Number(v);
    if (Number.isNaN(val) || val < 1) return setQty(1);
    const max = Number(sellProduct?.stock ?? 0);
    if (max && val > max) return setQty(max);
    setQty(val);
  };
console.log(sellProduct);

  const submitSale = async (e) => {
    e.preventDefault();
    if (!sellProduct?._id) return toast.error("Product missing");

    const employee = JSON.parse(sessionStorage.getItem("user") || "{}");
    const employeeName=employee?.username
       
    const employeeId = employee?.id || employee?._id;
    if (!employeeId) return toast.error("Login required");

    const unitPrice = Number(sellProduct?.discountPrice ?? sellProduct?.price ?? 0);

    const body = {
      employeeId,
      employeeName,
           items: [
        {
          productId: sellProduct._id,
          productName: sellProduct.title || sellProduct.name,
          quantity: qty,
          price: unitPrice,
          subtotal: unitPrice * qty,
        },
      ],
      totalAmount: unitPrice * qty,
      paymentMode, // "cash" | "upi" | "card"
      customerName: customer.name || "",
      customerPhone: customer.phone || "",
    };

    try {
      setSaving(true);
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }
      const res = await createSaleAPI(body,reqHeader); 
      if (res.status === 200 || res.status === 201) {
        toast.success("Sale recorded");
        setSellProduct(null);
        await getAllProducts(); 
      } else {
             
        toast.error( "Failed to create sale");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Server error");
    } finally {
      setSaving(false);
    }
  };
  // ------------------------------------------------------------

  // Filter by category
  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter(
          (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div>
      <AdminHeader />
      <div className="" style={{ paddingTop: "0px" }}>
        <div className="md:grid grid-cols-5 min-h-screen">
          <div className="col-span-1 bg-blue-100 flex flex-col justify-between">
            <EmployeeSidebar />
          </div>

          <div className="col-span-4" style={{ paddingTop: "100px" }}>
            <h1>Collections</h1>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-4 p-5">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(item)}
                  className={`rounded-2xl shadow border border-pink-900 px-4 py-2 transition
                    ${activeCategory === item ? "bg-pink-900 text-white" : "text-pink-900"}
                    hover:bg-pink-900 hover:text-white`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Products */}
            <div className="md:grid grid-cols-4 p-10 gap-x-4 gap-y-8">
              {filteredProducts?.length > 0 ? (
                filteredProducts.map((item) => (
                  <div
                    key={item._id}
                    className="shadow bg-gray-200 overflow-hidden flex flex-col justify-between pb-5"
                  >
                    <Link >
                      <img
                        src={`${SERVERURL}/uploads/${item.image}`}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>

                    <div className="p-3 text-center">
                   
                        <h4 className="font-bold pt-3">{item.title}</h4>
                    

                      <h4 className="py-3">
                        Rs.{" "}
                        <span className="line-through text-gray-500">
                          {item.price}
                        </span>{" "}
                        {item.discountPrice}
                      </h4>

                      <h4 className="py-3">Quantity : {Number(item.stock ?? 0)}</h4>

                      <div className="flex justify-center items-center space-x-2 text-sm mt-5">
                        <button
                          onClick={() => openSellModal(item)}
                          className="rounded shadow py-2 px-5 bg-white text-pink-900 hover:bg-stone-300 disabled:opacity-50"
                          disabled={Number(item.stock ?? 0) <= 0}
                        >
                          Sell
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-600 col-span-4">
                  <p>No products found in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sell Modal (inline) */}
      {sellProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[440px] rounded-xl shadow p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Create Sale</h2>
              <button onClick={closeSellModal} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="bg-gray-50 border rounded p-3 mb-4 text-sm">
              <div>
                <span className="text-gray-600">Product:</span>{" "}
                <b>{sellProduct?.title || sellProduct?.name}</b>
              </div>
              <div>
                <span className="text-gray-600">Price:</span> ₹
                {sellProduct?.discountPrice ?? sellProduct?.price}
              </div>
              <div>
                <span className="text-gray-600">Stock:</span>{" "}
                {Number(sellProduct?.stock ?? 0)}
              </div>
            </div>

            <form onSubmit={submitSale} className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={qty}
                  onChange={(e) => handleQty(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Payment Method</label>
                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="cash">Cash</option>
                  <option value="upi">UPI</option>
                  <option value="card">Card</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1">Customer Name (optional)</label>
                  <input
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Walk-in"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Customer Phone (optional)</label>
                  <input
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full border rounded px-3 py-2"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-sm text-gray-700">
                  Total:{" "}
                  <span className="font-semibold">
                    ₹{(Number(sellProduct?.discountPrice ?? sellProduct?.price ?? 0) * qty)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={closeSellModal} className="px-3 py-2 border rounded">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 bg-pink-900 text-white rounded disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Confirm Sale"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

export default EmployeeProducts;
