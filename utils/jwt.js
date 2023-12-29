import jwt from 'jsonwebtoken';
import { jwtSecret, jwtOptions } from '../config/jwt';

const generateToken = (payload) => jwt.sign(payload, jwtSecret, jwtOptions);

const verifyToken = (token) => jwt.verify(token, jwtSecret, jwtOptions);

export { generateToken, verifyToken };
