import express from 'express';
import { registerUser } from '../controllers/authController.js'; // Use .js extension

const router = express.Router();

// POST request for registering a user
router.post('/signup', registerUser);

export default router;
