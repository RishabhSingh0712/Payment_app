import React from 'react'
import Products from './Components/Products'
import productsData from './Components/data.js'
function App() {
  return (
    <div>
      <Products products = {productsData} />
    </div>
  )
}

export default App
