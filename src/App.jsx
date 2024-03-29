import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRouter from './Routes/UserRouter';
import { CartDataProvider } from './context/cart/CartContext';
function App() {
  return (
    <div>
        
    <CartDataProvider>
     <BrowserRouter>
      <Routes>
              <Route path="/*" element={<UserRouter/>}/>     
      </Routes>
    </BrowserRouter>
    </CartDataProvider>
    </div>
  )
}

export default App
