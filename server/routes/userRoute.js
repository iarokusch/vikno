import express from 'express';
const router = express.Router();
import {
    getAllUsers,
    getUserById,
    changeUserData,
    delUserById,
    addNewUser,
    userLogin,
   
} from '../controllers/userControllers.js';
import { auth } from '../midleware/auth.js';
import { isAdmin } from '../midleware/isAdmin.js';
import { rules } from '../midleware/validators.js';
router.get('/', isAdmin, getAllUsers);
router.get('/refresh', auth, (req, res) => {
    res.send({ success: true, data: req.user });
});
router.get('/:id', auth, getUserById);

router.patch('/:id', auth, changeUserData);
router.delete('/:id', auth, delUserById);
router.post('/newuser', rules, addNewUser);
router.post('/login', userLogin);
export default router;
