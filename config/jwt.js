import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

const jwtOptions = {
  expiresIn: '1h', // Token expiration time (e.g., 1 hour)
  issuer: 'your-issuer', // Your application's name or identifier
  audience: 'your-audience', // The audience for which the token is intended
};

export { jwtSecret, jwtOptions };
