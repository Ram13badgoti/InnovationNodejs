import express from 'express';
import  authenticate  from '../middleware/authMiddleware.js';
import {
  viewAllUsers,
  modifyUserDetails,
  deleteUserDetails,
} from '../controllers/adminController.js';

import isAdmin from "../middleware/adminMiddleware.js"
const router = express.Router();


router.use(authenticate);

router.get('/user', isAdmin, viewAllUsers);
router.put('/user/update/:userEmail', isAdmin, modifyUserDetails);
router.delete('/user/delete/:userEmail', isAdmin, deleteUserDetails);

export default router;
