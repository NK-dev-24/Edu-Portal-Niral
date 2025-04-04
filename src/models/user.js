import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['student', 'instructor'], required: true },
    organization: { type: String },
    jobTitle: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

// Use default export for ES Modules
export default User;
