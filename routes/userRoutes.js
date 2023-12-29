// userRoutes.js
import express from 'express';
import  authenticate  from '../middleware/authMiddleware.js';
import { updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Update user route
router.put('/update/:userEmail', authenticate, updateUser);

// Delete user route
router.delete('/delete/:userEmail', authenticate, deleteUser);

export default router;
