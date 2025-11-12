import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import SERVERURL from '../../services/serverURL'
import { ProductContext } from '../../context/ProductContext'

function AllCollections() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { allProducts,getAllProducts} = useContext(ProductContext);

  const categories = ["All", "Necklace", "Bangles", "Bridal", "Earrings", "Rings"]

  useEffect(() => {
    getAllProducts()
  }, [])

 
 
  //  Filter products by category
  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter(
          (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
        )

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <div className="md:pt-10 md:px-20">
          <h1 className="text-2xl font-semibold">Collections</h1>

          <h3 className="font-bold text-xl px-10 mt-6">Categories</h3>

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

          {/*  Products */}
          <div className="md:grid grid-cols-4 p-10 gap-x-4 gap-y-8">
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item._id}
                  className="shadow bg-gray-200 overflow-hidden flex flex-col justify-between pb-5"
                >
                  <Link to={`/collection/${item._id}/view`}>
                    <img
                      src={`${SERVERURL}/uploads/${item.image}`}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>

                  <div className="p-3 text-center">
                    <Link
                      to={`/collection/${item._id}/view`}
                      className="hover:underline hover:text-gray-700"
                    >
                      <h4 className="font-bold">{item.title}</h4>
                    </Link>

                    <h4 className="py-3">
                      Rs.{" "}
                      <span className="line-through text-gray-500">
                        {item.price}
                      </span>{" "}
                      {item.discountPrice}
                    </h4>

                
                    <div className="flex justify-between items-center space-x-2 text-sm mt-5">
                      <button className='rounded shadow p-1 bg-white text-pink-900 hover:bg-stone-300'>Add to wishlist</button>
                                        <button  onClick={() => toast.success(`${item.title} added to cart`)} className='rounded shadow p-1 bg-white text-pink-900 hover:bg-stone-300'>Add to Cart</button>
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

      <Footer />
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
    </div>
  )
}

export default AllCollections
