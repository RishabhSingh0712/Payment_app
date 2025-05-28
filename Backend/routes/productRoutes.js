import express from 'express';
import {getKey, processPayment ,paymentVerification} from '../Controllers/productControllers.js';
const router = express.Router();
router.route("/paymentprocess").post(processPayment);
router.route("/getKey").get(getKey)
router.route("/paymentVerification").post(paymentVerification)
export default router;
