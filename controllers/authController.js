import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { jwtSecret,jwtOptions } from '../config/jwt.js';

const signupUser = async (req, res) => {
  try {
    const { email, phone, name, profileImage, password, role } = req.body;

    if (!email && !password) {
      return res.status(400).json({ message: 'Email and password and name is required.' });
    }

    // console.log(email+" "+password+" "+name);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      phone,
      name,
      profileImage,
      password: hashedPassword,
      role,
    });

    await user.save();

    const token = jwt.sign({ email, role }, jwtSecret, jwtOptions);
    res.status(201).json({ message: 'User created successfully.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email  is required.' });
    }

    const user = await User.findOne({ $or: [{ email }] });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
  

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, jwtSecret, jwtOptions);
    res.json({ message: 'Login successful.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getProfile = (req, res) => {
  res.json({ user: req.user });
};

export { signupUser, loginUser, getProfile };
