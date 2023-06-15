import express from 'express';
import { auth } from '../midleware/auth.js';
import { isAdmin } from '../midleware/isAdmin.js';
const router = express.Router();
import {
    isArtistUpdate,
    getAllArtists,
    getArtistById,
    changeArtistData,
    delArtistById,
    addNewArtist,
    getArtistByUserId,
} from '../controllers/artistControllers.js';

router.get('/', getAllArtists);
router.get('/:id', getArtistById);
router.post('/newartist', auth, addNewArtist);
router.post('/:userId', getArtistByUserId);
router.patch('/:id', auth, isAdmin, changeArtistData);
router.put('/:id', isArtistUpdate);
router.delete('/:id', delArtistById);

export default router;
