import React from 'react'
import Products from './Components/Products'
import PaymentSuccessful from './Components/PaymentSuccessful'
import productsData from './Components/data.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Products products={productsData} />} />
      <Route path = "/paymentsucess" element={<PaymentSuccessful/>} />
    </Routes>  
    </Router> 
  )
}

export default App
