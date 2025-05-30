import React from 'react'
import axios from 'axios'
import '../style/Products.css'

function Products({ products }) {
    const checkoutHandler = async (amount) => {
        const {data:keyData} = await axios.get("/api/v1/getKey")
        const {key} = keyData
        const {data:orderData} = await axios.post("/api/v1/paymentprocess",{
            amount: amount
        })
        const {order} = orderData       
         const options = {
        key: key, 
        amount: amount,
        currency: 'INR',
        name: 'RS7 Store',
        description: 'Razorpay integration',
        order_id: order.id,
        callback_url: '/api/v1/paymentVerification', 
        prefill: {
          name: 'Rishabh Singh',
          email: 'rishabh@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37255'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    }
        
    
  return (
    <div>
      <div className="products-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h3 className="product-title">{item.title}</h3>
            <p className="product-price">Price <strong>{item.price}</strong></p>
            <button className="pay-button" onClick={()=>checkoutHandler(item.price)}  >{item.price}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
