import { Router, Request, Response } from 'express';
import { User } from '../../models/user.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    console.log('Login request received:', { username, password });

    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const secretKey = process.env.JWT_SECRET as string;
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    console.log('Token generated:', token);
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const router = Router();

router.post('/login', login);

export default router;