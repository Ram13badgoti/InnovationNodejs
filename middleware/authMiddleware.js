// authenticate.js
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/jwt.js'; // Assuming you have a configuration file for JWT

const authenticate = (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1] || req.query.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = decoded; // Assuming the user information is stored in the JWT payload
    next();
  });
};

export default authenticate ;
