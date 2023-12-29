import { check } from 'express-validator';

const validateSignupData = [
  check('email').isEmail().withMessage('Invalid email address'),
  check('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
  check('name').notEmpty().withMessage('Name is required'),
  check('profileImage').optional().isURL().withMessage('Invalid profile image URL'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  check('role').isIn(['User', 'Admin']).withMessage('Invalid user role'),
];

export { validateSignupData };
