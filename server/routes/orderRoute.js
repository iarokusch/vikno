import express from 'express';
const router = express.Router();
import {
    addNewOrder,
    deleteOrder,
    getAllOrders,
    openStripeChekoutPage,
    updateOrder,
} from '../controllers/orderControllers.js';
import { auth } from '../midleware/auth.js';
import { isAdmin } from '../midleware/isAdmin.js';
// get request "/orders/" get all orders
router.get('/', auth, isAdmin, getAllOrders);

// post request "/orders/" redirecting user to stripe checkout page
router.post('/', auth, openStripeChekoutPage);

// post request "/orders/confirm /" add new order
router.post('/neworder', auth, addNewOrder);

// patch request "/orders/7sdfdsf538423jh4gj234" update a order
router.patch('/:id', auth, updateOrder);

// delete request "/orders/7sdfdsf538423jh4gj234" delete a order
router.delete('/:id', auth, deleteOrder);

export default router;
