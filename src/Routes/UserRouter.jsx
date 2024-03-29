import React from 'react'
import HomePage from '../Pages/HomePage'
import ProductDetailsPage from '../Pages/ProductDetailsPage'
import CartPage from '../Pages/CartPage'
import { Route, Routes } from 'react-router-dom';

function UserRouter() {
  return (
    <div>
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/product/:id" element={<ProductDetailsPage  />} />
        <Route path="/cart" element={<CartPage/>} /> 
      
    </Routes>
    
    </div>
  )
}

export default UserRouter
