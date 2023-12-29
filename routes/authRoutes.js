import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js';
import  authenticate  from '../middleware/authMiddleware.js';
import { validateSignupData } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/signup', validateSignupData, signupUser);
router.post('/login', loginUser);

router.get('/profile', authenticate, (req, res) => {
    console.log(req.user);
  res.json({ user: req.user });
});

export default router;