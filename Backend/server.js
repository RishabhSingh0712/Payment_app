import app from "./app.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";


dotenv.config();


//Razorpay configuration
 export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const processPayment = async (req, res) => { 
  res.status(200).json({
    success: true,
  })
}
// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
