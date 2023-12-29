
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    name: String,
    profileImage: String,
    password: String,
    role: { type: String, enum: ['User', 'Admin'], default: 'User' },
   
    // Add more fields as needed
  });
  

export default  mongoose.model('User', userSchema);
