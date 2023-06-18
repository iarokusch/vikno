import express from 'express';
import { auth } from '../midleware/auth.js';
const router = express.Router();

import {
    getAllItems,
    addNewItem,
    upDateItem,
    getAllArtistItem,
    delItemById,
    createPaymentSession,
    getOneItems,
} from '../controllers/itemControllers.js';
import { isAdmin } from '../midleware/isAdmin.js';
router.get('/', getAllItems);
router.post('/newitem', auth, addNewItem);
router.post('/order', auth, createPaymentSession);
router.patch('/:id', auth, isAdmin, upDateItem);
router.get('/:id', auth, isAdmin, getAllArtistItem);
router.get('/fullitem/:id', getOneItems);
router.delete('/:id', auth, delItemById);
export default router;
