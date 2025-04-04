import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // .js extension is required in ES Modules
import authRoutes from './routes/authRoutes.js'; // .js extension is required in ES Modules

console.log('Server script is running...');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // For parsing application/json

// Auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
