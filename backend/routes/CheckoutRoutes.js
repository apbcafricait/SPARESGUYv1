import express from 'express';
const router = express.Router();
import {  createOrder, getOrderDetails } from '../Controllers/CheckoutController.js'

// router.post('/apply-discount', applyDiscount);

router.post('/create-order', createOrder);
export default router
